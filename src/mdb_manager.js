const vscode = require('vscode');
const path = require('path');
const ini = require('ini');
const fs = require('fs');
const os = require('os');
const cheerio = require('cheerio');

const FileProcess = require('./tool_file_process')
const MDBLog = require('./mdb_log')
const { MDBExplorer, MDBState, MDBStateItem, PublishReadyQueue } = require('./mdb_explorer')
const { Notebook, utility } = require('crossnote')

// MDBLog初始化
const mdb_log = new MDBLog(true, true);

// mdb 管理
class MDBManager {
    constructor() {
        // mdb workspace的工作uri(vscode.Uri)
        this.ws_uri = null;
        // mdb workspace的工作路径(string)
        this.ws_path_str = null;

        // 'UI' 未初始化;   'II' 初始化中;
        // 'ST' 待启动;     'RU' 运行中;
        // 'SP' 停止运行   
        // UI --> II --> ST --> RU <--> SP
        // mdb 运行状态
        this.mdb_state = 'UI';

        // mdb 工作目录名
        this.mdb_work_dir = '_work_mdb';
        // mdb 发布目录名
        this.mdb_publish_dir = '_publish_mdb';
        // mdb 数据目录名
        this.mdb_temp_file_dir = '_temp_file';

        // mdb 模板数据目录名
        this.mdb_core_temp_file_dir = 'temp_file';
        // mdb ini配置文件
        this.mdb_config_file_name = '._mdblog';
        // mdb 配置操作对象
        this.mdb_config_obj = null;
        // mdb 侧边栏博客数据绑定的视图id
        this.tree_data_bind_view = 'mdb_pck_work';
        // mdb 侧边栏状态数据绑定的视图id
        this.state_data_bind_view = 'mdb_pck_state';

        // 文章和类别计数
        this.article_count = 0;
        this.category_count = 0;

        // mdb 状态控制器
        this.mdb_state_ctrl = null;
        // mdb 视图显示控制器
        this.mdb_view_ctrl = null;
        // mdb 结构控制器
        this.mdb_struct_ctrl = null;
        // mdb 文件处理器
        this.mdb_file_proc_handler = null;
        // mdb 快捷指令
        this.mdb_shrot_cmd_ctrl = null;

        // 依赖插件ID
        this.ref_extension_id = null;

        // 当工作位置
        this.cur_js_file_name = path.basename(__filename);
        this.cur_js_file_dir = path.dirname(__filename);

        // mdb 文件处理器初始化
        this._initMDBFileProcessHandler();
    }

    /** MDB初始化相关操作 开始---> */

    /**
     * @param {vscode.Uri} ws_uri
     * @param {boolean} create_mdb_ws
     */
    async init(ws_uri, create_mdb_ws = false) {
        this.ws_uri = ws_uri;

        // 如果传入的mdb ws为空，不进入初始化步骤
        if (this.ws_uri == null) {
            return;
        }

        // 拿到并保存mdb ws的字符串路径
        this.ws_path_str = this.ws_uri.fsPath;
        mdb_log.printDetails(`获取到打开的文件夹路径: ${this.ws_path_str}`);

        // mdb 开始初始化
        this.mdb_state = 'II';

        // 判断是不是MDB WS（workspace）
        await this._isMDBWorkspace().then(async res => {

            this.mdb_work_path_str = path.join(this.ws_path_str, this.mdb_work_dir);
            this.mdb_publish_path_str = path.join(this.ws_path_str, this.mdb_publish_dir);
            this.mdb_temp_path_str = path.join(this.ws_path_str, this.mdb_temp_file_dir);
            this.mdb_config_path_str = path.join(this.ws_path_str, this.mdb_config_file_name);
            this.ws_base_name = path.basename(this.ws_path_str);

            if (res) {
                // 使用打开MDB和初始化MDB命令，只要选中的文件夹是MDB WS
                // 就会默认打开他
                mdb_log.printDetails(`打开MDB WS`);
                this._init();
            }
            else {
                // 初始化MDB命令
                if (create_mdb_ws) { // 创建MDB WS
                    // 创建MDB WS
                    mdb_log.printDetails(`创建MDB WS`);
                    await this._createMDBWorkSpace();
                    this._init();
                }
                // 打开MDB命令 但是 当前目录不是MDB WS
                else {
                    // 设置MDB为 未初始化
                    this.mdb_state = 'UI';
                    mdb_log.printWarnning('不属于MDBlog工作空间');
                    vscode.window.showWarningMessage('不属于MDBlog工作空间');
                }
            }
        })
    }

    /**、
     * @description 实际初始化MDB
     */
    _init() {
        // 初始化 MDB相关控制器
        this._initMDBBasicCtrl();

        // 获取MDB 的base info并更新视图
        this._getMDBBaseInfo();

        // 记录保存的文件队列
        this.initRcordSavedFileEvent();

        // 判断是否安装依赖插件
        this.isInstallMPE();

        // MDB初始化完成，进入待机状态，等待启动
        this.mdb_state = 'ST';

        mdb_log.printInfo(`MDB WS打开成功,载入初始化完成,工作空间路径: ${this.ws_path_str}`);
        // vscode.window.showInformationMessage('MDBlog工作空间: ' + this.ws_path_str);
    }

    isInstallMPE() {
        this.ref_extension_id  = 'shd101wyy.markdown-preview-enhanced';
        let is_exit = vscode.extensions.getExtension(this.ref_extension_id);
        if (!is_exit) {
            mdb_log.printWarnning(`未安装插件[Markdown Preview Enhanced]`);
            vscode.window.showWarningMessage('未安装插件[Markdown Preview Enhanced]');
        }
        else {
            mdb_log.printInfo(`已安装插件[Markdown Preview Enhanced]`);
        }
    }

    // 文件保存事件监听
    initRcordSavedFileEvent() {
        vscode.workspace.onDidSaveTextDocument(async e => {
            let filePath = e.uri.fsPath;
            if (!this.publish_queue.has(filePath)) {
                this.publish_queue.enqueue(filePath);
            }
        })
    }

    // 获取MDB 基础信息
    _getMDBBaseInfo() {
        let mdb_config_obj = this.mdb_file_proc_handler.getIniConfig(
            path.join(this.ws_path_str, this.mdb_config_file_name)
        );
        this.mdb_view_ctrl.updateBaseInfo(
            mdb_config_obj.mdb_workspace_param.mdb_blog_title,
            mdb_config_obj.mdb_workspace_param.author
        );
    }

    /**
     * @description 初始化一个MDB工作空间，或者直接打开一个MDB工作空间
     */
    async initMDBWorkspace() {
        await this.openMDBWorkspace(true, '初始化MDB Workspace');
    }

    /**
     * @description 打开MDB工作空间
     * @param {boolean} create_mdb_ws 
     */
    async openMDBWorkspace(create_mdb_ws = false, btn_txt = '打开MDB Workspace') {
        this.stopLocal();
        let open_ws_uri = await this.mdb_file_proc_handler.openFolder(btn_txt);
        this.init(open_ws_uri, create_mdb_ws);
    }

    /**
     * @description mdb的文件处理器（mdb_file_proc_handler）初始化
     */
    _initMDBFileProcessHandler() {
        this.mdb_file_proc_handler = new MDBFileProcessHandler();
        this.mdb_file_proc_handler.init(this.mdb_work_dir, this.mdb_publish_dir);
        mdb_log.printInfo('mdb_file_proc_handler 初始化成功');
    }

    /**
     * @description 初始化MDB结构控制器、MDB视图控制器、MDB状态控制器
     */
    async _initMDBBasicCtrl() {
        // 初始化view ctrl
        this.mdb_view_ctrl = new MDBViewController(this.mdb_work_path_str, this.mdb_publish_path_str,
            this.tree_data_bind_view, this.state_data_bind_view, this.ws_base_name);
        await this.mdb_view_ctrl.init();
        this.mdb_view_ctrl.refreshMDBWorkExplorerView();
        this.mdb_view_ctrl.refreshMDBStateDataView();

        // 初始化struct ctrl
        this.mdb_struct_ctrl = new MDBStructureController(this.ws_path_str, this.mdb_work_dir
            , this.mdb_publish_dir, this.mdb_temp_file_dir, this.mdb_file_proc_handler)
        await this.mdb_struct_ctrl.init();

        // 初始化state ctrl
        this.mdb_state_ctrl = new MDBStateController(this.ws_path_str, this.mdb_work_dir, this.mdb_publish_dir);

        // 初始化short cmd ctrl
        this.mdb_shrot_cmd_ctrl = new MDBShortCmdController(this.mdb_file_proc_handler);
        this.mdb_shrot_cmd_ctrl.init();
        
        this.publish_queue = new PublishReadyQueue();
    }

    /**
     * @description 判断是否MDB的工作空间
     */
    async _isMDBWorkspace() {
        let tmp_path = this.ws_path_str;
        const filePath = path.join(tmp_path, this.mdb_config_file_name);
        try {
            await vscode.workspace.fs.stat(vscode.Uri.file(filePath));
            return true;
        }
        catch (error) {
            return false;
        }
    }

    /**
     * @description 创建MDB的工作空间所需要的目录和文件
     */
    async _createMDBWorkSpace() {
        // 初始工作空间相关文件夹
        // 移动模板文件 _wrok_mdb
        await this.mdb_file_proc_handler.copy(
            path.join(this.cur_js_file_dir, '..', this.mdb_core_temp_file_dir, this.mdb_work_dir),
            this.mdb_work_path_str
        );

        // 移动模板文件 _publish_mdb
        await this.mdb_file_proc_handler.copy(
            path.join(this.cur_js_file_dir, '..', this.mdb_core_temp_file_dir, this.mdb_publish_dir),
            this.mdb_publish_path_str
        );

        // 移动模板文件 _temp_mdb
        await this.mdb_file_proc_handler.copy(
            path.join(this.cur_js_file_dir, '..', this.mdb_core_temp_file_dir, this.mdb_temp_file_dir),
            this.mdb_temp_path_str
        );

        // 移动模板文件 _config
        await this.mdb_file_proc_handler.copy(
            path.join(this.cur_js_file_dir, '..', this.mdb_core_temp_file_dir, this.mdb_config_file_name),
            this.mdb_config_path_str
        );

        // 获取用户输入参数
        await vscode.window.showInputBox({
            title: '初始化MDB的参数',
            prompt: '博客名,作者名或昵称',
            placeHolder: '参数使用英文逗号(,)隔开',
            ignoreFocusOut: true
        }).then(async value => {
            if (!value) return; 
            // 读取mdb的ini配置文件
            this.mdb_config_obj = this.mdb_file_proc_handler.getIniConfig(this.mdb_config_path_str);
            // 取出输入参数
            let mdb_para_list = value.split(',');
            
            // 写入配置文件
            this.mdb_config_obj.mdb_workspace_param.mdb_blog_title = mdb_para_list[0].trim();
            this.mdb_config_obj.mdb_workspace_param.author = mdb_para_list[1].trim();

            this.mdb_file_proc_handler.setIniConfig(this.mdb_config_path_str,
                this.mdb_config_obj);
            
            // 读取版权声明 并替换作者名
            let tail_str = await this.mdb_file_proc_handler.readFile(
                path.join(this.ws_path_str, this.mdb_temp_file_dir, "tail.md"),
            );
            tail_str = tail_str.replace('@Author@', this.mdb_config_obj.mdb_workspace_param.author);

            // 增加版权声明
            await this.mdb_file_proc_handler.addFileContent(
                path.join(this.ws_path_str, this.mdb_temp_file_dir, "cate_index.md"),
                tail_str
            );

            await this.mdb_file_proc_handler.addFileContent(
                path.join(this.ws_path_str, this.mdb_temp_file_dir, "article_index.md"),
                tail_str
            );

            await this.mdb_file_proc_handler.addFileContent(
                path.join(this.ws_path_str, this.mdb_work_dir, "index.md"),
                tail_str
            );

            // 更新博客名
            await this.mdb_file_proc_handler.updateFileWithFlag(
                path.join(this.ws_path_str, this.mdb_work_dir, "index.md"),
                '@Blog_Name@',
                this.mdb_config_obj.mdb_workspace_param.mdb_blog_title
            );
            mdb_log.printInfo(`MDB WS初始化完成`);
        });

        mdb_log.printInfo('创建MDB WS成功');
    }

    /** MDB初始化相关操作 结束---> */

    /** 博客的文章和类别操作 开始---> */

    /**
     * @description 获取博客分类的索引路径
     * @param {string} file_path_str 
     * @returns 
     */
    getCategoryIndexPath(file_path_str) {
        mdb_log.printDetails(`获取分类的索引路径,完整路径: ${file_path_str}`);
        return file_path_str.replace(this.ws_path_str, '').replace(`\\${this.mdb_work_dir}`, '');
    }

    /**
     * @description 类别和文章重命名
     * @param {string} dst_path_str 
     */
    async renameCategoryAndArticle(dst_path_str) {
        // 仅更新索引，不更新文件内的一级标题
        this.mdb_struct_ctrl.renameCategoryOrArticle(dst_path_str).then(
            async (res) => {
                if(!res[0]) return;
                this.mdb_view_ctrl.refreshMDBWorkExplorerView();

                mdb_log.printDetails(`重命名:${dst_path_str} -> ${res[1]}`);
                
                this.publish_queue.enqueue(res[1]); // cur up cate
                await this.dispatch();
            }
        )
    }

    /**
     * @description 类别和文章移动
     * @param {string} dst_path_str 
     */
    async mvCategoryAndArticle(dst_path_str) {
        this.mdb_struct_ctrl.mvCategoryOrArticle(dst_path_str).then(
            async (res) => {
                if(!res[0]) return;
                this.mdb_view_ctrl.refreshMDBWorkExplorerView();
                
                mdb_log.printDetails(`移动:${dst_path_str} -> ${res[1]}`);

                this.publish_queue.enqueue(res[1]); // old up cate
                this.publish_queue.enqueue(res[2]); // new up cate
                // this.publish_queue.enqueue(res[3]); // self
                await this.dispatch();
            }
        )
    }

    /**
     * @description 删除类别
     * @param {string} dst_path_str 
     */
    async deleteCategory(dst_path_str) {
        this.mdb_struct_ctrl.deleteCategory(dst_path_str).then(
            async (res) => {
                if(!res[0]) return;
                this.mdb_view_ctrl.refreshMDBWorkExplorerView();
                
                mdb_log.printDetails(`删除类别:${dst_path_str}`);

                this.publish_queue.enqueue(res[1]); // up cate
                await this.dispatch();
            }
        )
    }

    /**
     * @description 删除文章
     * @param {string} dst_path_str 
     */
    async deleteArticle(dst_path_str) {
        this.mdb_struct_ctrl.deleteArticle(dst_path_str).then(
            async (res) => {
                if(!res[0]) return;
                this.mdb_view_ctrl.refreshMDBWorkExplorerView();
                
                mdb_log.printDetails(`删除文章:${dst_path_str}`);

                // 更新发布
                this.publish_queue.enqueue(res[1]); // up cate
                await this.dispatch();
            }
        )
    }

    /**
     * @description 创建类别
     * @param {string} dst_path_str
     */
    async createCategory(dst_path_str) {
        await this.mdb_struct_ctrl.createCategory(dst_path_str).then(
            async (res) => {  
                if(!res[0]) return;
                this.mdb_view_ctrl.refreshMDBWorkExplorerView();
                
                // 顶层创建类别
                if(dst_path_str == null){
                    dst_path_str = path.join(this.ws_path_str, this.mdb_work_dir);
                }

                mdb_log.printDetails(`创建类别:${dst_path_str}`);

                this.publish_queue.enqueue(res[1]); // up cate
                this.publish_queue.enqueue(res[2]); // self
                await this.dispatch();
            }
        );
    }

    /**
     * @description 创建文章
     * @param {string} dst_path_str
     */
    async createArticle(dst_path_str) {
        await this.mdb_struct_ctrl.createArticle(dst_path_str).then(
            async (res) => {  
                if(!res[0]) return;
                this.mdb_view_ctrl.refreshMDBWorkExplorerView();

                mdb_log.printDetails(`创建文章:${dst_path_str}`);

                this.publish_queue.enqueue(res[1]); // up cate
                this.publish_queue.enqueue(res[2]); // self
                await this.dispatch();
            }
        );
    }

    // 发布当前编辑器的md文件
    async publishCurEditor() {
        if(this.getMDBState() == 'UI' || this.getMDBState() == 'II' ) return ;
        const editor = vscode.window.activeTextEditor;
        
        if(!editor) return;
        let dst_path = editor.document.uri.fsPath;

        mdb_log.printDetails(`发布当前编辑md文件:${dst_path}`);

        this.publish_queue.enqueue(dst_path); // self
        await this.dispatch();
    }

    // 发布所有保存的md文件
    async publishUpdatedMDFile() {
        mdb_log.printDetails(`发布所有保存的md文件`);
        await this.dispatch();
    }

    // 发布所有的md文件
    async publishAllMDFile() {
        let root_path = path.join(this.ws_path_str, this.mdb_work_dir); // 获取工作区的根路径
        await this.findMarkdownFiles(root_path);

        mdb_log.printDetails(`发布所有md文件`);

        await this.dispatch();
    }

    // 递归遍历所有的 .md 文件
    async findMarkdownFiles(current_path) {
        fs.readdirSync(current_path, { withFileTypes: true }).forEach(dirEnt => {
            const currentPath = path.join(current_path, dirEnt.name);
            if (dirEnt.isDirectory()) {
                this.findMarkdownFiles(currentPath);
            } else if (dirEnt.isFile() && path.extname(dirEnt.name) === '.md') {
                this.publish_queue.enqueue(currentPath);
            }
        });
    }
    
    // 发布调度，从发布队列中依次取出发布
    async dispatch() {
        // 待发布的文件数量
        this.publish_queue.ready();

        if(this.publish_queue.isEmpty()) return ;

        let all_task_count = this.publish_queue.getLength();
        let finish_count = 0;
        let step = Math.ceil(100 / all_task_count);

        let task = vscode.window.withProgress({
            location: vscode.ProgressLocation.Window,
            title: "MDB: 发布MD文件",
            cancellable: true
        }, async (progress, token) => {
            token.onCancellationRequested(() => {
                vscode.window.showWarningMessage('取消发布')
            });

            // 依次发布
            while (!this.publish_queue.isEmpty()) {
                let dst_tmp = await this.publish_queue.dequeue();
                await this.publishMDFile(dst_tmp);
                finish_count = finish_count + 1;
                let tmp = step * finish_count;
                progress.report({
                    increment: tmp > 100 ? 100 : tmp,
                    message: `${dst_tmp} - 成功`
                });
            }
        });

        task.then(
            () => {
                mdb_log.printDetails(`发布成功: 共${all_task_count}个文件`);
                vscode.window.showInformationMessage(`发布成功: 共${all_task_count}个文件`);
                this.mdb_view_ctrl.updatePublishLastDate();
            }
        );
    }

    async publishMDFile(md_file_path='') {
        await this._publishMDFile(md_file_path);
    }

    /** 博客的文章和类别操作 结束---> */

    /**
     * @description 刷新视图
     * @returns 
     */
    async refreshView() {
        let state = this.getMDBState();
        if (state == "UI" || state == "II") {
            return;
        }
        await this.mdb_view_ctrl.refreshMDBWorkExplorerView();
    }

    /**
     * @description 获取MDB Manager的状态
     * @returns 
     */
    getMDBState() {
        mdb_log.printDetails('MDB 状态' + this.mdb_state);
        return this.mdb_state;
    }

    // MDB 状态控制
    startLocal() {
        if ( this.mdb_state == 'ST' || this.mdb_state == 'SP') {
            let run_root = path.join(this.ws_path_str, this.mdb_publish_dir);
            mdb_log.printInfo(`启动地址: ${run_root}`);
            this.mdb_state_ctrl.startLocalServe(run_root);
            this.mdb_view_ctrl.startLocalServe();
            this.mdb_state = 'RU';
            mdb_log.printInfo('本地运行[启动]成功');
            vscode.window.showInformationMessage("本地服务-启动");
        }
        else {
            mdb_log.printWarnning('MDB未初始化/启动成功, 无法运行');
        }
    }

    stopLocal() {
        if (this.mdb_state == 'RU') {
            this.mdb_state_ctrl.stopLocalServe();
            this.mdb_view_ctrl.stopLocalServe();
            this.mdb_state = 'SP';
            mdb_log.printInfo('本地运行[停止]成功');
            vscode.window.showInformationMessage("本地服务-停止");
        }
        else {
            mdb_log.printWarnning('MDB未启动, 无法停止');
        }
    }
    
    showLocal() {
        vscode.env.openExternal(vscode.Uri.parse('http://localhost:12197'));
    }

    /**
     * @param {string} dst_md_file_path_str
     */
    async _publishMDFile(dst_md_file_path_str) {
        mdb_log.printDetails(`待发布目标文件: ${dst_md_file_path_str}`);

        await this.mdb_struct_ctrl.mdToHTML(dst_md_file_path_str).then(
            async gen_html_path => {
                await this.htmlPostProcess(gen_html_path)
                .then(async () => {
                    let dst_path_str = await gen_html_path.replace(
                        this.mdb_work_dir,
                        this.mdb_publish_dir
                    );
                    await this.mdb_file_proc_handler.move(gen_html_path, dst_path_str);
                })
                .catch(err => {
                    mdb_log.printError(err);
                });
            }
        );
    }

    async htmlPostProcess(gen_html_path) {
        return new Promise(
            resolve => {
                const html = fs.readFileSync(gen_html_path, 'utf8');
                const $ = cheerio.load(html);

                // 网页图片URL的正则表达式
                const web_pattern = /^http(s)?:\/\/.*\.(jpeg|jpg|gif|png)$/i;

                $('img').each(function() {
                    const img = $(this);
                    const src = img.attr('src');
                    img.addClass('zoom');

                    if (!web_pattern.test(src)) {
                        let imgFile = path.join(path.dirname(gen_html_path), src);
                        let imgData = fs.readFileSync(imgFile);
                        let base64Data ='data:image/jpeg;base64,' + imgData.toString('base64');

                        img.attr('src', base64Data);
                    }
                });

                mdb_log.printDetails(`待发布目标文件HTML[后处理完成]`);

                const updatedHTML = $.html();
                fs.writeFileSync(gen_html_path, updatedHTML);
                resolve();
            }
        )
    }

    readFileBase64(imgPath) {
        const bitmap = fs.readFileSync(imgPath);
        return Buffer.from(bitmap).toString('base64');
    }

    openPublishDir() {
        let uri = vscode.Uri.file(path.join(this.ws_path_str, this.mdb_publish_dir));
        vscode.env.openExternal(uri);
    }

    openMDBWorpspaceDir() {
        vscode.env.openExternal(this.ws_uri);
    }
}

// mdb 状态控制
class MDBStateController {
    /**
     * @param {string} ws_path
     * @param {string} work_dir
     * @param {string} publish_dir
     */
    constructor(ws_path, work_dir, publish_dir) {
        this.ws_path = ws_path;
        this.work_dir = work_dir;
        this.publish_dir = publish_dir;

        this.mdb_work_path = path.join(this.ws_path, this.work_dir);
        this.mdb_publish_path = path.join(this.ws_path, this.publish_dir);
        this.cur_task = null;
             
        this.params =  {
            port: 12197, 
            host: "localhost",
            ignore: '',
            wait: 100,  
        };
    }

    startLocalServe(root = '') {
        this.mdb_publish_patht = root;
        // 参数字符串化
        this.paramToString();
        let command = `live-server ${this.mdb_publish_path} ${this.args} --no-browser`;
        // 写入命令
        this.local_task = new vscode.Task(
            {type: 'shell'},         
            vscode.TaskScope.Workspace,  
            'MDB Local Server',               
            'MDBlog',                   
            new vscode.ShellExecution(command)  
        );
        // 启动task，执行命令
        this.local_task_handle = vscode.tasks.executeTask(this.local_task);
    }

    stopLocalServe() {
        this.local_task_handle.then(e => {
            e.terminate();
        });
    }

    paramToString() {
        this.args = '';
        for (let key in this.params) {
            if (this.params[key] !== undefined) {
                this.args += ` --${key}=${this.params[key]}`;
            }
        }
    }
}

// mdb 结构控制
class MDBStructureController {

    /**
     * @param {string} ws_path
     * @param {string} work_dir
     * @param {string} publish_dir
     * @param {string} temp_dir
     * @param {MDBFileProcessHandler} mdb_file_proc_handler
     */
    constructor(ws_path, work_dir, publish_dir, temp_dir, mdb_file_proc_handler) {
        this.ws_path = ws_path;
        this.work_dir = work_dir;
        this.publish_dir = publish_dir;
        this.temp_dir = temp_dir;

        this.work_path = path.join(this.ws_path, this.work_dir);
        this.publish_path = path.join(this.ws_path, this.publish_dir);
        this.temp_path = path.join(this.ws_path, this.temp_dir);

        this.export_structure = null;
        this.export_struc_engine = null;

        this.mdb_file_proc_handler = mdb_file_proc_handler;
    }

    async init() {
        // crossnote对象初始化
        this.export_structure = await Notebook.init({
            // includeInHeader: '<script type="text/javascript" src="/res/mdb_com.js" charset="UTF-8"></script>'
            notebookPath: this.publish_path,
            config: {
                previewTheme: 'github-light.css',
                mathRenderingOption: 'KaTeX',
                codeBlockTheme: 'github.css',
                printBackground: true,
                enableScriptExecution: true,
                includeInHeader: '<script type="text/javascript" src="/res/mdb_com.js" charset="UTF-8"></script>'
            },
        });
    }

    // **************文章、类别操作 begin**************

    /**
     * @description 类别和文章重命名 
     * @param {string} old_path_str
     */
    async renameCategoryOrArticle(old_path_str) {
        return new Promise((resolve) => {
            let old_name = path.parse(old_path_str).name;
            vscode.window.showInputBox({
                title: '重命名',
                prompt: '输入新的名称',
                ignoreFocusOut: true,
                value: old_name
            }).then(async new_name => {
                if (!new_name) {
                    // vscode.window.showErrorMessage('输入内容为空');
                    resolve([false]);
                } else {
                    // 没有更新名称
                    if (old_name == new_name) {
                        resolve([false]);
                    }

                    let new_path_str = old_path_str.replace(
                        /\\[^\\]*$/,
                        old_path_str.includes('.md') ? `\\${new_name}.md` : `\\${new_name}`
                    );
                    
                    mdb_log.printDetails(`rename cate&article: ${new_path_str}`)
                    
                    if (await this.mdb_file_proc_handler.isExist(new_path_str)){
                        mdb_log.printError( '文件已经存在');
                        vscode.window.showErrorMessage('文件已经存在');
                        resolve([false]);
                        return;
                    }

                    let idx_type = old_path_str.includes('.md')? "a" : "c";

                    // 重命名 类别或文章
                    await this.mdb_file_proc_handler.rename(old_path_str, new_path_str);

                    // 发布文件重命名
                    if (idx_type == "c") {
                        await this.mdb_file_proc_handler.rename(
                            old_path_str.replace(this.work_dir, this.publish_dir),
                            new_path_str.replace(this.work_dir, this.publish_dir)
                        );
                    } 
                    else {
                        await this.mdb_file_proc_handler.rename(
                            old_path_str.replace(this.work_dir, this.publish_dir).slice(0, -2) + "html",
                            new_path_str.replace(this.work_dir, this.publish_dir).slice(0, -2) + "html"
                        );
                    }

                    await this.renameIndex(
                        old_path_str.includes('.md')? "a" : "c",
                        old_path_str,
                        new_name
                    )

                    resolve([
                        true,
                        this.getFilePathWhoRecordThisIndex(new_path_str)
                    ]);
                }
            });
        })
    }

    /**
     * @description 移动类别和文章
     * @param {string} old_path_str
     */
    async mvCategoryOrArticle(old_path_str) {
        return new Promise((resolve) => {
            vscode.window.showInputBox({
                title: '移动',
                prompt: '输入移动的目的位置',
                ignoreFocusOut: true,
            }).then(async new_index_path_str => {
                if (!new_index_path_str) {
                    vscode.window.showErrorMessage('输入内容为空');
                    resolve(false);
                    return;
                } else {
                    // 创建类别相关文件
                    let new_path_str = path.join(this.work_path, new_index_path_str, path.basename(old_path_str));
                    let idx_type = old_path_str.includes('.md')? "a" : "c";
    
                    mdb_log.printDetails(`move cate&article: ${new_path_str}`)
                    await this.mdb_file_proc_handler.move(old_path_str, new_path_str);
               

                    if (idx_type == "c") {
                        await this.mdb_file_proc_handler.move(
                            old_path_str.replace(this.work_dir, this.publish_dir),
                            new_path_str.replace(this.work_dir, this.publish_dir)
                        );
                    } 
                    else {
                        await this.mdb_file_proc_handler.move(
                            old_path_str.replace(this.work_dir, this.publish_dir).slice(0, -2) + "html",
                            new_path_str.replace(this.work_dir, this.publish_dir).slice(0, -2) + "html"
                        );
                    }

                    // 删除索引
                    await this.deleteIndex(idx_type, old_path_str);
    
                    // 创建索引
                    await this.createIndex(idx_type, new_path_str);

                    // 准备更新发布
                    resolve([
                        true, 
                        this.getFilePathWhoRecordThisIndex(old_path_str),
                        this.getFilePathWhoRecordThisIndex(new_path_str),
                        // new_path_str
                    ]);
                }
            });
        })
    }

    /**
     * @description 删除类别
     * @param {string} dst_path_str
     */
    async deleteCategory(dst_path_str) {
        return new Promise((resolve) => {
            let name = path.basename(dst_path_str);
            vscode.window.showInformationMessage(`确认删除[类别]-${name}?`, '确定', '取消').then(async (selection) => {
                if (selection === '确定') {
                    mdb_log.printDetails(`del cate: ${dst_path_str}`)
                    await this.mdb_file_proc_handler.delete(dst_path_str);
                    await this.mdb_file_proc_handler.delete(
                        dst_path_str.replace(this.work_dir, this.publish_dir)
                    );

                    await this.deleteIndex('c', dst_path_str);
                    resolve([
                        true,
                        this.getFilePathWhoRecordThisIndex(dst_path_str)
                    ]);
                }
                else if (selection === '取消') {
                    resolve([false]);
                    return;
                }
            });
        });
    }

    /**
     * @description 删除文章
     * @param {string} dst_path_str
     */
    async deleteArticle(dst_path_str) {
        return new Promise((resolve) => {
            let name = path.basename(dst_path_str);
            vscode.window.showInformationMessage(`确认删除[文章]-${name}?`, '确定', '取消').then(async (selection) => {
            if (selection === '确定') {
                mdb_log.printDetails(`del article: ${dst_path_str}`)
                // 删除对应的md文件
                await this.mdb_file_proc_handler.delete(dst_path_str);
                // 删除对应的发布文件
                await this.mdb_file_proc_handler.delete(
                    dst_path_str.replace(this.work_dir, this.publish_dir).slice(0, -2) + "html"
                );
            
                // 删除索引
                await this.deleteIndex('a', dst_path_str);

                resolve([
                    true, 
                    this.getFilePathWhoRecordThisIndex(dst_path_str)
                ]);
            }
            else if (selection === '取消') {
                resolve([false, '']);
                return;
            }
        });
        });
    }

    /**
     * @description 创建类别
     * @param {string} dst_path_str 
     */
    async createCategory(dst_path_str) {
        return new Promise(async (resolve) => {
            await vscode.window.showInputBox({
                title: '创建类别',
                prompt: '请输入添加的类别名称',
                ignoreFocusOut: true,
            }).then(async cate_name => {
                if (!cate_name) {
                    vscode.window.showErrorMessage('输入内容为空');
                    resolve([false, '']);
                } else {
                    if (dst_path_str == null) {
                        dst_path_str = this.work_path;
                    }
                    // 创建类别相关文件
                    let new_cate_path_str = path.join(dst_path_str, cate_name);
                    // // console.log(new_cate_path_str);
                    
                    if (await this.mdb_file_proc_handler.isExist(
                        path.join(new_cate_path_str, 'index.md')
                    )){
                        mdb_log.printError( '文件已经存在');
                        vscode.window.showErrorMessage('文件已经存在');
                        resolve([false, ]);
                        return;
                    }
    
                    mdb_log.printDetails(`new cate: ${new_cate_path_str}`)
    
                    await this.mdb_file_proc_handler.createAndCheckDir(new_cate_path_str);
                    
                    // 创建类别的index.md文件
                    await this.mdb_file_proc_handler.copy(
                        path.join(this.temp_path, 'cate_index.md'),
                        path.join(new_cate_path_str, 'index.md')
                    );
    
                    // 修改标题
                    await this.mdb_file_proc_handler.updateFileWithFlag(
                        path.join(new_cate_path_str, 'index.md'),
                        '@Title@',
                        cate_name
                    );
    
                    // 在上一级类别中记录新添加的类别
                    await this.createIndex("c", new_cate_path_str);

                    resolve([
                        true, 
                        this.getFilePathWhoRecordThisIndex(new_cate_path_str),
                        path.join(new_cate_path_str, 'index.md')
                    ]);
                }
            });
        });
    }

    /**
     * @description 创建文章
     * @param {string} dst_path_str 
     */
    async createArticle(dst_path_str) {
        return new Promise(async (resolve) => {
            await vscode.window.showInputBox({
                title: '创建文章',
                prompt: '请输入添加的文章名称',
                ignoreFocusOut: true,
            }).then(async article_name => {
                if (!article_name) {
                    vscode.window.showErrorMessage('输入内容为空');
                    resolve([false]);
                } else {
                    if (dst_path_str == null) {
                        dst_path_str = this.work_path;
                    }

                    // 创建相关文件
                    let new_article_path_str = path.join(dst_path_str, article_name + '.md');

                    if (await this.mdb_file_proc_handler.isExist(new_article_path_str)) {
                        mdb_log.printError( '文件已经存在');
                        vscode.window.showErrorMessage('文件已经存在');
                        resolve([false]);
                        return ;
                    }

                    mdb_log.printDetails(`new article: ${new_article_path_str}`)

                    // 创建文章.md文件
                    await this.mdb_file_proc_handler.copy(
                        path.join(this.temp_path, 'article_index.md'),
                        new_article_path_str
                    );

                    // 修改标题
                    await this.mdb_file_proc_handler.updateFileWithFlag(
                        new_article_path_str,
                        '@Title@',
                        article_name
                    );

                    // 在当前类别注册文章索引
                    await this.createIndex("a", new_article_path_str);

                    resolve([
                        true,
                        this.getFilePathWhoRecordThisIndex(new_article_path_str),
                        new_article_path_str
                    ]);
                }
            });
        });
    }

    // **************文章、类别操作 end**************

    // **************索引操作 begin**************

    /**
     * @param {string} dst_path
     */
    getFilePathWhoRecordThisIndex(dst_path) {
        return path.join(path.dirname(dst_path), "index.md");
    }

    /**
     * @param {string} idx_type
     * @param {string} dst_path
     * @param {boolean} is_delete_index
     * @param {boolean} is_rename_index
     * @param {string} new_name
     */
    async handleIndex(idx_type, dst_path, is_delete_index = false, is_rename_index = false, new_name = '') {
        if (is_delete_index && is_rename_index) return ;

        // 解析创建索引的文章或类别的地址
        let str_dst_cate_path = null;
        let register_new_cate = null;
        let tmp_name = null;
        let register_old_cate = null;
        let suffix = null;

        // 获取路径相关参数
        let register_base_info = this.getIndexBaseParam(dst_path);
        
        // 索引需要写入的位置
        str_dst_cate_path = register_base_info['dst_cate'];
        // 类别ors文章名
        tmp_name = register_base_info['name'];

        // 构建类别的索引格式          类别格式   | 文章格式
        suffix = (idx_type == "c" ? '/index.md' : '.md');
        let tmp = is_rename_index ? new_name : tmp_name;
        if (is_rename_index) {
            register_old_cate = `- [${tmp_name}](./${tmp_name}${suffix})`+ os.EOL;
        }
        register_new_cate = `- [${tmp}](./${tmp}${suffix})` + os.EOL;
        // // console.log(register_new_cate);

        // 构建索引
        await this.mdb_file_proc_handler.updateFileWithFlag(
            // 索引需要写入的文件
            path.join(str_dst_cate_path, 'index.md'),
            //              delete index        |          rename index             |  create index
            is_delete_index ? register_new_cate : 
                                                is_rename_index ? register_old_cate : '</do-not-delete-me>',
            is_delete_index ? ""                :  
                                                is_rename_index ? register_new_cate : register_new_cate + '</do-not-delete-me>'
        );
    }

    /**
     * @param {string} idx_type
     * @param {string} dst_path
     */
    async createIndex(idx_type, dst_path) {
        await this.handleIndex(idx_type, dst_path, false, false, '');
    }

    /**
     * @param {string} idx_type
     * @param {string} dst_path
     */
    async deleteIndex(idx_type, dst_path) {
        await this.handleIndex(idx_type, dst_path, true,  false, '');
    }

    /**
     * @param {string} idx_type
     * @param {string} dst_path
     * @param {string} new_name
     */
    async renameIndex(idx_type, dst_path, new_name) {
        await this.handleIndex(idx_type, dst_path, false,  true, new_name);
    }

    getIndexBaseParam (dst_path) {
        let dst_path_handle = path.parse(dst_path);
        return {
            "dst_cate": dst_path_handle.dir,
            "name" : dst_path_handle.name
        }
    }

    // **************索引操作 end**************

    // **************发布（导出为HTML）操作 begin**************
    /**
     * @param {string} md_file_path_str
     */
    _getEngine(md_file_path_str) {
        this.export_struc_engine = this.export_structure.getNoteMarkdownEngine(md_file_path_str);
    }

    /**
     * @param {string} md_file_path_str
     */
    async mdToHTML(md_file_path_str) {
        return new Promise(
            resolve => {
                mdb_log.printInfo(utility.getCrossnoteBuildDirectory())
                this._getEngine(md_file_path_str);
                if (this.export_struc_engine) {
                    this.export_struc_engine.htmlExport({ offline: false }).then(
                        (dest) => {
                            // 返回生成html文件地址
                            mdb_log.printDetails(`待发布目标文件HTML生成: ${dest}`);
                            resolve(dest);
                        })
                        .catch(
                            (error) => {
                                vscode.window.showErrorMessage(error.toString());
                            });

                }
            }
        );
    }

    // **************发布（导出为HTML）操作 end**************
}

// mdb 视图显示控制
class MDBViewController {
    /**
     * @param {string} work_path
     * @param {string} publish_path
     * @param {string} tree_data_bind_view
     * @param {string} state_data_bind_view
     * @param {string} ws_basename
     */
    constructor(work_path, publish_path, tree_data_bind_view, state_data_bind_view, ws_basename) {
        this.work_path = work_path;
        this.publish_path = publish_path;
        
        this.tree_data_bind_view = tree_data_bind_view;
        this.state_data_bind_view = state_data_bind_view;
        this.ws_basename = ws_basename;

        this.mdb_explorer_tree_data = null;
        this.mdb_state_tree_data = null;
    }

    async init() {
        // mdb资源管理器数据 初始化
        this.mdb_explorer_tree_data = new MDBExplorer(this.work_path);
        this.mdb_state_tree_data = new MDBState(this._initMDBStateTreeData());

        // 数据绑定到指定view上
        vscode.window.registerTreeDataProvider(this.tree_data_bind_view,
            this.mdb_explorer_tree_data);
        vscode.window.registerTreeDataProvider(this.state_data_bind_view,
             this.mdb_state_tree_data)
       
        mdb_log.printInfo(`mdb_view_ctrl 初始化成功，工作路径: ${this.work_path}`);
    }

    _initMDBStateTreeData() {
        let item_collapsed = vscode.TreeItemCollapsibleState.Collapsed;
        let item_none = vscode.TreeItemCollapsibleState.None;

        let mdb_base_info = new MDBStateItem(this.ws_basename, item_collapsed, 'base_info.svg', 'base_info');
        mdb_base_info.addChild(new MDBStateItem('Author: \\', item_none, 'author.svg'));
        mdb_base_info.addChild(new MDBStateItem('Path: ' + path.dirname(this.work_path), item_none, 'base_info_ws_path.svg'));

        let mdb_publish_operate = new MDBStateItem('发布', item_collapsed, 'publish.svg', 'publish');
        mdb_publish_operate.addChild(new MDBStateItem('Path: ' + this.publish_path, item_none, 'base_info_ws_path.svg'));
        mdb_publish_operate.addChild(new MDBStateItem('Last time: \\', item_none, 'publish_last_time.svg'));
        
        let mdb_run_operate = new MDBStateItem('本地运行', item_collapsed, 'local_state.svg', 'loc_run');
        mdb_run_operate.addChild(new MDBStateItem("State: stop", item_none, 'local_stop.svg')); // stop running
        mdb_run_operate.addChild(new MDBStateItem("Local: \\", item_none, 'local_url.svg'));

        let mdb_sync_t0 = new MDBStateItem('同步到(开发中...)', item_collapsed, 'sync.svg', 'sync');
        mdb_sync_t0.addChild(new MDBStateItem("Github", item_none, 'github.svg'));
        mdb_sync_t0.addChild(new MDBStateItem("Gitee", item_none, 'gitee.svg'));
        mdb_sync_t0.addChild(new MDBStateItem("Private Server", item_none, 'private_server.svg'));

        this.mdb_state_raw_data = [
            mdb_base_info, 
            mdb_publish_operate, 
            mdb_run_operate,
            mdb_sync_t0];
        return this.mdb_state_raw_data;
    }

    updatePublishLastDate() {
        let date = new Date();
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset()).toString();
        let date_str = date.toISOString().slice(2, -5).replace('T', ' ');
        this.mdb_state_raw_data[1].updateChild(1, `Local: ${date_str}` , '');
        this.refreshMDBStateDataView();
    }

    async startLocalServe() {
        this.mdb_state_raw_data[2].updateChild(0, 'State: running', 'local_run.svg');
        this.mdb_state_raw_data[2].updateChild(1, 'Local: http://localhost:12197', '');
        this.refreshMDBStateDataView();
    }

    async stopLocalServe() {
        this.mdb_state_raw_data[2].updateChild(0, 'State: stop', 'local_stop.svg');
        this.mdb_state_raw_data[2].updateChild(1, 'Local: \\', '');
        this.refreshMDBStateDataView();
    }

    /**
     * @param {string} blog_name
     * @param {string} author
     */
    updateBaseInfo(blog_name, author) {
        this.mdb_state_raw_data[0].updateLabel(blog_name);
        this.mdb_state_raw_data[0].updateChild(0, `Author: ${author}` , '');
        this.refreshMDBStateDataView();
    }

    // 刷新数据
    async refreshMDBWorkExplorerView() {
        this.mdb_explorer_tree_data.refresh();
    }

    // 刷新mdb 状态
    async refreshMDBStateDataView() {
        this.mdb_state_tree_data.refresh();
    }
}

// mdb 快捷指令控制
class MDBShortCmdController {

    /**
     * @param {MDBFileProcessHandler} mdb_file_proc_handler
     */
    constructor (mdb_file_proc_handler) {
        this.mdb_file_proc_handler = mdb_file_proc_handler;
        this.img_insert_flag = false;

        this.chart_mermaid_str_begin = '```mermaid';
        this.chart_wavedrom_str_begin = '```wavedrom';
        this.chart_bitfield_str_begin = '```bit-field {vspace=100}';
        this.chart_str_end = '```';
        
    }

    init() {
        let self = this;
        this.cur_editor = null;
        this.cur_line = null;
        this.cur_range = null;

        // 图片管理操作
        vscode.workspace.onDidChangeTextDocument(async e => {
			const editor = vscode.window.activeTextEditor;
            if (self.img_insert_flag && editor && editor.document === e.document
                && editor.document.languageId === 'markdown') {
                
                const line = editor.document.lineAt(editor.selection.start.line).text;
                if(!line.endsWith(')')) {
                    return;
                }

                self.img_insert_flag = false;

                // 正则匹配 ![]() 图片的text和url
                const pathReg = /\((.*?)\)/;
                const matchPath = line.match(pathReg);
                if (matchPath) {
                    // md文件中图片相对路径 (去除url中的特殊字符)
                    let img_path_str = matchPath[1].replace('<', '').replace('>', '');
                    
                    let img_path_handle = path.parse(img_path_str);
                    let cur_md_file_handle = path.parse(editor.document.uri.fsPath);

                    // md文件中图片的绝对路径 (去除url中的特殊字符)
                    let img_a_path_str = path.join(
                        path.dirname(editor.document.uri.fsPath), img_path_str
                    );
                    // console.log("MD中图片路径: ", img_path_str, "图片绝对路径: ", img_a_path_str);

                    // 图片名
                    let img_name = img_path_handle.name;
                    // 当前MD的文件名
                    let cur_md_file_name = cur_md_file_handle.name;
                    // console.log("图片名: ", img_name, "当前编辑文件名: ", cur_md_file_name);

                    // 即将替换的md图片格式 字符串
                    let new_md_img_str = '';

                    // 图片在MDB WS内
                    if (img_a_path_str.includes('_work_mdb')){
                        // 图片已经在mdb ws的任意assert中了
                        if (img_a_path_str.includes(`assets/`)){
                            // 无需操作 图片已经在mdb ws中任意的assets中
                            new_md_img_str = `![${img_name}](${img_path_str})`;
                        }
                        // 否则图片是在当前md的文件夹
                        else {
                            // 图片名带后缀的
                            let img_name_with_suffix = img_path_handle.base;
                            let date_flag = new Date().getTime().toString();
                            let random_flag = this.getRandomString(5);
                            // 新的图片md 文本
                            let new_path = `./assets/${date_flag}_${random_flag}_${img_name_with_suffix}`;
                            new_md_img_str = `![${cur_md_file_name}_${random_flag}_${img_name}](${new_path})`;

                            // console.log("new md: ", new_md_img_str);

                            // 替换图片md 文本
                            let cur_line = editor.selection.active.line;
                            editor.edit(editBuilder => {
                                var lineRange = editor.document.lineAt(cur_line).range;
                                editBuilder.replace(lineRange, new_md_img_str);
                            });
                            
                            // 阻塞运行
                            while(!await self.mdb_file_proc_handler.isExist(img_a_path_str));

                            self.mdb_file_proc_handler.move(
                                img_a_path_str,
                                path.join(cur_md_file_handle.dir, new_path)
                            );
                        }
                    }
                    else {
                        // // console.log('不属于MDB WS');
                    }
                }
            }
        });

        // MSC提示
        vscode.languages.registerCompletionItemProvider(
            { language: 'markdown' },
            {
                // provideCompletionItems(document, position, token, context) {
                provideCompletionItems(document, position) {
                    // 获取用户当前行输入的内容
                    const line = document.lineAt(position);
                    const prefix = line.text.slice(0, position.character);
					
                    // 如果当前行的输入内容以msc.开头,则提供一组补全词
                    if (prefix.endsWith('mc.')) {
                        // 删除当前行
                        return self.getMSCList();
                    }
                }
            },
			'.'
        )
    }

    getRandomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    mscImageOperate(type = '') {
        if (type == 'insert') {
            this.img_insert_flag = true;
        }
        else if (type == 'delete') {
            this.imgDeleteFromMDBWorkspace();
            this.writeCurLineText();
        }

    }

    // 从mdblog ws中删除图片
    async imgDeleteFromMDBWorkspace() {
        let cur_line_text = this.getCurFileCurLineText();

        const pathReg = /\((.*?)\)/;
        const matchPath = cur_line_text.match(pathReg);
        if (matchPath) {
            let img_a_path_str = path.join(
                path.dirname(this.cur_editor.document.uri.fsPath), matchPath[1].replace('<', '').replace('>', '')
            );

            this.mdb_file_proc_handler.delete(
                img_a_path_str
            );
        }
        this.writeCurLineText();
    }

    // 获取当前行的文本
    getCurFileCurLineText() {
        this.cur_editor = vscode.window.activeTextEditor;
        if (!this.cur_editor) {
            return;
        }
        return this.cur_editor.document.lineAt(this.cur_editor.selection.active.line).text;
    }

    /**
     * @description MSC命令执行
     * @param {*} msc_type 
     * @param {*} cmd_type 
     */
    mscOperateHandle(msc_type, cmd_type) {
        // console.log(msc_type, cmd_type);

        switch(msc_type) {
            case 'img': this.mscImageOperate(cmd_type); break;
            case 'table': this.mscTableOperate(); break;
            case 'chart': this.mscChartOperate(cmd_type); break;
            case 'code': this.mscCCodeOperate(); break;
        }

    }

    async mscCCodeOperate() {
        let cur_line_text = this.getCurFileCurLineText();
        await this.writeCurLineText();
        let regex = /(\w+)\s+.*?/;

        const match = regex.exec(cur_line_text);
        if (match) {
            let snippet = '```' + match[1] + os.EOL + '${1}' + os.EOL + '```'
            await this.cur_editor.insertSnippet(new vscode.SnippetString(snippet))
        }
    }

    /**
     * @param {any} cmd_type
     */
    async mscChartOperate(cmd_type) {
        await this.writeCurLineText();

        let cmd_param = cmd_type.split(',') // m,pie w,sign

        let snippet = '';

        if (cmd_param[0] == 'w') {
            switch (cmd_param[1]) {
                case 'bitfield':
                    snippet = this.chart_bitfield_str_begin + os.EOL +
                        '[' + os.EOL +
                        "\t{name: 'IPO',   bits: 8, attr: 'RO'}," + os.EOL +
                        "\t{               bits: 7}," + os.EOL +
                        "\t{name: 'BRK',   bits: 5, attr: ['RW', 'FOO'], type: 4}," + os.EOL +
                        "\t{name: 'CPK',   bits: 2}," + os.EOL +
                        "\t{name: 'Clear', bits: 3, type: 5}," + os.EOL +
                        "\t{               bits: 7}" + os.EOL +
                        ']' + os.EOL + this.chart_str_end;
                    break;
                case 'signal':
                    snippet = this.chart_wavedrom_str_begin + os.EOL +
                        '{' + os.EOL +
                        "\tsignal: " + os.EOL +
                        "\t[" + os.EOL +
                        "\t\t{name: 'clk',   wave: 'p..Pp..P'},," + os.EOL +
                        "\t\t['Master',," + os.EOL +
                        "\t\t\t['ctrl'," + os.EOL +
                        "\t\t\t\t{name: 'write', wave: '01.0....'}," + os.EOL +
                        "\t\t\t\t{name: 'read',  wave: '0...1..0'}" + os.EOL +
                        "\t\t\t]," + os.EOL +
                        "\t\t\t\t{name: 'addr',  wave: 'x3.x4..x', data: 'A1 A2'}," + os.EOL +
                        "\t\t\t\t{name: 'wdata', wave: 'x3.x....', data: 'D1'   }," + os.EOL +
                        "\t\t]" + os.EOL +
                        "\t]" + os.EOL +
                        "}" + os.EOL + this.chart_str_end;
                    break;
                case 'assign':
                    snippet = this.chart_wavedrom_str_begin + os.EOL +
                    '{' + os.EOL +
                    '\tassign:[' + os.EOL +
                    '\t\t["out",'  + os.EOL +
                    '\t\t\t["XNOR",'  + os.EOL +
                    '\t\t\t\t["NAND",'  + os.EOL +
                    '\t\t\t\t\t["INV", "a"],'  + os.EOL +
                    '\t\t\t\t\t["NOR", "b", ["BUF","c"]]'  + os.EOL +
                    '\t\t\t\t],'  + os.EOL +
                    '\t\t\t\t["AND",'  + os.EOL +
                    '\t\t\t\t\t["XOR", "d", "e", ["OR","f","g"]],'  + os.EOL +
                    '\t\t\t\t\t"h"'  + os.EOL +
                    '\t\t\t\t]'  + os.EOL +
                    '\t\t\t]'  + os.EOL +
                    '\t\t]'  + os.EOL +
                    '\t]'  + os.EOL +
                    '}'  + os.EOL + this.chart_str_end;
                    break;
            }
        }
        else if (cmd_param[0] == 'm') {
            switch (cmd_param[1]) {
                case 'pie':
                    snippet =
                        'pie' + os.EOL +
                        'title ${1}' + os.EOL +
                        '\t"A" : 20' + os.EOL +
                        '\t"B" : 80';
                    break;
    
                case 'flowchart':
                    snippet =
                        '---' + os.EOL +
                        'title: ${1}' + os.EOL +
                        '---' + os.EOL +
                        'flowchart ${2|LR,RL,TD,DT|}' + os.EOL +
                        '\tA[LA] --> B[LB] -.-> C[LC]';
                    break;
    
                case 'class_diagram':
                    snippet =
                        '---' + os.EOL +
                        'title: ${1}' + os.EOL +
                        '---' + os.EOL +
                        'classDiagram' + os.EOL +
                        '\tAnimal <|-- Duck' + os.EOL +
                        '\tAnimal : +int age' + os.EOL +
                        '\tAnimal: +isMammal()' + os.EOL +
                        '\tclass Duck{' + os.EOL +
                        '\t+String beakColor' + os.EOL +
                        '\t+swim()' + os.EOL +
                        '\t+quack()' + os.EOL +
                        '\t}';
                    break;
    
                case 'state_diagram':
                    snippet =
                        '---' + os.EOL +
                        'title: ${1}' + os.EOL +
                        '---' + os.EOL +
                        'stateDiagram-v2' + os.EOL +
                        '\t[*] --> A: Event_A' + os.EOL +
                        '\tA --> B: Event_B' + os.EOL +
                        '\tB] --> A: Event_A' + os.EOL +
                        '\tA --> [*]: Event_end';
                    break;
    
                case 'sequence_diagram':
                    snippet =
                        'sequenceDiagram' + os.EOL +
                        '\tparticipant A' + os.EOL +
                        '\tparticipant B' + os.EOL +
                        '\tA ->> B: req_1' + os.EOL +
                        '\tB -->> A: resp_ack';
                    break;
    
                case 'ER_diagram':
                    snippet =
                        '---' + os.EOL +
                        'title: ${1}' + os.EOL +
                        '---' + os.EOL +
                        'erDiagram' + os.EOL +
                        '\tA }|..|{ B : has' + os.EOL +
                        '\tA ||--o{ C : places' + os.EOL +
                        '\tA ||--o{ D : "liable for"';
                    break;
    
                case 'user_journey_diagram':
                    snippet =
                    'journey' + os.EOL +
                    '\ttitle ${1}' + os.EOL +
                    '\tsection Go to work' + os.EOL +
                    '\t\tMake tea: 5: Me' + os.EOL +
                    '\t\tGo upstairs: 3: Me' + os.EOL +
                    '\t\tDo work: 1: Me, Cat' + os.EOL +
                    '\tsection Go home' + os.EOL +
                    '\t\tGo downstairs: 5: Me' + os.EOL +
                    '\t\tSit down: 5: Me"';
                    break;
    
                case 'quadrant_chart':
                    snippet =
                    'quadrantChart' + os.EOL +
                    '\ttitle: ${1}' + os.EOL +
                    '\t\tx-axis ${2} --> ${3}' + os.EOL +
                    '\t\ty-axis ${4} --> ${5}' + os.EOL +
                    '\t\tquadrant-1 ${3}_${5}' + os.EOL +
                    '\t\tquadrant-2 ${2}_${5}' + os.EOL +
                    '\t\tquadrant-3 ${2}_${4}' + os.EOL +
                    '\t\tquadrant-4 ${3}_${4}' + os.EOL +
                    '\t\tCampaign A: [0.3, 0.6]' + os.EOL + 
                    '\t\tCampaign B: [0.45, 0.23]' + os.EOL + 
                    '\t\tCampaign C: [0.57, 0.69]' + os.EOL + 
                    '\t\tCampaign D: [0.78, 0.34]';
                    break;
                case 'requirement_diagram':
                    snippet =
                    '\trequirementDiagram' + os.EOL +
                    '\t${1|requirement,functionalRequirement,performanceRequirement,interfaceRequirement,physicalRequirement,designConstraint|} ${2} {' + os.EOL +
                    '\t\tid: 1' + os.EOL +
                    '\t\ttext: the test text.' + os.EOL +
                    '\t\trisk: high' + os.EOL +
                    '\t\tverifymethod: test' + os.EOL +
                    '\t}' + os.EOL +
                    '\telement test_entity {' + os.EOL + 
                    '\t\ttype: word doc' + os.EOL + 
                    '\t\tdocRef: reqs/test_entity' + os.EOL + 
                    '\t}' + os.EOL + 
                    '\t\ttest_entity -satisfies-> ${2}';
                    break;
                case 'gitgraph_diagram':
                    snippet =
                    'gitGraph' + os.EOL +
                    '\tcommit id: "feat(api): ..."' + os.EOL +
                    '\tbranch c2' + os.EOL +
                    '\tcommit id: "feat(modules): ..."' + os.EOL +
                    '\tcheckout main' + os.EOL +
                    '\tcommit id: "fix(api): ..."' + os.EOL +
                    '\tbranch b1' + os.EOL +
                    '\tcommit';
                    break;
    
                case 'mindmap':
                    snippet =
                    'mindmap' + os.EOL +
                    '\troot((${1}))' + os.EOL +
                    '\t\tA' + os.EOL +
                    '\t\t\tA1' + os.EOL +
                    '\t\t\t::icon(fa fa-pen)' + os.EOL +
                    '\t\t\tA2' + os.EOL +
                    '\t\t\t\tA21' + os.EOL +
                    '\t\tB' + os.EOL +
                    '\t\t\tB1' + os.EOL +
                    '\t\tC' + os.EOL +
                    '\t\t\tC1' + os.EOL +
                    '\t\t\tC2' + os.EOL +
                    '\t\t\t\tC21';
                    break;
    
                case 'timeline_diagram':
                    snippet =
                    'timeline' + os.EOL +
                    '\ttitle ${1}' + os.EOL +
                    '2002 : A1' + os.EOL +
                    '     : A2' + os.EOL +
                    '2003 : B1' + os.EOL +
                    '2006 : C1';
                    break;
                    
                case 'zenUML':
                    snippet =
                    'zenuml' + os.EOL +
                    '\ttitle ${1}' + os.EOL +
                    '\tClient->A.method() {' + os.EOL +
                    '\t\tB.method() {' + os.EOL +
                    '\t\t\tif(condition) {' + os.EOL +
                    '\t\t\t\treturn x1' + os.EOL +
                    '\t\t\t\t// return early' + os.EOL +
                    '\t\t\t\t@return' + os.EOL +
                    '\t\t\t\tA->Client: x11' + os.EOL +
                    '\t\t\t\t}' + os.EOL +
                    '\t\t\t}' + os.EOL +
                    '\t\treturn x2' + os.EOL +
                    '\t}';
                    break;
    
                case 'XY_chart':
                    snippet =
                    'xychart-beta' + os.EOL +
                    '\ttitle ${1}' + os.EOL +
                    '\tx-axis [A, B, C, D, E]' + os.EOL +
                    '\ty-axis "Revenue (in $)" 0 --> 500' + os.EOL +
                    '\tbar [55, 99, 400, 100, 20, 350]' + os.EOL +
                    '\tline [55, 99, 400, 100, 20, 350]';
                    break;
            }
            snippet = this.chart_mermaid_str_begin + os.EOL + snippet + os.EOL + this.chart_str_end
        }
        
        await this.cur_editor.insertSnippet(new vscode.SnippetString(snippet))
    }

    mscTableOperate() {
        let cur_line_text = this.getCurFileCurLineText();

        let regex = /(\d+\s*,\s*\d+\s*,\s*\w).*?mc./;
        const match = regex.exec(cur_line_text);
        if (match) {
            let table_param = match[1].split(',');
            mdb_log.printError(table_param.join('\t'));

            let table_align_unit = '';
            let table_head_unit = '| head     ';
            let table_item_unit = '| item     ';

            switch(table_param[2].trim()) {
                case 'l': table_align_unit = '| :------  '; break;
                case 'c': table_align_unit = '| :------: '; break;
                case 'r': table_align_unit = '| ------:  '; break;
            }
            
            let row = parseInt(table_param[0].trim());
            let col = parseInt(table_param[1].trim());
            let table_str = table_head_unit.repeat(col) + '|' + os.EOL +
                            table_align_unit.repeat(col) + '|' + os.EOL + 
                            (table_item_unit.repeat(col) + '|' + os.EOL).repeat(row) + os.EOL;
            this.writeCurLineText(table_str);
        }
        this.writeCurLineText();
    }

    getMSCList() {
        // 图片插入
        let msc_code_insert = new vscode.CompletionItem('insert_code_block', vscode.CompletionItemKind.Operator);
        msc_code_insert.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['code', '']
        };
        msc_code_insert.documentation = new vscode.MarkdownString('插入代码块');

        // 图片插入
        let msc_img_insert = new vscode.CompletionItem('insert_img', vscode.CompletionItemKind.Operator);
        msc_img_insert.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['img', 'insert']
        };
        msc_img_insert.documentation = new vscode.MarkdownString('插入图片,图片由MDBlog管理');

        // 图片删除
        let msc_img_delete = new vscode.CompletionItem('delete_img', vscode.CompletionItemKind.Operator);
        msc_img_delete.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['img', 'delete']
        };
        msc_img_delete.documentation = new vscode.MarkdownString('删除图片,图片由MDBlog管理');

        // 插入表格
        let msc_table_insert = new vscode.CompletionItem('insert_table', vscode.CompletionItemKind.Operator);
        msc_table_insert.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['table', '']
        };
        msc_table_insert.documentation = new vscode.MarkdownString('添加一个表格');

        // 创建一个饼图
        let msc_chart_insert_mermaid_pie = new vscode.CompletionItem('insert_mermaid_pie', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_pie.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,pie']
        };
        msc_chart_insert_mermaid_pie.documentation = new vscode.MarkdownString('添加一个饼图');

        // 创建一个流程图
        let msc_chart_insert_mermaid_flowchart = new vscode.CompletionItem('insert_mermaid_flowchart', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_flowchart.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,flowchart']
        };
        msc_chart_insert_mermaid_flowchart.documentation = new vscode.MarkdownString('添加一个流程图');

        // 创建一个类图
        let msc_chart_insert_mermaid_class_diagram = new vscode.CompletionItem('insert_mermaid_class_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_class_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,class_diagram']
        };
        msc_chart_insert_mermaid_class_diagram.documentation = new vscode.MarkdownString('添加一个类图');

        // 创建一个状态图
        let msc_chart_insert_mermaid_state_diagram = new vscode.CompletionItem('insert_mermaid_state_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_state_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,state_diagram']
        };
        msc_chart_insert_mermaid_state_diagram.documentation = new vscode.MarkdownString('添加一个状态图');

        // 创建一个序列图
        let msc_chart_insert_mermaid_sequence_diagram = new vscode.CompletionItem('insert_mermaid_sequence_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_sequence_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,sequence_diagram']
        };
        msc_chart_insert_mermaid_sequence_diagram.documentation = new vscode.MarkdownString('添加一个序列图');

        // 创建一个ER图
        let msc_chart_insert_mermaid_ER_diagram = new vscode.CompletionItem('insert_mermaid_ER_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_ER_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,ER_diagram']
        };
        msc_chart_insert_mermaid_ER_diagram.documentation = new vscode.MarkdownString('添加一个ER图');

        // 创建一个用户旅程图
        let msc_chart_insert_mermaid_user_journey_diagram = new vscode.CompletionItem('insert_mermaid_user_journey_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_user_journey_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,user_journey_diagram']
        };
        msc_chart_insert_mermaid_user_journey_diagram.documentation = new vscode.MarkdownString('添加一个用户旅程图');

        // 创建一个象限图
        let msc_chart_insert_mermaid_quadrant_chart = new vscode.CompletionItem('insert_mermaid_quadrant_chart', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_quadrant_chart.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,quadrant_chart']
        };
        msc_chart_insert_mermaid_quadrant_chart.documentation = new vscode.MarkdownString('添加一个象限图');

        // 创建一个需求图
        let msc_chart_insert_mermaid_requirement_diagram = new vscode.CompletionItem('insert_mermaid_requirement_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_requirement_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,requirement_diagram']
        };
        msc_chart_insert_mermaid_requirement_diagram.documentation = new vscode.MarkdownString('添加一个需求图');

        // 创建一个Git图
        let msc_chart_insert_mermaid_gitgraph_diagram = new vscode.CompletionItem('insert_mermaid_gitgraph_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_gitgraph_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,gitgraph_diagram']
        };
        msc_chart_insert_mermaid_gitgraph_diagram.documentation = new vscode.MarkdownString('添加一个Git图');

        // 创建一个脑图
        let msc_chart_insert_mermaid_mindmap = new vscode.CompletionItem('insert_mermaid_mindmap', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_mindmap.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,mindmap']
        };
        msc_chart_insert_mermaid_mindmap.documentation = new vscode.MarkdownString('添加一个脑图');

        // 创建一个时间线图
        let msc_chart_insert_mermaid_timeline_diagram = new vscode.CompletionItem('insert_mermaid_timeline_diagram', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_timeline_diagram.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,timeline_diagram']
        };
        msc_chart_insert_mermaid_timeline_diagram.documentation = new vscode.MarkdownString('添加一个时间线图');

        // 创建一个ZenUML图
        let msc_chart_insert_mermaid_zenUML = new vscode.CompletionItem('insert_mermaid_zenUML', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_zenUML.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,zenUML']
        };
        msc_chart_insert_mermaid_zenUML.documentation = new vscode.MarkdownString('添加一个ZenUML图');

        // 创建一个XY图
        let msc_chart_insert_mermaid_XY_chart = new vscode.CompletionItem('insert_mermaid_XY_chart', vscode.CompletionItemKind.Operator);
        msc_chart_insert_mermaid_XY_chart.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'm,XY_chart']
        };
        msc_chart_insert_mermaid_XY_chart.documentation = new vscode.MarkdownString('添加一个XY图');


        // 创建一个bitfield 
        let msc_chart_insert_wavedrom_bitfield = new vscode.CompletionItem('insert_wavedrom_bitfield', vscode.CompletionItemKind.Operator);
        msc_chart_insert_wavedrom_bitfield.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'w,bitfield']
        };
        msc_chart_insert_wavedrom_bitfield.documentation = new vscode.MarkdownString('添加一个bitfield图');

        // 创建一个signal 
        let msc_chart_insert_wavedrom_signal = new vscode.CompletionItem('insert_wavedrom_signal', vscode.CompletionItemKind.Operator);
        msc_chart_insert_wavedrom_signal.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'w,signal']
        };
        msc_chart_insert_wavedrom_signal.documentation = new vscode.MarkdownString('添加一个signal图');

        // 创建一个assign
        let msc_chart_insert_wavedrom_assign = new vscode.CompletionItem('insert_wavedrom_assign', vscode.CompletionItemKind.Operator);
        msc_chart_insert_wavedrom_assign.command = {
            command: 'mdb.msc_operate', title: '', tooltip: '',
            arguments: ['chart', 'w,assign']
        };
        msc_chart_insert_wavedrom_assign.documentation = new vscode.MarkdownString('添加一个assign图');

        return [
            msc_chart_insert_wavedrom_bitfield,
            msc_chart_insert_wavedrom_signal,
            msc_chart_insert_wavedrom_assign,

            msc_chart_insert_mermaid_flowchart,
            msc_chart_insert_mermaid_pie,
            msc_chart_insert_mermaid_class_diagram,
            msc_chart_insert_mermaid_state_diagram,
            msc_chart_insert_mermaid_sequence_diagram,
            msc_chart_insert_mermaid_ER_diagram,
            msc_chart_insert_mermaid_user_journey_diagram,
            msc_chart_insert_mermaid_quadrant_chart,
            msc_chart_insert_mermaid_requirement_diagram,
            msc_chart_insert_mermaid_gitgraph_diagram,
            msc_chart_insert_mermaid_mindmap,
            msc_chart_insert_mermaid_timeline_diagram,
            msc_chart_insert_mermaid_zenUML,
            msc_chart_insert_mermaid_XY_chart,

            msc_table_insert,
            msc_img_insert,
            msc_img_delete,
            msc_code_insert
        ]
    }

    /**
     * @description 写入当前输入MSC的行
     */
    async writeCurLineText(text='') {
        // new vscode.Position(this.cur_line , 0),
        this.cur_editor = vscode.window.activeTextEditor;
        if (this.cur_editor) {
            this.cur_line = this.cur_editor.selection.active.line;
            this.cur_range = this.cur_editor.document.lineAt(this.cur_line).range;
            let range = new vscode.Range(
                this.cur_range.start,
                this.cur_range.end
            );

            await this.cur_editor.edit(function (editorEdit) {
                editorEdit.replace(range, text);
            });
        }
    }

}

// mdb 文件处理器
class MDBFileProcessHandler extends FileProcess {
    constructor() {
        super();
    }

    /**
     * @param {any} work_dir
     * @param {any} publish_dir
     */
    init(work_dir, publish_dir) {
        // 当前mdb 插件工作路径
        this.mdb_sys_path_str = __dirname;

        this.work_dir = work_dir;
        this.publish_dir = publish_dir;
    }

    /**
     * @description 复制文件
     * @param {string} src_path_str
     * @param {string} dst_path_str
     */
    async copy(src_path_str, dst_path_str) {
        mdb_log.printDetails(`${src_path_str} copy to ${dst_path_str}`);
        return super.copy2(src_path_str, dst_path_str);
    }

     /**
     * @description 复制文件
     * @param {string} src_path_str
     * @param {string} dst_path_str
     */
     async rename(src_path_str, dst_path_str) {
        mdb_log.printDetails(`${src_path_str} rename to ${dst_path_str}`);
        return super.rename(src_path_str, dst_path_str);
    }

    /**
     * @description 移动文件
     * @param {string} src_path_str
     * @param {string} dst_path_str
     */
    async move(src_path_str, dst_path_str) {
        mdb_log.printDetails(`${src_path_str} move to ${dst_path_str}`);
        return super.move2(src_path_str, dst_path_str);
    }

    /**
     * @description 创建目录（并检查是否创建成功）
     * @param {string} dir_path_str
     */
    async createDir(dir_path_str) {
        mdb_log.printDetails(`create dir: ${dir_path_str}`);
        return super.createAndCheckDir(dir_path_str);
    }

    /**
     * @description 创建文件（并检查是否创建成功）
     * @param {string} file_path_str
     */
    async createFile(file_path_str) {
        mdb_log.printDetails(`create file: ${file_path_str}`);
        super.createAndCheckFile(file_path_str);
    }

    /**
     * @description 打开MDB Workspace（文件夹）
     * @param {string} open_label_str 
     * @returns 
     */
    async openFolder(open_label_str = '') {
        let open_label = open_label_str;
        let options = {
            canSelectMany: false,
            openLabel: open_label,
            canSelectFolders: true,
            canSelectFiles: false,
            defaultUri: vscode.Uri.file(this.work_dir)
        };

        let uri = await vscode.window.showOpenDialog(options);
        if (uri && uri.length > 0) {
            return uri[0];
        }
        else {
            return null;
        }
    }

    /**
     * @description md文件发布到publish位置
     * @param {string} gen_path_str 
     */
    filePublish(gen_path_str) {
        const cur_publish_dir = gen_path_str.replace(this.work_dir, this.publish_dir);
        this.move(gen_path_str, cur_publish_dir);
    }

    /**
     * @param {fs.PathOrFileDescriptor} [ini_path]
     */
    getIniConfig(ini_path) {
        return ini.parse(fs.readFileSync(ini_path, 'utf-8'));
    }

    /**
     * @param {any} config
     */
    setIniConfig(ini_path, config){
        fs.writeFileSync(ini_path, ini.stringify(config), 'utf-8');
    }

    /**
     * @param {string} file_path
     * @param {string} flag_str
     * @param {string} new_text_str
     */
    async updateFileWithFlag(file_path, flag_str, new_text_str) {
        // 读取文件
        let file_text = await this.readFile(file_path);
        
        file_text = file_text.replace(flag_str, new_text_str);

        // 将替换后的结果写回文件
        const new_file_data = Buffer.from(file_text);
        await this.writeFile(file_path, new_file_data);
    }

    /**
     * @param {string} file_path
     */
    async readFile(file_path) {
        const file_data = await vscode.workspace.fs.readFile(vscode.Uri.file(file_path));
        return file_data.toString();
    }

    /**
     * @param {string} file_path
     * @param {Uint8Array | Buffer} file_content
     */
    async writeFile(file_path, file_content) {
        await vscode.workspace.fs.writeFile(
            vscode.Uri.file(file_path), file_content
        );
    }

    /**
     * @param {string} file_path
     * @param {string} add_text_str
     */
    async addFileContent(file_path, add_text_str) {
        let file_text = await this.readFile(file_path);

        // 追加文本
        file_text += add_text_str;

        // 将追加文本写回文件
        const new_file_data = Buffer.from(file_text);
        await this.writeFile(file_path, new_file_data);
    }
}

module.exports = MDBManager;
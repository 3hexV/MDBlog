const vscode = require('vscode');
const MDBManager = require('./mdb_manager')
let mdb_manager = new MDBManager();

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	let last_file_path = '';
	let ws_path = null;

	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.msc_operate', async (msc_type, cmd_type) => {
			mdb_manager.mdb_shrot_cmd_ctrl.mscOperateHandle(msc_type, cmd_type);
		})
	);
	
	// 初始化一个新的MDBlog
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.init_mdb', async () => {
			mdb_manager.initMDBWorkspace();
		})
	);

	// 打开MDBlog
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.open_mdb', async () => {
			mdb_manager.openMDBWorkspace();
		})
	);

	// 添加类别 
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.add_category', async (uri) => {
			mdb_manager.createCategory(uri);
		})
	);

	// 添加顶层类别 
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.add_top_category', async () => {
			mdb_manager.createCategory(ws_path);
		})
	);

	// 删除类别 
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.del_category', async (uri) => {
			mdb_manager.deleteCategory(uri);
		})
	);

	// 添加文章
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.add_article', async (uri) => {
			mdb_manager.createArticle(uri);
		})
	);

	// 删除文章 
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.del_article', async (uri) => {
			mdb_manager.deleteArticle(uri);
		})
	);

	// 移动cate & article
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.mv_cate_article', async (uri) => {
			mdb_manager.mvCategoryAndArticle(uri);
		})
	);

	// 重命名cate & article
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.rename_cate_article', async (uri) => {
			mdb_manager.renameCategoryAndArticle(uri);
		})
	);

	// 刷新
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.refresh', async () => {
			mdb_manager.refreshView();
		})
	);

	// 复制 cate的相对地址 忽略_work_mdb，用于移动时提供目的地址
	// context.subscriptions.push(
	// 	vscode.commands.registerCommand('mdb.get_cate_index_path', async (uri) => {
	// 		let file_index = mdb_manager.getCategoryIndexPath(uri);
	// 		vscode.env.clipboard.writeText(file_index).then(() => {
	// 			vscode.window.showInformationMessage('复制地址成功');
	// 		});
	// 	})
	// );

	// 编辑类别文件（固定模式）
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.edit_category', async (uri) => {
			let file_uri = vscode.Uri.file(uri + "\\index.md");
			vscode.window.showTextDocument(file_uri, {preview: false});
		})
	);

	// 打开文件 - 支持单击预览模式，双击固定模式
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.open_file', async (uri) => {
			let file_uri = vscode.Uri.file(uri);

			// console.log(file_uri);
			// 固定模式打开页面
			if (uri == last_file_path){
				vscode.window.showTextDocument(file_uri, {preview: false});
			}
			// 预览模式打开页面
			else{
				vscode.window.showTextDocument(file_uri);
			}
			last_file_path = uri;

		})
	);

	// MDB 状态控制
	// 启动本地服务
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.start_local', async () => {
			mdb_manager.startLocal();
		})
	);
	// 停止本地服务
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.stop_local', async () => {
			mdb_manager.stopLocal();
		})
	);
	// 默认浏览器显示
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.show_local', async () => {
			mdb_manager.showLocal();
		})
	);

	// 发布当前在编辑的md文件
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.md_publish_cur_win', async () => {
			mdb_manager.publishCurEditor();
		})
	);

	// 发布全部被保存的md文件
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.md_publish_all_saved_md', async () => {
			mdb_manager.publishUpdatedMDFile();
		})
	);

	// 发布全部md文件
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.md_publish_all_md', async () => {
			mdb_manager.publishAllMDFile();
		})
	);

	// 打开WS
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.open_mdb_ws_dir', async () => {
			mdb_manager.openMDBWorpspaceDir();
		})
	);

	// 打开publish
	context.subscriptions.push(
		vscode.commands.registerCommand('mdb.open_publish_dir', async () => {
			mdb_manager.openPublishDir();
		})
	);
	
	
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}

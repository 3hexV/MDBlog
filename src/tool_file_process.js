const vscode = require('vscode');

class FileProcess {
    constructor () {
        ;
    }

    async rename(src_path_str, dst_path_str) {
        await vscode.workspace.fs.rename(
            vscode.Uri.file(src_path_str),
            vscode.Uri.file(dst_path_str)).then(
                res => {return res;}
            );
    }

    async copy2(src_path_str, dst_path_str) {
        await vscode.workspace.fs.copy(
            vscode.Uri.file(src_path_str),
            vscode.Uri.file(dst_path_str)).then(
                res => {return res;}
            );
    }

    /**
     * @param {string} src_path_str
     * @param {string} dst_path_str
     */
    async move2(src_path_str, dst_path_str) {
        await vscode.workspace.fs.rename(
            vscode.Uri.file(src_path_str),
            vscode.Uri.file(dst_path_str), {overwrite: true}).then(
                res => {return res;}
            );
    }

    /**
     * @param {string} dst_path_str
     */
    async delete(dst_path_str) {
        await vscode.workspace.fs.delete(
            vscode.Uri.file(dst_path_str), {recursive: true}).then(
                res => {return res;}
            );
    }

    /**
     * @param {string} dst_path_str
     */
    async isExist(dst_path_str) {
        // console.log('check: '+ dst_path_str);
        try {
            await vscode.workspace.fs.stat(vscode.Uri.file(dst_path_str));
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @param {string} dst_path_str
     */
    async createAndCheckDir(dst_path_str) {
        let folderUri = vscode.Uri.file(dst_path_str);
        await vscode.workspace.fs.createDirectory(folderUri);
        try {
            await vscode.workspace.fs.readDirectory(folderUri);
            return true;
        } catch (e) {
            // console.log(__filename, e);
            return false;
        }
    }

    /**
     * @param {string} dst_path_str
     * @param {string} def_text_str
     */
    async createAndCheckFile(dst_path_str, def_text_str="default text") {
        let fileUri = vscode.Uri.file(dst_path_str);
        let content = new TextEncoder().encode(def_text_str);
        await vscode.workspace.fs.writeFile(fileUri, content);
    
        try {
            await vscode.workspace.fs.readFile(fileUri);
            return true;
        } catch (e) {
            // console.log(__filename, e);
            return false;
        }
    }
}

module.exports = FileProcess;
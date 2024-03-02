const chalk = require('chalk');
const vscode = require('vscode');

class MDBLog {
    constructor(show_msg=false, publish_with_log_output = false) {
        this.not_show_flag = !show_msg;
        chalk.level = 3;
        this.out_text = ''
        this.publish_with_log_output = publish_with_log_output;

        if(this.publish_with_log_output) {
            this.output_channel = vscode.window.createOutputChannel("MDB Log");
        }
    }

    printInfo(msg='') {
        if(this.not_show_flag) return;
        this.out_text = chalk.green(`[Info] : ${msg}`);
        
        if(!this._outputChannelCheck()) {
            this._print();
        }
    }

    printError(msg='') {
        if(this.not_show_flag) return;
        this.out_text = chalk.red(`[**Error] : ${msg}`);

        if(!this._outputChannelCheck()) {
            this._print();
        }
    }

    printWarnning(msg='') {
        if(this.not_show_flag) return;
        this.out_text = chalk.yellow(`[*Warnning] : ${msg}`);

        if(!this._outputChannelCheck()) {
            this._print();
        }
    }

    printDetails(msg='') {
        if(this.not_show_flag) return;
        this.out_text = chalk.white(`[Details] : ${msg}`);

        if(!this._outputChannelCheck()) {
            this._print();
        }
    }

    _print() {
        console.log(this.out_text);
    }

    _outputChannelCheck() {
        if(this.publish_with_log_output) {
            this.output_channel.appendLine(this.out_text);
            return true;
        }
        return false;
    }
}

module.exports = MDBLog;
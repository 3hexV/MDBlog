const path = require('path');
const vscode = require('vscode');
const fs = require('fs');

class MDBExplorer {
    constructor(workspaceRoot) {
		this.workspaceRoot = workspaceRoot;

		// 类别文件夹是否显示对应的index.md
		this.show_index = false;

        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
	}

	refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
		let treeItem = new vscode.TreeItem(element);
		treeItem.label = path.basename(element);
		treeItem.tooltip = element;
		
		if(fs.statSync(element).isDirectory()) { // category | dir
			treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;

			treeItem.iconPath = {
				dark: path.join(__dirname, '..', 'media', 'dark', 'category.svg'),
				light: path.join(__dirname, '..', 'media', 'light', 'category.svg'),
			};

			treeItem.contextValue = 'category';
		}
		else { // article | file
			treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;

			treeItem.iconPath = {
				dark: path.join(__dirname, '..', 'media', 'dark', 'article.svg'),
				light: path.join(__dirname, '..', 'media', 'light', 'article.svg'),
			};

			treeItem.command = {
				command: 'mdb.open_file', // 命令的唯一标识符
				title: '打开文件', // 命令的标题
				arguments: [element] // 当命令执行时传递给命令的参数数组
			}

			treeItem.contextValue = 'article';
		}
		return treeItem;
    }

	getChildren(element) {
		if (!element) {
            if (this.workspaceRoot) {
                return this.readDirectory(this.workspaceRoot);
            }
            return Promise.resolve([]);
        }
        return this.readDirectory(element);
	}


	isFileOrDirectory(file) {
		try {
			const stat = fs.lstatSync(file);
			// 是目录并且不是assets目录
			if ((path.extname(file) === '.md') || (stat.isDirectory() && path.basename(file) != 'assets')) {
				return true;
			}
			else {
				return false;
			}
		} catch (e) {
			console.error(e);
			return false;
		}
	}

	readDirectory(element) {
		return new Promise((resolve, reject) => {
			fs.readdir(element, { withFileTypes: true }, (err, files) => {
				if (err) {
					reject(err);
				} else {
					let filePaths = files.map(file => path.join(element, file.name)).filter(file => this.isFileOrDirectory(file));
					
					// 默认显示根目录的index.md
					// 类别文件中，默认不显示其对应的index.md
					if (!this.show_index && element !== this.workspaceRoot) {
						filePaths = filePaths
							.filter(file => path.basename(file) !== 'index.md');
					}
					resolve(filePaths);
				}
			});
		});
	}
}

class MDBStateItem extends vscode.TreeItem {
    /**
	 * @param {string} label
	 * @param {vscode.TreeItemCollapsibleState} collapsibleState
	 * @param {string} iconName
	 */
    constructor(label, collapsibleState, iconName = '', value = '') {
        super(label, collapsibleState);
		this.children = [];

		if(iconName.length != 0)
		{
			this.iconPath = {
				dark: path.join(__dirname, '..', 'media', 'dark', iconName),
				light: path.join(__dirname, '..', 'media', 'light', iconName),
			};
		}
		this.contextValue = value;
    }
    /**
	 * @param {MDBStateItem} item
	 */
    addChild(item) {
        this.children.push(item);
    }

	updateLabel(new_val) {
		this.label = new_val;
	}

	updateChild(pos = 0, label='', iconName='') {
		if(label.length != 0) {
			this.children[pos].label = label;
		}

		if(iconName.length != 0)
		{
			this.children[pos].iconPath = {
				dark: path.join(__dirname, '..', 'media', 'dark', iconName),
				light: path.join(__dirname, '..', 'media', 'light', iconName),
			};
		}
	}
}

class MDBState {
	/**
	 * @param {any} rootItems
	 */
	constructor(rootItems) {
		this.rootItems = rootItems; 

		this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;;
	}
	refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
		if (element) {
            return Promise.resolve(element.children);
        } else {
            return Promise.resolve(this.rootItems);
        }
    }
}

class PublishReadyQueue {
	constructor() {
		// 缓存队列
		this.items_set = new Set();
		this.queue = null;
	}

	// 路径放入 set中，防止重复
	enqueue(item) {
		this.items_set.add(item);
	}

	has(item) {
		return this.items_set.has(item);
	}

	dequeue() {
		return this.queue.shift();
	}

	// 将set转为list，便于取出数据操作
	ready() {
		this.queue = Array.from(this.items_set);
		this.items_set.clear();
	}

	isEmpty() {
		return this.queue.length === 0;
	}
	
	getLength() {
		return this.queue.length;
	}

	printf() {
		// console.log(this.queue)
	}
}


module.exports = {
	MDBExplorer: MDBExplorer,
	MDBState: MDBState,
	MDBStateItem: MDBStateItem,
	PublishReadyQueue: PublishReadyQueue
};


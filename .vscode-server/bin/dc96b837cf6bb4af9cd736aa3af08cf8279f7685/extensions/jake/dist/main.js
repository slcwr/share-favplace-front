(()=>{"use strict";var e={398:e=>{e.exports=require("vscode")},317:e=>{e.exports=require("child_process")},896:e=>{e.exports=require("fs")},928:e=>{e.exports=require("path")}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=function(e){l=new g,l.start()},e.deactivate=function(){l.dispose()};const t=s(928),r=s(896),i=s(317),n=s(398);function a(e){return new Promise(((t,s)=>{r.exists(e,(e=>{t(e)}))}))}const c=["build","compile","watch"];function d(e){for(const t of c)if(-1!==e.indexOf(t))return!0;return!1}const u=["test"];function h(e){for(const t of u)if(-1!==e.indexOf(t))return!0;return!1}let p,l;function k(){return p||(p=n.window.createOutputChannel("Jake Auto Detection")),p}function f(){n.window.showWarningMessage(n.l10n.t("Problem finding jake tasks. See the output for more information."),n.l10n.t("Go to output")).then((()=>{k().show(!0)}))}async function w(e){let s;const o=process.platform;return s="win32"===o&&await a(t.join(e,"node_modules",".bin","jake.cmd"))?t.join(".","node_modules",".bin","jake.cmd"):"linux"!==o&&"darwin"!==o||!await a(t.join(e,"node_modules",".bin","jake"))?"jake":t.join(".","node_modules",".bin","jake"),s}class v{constructor(e,t){this._workspaceFolder=e,this._jakeCommand=t}get workspaceFolder(){return this._workspaceFolder}isEnabled(){return"on"===n.workspace.getConfiguration("jake",this._workspaceFolder.uri).get("autoDetect")}start(){const e=t.join(this._workspaceFolder.uri.fsPath,"{node_modules,Jakefile,Jakefile.js}");this.fileWatcher=n.workspace.createFileSystemWatcher(e),this.fileWatcher.onDidChange((()=>this.promise=void 0)),this.fileWatcher.onDidCreate((()=>this.promise=void 0)),this.fileWatcher.onDidDelete((()=>this.promise=void 0))}async getTasks(){return this.isEnabled()?(this.promise||(this.promise=this.computeTasks()),this.promise):[]}async getTask(e){const t=e.definition.task;if(t){const s=e.definition,o={cwd:this.workspaceFolder.uri.fsPath};return new n.Task(s,this.workspaceFolder,t,"jake",new n.ShellExecution(await this._jakeCommand,[t],o))}}async computeTasks(){const e="file"===this._workspaceFolder.uri.scheme?this._workspaceFolder.uri.fsPath:void 0,s=[];if(!e)return s;let o=t.join(e,"Jakefile");if(!await a(o)&&(o=t.join(e,"Jakefile.js"),!await a(o)))return s;const r=`${await this._jakeCommand} --tasks`;try{const{stdout:t,stderr:s}=await(c=r,u={cwd:e},new Promise(((e,t)=>{i.exec(c,u,((s,o,r)=>{s&&t({error:s,stdout:o,stderr:r}),e({stdout:o,stderr:r})}))})));s&&(k().appendLine(s),f());const o=[];if(t){const e=t.split(/\r{0,1}\n/);for(const t of e){if(0===t.length)continue;const e=/^jake\s+([^\s]+)\s/g.exec(t);if(e&&2===e.length){const s=e[1],r={type:"jake",task:s},i={cwd:this.workspaceFolder.uri.fsPath},a=new n.Task(r,s,"jake",new n.ShellExecution(`${await this._jakeCommand} ${s}`,i));o.push(a);const c=t.toLowerCase();d(c)?a.group=n.TaskGroup.Build:h(c)&&(a.group=n.TaskGroup.Test)}}}return o}catch(e){const t=k();return e.stderr&&t.appendLine(e.stderr),e.stdout&&t.appendLine(e.stdout),t.appendLine(n.l10n.t("Auto detecting Jake for folder {0} failed with error: {1}', this.workspaceFolder.name, err.error ? err.error.toString() : 'unknown")),f(),s}var c,u}dispose(){this.promise=void 0,this.fileWatcher&&this.fileWatcher.dispose()}}class g{constructor(){this.detectors=new Map}start(){const e=n.workspace.workspaceFolders;e&&this.updateWorkspaceFolders(e,[]),n.workspace.onDidChangeWorkspaceFolders((e=>this.updateWorkspaceFolders(e.added,e.removed))),n.workspace.onDidChangeConfiguration(this.updateConfiguration,this)}dispose(){this.taskProvider&&(this.taskProvider.dispose(),this.taskProvider=void 0),this.detectors.clear()}updateWorkspaceFolders(e,t){for(const e of t){const t=this.detectors.get(e.uri.toString());t&&(t.dispose(),this.detectors.delete(e.uri.toString()))}for(const t of e){const e=new v(t,w(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateConfiguration(){for(const e of this.detectors.values())e.dispose(),this.detectors.delete(e.workspaceFolder.uri.toString());const e=n.workspace.workspaceFolders;if(e)for(const t of e)if(!this.detectors.has(t.uri.toString())){const e=new v(t,w(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateProvider(){if(!this.taskProvider&&this.detectors.size>0){const e=this;this.taskProvider=n.tasks.registerTaskProvider("jake",{provideTasks:()=>e.getTasks(),resolveTask:t=>e.getTask(t)})}else this.taskProvider&&0===this.detectors.size&&(this.taskProvider.dispose(),this.taskProvider=void 0)}getTasks(){return this.computeTasks()}computeTasks(){if(0===this.detectors.size)return Promise.resolve([]);if(1===this.detectors.size)return this.detectors.values().next().value.getTasks();{const e=[];for(const t of this.detectors.values())e.push(t.getTasks().then((e=>e),(()=>[])));return Promise.all(e).then((e=>{const t=[];for(const s of e)s&&s.length>0&&t.push(...s);return t}))}}async getTask(e){if(0!==this.detectors.size){if(1===this.detectors.size)return this.detectors.values().next().value.getTask(e);if(e.scope!==n.TaskScope.Workspace&&e.scope!==n.TaskScope.Global&&e.scope){const t=this.detectors.get(e.scope.uri.toString());if(t)return t.getTask(e)}}}}})();var r=exports;for(var i in o)r[i]=o[i];o.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/dc96b837cf6bb4af9cd736aa3af08cf8279f7685/extensions/jake/dist/main.js.map
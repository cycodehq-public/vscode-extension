// only colors are changed to match vscode themes
export default `
<style>
:host,
:root {
  /* ---------- Light / Default diff2html variables ---------- */
  --d2h-bg-color: var(--vscode-editor-background);
  --d2h-border-color: var(--vscode-editorWidget-border);
  --d2h-dim-color: var(--vscode-widget-shadow); /* Semi-transparent black approximation */
  --d2h-line-border-color: var(--vscode-tab-border);

  --d2h-file-header-bg-color: var(--vscode-panel-background);
  --d2h-file-header-border-color: var(--vscode-panel-border);

  --d2h-empty-placeholder-bg-color: var(--vscode-panelSectionHeader-background);
  --d2h-empty-placeholder-border-color: var(--vscode-panelSection-border);

  --d2h-selected-color: var(--vscode-editor-selectionBackground);

  /* “Inserted” lines, backgrounds, and labels */
  --d2h-ins-bg-color: var(--vscode-diffEditor-insertedTextBackground);
  --d2h-ins-border-color: var(--vscode-editorGutter-addedBackground);
  --d2h-ins-highlight-bg-color: var(--vscode-diffEditor-insertedLineBackground);
  --d2h-ins-label-color: var(--vscode-editorGutter-addedBackground);

  /* “Deleted” lines, backgrounds, and labels */
  --d2h-del-bg-color: var(--vscode-diffEditor-removedTextBackground);
  --d2h-del-border-color: var(--vscode-editorGutter-deletedBackground);
  --d2h-del-highlight-bg-color: var(--vscode-diffEditor-removedLineBackground);
  --d2h-del-label-color: var(--vscode-errorForeground);

  /* “Changed” lines (yellow-ish) */
  --d2h-change-del-color: var(--vscode-diffEditor-removedLineBackground);
  --d2h-change-ins-color: var(--vscode-diffEditor-insertedLineBackground);
  --d2h-info-bg-color: var(--vscode-editorHoverWidget-background);
  --d2h-info-border-color: var(--vscode-editorHoverWidget-border);

  /* Labels for changed lines or “moved” lines */
  --d2h-change-label-color: var(--vscode-charts-yellow); /* #cca700 */
  --d2h-moved-label-color: var(--vscode-charts-blue);    /* #3794ff */

  /* ---------- Dark-theme-specific diff2html variables ---------- */
  --d2h-dark-color: var(--vscode-foreground);
  --d2h-dark-bg-color: var(--vscode-editor-background);
  --d2h-dark-border-color: var(--vscode-panel-border);
  --d2h-dark-dim-color: var(--vscode-editorLineNumber-foreground); /* #6e7681 approximate */
  --d2h-dark-line-border-color: var(--vscode-tab-border);

  --d2h-dark-file-header-bg-color: var(--vscode-sideBar-background);
  --d2h-dark-file-header-border-color: var(--vscode-sideBar-border);

  --d2h-dark-empty-placeholder-bg-color: var(--vscode-panelSectionHeader-background);
  --d2h-dark-empty-placeholder-border-color: var(--vscode-panelSection-border);

  --d2h-dark-selected-color: var(--vscode-editor-selectionBackground);

  --d2h-dark-ins-bg-color: var(--vscode-diffEditor-insertedTextBackground);
  --d2h-dark-ins-border-color: var(--vscode-editorGutter-addedBackground);
  --d2h-dark-ins-highlight-bg-color: var(--vscode-diffEditor-insertedLineBackground);
  --d2h-dark-ins-label-color: var(--vscode-gitlens-openPullRequestIconColor); /* #3fb950 */

  --d2h-dark-del-bg-color: var(--vscode-diffEditor-removedTextBackground);
  --d2h-dark-del-border-color: var(--vscode-editorGutter-deletedBackground);
  --d2h-dark-del-highlight-bg-color: var(--vscode-diffEditor-removedLineBackground);
  --d2h-dark-del-label-color: var(--vscode-errorForeground);

  --d2h-dark-change-del-color: var(--vscode-diffEditor-removedLineBackground);
  --d2h-dark-change-ins-color: var(--vscode-diffEditor-insertedLineBackground);

  --d2h-dark-info-bg-color: var(--vscode-editorHoverWidget-background);
  --d2h-dark-info-border-color: var(--vscode-editorHoverWidget-border);

  --d2h-dark-change-label-color: var(--vscode-charts-yellow); /* #cca700 */
  --d2h-dark-moved-label-color: var(--vscode-charts-blue);    /* #3794ff */
}

.d2h-wrapper {
  text-align: left;
}
.d2h-file-header {
  background-color: #f7f7f7;
  background-color: var(--d2h-file-header-bg-color);
  border-bottom: 1px solid #d8d8d8;
  border-bottom: 1px solid var(--d2h-file-header-border-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif;
  height: 35px;
  padding: 5px 10px;
}
.d2h-file-header.d2h-sticky-header {
  position: sticky;
  top: 0;
  z-index: 1;
}
.d2h-file-stats {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  margin-left: auto;
}
.d2h-lines-added {
  border: 1px solid #b4e2b4;
  border: 1px solid var(--d2h-ins-border-color);
  border-radius: 5px 0 0 5px;
  color: #399839;
  color: var(--d2h-ins-label-color);
  padding: 2px;
  text-align: right;
  vertical-align: middle;
}
.d2h-lines-deleted {
  border: 1px solid #e9aeae;
  border: 1px solid var(--d2h-del-border-color);
  border-radius: 0 5px 5px 0;
  color: #c33;
  color: var(--d2h-del-label-color);
  margin-left: 1px;
  padding: 2px;
  text-align: left;
  vertical-align: middle;
}
.d2h-file-name-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 15px;
  width: 100%;
}
.d2h-file-name {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.d2h-file-wrapper {
  border: 1px solid #ddd;
  border: 1px solid var(--d2h-border-color);
  border-radius: 3px;
  margin-bottom: 1em;
}
.d2h-file-collapse {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  cursor: pointer;
  display: none;
  font-size: 12px;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #ddd;
  border: 1px solid var(--d2h-border-color);
  border-radius: 3px;
  padding: 4px 8px;
}
.d2h-file-collapse.d2h-selected {
  background-color: #c8e1ff;
  background-color: var(--d2h-selected-color);
}
.d2h-file-collapse-input {
  margin: 0 4px 0 0;
}
.d2h-diff-table {
  border-collapse: collapse;
  font-family: Menlo, Consolas, monospace;
  font-size: 13px;
  width: 100%;
}
.d2h-files-diff {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.d2h-file-diff {
  overflow-y: hidden;
}
.d2h-file-diff.d2h-d-none,
.d2h-files-diff.d2h-d-none {
  display: none;
}
.d2h-file-side-diff {
  display: inline-block;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 50%;
}
.d2h-code-line {
  padding: 0 8em;
  width: calc(100% - 16em);
}
.d2h-code-line,
.d2h-code-side-line {
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
}
.d2h-code-side-line {
  padding: 0 4.5em;
  width: calc(100% - 9em);
}
.d2h-code-line-ctn {
  background: none;
  display: inline-block;
  padding: 0;
  word-wrap: normal;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  vertical-align: middle;
  white-space: pre;
  width: 100%;
}
.d2h-code-line del,
.d2h-code-side-line del {
  background-color: #ffb6ba;
  background-color: var(--d2h-del-highlight-bg-color);
}
.d2h-code-line del,
.d2h-code-line ins,
.d2h-code-side-line del,
.d2h-code-side-line ins {
  border-radius: 0.2em;
  display: inline-block;
  margin-top: -1px;
  -webkit-text-decoration: none;
  text-decoration: none;
}
.d2h-code-line ins,
.d2h-code-side-line ins {
  background-color: #97f295;
  background-color: var(--d2h-ins-highlight-bg-color);
  text-align: left;
}
.d2h-code-line-prefix {
  background: none;
  display: inline;
  padding: 0;
  word-wrap: normal;
  white-space: pre;
}
.line-num1 {
  float: left;
}
.line-num1,
.line-num2 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 0.5em;
  text-overflow: ellipsis;
  width: 3.5em;
}
.line-num2 {
  float: right;
}
.d2h-code-linenumber {
  background-color: #fff;
  background-color: var(--d2h-bg-color);
  border: solid #eee;
  border: solid var(--d2h-line-border-color);
  border-width: 0 1px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.3);
  color: var(--d2h-dim-color);
  cursor: pointer;
  display: inline-block;
  position: absolute;
  text-align: right;
  width: 7.5em;
}
.d2h-code-linenumber:after {
  content: "\\200b";
}
.d2h-code-side-linenumber {
  background-color: #fff;
  background-color: var(--d2h-bg-color);
  border: solid #eee;
  border: solid var(--d2h-line-border-color);
  border-width: 0 1px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.3);
  color: var(--d2h-dim-color);
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0 0.5em;
  position: absolute;
  text-align: right;
  text-overflow: ellipsis;
  width: 4em;
}
.d2h-code-side-linenumber:after {
  content: "\\200b";
}
.d2h-code-side-emptyplaceholder,
.d2h-emptyplaceholder {
  background-color: #f1f1f1;
  background-color: var(--d2h-empty-placeholder-bg-color);
  border-color: #e1e1e1;
  border-color: var(--d2h-empty-placeholder-border-color);
}
.d2h-code-line-prefix,
.d2h-code-linenumber,
.d2h-code-side-linenumber,
.d2h-emptyplaceholder {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.d2h-code-linenumber,
.d2h-code-side-linenumber {
  direction: rtl;
}
.d2h-del {
  background-color: #fee8e9;
  background-color: var(--d2h-del-bg-color);
  border-color: #e9aeae;
  border-color: var(--d2h-del-border-color);
}
.d2h-ins {
  background-color: #dfd;
  background-color: var(--d2h-ins-bg-color);
  border-color: #b4e2b4;
  border-color: var(--d2h-ins-border-color);
}
.d2h-info {
  background-color: #f8fafd;
  background-color: var(--d2h-info-bg-color);
  border-color: #d5e4f2;
  border-color: var(--d2h-info-border-color);
  color: rgba(0, 0, 0, 0.3);
  color: var(--d2h-dim-color);
}
.d2h-file-diff .d2h-del.d2h-change {
  background-color: #fdf2d0;
  background-color: var(--d2h-change-del-color);
}
.d2h-file-diff .d2h-ins.d2h-change {
  background-color: #ded;
  background-color: var(--d2h-change-ins-color);
}
.d2h-file-list-wrapper {
  margin-bottom: 10px;
}
.d2h-file-list-wrapper a {
  -webkit-text-decoration: none;
  text-decoration: none;
}
.d2h-file-list-wrapper a,
.d2h-file-list-wrapper a:visited {
  color: #3572b0;
  color: var(--d2h-moved-label-color);
}
.d2h-file-list-header {
  text-align: left;
}
.d2h-file-list-title {
  font-weight: 700;
}
.d2h-file-list-line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
}
.d2h-file-list {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}
.d2h-file-list > li {
  border-bottom: 1px solid #ddd;
  border-bottom: 1px solid var(--d2h-border-color);
  margin: 0;
  padding: 5px 10px;
}
.d2h-file-list > li:last-child {
  border-bottom: none;
}
.d2h-file-switch {
  cursor: pointer;
  display: none;
  font-size: 10px;
}
.d2h-icon {
  margin-right: 10px;
  vertical-align: middle;
  fill: currentColor;
}
.d2h-deleted {
  color: #c33;
  color: var(--d2h-del-label-color);
}
.d2h-added {
  color: #399839;
  color: var(--d2h-ins-label-color);
}
.d2h-changed {
  color: #d0b44c;
  color: var(--d2h-change-label-color);
}
.d2h-moved {
  color: #3572b0;
  color: var(--d2h-moved-label-color);
}
.d2h-tag {
  background-color: #fff;
  background-color: var(--d2h-bg-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 10px;
  margin-left: 5px;
  padding: 0 2px;
}
.d2h-deleted-tag {
  border: 1px solid #c33;
  border: 1px solid var(--d2h-del-label-color);
}
.d2h-added-tag {
  border: 1px solid #399839;
  border: 1px solid var(--d2h-ins-label-color);
}
.d2h-changed-tag {
  border: 1px solid #d0b44c;
  border: 1px solid var(--d2h-change-label-color);
}
.d2h-moved-tag {
  border: 1px solid #3572b0;
  border: 1px solid var(--d2h-moved-label-color);
}
.d2h-dark-color-scheme {
  background-color: #0d1117;
  background-color: var(--d2h-dark-bg-color);
  color: #e6edf3;
  color: var(--d2h-dark-color);
}
.d2h-dark-color-scheme .d2h-file-header {
  background-color: #161b22;
  background-color: var(--d2h-dark-file-header-bg-color);
  border-bottom: #30363d;
  border-bottom: var(--d2h-dark-file-header-border-color);
}
.d2h-dark-color-scheme .d2h-lines-added {
  border: 1px solid rgba(46, 160, 67, 0.4);
  border: 1px solid var(--d2h-dark-ins-border-color);
  color: #3fb950;
  color: var(--d2h-dark-ins-label-color);
}
.d2h-dark-color-scheme .d2h-lines-deleted {
  border: 1px solid rgba(248, 81, 73, 0.4);
  border: 1px solid var(--d2h-dark-del-border-color);
  color: #f85149;
  color: var(--d2h-dark-del-label-color);
}
.d2h-dark-color-scheme .d2h-code-line del,
.d2h-dark-color-scheme .d2h-code-side-line del {
  background-color: rgba(248, 81, 73, 0.4);
  background-color: var(--d2h-dark-del-highlight-bg-color);
}
.d2h-dark-color-scheme .d2h-code-line ins,
.d2h-dark-color-scheme .d2h-code-side-line ins {
  background-color: rgba(46, 160, 67, 0.4);
  background-color: var(--d2h-dark-ins-highlight-bg-color);
}
.d2h-dark-color-scheme .d2h-diff-tbody {
  border-color: #30363d;
  border-color: var(--d2h-dark-border-color);
}
.d2h-dark-color-scheme .d2h-code-side-linenumber {
  background-color: #0d1117;
  background-color: var(--d2h-dark-bg-color);
  border-color: #21262d;
  border-color: var(--d2h-dark-line-border-color);
  color: #6e7681;
  color: var(--d2h-dark-dim-color);
}
.d2h-dark-color-scheme .d2h-files-diff .d2h-code-side-emptyplaceholder,
.d2h-dark-color-scheme .d2h-files-diff .d2h-emptyplaceholder {
  background-color: hsla(215, 8%, 47%, 0.1);
  background-color: var(--d2h-dark-empty-placeholder-bg-color);
  border-color: #30363d;
  border-color: var(--d2h-dark-empty-placeholder-border-color);
}
.d2h-dark-color-scheme .d2h-code-linenumber {
  background-color: #0d1117;
  background-color: var(--d2h-dark-bg-color);
  border-color: #21262d;
  border-color: var(--d2h-dark-line-border-color);
  color: #6e7681;
  color: var(--d2h-dark-dim-color);
}
.d2h-dark-color-scheme .d2h-del {
  background-color: rgba(248, 81, 73, 0.1);
  background-color: var(--d2h-dark-del-bg-color);
  border-color: rgba(248, 81, 73, 0.4);
  border-color: var(--d2h-dark-del-border-color);
}
.d2h-dark-color-scheme .d2h-ins {
  background-color: rgba(46, 160, 67, 0.15);
  background-color: var(--d2h-dark-ins-bg-color);
  border-color: rgba(46, 160, 67, 0.4);
  border-color: var(--d2h-dark-ins-border-color);
}
.d2h-dark-color-scheme .d2h-info {
  background-color: rgba(56, 139, 253, 0.1);
  background-color: var(--d2h-dark-info-bg-color);
  border-color: rgba(56, 139, 253, 0.4);
  border-color: var(--d2h-dark-info-border-color);
  color: #6e7681;
  color: var(--d2h-dark-dim-color);
}
.d2h-dark-color-scheme .d2h-file-diff .d2h-del.d2h-change {
  background-color: rgba(210, 153, 34, 0.2);
  background-color: var(--d2h-dark-change-del-color);
}
.d2h-dark-color-scheme .d2h-file-diff .d2h-ins.d2h-change {
  background-color: rgba(46, 160, 67, 0.25);
  background-color: var(--d2h-dark-change-ins-color);
}
.d2h-dark-color-scheme .d2h-file-wrapper {
  border: 1px solid #30363d;
  border: 1px solid var(--d2h-dark-border-color);
}
.d2h-dark-color-scheme .d2h-file-collapse {
  border: 1px solid #0d1117;
  border: 1px solid var(--d2h-dark-bg-color);
}
.d2h-dark-color-scheme .d2h-file-collapse.d2h-selected {
  background-color: rgba(56, 139, 253, 0.1);
  background-color: var(--d2h-dark-selected-color);
}
.d2h-dark-color-scheme .d2h-file-list-wrapper a,
.d2h-dark-color-scheme .d2h-file-list-wrapper a:visited {
  color: #3572b0;
  color: var(--d2h-dark-moved-label-color);
}
.d2h-dark-color-scheme .d2h-file-list > li {
  border-bottom: 1px solid #0d1117;
  border-bottom: 1px solid var(--d2h-dark-bg-color);
}
.d2h-dark-color-scheme .d2h-deleted {
  color: #f85149;
  color: var(--d2h-dark-del-label-color);
}
.d2h-dark-color-scheme .d2h-added {
  color: #3fb950;
  color: var(--d2h-dark-ins-label-color);
}
.d2h-dark-color-scheme .d2h-changed {
  color: #d29922;
  color: var(--d2h-dark-change-label-color);
}
.d2h-dark-color-scheme .d2h-moved {
  color: #3572b0;
  color: var(--d2h-dark-moved-label-color);
}
.d2h-dark-color-scheme .d2h-tag {
  background-color: #0d1117;
  background-color: var(--d2h-dark-bg-color);
}
.d2h-dark-color-scheme .d2h-deleted-tag {
  border: 1px solid #f85149;
  border: 1px solid var(--d2h-dark-del-label-color);
}
.d2h-dark-color-scheme .d2h-added-tag {
  border: 1px solid #3fb950;
  border: 1px solid var(--d2h-dark-ins-label-color);
}
.d2h-dark-color-scheme .d2h-changed-tag {
  border: 1px solid #d29922;
  border: 1px solid var(--d2h-dark-change-label-color);
}
.d2h-dark-color-scheme .d2h-moved-tag {
  border: 1px solid #3572b0;
  border: 1px solid var(--d2h-dark-moved-label-color);
}
@media (prefers-color-scheme: dark) {
  .d2h-auto-color-scheme {
    background-color: #0d1117;
    background-color: var(--d2h-dark-bg-color);
    color: #e6edf3;
    color: var(--d2h-dark-color);
  }
  .d2h-auto-color-scheme .d2h-file-header {
    background-color: #161b22;
    background-color: var(--d2h-dark-file-header-bg-color);
    border-bottom: #30363d;
    border-bottom: var(--d2h-dark-file-header-border-color);
  }
  .d2h-auto-color-scheme .d2h-lines-added {
    border: 1px solid rgba(46, 160, 67, 0.4);
    border: 1px solid var(--d2h-dark-ins-border-color);
    color: #3fb950;
    color: var(--d2h-dark-ins-label-color);
  }
  .d2h-auto-color-scheme .d2h-lines-deleted {
    border: 1px solid rgba(248, 81, 73, 0.4);
    border: 1px solid var(--d2h-dark-del-border-color);
    color: #f85149;
    color: var(--d2h-dark-del-label-color);
  }
  .d2h-auto-color-scheme .d2h-code-line del,
  .d2h-auto-color-scheme .d2h-code-side-line del {
    background-color: rgba(248, 81, 73, 0.4);
    background-color: var(--d2h-dark-del-highlight-bg-color);
  }
  .d2h-auto-color-scheme .d2h-code-line ins,
  .d2h-auto-color-scheme .d2h-code-side-line ins {
    background-color: rgba(46, 160, 67, 0.4);
    background-color: var(--d2h-dark-ins-highlight-bg-color);
  }
  .d2h-auto-color-scheme .d2h-diff-tbody {
    border-color: #30363d;
    border-color: var(--d2h-dark-border-color);
  }
  .d2h-auto-color-scheme .d2h-code-side-linenumber {
    background-color: #0d1117;
    background-color: var(--d2h-dark-bg-color);
    border-color: #21262d;
    border-color: var(--d2h-dark-line-border-color);
    color: #6e7681;
    color: var(--d2h-dark-dim-color);
  }
  .d2h-auto-color-scheme .d2h-files-diff .d2h-code-side-emptyplaceholder,
  .d2h-auto-color-scheme .d2h-files-diff .d2h-emptyplaceholder {
    background-color: hsla(215, 8%, 47%, 0.1);
    background-color: var(--d2h-dark-empty-placeholder-bg-color);
    border-color: #30363d;
    border-color: var(--d2h-dark-empty-placeholder-border-color);
  }
  .d2h-auto-color-scheme .d2h-code-linenumber {
    background-color: #0d1117;
    background-color: var(--d2h-dark-bg-color);
    border-color: #21262d;
    border-color: var(--d2h-dark-line-border-color);
    color: #6e7681;
    color: var(--d2h-dark-dim-color);
  }
  .d2h-auto-color-scheme .d2h-del {
    background-color: rgba(248, 81, 73, 0.1);
    background-color: var(--d2h-dark-del-bg-color);
    border-color: rgba(248, 81, 73, 0.4);
    border-color: var(--d2h-dark-del-border-color);
  }
  .d2h-auto-color-scheme .d2h-ins {
    background-color: rgba(46, 160, 67, 0.15);
    background-color: var(--d2h-dark-ins-bg-color);
    border-color: rgba(46, 160, 67, 0.4);
    border-color: var(--d2h-dark-ins-border-color);
  }
  .d2h-auto-color-scheme .d2h-info {
    background-color: rgba(56, 139, 253, 0.1);
    background-color: var(--d2h-dark-info-bg-color);
    border-color: rgba(56, 139, 253, 0.4);
    border-color: var(--d2h-dark-info-border-color);
    color: #6e7681;
    color: var(--d2h-dark-dim-color);
  }
  .d2h-auto-color-scheme .d2h-file-diff .d2h-del.d2h-change {
    background-color: rgba(210, 153, 34, 0.2);
    background-color: var(--d2h-dark-change-del-color);
  }
  .d2h-auto-color-scheme .d2h-file-diff .d2h-ins.d2h-change {
    background-color: rgba(46, 160, 67, 0.25);
    background-color: var(--d2h-dark-change-ins-color);
  }
  .d2h-auto-color-scheme .d2h-file-wrapper {
    border: 1px solid #30363d;
    border: 1px solid var(--d2h-dark-border-color);
  }
  .d2h-auto-color-scheme .d2h-file-collapse {
    border: 1px solid #0d1117;
    border: 1px solid var(--d2h-dark-bg-color);
  }
  .d2h-auto-color-scheme .d2h-file-collapse.d2h-selected {
    background-color: rgba(56, 139, 253, 0.1);
    background-color: var(--d2h-dark-selected-color);
  }
  .d2h-auto-color-scheme .d2h-file-list-wrapper a,
  .d2h-auto-color-scheme .d2h-file-list-wrapper a:visited {
    color: #3572b0;
    color: var(--d2h-dark-moved-label-color);
  }
  .d2h-auto-color-scheme .d2h-file-list > li {
    border-bottom: 1px solid #0d1117;
    border-bottom: 1px solid var(--d2h-dark-bg-color);
  }
  .d2h-dark-color-scheme .d2h-deleted {
    color: #f85149;
    color: var(--d2h-dark-del-label-color);
  }
  .d2h-auto-color-scheme .d2h-added {
    color: #3fb950;
    color: var(--d2h-dark-ins-label-color);
  }
  .d2h-auto-color-scheme .d2h-changed {
    color: #d29922;
    color: var(--d2h-dark-change-label-color);
  }
  .d2h-auto-color-scheme .d2h-moved {
    color: #3572b0;
    color: var(--d2h-dark-moved-label-color);
  }
  .d2h-auto-color-scheme .d2h-tag {
    background-color: #0d1117;
    background-color: var(--d2h-dark-bg-color);
  }
  .d2h-auto-color-scheme .d2h-deleted-tag {
    border: 1px solid #f85149;
    border: 1px solid var(--d2h-dark-del-label-color);
  }
  .d2h-auto-color-scheme .d2h-added-tag {
    border: 1px solid #3fb950;
    border: 1px solid var(--d2h-dark-ins-label-color);
  }
  .d2h-auto-color-scheme .d2h-changed-tag {
    border: 1px solid #d29922;
    border: 1px solid var(--d2h-dark-change-label-color);
  }
  .d2h-auto-color-scheme .d2h-moved-tag {
    border: 1px solid #3572b0;
    border: 1px solid var(--d2h-dark-moved-label-color);
  }
}
</style>
`;

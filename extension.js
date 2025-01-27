const vscode = require('vscode');

function activate(context) {
    const decorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 0, 0.5)' // Semi-transparent yellow background
    });

    function updateDecorations() {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();
            const regex = /--FS[\s\S]*?--\/FS/g;
            const matches = text.matchAll(regex);
            const ranges = [];
            for (const match of matches) {
                if (match.index !== undefined) {
                    const startPos = document.positionAt(match.index);
                    const endPos = document.positionAt(match.index + match[0].length);
                    const range = new vscode.Range(startPos, endPos);
                    ranges.push(range);
                }
            }
            editor.setDecorations(decorationType, ranges);
        }
    }

    vscode.workspace.onDidChangeTextDocument(event => {
        updateDecorations();
    });

    vscode.window.onDidChangeActiveTextEditor(editor => {
        updateDecorations();
    });

    updateDecorations();
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

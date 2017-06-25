'use babel';

export default class EmacsFlow {
  autoIndent() {
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) return;
    let selection = editor.getLastSelection();
    if (selection.isEmpty()) {
      editor.autoIndentSelectedRows();
      let pos = editor.getCursorBufferPosition().toArray();
      if (editor.lineTextForBufferRow(pos[0]).search(/\S/) > pos[1]) {
        editor.moveToFirstCharacterOfLine();
      }
    } else {
      selection.autoIndentSelectedRows();
      selection.clear();
    }
  }
}

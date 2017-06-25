'use babel';

import helper from './spec-helper';

describe('Emacs Flow', () => {
  let editor, editorView;

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.workspace.open();
    });
    waitsForPromise(() => {
      return atom.packages.activatePackage('emacs-flow');
    });
    runs(() => {
      editor = atom.workspace.getActiveTextEditor();
      editorView = atom.views.getView(editor);
    });
  });

  describe('activation', () => {
    it('creates the command', () => {
      expect(helper.hasCommand(editorView, 'emacs-flow:auto-indent')).toBeTruthy();
    });
  });

  describe('deactivation', () => {
    beforeEach(() => {
      atom.packages.deactivatePackage('emacs-flow');
    });
    it('removes the command', () => {
      expect(helper.hasCommand(editorView, 'emacs-flow:auto-indent')).toBeFalsy();
    });
  });
});

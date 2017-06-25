'use babel';

import EmacsFlow from './emacs-flow';
import { CompositeDisposable } from 'atom';

export default {

  emacsFlow: null,
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'emacs-flow:auto-indent': event => {
        this.loadModule();
        emacsFlow.autoIndent();
      }
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  loadModule() {
    emacsFlow = new EmacsFlow();
  }

};

'use babel';

export default {
  hasCommand(element, name) {
    let commands;
    commands = atom.commands.findCommands({target: element});
    for (let command of commands)
       if (command.name == name) return true;
    return false;
  }
};


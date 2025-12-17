d8.debugger.enable();
eval(`import('I-do-not-exist.js');`);


d8.terminate();

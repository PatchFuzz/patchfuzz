
load(libdir + 'asserts.js');

var g = newGlobal({ newCompartment: true, invisibleToDebugger: true });

assertThrowsInstanceOf(() => { new Debugger(g); }, TypeError);

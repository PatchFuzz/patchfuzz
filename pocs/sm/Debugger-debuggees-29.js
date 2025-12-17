;

var g = newGlobal({ newCompartment: true, invisibleToDebugger: true });

print(() => { new Debugger(g); }, TypeError);

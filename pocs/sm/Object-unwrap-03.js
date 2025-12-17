;

var g = newGlobal({ newCompartment: true, invisibleToDebugger: true });

var dbg = new Debugger;




var  DOwg = dbg.makeGlobalObjectReference(this).makeDebuggeeValue(g);

print(() => DOwg.unwrap(), Error);

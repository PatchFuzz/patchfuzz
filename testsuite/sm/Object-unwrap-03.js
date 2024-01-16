


load(libdir + 'asserts.js');

var g = newGlobal({ newCompartment: true, invisibleToDebugger: true });

var dbg = new Debugger;




var  DOwg = dbg.makeGlobalObjectReference(this).makeDebuggeeValue(g);

assertThrowsInstanceOf(() => DOwg.unwrap(), Error);

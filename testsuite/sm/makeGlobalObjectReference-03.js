
load(libdir + 'asserts.js');

var g = newGlobal({ newCompartment: true, invisibleToDebugger: true });

assertThrowsInstanceOf(function () {
  (new Debugger).makeGlobalObjectReference(g)
}, TypeError);

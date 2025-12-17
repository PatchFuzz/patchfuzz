;

var g = newGlobal({ newCompartment: true, invisibleToDebugger: true });

print(function () {
  (new Debugger).makeGlobalObjectReference(g)
}, TypeError);

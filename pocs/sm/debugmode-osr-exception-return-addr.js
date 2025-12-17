var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () { };");
enableGeckoProfiling();

try {
  
  enableSingleStepProfiling();
} catch (e) {
  throw new ReferenceError;
}

enableSingleStepProfiling();
a()

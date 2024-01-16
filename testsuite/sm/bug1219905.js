





var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function() {}");
let finished = false;
oomTest(() => l, false);



var g = newGlobal({newCompartment: true});
g.eval(`function f() { return function() {}; }`);
new Debugger(g).findObjects();

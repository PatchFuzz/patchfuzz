


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onEnterFrame = function (frame) { frame.environment; };
g.Function.prototype();

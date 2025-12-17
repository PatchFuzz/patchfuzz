;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var f;
dbg.onDebuggerStatement = function (frame) { f = frame; };
g.eval("debugger;");
print(f.onStack, false);
print(function () { f.offset; }, Error);

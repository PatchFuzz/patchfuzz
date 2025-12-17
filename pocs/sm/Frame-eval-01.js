var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var c;
dbg.onDebuggerStatement = function (frame) { c = frame.eval("2 + 2"); };
g.eval("debugger;");
print(c.return, 4);

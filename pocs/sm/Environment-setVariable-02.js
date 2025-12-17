var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function (frame) {
    frame.environment.parent.setVariable("x", gw);
};
g.eval("var x = 1; debugger;");
print(g.x, g);

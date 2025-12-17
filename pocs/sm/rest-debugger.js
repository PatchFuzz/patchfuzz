var g = newGlobal({newCompartment: true});
g.eval("function f(...x) {}");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var fw = gw.getOwnPropertyDescriptor("f").value;
print(fw.parameterNames.toString(), "x");

var g = newGlobal({newCompartment: true});
g.eval("function f(...rest) { debugger; }");
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    frame.eval("args = arguments");
};
g.f(9, 8, 7);

print(g.args.length, 3);
print(g.args[2], 7);

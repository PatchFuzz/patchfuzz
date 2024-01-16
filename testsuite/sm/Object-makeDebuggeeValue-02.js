

var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; }");
var dbg = Debugger();
var gw = dbg.addDebuggee(g);
var jsonw;
dbg.onDebuggerStatement = function (frame) {
    jsonw = frame.eval("JSON").return;
};
g.eval("debugger;");
assertEq(gw.makeDebuggeeValue(g.JSON), jsonw);

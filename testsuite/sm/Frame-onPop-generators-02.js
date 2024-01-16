




var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function (c) {
        throw "fit";
    };
};
g.eval("function* g() { for (var i = 0; i < 10; i++) { debugger; yield i; } }");
g.eval("var it = g();");
assertEq(gw.executeInGlobal("it.next();"), null);

dbg.enabled = false;
assertEq(g.it.next().value, 1);

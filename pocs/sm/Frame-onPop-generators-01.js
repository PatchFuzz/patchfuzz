;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function (c) {
        return {throw: "fit"};
    };
};
g.eval("function* g() { for (var i = 0; i < 10; i++) { debugger; yield i; } }");
g.eval("var it = g();");
var rv = gw.executeInGlobal("it.next();");
print(rv.throw, "fit");

dbg.enabled = false;
print(g.it.next().value, undefined);

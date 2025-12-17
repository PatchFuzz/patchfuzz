;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { return {throw: "oops"}; };

print(function () { g.eval("debugger;"); }, "oops");

g.eval("function f() { debugger; }");
print(function () { g.f(); }, "oops");

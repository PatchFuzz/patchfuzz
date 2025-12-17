var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = frame => {
    frame.onPop = completion => ({return: "ok"});
};
g.eval("function* g() { for (var i = 0; i < 10; i++) { debugger; yield i; } }");
var it = g.g();
var result = it.next();
print(result.value, "ok");
print(result.done, true);
print(it.next().value, undefined);

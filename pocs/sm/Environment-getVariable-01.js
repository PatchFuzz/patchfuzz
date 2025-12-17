var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.environment.getVariable("x"), 13);
    print(frame.environment.getVariable("k"), undefined);
    print(frame.environment.find("k").getVariable("k"), 3);
    hits++;
};
g.eval("var k = 3; function f(x) { debugger; }");
g.f(13);
print(hits, 1);

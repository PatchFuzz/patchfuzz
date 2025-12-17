var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var lexicalEnv = frame.environment;
    var varEnv = lexicalEnv.parent;
    print(varEnv.getVariable("a"), 1);
    print(varEnv.getVariable("b"), 2);
    print(varEnv.getVariable("c"), 3);
    print(varEnv.getVariable("d"), 7);
    print(lexicalEnv.getVariable("e"), 8);
    hits++;
};
g.eval("function f(a, [b, c]) { var d = a + b + c + 1; let e = d + 1; debugger; }");
g.f(1, [2, 3]);
print(hits, 1);

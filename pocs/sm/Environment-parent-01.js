var g = newGlobal({newCompartment: true})
g.eval("function f(a) { return function (b) { return function (c) { h(); return a + b + c; }; }; }");
var dbg = Debugger(g);
var hits = 0;
g.h = function () {
    var n = 0;
    for (var env = dbg.getNewestFrame().environment; env !== null; env = env.parent) {
        n++;
        print(env instanceof Debugger.Environment, true);
    }
    print(n >= 4, true);
    hits++;
};
print(g.f(5)(7)(9), 21);
print(hits, 1);

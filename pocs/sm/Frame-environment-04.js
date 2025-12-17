var g = newGlobal({newCompartment: true});
g.eval("function f(x) { return 2 * x; }");
var dbg = Debugger(g);
var hits = 0;
dbg.onEnterFrame = function (frame) {
    print(frame.environment.names().join(","), "arguments,x");
    hits++;
};
print(g.f(22), 44);
print(hits, 1);

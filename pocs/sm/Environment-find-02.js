var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
g.h = function () {
    var env = dbg.getNewestFrame().environment;
    var last = env;
    while (last.parent)
        last = last.parent;

    print(env.find("Array"), last);
    hits++;
};

g.eval("h();");
g.eval("(function () { h(); })();");
print(hits, 2);

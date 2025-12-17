var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
g.eval("function h() { debugger; }");
var hits = 0;
dbg.onDebuggerStatement = function (hframe) {
    var env = hframe.older.environment;
    while (env.parent)
        env = env.parent;
    print(env.type, "object");
    print(env.object, gw);
    hits++;
};

g.eval("h();");
g.eval("(function () { h(); return []; })();");
g.eval("with (Math) { h(-2 * PI); }");
print(hits, 3);

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
g.eval("function h() { debugger; }");
var hits, env;
dbg.onDebuggerStatement = function (hframe) {
    var frame = hframe.older;
    var e = frame.environment;

    
    print(e, frame.environment);

    
    if (env === undefined)
        env = e;
    else
        print(e, env);

    hits++;
};

hits = 0;
env = undefined;
g.eval("function f() { (function () { var i = 0; h(); var j = 2; h(); })(); }");
g.f();
print(hits, 2);

hits = 0;
env = undefined;
g.eval("function f2() { { let i = 0; h(); let j = 2; h(); } }");
g.f2();
print(hits, 2);

hits = 0;
env = undefined;
g.eval("function f3() { { let i; for (i = 0; i < 2; i++) h(); } }");
g.f3();
print(hits, 2);

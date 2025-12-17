var g = newGlobal({newCompartment: true});
g.eval("var x = 'global'; function f(s) { h(); eval(s); h(); }");
g.eval("function h() { debugger; }");
var dbg = Debugger(g);
var env = undefined;
var hits = 0;
dbg.onDebuggerStatement = function (hframe) {
    if (env === undefined) {
        
        env = hframe.older.environment;
        print(env.find("x") !== env, true);
        print(env.names().indexOf("x"), -1);
    } else {
        
        print(env.find("x"), env);
        print(env.names().indexOf("x") >= 0, true);
    }
    hits++;
};
g.f("var x = 'local';");
print(hits, 2);

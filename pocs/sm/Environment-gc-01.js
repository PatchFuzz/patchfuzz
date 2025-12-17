var g = newGlobal({newCompartment: true});
g.eval("function f(x) { return 2 * x; }");
var dbg = Debugger(g);
var env;
dbg.onEnterFrame = function (frame) { env = frame.environment; };
print(g.f(22), 44);
dbg.onEnterFrame = undefined;

print(env.find("x"), env);
print(env.names().join(","), "arguments,x");

gc();
g.gc(g);
gc(env);

print(env.find("x"), env);
print(env.names().join(","), "arguments,x");

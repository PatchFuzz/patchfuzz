var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log = '';
dbg.onExceptionUnwind = function () { log += "1"; throw new Error("oops"); };
dbg.uncaughtExceptionHook = function () { log += "2"; };

g.eval("var x = new Error('oops');");
g.eval("try { throw x; } catch (exc) { print(exc, x); }");
print(log, "12");

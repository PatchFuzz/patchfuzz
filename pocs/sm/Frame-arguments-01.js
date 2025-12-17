var g = newGlobal({newCompartment: true});
g.args = null;
var dbg = new Debugger(g);
var hits;
var v;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    var args = frame.arguments;
    print(args instanceof Array, true);
    print(Array.isArray(args), false);
    print(args, frame.arguments);
    print(args.length, g.args.length);
    for (var i = 0; i < args.length; i++)
        print(args[i], g.args[i]);
};


g.eval("function f() { debugger; }");

hits = 0;
g.eval("args = []; f();");
g.eval("this.f();");
g.eval("var world = Symbol('world'); " +
       "args = ['hello', world, 3.14, true, false, null, undefined]; " +
       "f('hello', world, 3.14, true, false, null, undefined);");
g.eval("f.apply(undefined, args);");
g.eval("args = [-0, NaN, -1/0]; this.f(-0, NaN, -1/0);");
print(hits, 5);


g.eval("function f(a, b) { debugger; }");

hits = 0;
g.eval("args = []; f();");
g.eval("this.f();");
g.eval("args = ['a', 'b']; f('a', 'b');");
g.eval("this.f('a', 'b');");
g.eval("f.bind(null, 'a')('b');");
print(hits, 5);

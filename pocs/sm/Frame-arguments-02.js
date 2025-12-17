var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var args = frame.arguments;
    print(args, frame.arguments);
    print(args instanceof Array, true);
    print(args.length, 2);
    print(args[0] instanceof Debugger.Object, true);
    print(args[0].class, args[1]);
    hits++;
};

g.eval("function f(obj, cls) { debugger; }");
g.eval("f({}, 'Object');");
g.eval("f(Date, 'Function');");
print(hits, 2);

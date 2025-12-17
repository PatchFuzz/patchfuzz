var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var args = frame.arguments;
    print(args[0], 1);
    print(args.length, 4);

    print(args[1] instanceof Debugger.Object, true);
    print(args[1].class, "Array");
    var getprop = frame.eval("(function (p) { return this[p]; })").return;
    print(getprop instanceof Debugger.Object, true);
    print(getprop.apply(args[1], ["length"]).return, 2);
    print(getprop.apply(args[1], [0]).return, 2);
    print(getprop.apply(args[1], [1]).return, 3);

    print(args[2] instanceof Debugger.Object, true);
    print(args[2].class, "Object");
    var x = getprop.apply(args[2], ["x"]).return;
    print(x.class, "Array"); 
    print(getprop.apply(x, ["0"]).return, 4);
    print(getprop.apply(args[2], ["z"]).return, 5);

    print(args[3] instanceof Debugger.Object, true);
    print(args[3].class, "Object");
    print(getprop.apply(args[3], ["q"]).return, 6);
    hits++;
};

g.eval("function f(a, [b, c], {x: [y], z: w}, {q}) { debugger; }");
g.eval("f(1, [2, 3], {x: [4], z: 5}, {q: 6});");
print(hits, 1);

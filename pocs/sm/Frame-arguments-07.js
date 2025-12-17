var g = newGlobal({newCompartment: true});
g.eval("function f(a, b) {\n" +
       "    for (var i = 0; i < arguments.length; i++)\n" +
       "        arguments[i] = i;\n" +
       "    eval(\"\");\n" +
       "    debugger;\n" +
       "}\n");

var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var argc = frame.eval("arguments.length").return;
    var args = frame.arguments;
    print(args.length, argc);
    for (var i = 0; i < argc; i++)
        print(args[i], i);
    hits++;
}

g.f(9);
g.f(9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9);
print(hits, 2);

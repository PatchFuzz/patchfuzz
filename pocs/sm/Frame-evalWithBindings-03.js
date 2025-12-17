var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var global = dbg.addDebuggee(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var argc = frame.arguments.length;
    print(argc, 8);
    print(frame.evalWithBindings("arguments[prop]", {prop: "length"}).return, argc);
    for (var i = 0; i < argc; i++)
        print(frame.evalWithBindings("arguments[i]", {i: i}).return, frame.arguments[i]);
    hits++;
};
g.eval("function f() { debugger; }");
g.eval("f(undefined, -0, NaN, '\uffff', Symbol('alpha'), Array.prototype, Math, f);");
print(hits, 1);

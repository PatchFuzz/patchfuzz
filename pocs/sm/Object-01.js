var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.arguments[0], frame.callee);
    print(Object.getPrototypeOf(frame.arguments[0]), Debugger.Object.prototype);
    print(frame.arguments[0] instanceof Debugger.Object, true);
    print(frame.arguments[0] !== frame.arguments[1], true);
    print(Object.getPrototypeOf(frame.arguments[1]), Debugger.Object.prototype);
    print(frame.arguments[1] instanceof Debugger.Object, true);
    hits++;
};

g.eval("var obj = {}; function f(a, b) { debugger; } f(f, obj);");
print(hits, 1);

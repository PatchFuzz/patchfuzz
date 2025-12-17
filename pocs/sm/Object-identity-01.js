var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.arguments[0], frame.arguments[1]);
    hits++;
};
g.eval("var obj = {}; function f(a, b) { debugger; } f(obj, obj);");
print(hits, 1);

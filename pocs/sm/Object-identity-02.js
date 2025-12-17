var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.arguments[0] === frame.arguments[1], false);
    hits++;
};
g.eval("function f(a, b) { debugger; } f({}, {});");
print(hits, 1);

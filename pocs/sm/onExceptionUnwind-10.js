var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var frame;
dbg.onExceptionUnwind = function (f, x) {
    frame = f;
    print(frame.type, 'eval');
    print(frame.onStack, true);
    terminate();
};
dbg.onDebuggerStatement = function(f) {
    print(f.eval('throw 42'), null);
    print(frame.onStack, false);
};
g.eval('debugger');

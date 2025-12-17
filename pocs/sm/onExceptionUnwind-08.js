var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var frame;
dbg.onExceptionUnwind = function (f, x) {
    frame = f;
    print(frame.onStack, true);
    throw 'unhandled';
};
dbg.onDebuggerStatement = function(f) {
    print(f.eval('throw 42').throw, 42);
    print(frame.onStack, false);
};
g.eval('debugger');


quit(0);

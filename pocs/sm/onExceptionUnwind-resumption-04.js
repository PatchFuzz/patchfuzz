var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
g.eval("function f() { throw 'ksnife'; }");
var log = '';
dbg.onDebuggerStatement = function (frame) {
    log += 'd1';
    print(frame.eval("f();"), null);
    log += 'd2';
};
dbg.onExceptionUnwind = function (frame, exc) {
    log += 'u';
    return null;
};
g.eval("debugger;");
print(log, "d1ud2");

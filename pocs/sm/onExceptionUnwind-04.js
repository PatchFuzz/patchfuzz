var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
g.log = '';
dbg.onDebuggerStatement = function (frame) {
    try {
        throw new Error("oops");
    } catch (exc) {
        g.log += exc.message;
    }
};
dbg.onExceptionUnwind = function (frame) {
    g.log += 'BAD';
};

g.eval("debugger; log += ' ok';");
print(g.log, 'oops ok');

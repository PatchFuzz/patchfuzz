var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onDebuggerStatement = function handleDebugger(frame) {
    print(frame.type, "eval");
    log += 'd';
    frame.onPop = function handlePop(c) {
        log += ')';
    };
};

log = '';
g.eval('debugger;');
print(log, 'd)');

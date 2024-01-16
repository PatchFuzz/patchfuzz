
var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onDebuggerStatement = function handleDebugger(frame) {
    assertEq(frame.type, "eval");
    log += 'd';
    frame.onPop = function handlePop(c) {
        log += ')';
    };
};

log = '';
g.eval('debugger;');
assertEq(log, 'd)');

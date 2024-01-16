

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onEnterFrame = function handleEnter(frame) {
    log += '(';
    frame.onPop = function handlePop(completion) {
        log += ')';
    };
};

dbg.onDebuggerStatement = function handleDebugger (frame) {
    log += 'd';
    
    gc(dbg);
};

log = '';
assertEq(g.eval('debugger; 42;'), 42);
assertEq(log, '(d)');

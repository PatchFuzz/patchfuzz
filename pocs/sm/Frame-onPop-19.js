var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onEnterFrame = function handleEnter(frame) {
    log += '(';
    frame.onPop = function handlePop(completion) {
        log += ')';
    };
};

log = '';
print(g.eval('gc(this); 42;'), 42);
print(log, '()');

var g = newGlobal({newCompartment: true});
var dbg1 = new Debugger(g);
var dbg2 = new Debugger(g);

var log;
var frame2;

dbg1.onEnterFrame = function handleEnter(frame) {
    log += '(';
    frame.onPop = function handlerPop1(c) {
        log += ')';
        frame2 = dbg2.getNewestFrame();
        print(frame2.onStack, true);
        frame2.onPop = function handlePop2(c) {
            print("late frame's onPop handler ran",
                     "late frame's onPop handler should not run");
        };
    };
};

log = '';
print(g.eval('40 + 2'), 42);
print(log, '()');
print(frame2.onStack, false);

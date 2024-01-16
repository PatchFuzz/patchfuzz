


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
        assertEq(frame2.onStack, true);
        frame2.onPop = function handlePop2(c) {
            assertEq("late frame's onPop handler ran",
                     "late frame's onPop handler should not run");
        };
    };
};

log = '';
assertEq(g.eval('40 + 2'), 42);
assertEq(log, '()');
assertEq(frame2.onStack, false);

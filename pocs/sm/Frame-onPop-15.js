var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

var seenFrame = null;
dbg.onDebuggerStatement = function handleDebugger(frame) {
    log += 'd';
    print(frame.type, "call");

    if (seenFrame === null) {
        seenFrame = frame;
    } else {
        print(seenFrame, frame);
    }

    let i = frame.eval('i').return;
    if (i % 3 == 0) {
        frame.onPop = function handlePop(c) {
            print(this, seenFrame);
            log += ')' + i;
        };
    }
};

g.eval("function* g() { for (var i = 0; i < 10; i++) { debugger; yield i; } }");
log ='';
print(g.eval("var t = 0; for (j of g()) t += j; t;"), 45);
print(log, "d)0d)0d)0d)3d)3d)3d)6d)6d)6d)9)9");

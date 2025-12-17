var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () {
    frames = [];
    var dbg = Debugger(debuggeeGlobal);
    dbg.onEnterFrame = function(frame) {
	frames.push(frame);
    };
    dbg.onExceptionUnwind = function(frame) {
	print(frames.indexOf(frame), frames.length - 1);
	frames.pop();
	print(frame, dbg.getNewestFrame());
    }
} + ")()");

function f(n) {
    debugger;
    n--;
    if (n > 0) {
        f(n);
    } else {
	print(g.frames.length, 10);
        throw "fit";
    }
}
try {
    f(10);
    print(0, 1);
} catch (e) {
    print(e, "fit");
}
print(g.frames.length, 0);

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () {
        var dbg = Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            if (frame.callee === null) {
                debuggeeGlobal.log += '1';
                var cv = frame.eval("f();");
                debuggeeGlobal.log += '2';
                print(cv, null);
            } else {
                print(frame.callee.name, "f");
                debuggeeGlobal.log += '3';
                throw new ReferenceError("oops");
            }
        };
    } + ")();");

function onerror(msg) {
}

var log = '';
debugger;
function f() {
    try {
        debugger;
    } finally {
        log += 'x';
    }
}
print(log, '132');

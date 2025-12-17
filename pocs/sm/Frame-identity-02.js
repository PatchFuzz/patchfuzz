;

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () {
        var dbg = new Debugger(debuggeeGlobal);
        var prev = null;
        dbg.onDebuggerStatement = function (frame) {
            print(frame === prev, false);
            if (prev)
                print(prev.onStack, false);
            prev = frame;
            return {throw: debuggeeGlobal.i};
        };
    } + ")();");

function f() { debugger; }
for (var i = 0; i < 10; i++)
    print(f, i);

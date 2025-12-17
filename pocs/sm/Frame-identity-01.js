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
            return {return: frame.arguments[0]};
        };
    } + ")();");

function f(i) { debugger; }
for (var i = 0; i < 10; i++)
    print(f(i), i);

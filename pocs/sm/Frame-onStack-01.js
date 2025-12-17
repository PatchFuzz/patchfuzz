var desc = Object.getOwnPropertyDescriptor(Debugger.Frame.prototype, "live");
print(typeof desc.get, "function");
print(desc.set, undefined);
print(desc.configurable, true);
print(desc.enumerable, false);

var loc;

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("var hits = 0;");
g.eval("(" + function () {
        var a = [];
        var dbg = Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            var loc = debuggeeGlobal.loc;
            a[loc] = frame;
            for (var i = 0; i < a.length; i++) {
                print(a[i] === frame, i === loc);
                print(!!(a[i] && a[i].onStack), i >= loc);
            }
            hits++;
        };
    } + ")()");

function f(n) {
    loc = n; debugger;
    if (n !== 0) {
        f(n - 1);
        loc = n; debugger;
        eval("f(n - 1);");
        loc = n; debugger;
    }
}

f(4);
print(g.hits, 16 + 8*3 + 4*3 + 2*3 + 1*3);


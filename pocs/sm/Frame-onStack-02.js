;

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("var finalCheck;");
g.eval("(" + function () {
        var a = [];
        var dbg = Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            a.push(frame);
            for (var i = 0; i < a.length; i++)
                print(a[i].onStack, true);
        };
        finalCheck = function (n) {
            print(a.length, n);
            for (var i = 0; i < n; i++)
                print(a[i].onStack, false);
        };
    } + ")()");

function f(n) {
    debugger;
    if (--n > 0)
        f(n);
    else
        throw "fit";
}

print(function () { f(10); }, "fit");
g.finalCheck(10);

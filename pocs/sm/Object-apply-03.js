var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

function test(usingApply) {
    dbg.onDebuggerStatement = function (frame) {
        var n = frame.arguments[0];
        if (n > 1) {
            var result = usingApply ? frame.callee.apply(null, [n - 1])
                : frame.callee.call(null, n - 1);
            result.return *= n;
            return result;
        }
    };
    g.eval("function fac(n) { debugger; return 1; }");
    print(g.fac(5), 5 * 4 * 3 * 2 * 1);
}

test(true);
test(false);

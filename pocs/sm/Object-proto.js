var g = newGlobal({newCompartment: true});
var dbgeval = function () {
        var dbg = new Debugger(g);
        var hits = 0;
        g.eval("function f() { debugger; }");
        var lastval;
        dbg.onDebuggerStatement = function (frame) { lastval = frame.arguments[0]; };
        return function dbgeval(s) {
            g.eval("f(" + s + ");");
            return lastval;
        };
    }();

var Op = dbgeval("Object.prototype");
print(Op.proto, null);
print(dbgeval("({})").proto, Op);

var Ap = dbgeval("[]").proto;
print(Ap, dbgeval("Array.prototype"));
print(Ap.proto, Op);

print(dbgeval("Object").proto, dbgeval("Function.prototype"));

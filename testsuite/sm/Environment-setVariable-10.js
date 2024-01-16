







var g = newGlobal({newCompartment: true});
g.eval("function d() { debugger; }\n" +
       "var i = 'FAIL';\n" +
       "function a() {\n" +
       "    var obj = {b: function (i) { d(obj); return i; },\n" +
       "               i: function () { return i; }};\n" +
       "    var i = 'FAIL2';\n" +
       "    return obj;\n" +
       "}\n");

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var x = 0;
    for (var env = frame.older.environment; env; env = env.parent) {
        if (env.getVariable("i") !== undefined)
            env.setVariable("i", x++);
    }
};

var obj = g.a();
var r = obj.b('FAIL3');
assertEq(r, 0);
assertEq(obj.i(), 1);
assertEq(g.i, 2);

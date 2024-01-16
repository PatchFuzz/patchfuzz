


var g = newGlobal({newCompartment: true});
g.log = '';
g.eval("function f() { debugger; }");

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    frame.older.onStep = function () { g.log += 's'; };
};
g.eval("f();\n" +
       "log += 'x';\n");
assertEq(g.log.charAt(0), 's');

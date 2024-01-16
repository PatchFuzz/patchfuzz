var g = newGlobal({newCompartment: true});
g.eval("function f() {\n" +
       "    debugger;\n" +
       "}\n")

var dbg = new Debugger(g);
var handler = {};
dbg.onDebuggerStatement = function (frame) {
  frame.script.setBreakpoint(0, {});
};


g.f()


handler = undefined;
dbg.onDebuggerStatement = undefined;

dbg.removeAllDebuggees();

gc();


var x;
for (var i = 0; i < 100; ++i)
    x = {};

gc();

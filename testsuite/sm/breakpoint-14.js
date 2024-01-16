

var g = newGlobal({newCompartment: true});
g.eval("function f(x) { return x + 1; }");
g.eval("function g(x) { f(x); }");

g.eval("for (var i = 0; i < 10000; i++) g(i);");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var fw = gw.getOwnPropertyDescriptor("f").value;
var hits = 0;
fw.script.setBreakpoint(0, { hit: function(frame) { hits++; } });
g.eval("g(42);");
assertEq(hits, 1);

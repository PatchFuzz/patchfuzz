

load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = Debugger();
var gobj = dbg.addDebuggee(g);
g.eval("function f() { return 2; }");

var s;
dbg.onDebuggerStatement = function (frame) { s = frame.eval("f").return.script; };
g.eval("debugger;");
s.setBreakpoint(0, {});  

dbg.removeDebuggee(gobj);
assertThrowsInstanceOf(function () { s.setBreakpoint(0, {}); }, Error);

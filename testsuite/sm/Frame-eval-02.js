

load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var f;
dbg.onDebuggerStatement = function (frame) { f = frame; };
g.eval("debugger;");
assertThrowsInstanceOf(function () { f.eval("2 + 2"); }, Error);

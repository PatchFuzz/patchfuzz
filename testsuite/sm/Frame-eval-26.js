


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
  frame.older.eval('function f() { }');
};





g.eval('function q() { debugger; }');
assertEq(typeof g.eval('(function () { var f = 42; q(); return f; })();'),
         "function");

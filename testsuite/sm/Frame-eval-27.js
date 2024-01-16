


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
  frame.eval('function f() { }');
};



assertEq(typeof g.eval('(function () { var f = 42; debugger; return f;})();'),
         "function");

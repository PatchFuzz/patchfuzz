var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);


dbg.onDebuggerStatement = function (frame) {
  var args = frame.older.environment.parent.getVariable('arguments');
  print(args.missingArguments, true);
};
g.eval("function h() { debugger; }");
g.eval("function f() { var x = 0; return function() { x++; h() } }");
g.eval("f('ponies')()");

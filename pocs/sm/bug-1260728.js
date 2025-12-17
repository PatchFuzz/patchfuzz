var g = newGlobal();
var dbg = new Debugger(g);
dbg.onNewScript = function(script) {
  fscript = script.getChildScripts()[0];
}
g.eval("function f(x) { arguments[0] = 3; return x }");
fscript.setBreakpoint(0, {hit:function(frame) {
  print(frame.eval("print(arguments, undefined)").return, 1);
}});
print(g.f(1), 42);

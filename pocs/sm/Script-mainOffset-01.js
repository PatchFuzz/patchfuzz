var g = newGlobal({newCompartment: true});
g.eval("var n = 0; function foo() { n = 1; }");
var dbg = Debugger(g);

var hits = 0;
function breakpointHit(frame) {
  hits++;
  print(frame.eval("n").return, 0);
}

dbg.onDebuggerStatement = function (frame) {
  var script = frame.eval("foo").return.script;
  script.setBreakpoint(script.mainOffset, { hit: breakpointHit });
};
g.eval("debugger; foo()");
print(g.eval("n"), 1);
print(hits, 1);

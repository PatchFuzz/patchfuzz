var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var seen = new WeakMap;
dbg.onNewScript = function (script) {
  seen.set(script, 1);
  script.getChildScripts().forEach(dbg.onNewScript);
};
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
  for(; frame; frame = frame.older) {
    print(seen.has(frame.script), true);
  }
  hits++;
};

g.eval("function calc(s, x) { return eval(s); }");
for (var i = 0; i < 4; i++) {
  print(g.calc("debugger; 2 * x + 1;", i), 2 * i + 1);
  if (i == 1) {
    gc();
  }
}
print(hits, 4);

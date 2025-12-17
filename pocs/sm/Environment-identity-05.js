var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var log = '';
var oldEnv = null;
dbg.onDebuggerStatement = function (frame) {
  if (!oldEnv) {
    oldEnv = frame.environment;
  } else {
    
    
    log += (oldEnv === frame.environment);
  }
  log += frame.environment.getVariable("x");
};
g.eval("for (let x = 0; x < 2; x++) { eval(\"\"); debugger; }");
gc();
print(log, "0false1");

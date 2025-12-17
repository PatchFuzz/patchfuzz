enableGeckoProfiling();
try {
  
  enableSingleStepProfiling();
} catch (e) {
  quit(0);
}
var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {};
g.eval("var line = new Error().lineNumber; debugger;");

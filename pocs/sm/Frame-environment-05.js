var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
  frame.onStep = (function ()  { frame.environment; });
};
g.eval("debugger; for (let i of [1,2,3]) print(i);");

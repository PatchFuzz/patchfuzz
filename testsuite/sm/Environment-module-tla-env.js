

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
  
  frame.environment;
};
const m = g.parseModule(`
  var x = 0;
  debugger;
  await 10;
  debugger;
`);
moduleLink(m);
moduleEvaluate(m);

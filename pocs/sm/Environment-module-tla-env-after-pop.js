var g = newGlobal({newCompartment: true});
g.eval(`
var accessVarInSnapshot = null;
`);
g.eval(`
var resolve;
var p = new Promise(r => resolve = r);
`);
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function (frame) {
  print(frame.environment.getVariable("x"), 10);
  frame.eval("accessVarInSnapshot = function() { return ++x }");
  print(gw.executeInGlobal("accessVarInSnapshot()").return, 11);
};
const m = g.parseModule(`
  let x = 10;
  await 20;
  debugger;
  await p;
`);
moduleLink(m);


moduleEvaluate(m);

drainJobQueue();

print(g.accessVarInSnapshot !== null, true);




print(g.accessVarInSnapshot(), 12);


g.eval(`
resolve();
`);

drainJobQueue();



try {
  g.accessVarInSnapshot();
  
  print(true, false);
} catch (e) {
  print(e+"", "ReferenceError: x is not defined");
}

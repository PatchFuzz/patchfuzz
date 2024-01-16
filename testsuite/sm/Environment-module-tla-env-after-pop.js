


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
  assertEq(frame.environment.getVariable("x"), 10);
  frame.eval("accessVarInSnapshot = function() { return ++x }");
  assertEq(gw.executeInGlobal("accessVarInSnapshot()").return, 11);
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

assertEq(g.accessVarInSnapshot !== null, true);




assertEq(g.accessVarInSnapshot(), 12);


g.eval(`
resolve();
`);

drainJobQueue();



try {
  g.accessVarInSnapshot();
  
  assertEq(true, false);
} catch (e) {
  assertEq(e+"", "ReferenceError: x is not defined");
}

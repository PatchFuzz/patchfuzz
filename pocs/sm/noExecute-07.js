;
;

var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var g3 = newGlobal({newCompartment: true});
var dbg = new Debugger(g1);

g3.eval(`var dbg = new Debugger`);
var g1w = g3.dbg.addDebuggee(g1);
g3.dbg.addDebuggee(g2);

g1.eval(`function f() {}`);

function testHook(hookName) {
  
  
  
  
  

  
  
  
  print(() => { g1.eval(`f()`); }, g3.Debugger.DebuggeeWouldRun);

  
  
  print(g1w.executeInGlobal(`f()`).throw.unsafeDereference() instanceof Debugger.DebuggeeWouldRun, true);
}

testDebuggerHooksNX(dbg, g1, () => {
  testDebuggerHooksNX(g3.dbg, g2, testHook);
});

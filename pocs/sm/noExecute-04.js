;
;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval(`
       function f() { }
       var o = {
         get p() { },
         set p(x) { }
       };
       `);

var handlers = [() => { g.f(); },
                () => { g.o.p } ,
                () => { g.o.p = 42; }];

function testHookEnabled(hookName, trigger) {
  for (var h of handlers) {
    print(h, Debugger.DebuggeeWouldRun);
  }
}

function testHookRemoval(hookName, trigger) {
  for (var h of handlers) {
    print(h, Debugger.DebuggeeWouldRun);
    dbg.removeDebuggee(g);
    h();
    dbg.addDebuggee(g);
    print(h, Debugger.DebuggeeWouldRun);
  }
}

testDebuggerHooksNX(dbg, g, testHookEnabled);
testDebuggerHooksNX(dbg, g, testHookRemoval);

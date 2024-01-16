

load(libdir + 'eqArrayHelper.js');

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var gdbg = dbg.addDebuggee(g);

g.eval(`
const x = [];
Object.defineProperty(x, "a", {
  get: print,
  set: print,
});
function f() {
  x.a++;
  x.push(4);
}
`);

for (let i = 0; i < 5; i++) {
  g.f();
}

const rv = [];
dbg.onNativeCall = (callee, reason) => { rv.push(callee.name, reason); };

var dbg2 = Debugger(g);
var gdbg2 = dbg2.addDebuggee(g);

const fscript = gdbg.getOwnPropertyDescriptor('f').value.script;

for (let i = 0; i < 5; i++) {
  
  rv.length = 0;
  gdbg.executeInGlobal(`f()`);
  assertEqArray(rv, ["print", "get", "print", "set", "push", "call"]);

  
  let handlerCalled = false;
  const handler = {
    hit(frame) {
      fscript.clearBreakpoint(handler);
      rv.length = 0;
      frame.eval(`f()`);
      assertEqArray(rv, ["print", "get", "print", "set", "push", "call"]);
      handlerCalled = true;
    },
  };
  fscript.setBreakpoint(fscript.mainOffset, handler);
  g.f();
  assertEq(handlerCalled, true);

  
  rv.length = 0;
  g.f();
  assertEqArray(rv, []);

  
  
  rv.length = 0;
  gdbg2.executeInGlobal(`f()`);
  assertEqArray(rv, []);
}

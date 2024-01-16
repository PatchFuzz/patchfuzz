const g = newGlobal({newCompartment: true});
g.eval(`
  class Base {}
  class Derived extends Base {}
  this.Derived = Derived;
`);

const dbg = new Debugger(g);
const gw = dbg.addDebuggee(g);

let calleeCount = 0;

dbg.onEnterFrame = frame => {
  
  if (frame.callee !== gw.makeDebuggeeValue(g.Derived)) {
    return;
  }

  calleeCount++;

  
  
  assertEq(frame.callee.parameterNames.length, 1);
  assertEq(frame.callee.parameterNames[0], undefined);
};

new g.Derived();


assertEq(calleeCount, 1);

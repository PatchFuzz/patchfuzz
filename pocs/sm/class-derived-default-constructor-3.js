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

  
  
  print(frame.callee.parameterNames.length, 1);
  print(frame.callee.parameterNames[0], undefined);
};

new g.Derived();


print(calleeCount, 1);

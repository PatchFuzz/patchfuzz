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

  const names = frame.environment.names();

  
  
  
  frame.onStep = () => {
    names.forEach(name => {
      frame.environment.setVariable(name, null);
    });
  };
};

new g.Derived();


assertEq(calleeCount, 1);

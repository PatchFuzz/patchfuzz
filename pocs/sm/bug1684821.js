let g = newGlobal({newCompartment: true});
let d = new Debugger(g);

d.onDebuggerStatement = function (frame) {
  frame.environment;
};

g.evaluate(`
  function * foo() {
    
    let x;
    let y = () => x;

    
    debugger;

    
    yield;

    
  }
`)

let x = g.foo();
x.next();
x.next();

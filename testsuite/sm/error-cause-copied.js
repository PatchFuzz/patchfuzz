

let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);
let hits = 0;
dbg.onDebuggerStatement = function (frame) {
  hits++;

  
  
  let caught;
  try {
    frame.environment.getVariable("x");
  } catch (e) {
    caught = e;
  }

  
  assertEq(caught !== g.error, true);

  
  assertEq(caught.cause, g.cause);
};



g.eval(`
  var cause = new Object();
  var error = new Error("", {cause});
`);



let scope = {
  get x() {
    throw g.error;
  }
};

g.eval(`
  function f(scope) {
    with (scope) {
      debugger;
    }
  }
`);

g.f(scope);

assertEq(hits, 1);

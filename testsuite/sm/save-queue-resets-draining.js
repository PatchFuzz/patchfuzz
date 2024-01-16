

let g = newGlobal({newCompartment: true});

let dbg = new Debugger();
let gw = dbg.addDebuggee(g);

dbg.onDebuggerStatement = frame => {
  
  
  enqueueJob(function() {});
};

g.eval(`
  enqueueJob(function() {
    debugger;
  });
`);

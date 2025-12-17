const global = newGlobal({ newCompartment: true });
const dbg = new Debugger(global);
dbg.onDebuggerStatement = function() {
  const frame = dbg.getNewestFrame();

  
  
  const opts = {
    stack: saveStack(),
  };

  bindToAsyncStack(function() {
    
    
    frame.eval(`saveStack()`);
  }, opts)();
};
global.eval(`debugger;`);

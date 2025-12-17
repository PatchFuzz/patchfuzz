const global = newGlobal({ newCompartment:true });
const dbg = Debugger(global);
dbg.onDebuggerStatement = function() {
  Promise.resolve().then(() => {
    quit();
  });
  Promise.resolve().then(() => {
    
    print(true, false);
  });
};
global.eval("debugger");

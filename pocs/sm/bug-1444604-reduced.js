const g = newGlobal({newCompartment: true});
const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

g.evaluate(`
  function inner() { debugger; }
  function outer() { inner(); }
`);

dbg.onDebuggerStatement = function handler(frame) {
  
  
  
  frame.eval('print(`in inner: ${saveStack()}`)');

  
  
  frame.older.eval('print(`in outer: ${saveStack()}`)');

  
  
  frame.eval('print(`in inner: ${saveStack()}`)');
};

g.outer();

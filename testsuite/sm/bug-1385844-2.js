




var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);

g.eval(`
  function f() { debugger; }
`);
g.observeAll = observeAll;

dbg.onDebuggerStatement = first;
g.eval(`debugger;`);

var saved;
function first(frame) {
  saved = frame;
  dbg.onDebuggerStatement = second;
  saved.eval(`f()`);
}

function second() {
  saved.eval(`observeAll()`);
}

function observeAll() {
  
  
  
  
  
  
  
  
  
  dbg.onEnterFrame = function () { };
}

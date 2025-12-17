var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var counter = 0;
dbg.onDebuggerStatement = function (frame) {
  counter++;
  if (counter == 15)
    dbg.onDebuggerStatement = undefined;
};

g.eval("" + function f() {
  {
    let inner = 42;
    debugger;
    inner++;
  }
});
g.eval("for (var i = 0; i < 20; i++) f()");

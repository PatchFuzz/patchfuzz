



var dbgGlobal = newGlobal({ newCompartment: true });
var dbg = new dbgGlobal.Debugger(globalThis);

for (var i = 0; i < 1; i++) {
  (() => {
    dbg.getNewestFrame().older.eval("saveStack()");
  })();
}

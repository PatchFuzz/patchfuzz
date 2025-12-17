let debuggerRealm = newGlobal({newCompartment: true});
debuggerRealm.debuggee = this;
debuggerRealm.eval(`
  let dbg = new Debugger(debuggee);
  dbg.onDebuggerStatement = (frame) => null;  
`);

Atomics.add(new Int32Array(1), 0, {
  valueOf() {
    debugger;
  }
});

print(typeof Debugger.Memory, "function");
let dbg = new Debugger;
print(dbg.memory instanceof Debugger.Memory, true);

;
print(() => new Debugger.Memory, TypeError);

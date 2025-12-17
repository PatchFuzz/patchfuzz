;

const root = newGlobal({newCompartment: true});
const dbg = new Debugger();
dbg.addDebuggee(root)

print(() => dbg.memory.drainAllocationsLog(),
                       Error);

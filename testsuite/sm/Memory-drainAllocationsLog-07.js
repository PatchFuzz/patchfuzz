

load(libdir + 'asserts.js');

const root = newGlobal({newCompartment: true});
const dbg = new Debugger();
dbg.addDebuggee(root)

assertThrowsInstanceOf(() => dbg.memory.drainAllocationsLog(),
                       Error);

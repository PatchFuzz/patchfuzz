var g = newGlobal({ newCompartment: true });
var dbg = Debugger();
var gdbg = dbg.addDebuggee(g);

var g2 = newGlobal({ newCompartment: true });

print(gdbg.getProperty("print").return.isSameNative(g2.print), true);

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var gdbg = dbg.addDebuggee(g);

print(gdbg.getProperty("print").return.isSameNativeWithJitInfo(print), true);
print(gdbg.getProperty("print").return.isSameNativeWithJitInfo(newGlobal), false);




gdbg.executeInGlobal(`
var fun1 = Object.getOwnPropertyDescriptor(FakeDOMObject.prototype, "x").get;
var fun2 = Object.getOwnPropertyDescriptor(FakeDOMObject.prototype, "slot").get;
`);

var g_fun1 = gdbg.executeInGlobal("fun1").return;
var g_fun2 = gdbg.executeInGlobal("fun2").return;

var fun1 = Object.getOwnPropertyDescriptor(FakeDOMObject.prototype, "x").get;
var fun2 = Object.getOwnPropertyDescriptor(FakeDOMObject.prototype, "slot").get;


print(g_fun1.isSameNative(fun1), true);
print(g_fun1.isSameNative(fun2), true);
print(g_fun2.isSameNative(fun1), true);
print(g_fun2.isSameNative(fun2), true);


print(g_fun1.isSameNativeWithJitInfo(fun1), true);
print(g_fun1.isSameNativeWithJitInfo(fun2), false);
print(g_fun2.isSameNativeWithJitInfo(fun1), false);
print(g_fun2.isSameNativeWithJitInfo(fun2), true);



var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var gdbg = dbg.addDebuggee(g);




dbg.onNativeCall = (callee, reason) => {
    return {return: callee};
};
v = gdbg.executeInGlobal("new Object")
assertEq(v.return, gdbg.makeDebuggeeValue(g.Object));


dbg.onNativeCall = (callee, reason) => {
    return {return: "primitive"};
};
v = gdbg.executeInGlobal("new Object")
assertEq(v.throw.proto, gdbg.makeDebuggeeValue(g.Error.prototype))


dbg.onNativeCall = (callee, reason) => { };
v = gdbg.executeInGlobal("new Object")
assertEq("return" in v, true);

;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
gc();  
print(dbg.onDebuggerStatement, undefined);

function f() {}

print(function () { dbg.onDebuggerStatement = null; }, TypeError);
print(function () { dbg.onDebuggerStatement = "bad"; }, TypeError);
print(function () { dbg.onDebuggerStatement = {}; }, TypeError);
dbg.onDebuggerStatement = f;
print(dbg.onDebuggerStatement, f);

print(Object.getOwnPropertyNames(dbg).length, 0);
var desc = Object.getOwnPropertyDescriptor(Debugger.prototype, "onDebuggerStatement");
print(desc.configurable, true);
print(desc.enumerable, false);

print(function () { desc.get(); }, TypeError);
print(function () { desc.get.call(undefined); }, TypeError);
print(function () { desc.get.call(Debugger.prototype); }, TypeError);
print(desc.get.call(dbg), f);

print(function () { desc.set(); }, TypeError);
print(function () { desc.set.call(dbg); }, TypeError);
print(function () { desc.set.call({}, f); }, TypeError);
print(function () { desc.set.call(Debugger.prototype, f); }, TypeError);

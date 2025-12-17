;

var desc = Object.getOwnPropertyDescriptor(Debugger.prototype, "uncaughtExceptionHook");
print(typeof desc.get, 'function');
print(typeof desc.set, 'function');

print(function () { Debugger.prototype.uncaughtExceptionHook = null; }, TypeError);

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
print(desc.get.call(dbg), null);
print(function () { dbg.uncaughtExceptionHook = []; }, TypeError);
print(function () { dbg.uncaughtExceptionHook = 3; }, TypeError);
dbg.uncaughtExceptionHook = Math.sin;
print(dbg.uncaughtExceptionHook, Math.sin);
dbg.uncaughtExceptionHook = null;
print(dbg.uncaughtExceptionHook, null);

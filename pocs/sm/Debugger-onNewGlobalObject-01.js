;

var dbg = new Debugger;

function f() { }
function g() { }

print(Object.getOwnPropertyDescriptor(dbg, 'onNewGlobalObject'), undefined);

var d = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(dbg), 'onNewGlobalObject');
print(d.enumerable, false);
print(d.configurable, true);
print(typeof d.get, "function");
print(typeof d.set, "function");

print(dbg.onNewGlobalObject, undefined);

print(function () { dbg.onNewGlobalObject = ''; }, TypeError);
print(dbg.onNewGlobalObject, undefined);

print(function () { dbg.onNewGlobalObject = false; }, TypeError);
print(dbg.onNewGlobalObject, undefined);

print(function () { dbg.onNewGlobalObject = 0; }, TypeError);
print(dbg.onNewGlobalObject, undefined);

print(function () { dbg.onNewGlobalObject = Math.PI; }, TypeError);
print(dbg.onNewGlobalObject, undefined);

print(function () { dbg.onNewGlobalObject = null; }, TypeError);
print(dbg.onNewGlobalObject, undefined);

print(function () { dbg.onNewGlobalObject = {}; }, TypeError);
print(dbg.onNewGlobalObject, undefined);


dbg.onNewGlobalObject = f;
print(dbg.onNewGlobalObject, f);

dbg.onNewGlobalObject = undefined;
print(dbg.onNewGlobalObject, undefined);

var dbg2 = new Debugger;
print(dbg.onNewGlobalObject, undefined);
print(dbg2.onNewGlobalObject, undefined);

dbg.onNewGlobalObject = f;
print(dbg.onNewGlobalObject, f);
print(dbg2.onNewGlobalObject, undefined);

dbg2.onNewGlobalObject = g;
print(dbg.onNewGlobalObject, f);
print(dbg2.onNewGlobalObject, g);

dbg.onNewGlobalObject = undefined;
print(dbg.onNewGlobalObject, undefined);
print(dbg2.onNewGlobalObject, g);


print(function () {
                         Debugger.prototype.onNewGlobalObject = function () { };
                       }, TypeError);

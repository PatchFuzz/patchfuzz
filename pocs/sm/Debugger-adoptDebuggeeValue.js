;

var g = newGlobal({newCompartment: true});

var dbg1 = new Debugger();
var gDO1 = dbg1.addDebuggee(g);
var obj1 = gDO1.executeInGlobal("({})").return;

var dbg2 = Debugger(g);
var gDO2 = dbg2.addDebuggee(g);
var obj2 = gDO2.executeInGlobal("({})").return;

print(function () {
  obj1.defineProperty("foo", {
    configurable: true,
    enumerable: true,
    value: obj2,
    writable: true
  });
}, Error);

let obj3 = dbg1.adoptDebuggeeValue(obj2);

obj1.defineProperty("foo", {
  configurable: true,
  enumerable: true,
  value: obj3,
  writable: true
});

print(function () {
  dbg1.adoptDebuggeeValue({});
}, TypeError);

print(function () {
  dbg1.adoptDebuggeeValue(Debugger.Object.prototype);
}, TypeError);

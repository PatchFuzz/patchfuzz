;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
var gdbg = dbg.addDebuggee(g);

let rv = [];
dbg.onNativeCall = (callee, reason) => {
  rv.push(callee.name);
};

gdbg.executeInGlobal(`

[1, 2, 3].map(Array.prototype.push, Array.prototype);


var arr = [1, 2, 3];
Object.setPrototypeOf(arr, Object.create(Array.prototype));
arr.map(Array.prototype.push, Array.prototype);


[1, 2, 3].map(String.prototype.padStart, "");


[1, 2, 3].map(dateNow);
`);
print(rv, [
  "map", "push", "push", "push",
  "create", "setPrototypeOf", "map", "get [Symbol.species]", "push", "push", "push",
  "map", "padStart", "padStart", "padStart",
  "map", "dateNow", "dateNow", "dateNow",
]);
rv = [];
gdbg.executeInGlobal(`
  
  var re = /a./;
  "abc".match(re);

  
  
  Object.setPrototypeOf(re, Object.create(RegExp.prototype));
  "abc".match(re);
`);
print(rv, [
  "match",
  "create", "setPrototypeOf",
  "match", "[Symbol.match]",
  "get flags", "get hasIndices", "get global", "get ignoreCase", "get multiline",
  "get dotAll", "get unicode", "get unicodeSets", "get sticky",
]);
rv = [];
gdbg.executeInGlobal(`

const r = /a./;
r.foo = 10;
"abc".match(r);



var ctor = function() {
  let obj = {};
  Object.defineProperty(obj, "length", { set: Array.prototype.join });
  return obj;
};
var a = [1, 2, 3];
a[Symbol.iterator] = null;
void Array.from.call(ctor, a);
`);
print(rv, [ 
  "match", "[Symbol.match]",
  "get flags",
  "get hasIndices", "get global", "get ignoreCase", "get multiline",
  "get dotAll", "get unicode", "get unicodeSets", "get sticky",
  "call", "from", "defineProperty", "join",
]);

rv = [];
gdbg.executeInGlobal(`
var origExec = RegExp.prototype.exec;
RegExp.prototype.exec = dateNow;
try {
  (/a.b/).test("abc");
} catch (e) {} 
RegExp.prototype.exec = origExec;
`);
print(rv, ["test", "dateNow"]);

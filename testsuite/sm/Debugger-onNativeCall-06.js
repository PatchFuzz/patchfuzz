


load(libdir + 'eqArrayHelper.js');

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
var gdbg = dbg.addDebuggee(g);

let rv = [];
dbg.onNativeCall = (callee, reason) => {
  rv.push(callee.name);
};

gdbg.executeInGlobal(`

[1, 2, 3].map(Array.prototype.push, Array.prototype);


[1, 2, 3].map(String.prototype.padStart, "");


[1, 2, 3].map(dateNow);


"abc".match(/a./);
`);
assertEqArray(rv, [
  "map", "get [Symbol.species]", "push", "push", "push",
  "map", "get [Symbol.species]", "padStart", "padStart", "padStart",
  "map", "get [Symbol.species]", "dateNow", "dateNow", "dateNow",
  "match", "[Symbol.match]",
]);

rv = [];
gdbg.executeInGlobal(`

const r = /a./;
r.foo = 10;
"abc".match(r);



var a = [1, 2, 3];
Object.defineProperty(a, "constructor", {
  get() {
    return class {
      constructor() {
        let obj = {};
        Object.defineProperty(obj, "length", { set: Array.prototype.join });
        return obj;
      }
      static get [Symbol.species]() {
        return this;
      }
    }
  }
});
void Array.prototype.concat.call(a, [10, 20, 30]);
`);
assertEqArray(rv, [
  "match", "[Symbol.match]",
  "get flags",
  "get hasIndices", "get global", "get ignoreCase", "get multiline",
  "get dotAll", "get unicode", "get sticky",

  "defineProperty", "call", "concat", "defineProperty", "join",
]);

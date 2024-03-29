


load(libdir + 'eqArrayHelper.js');

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
var gdbg = dbg.addDebuggee(g);

const rv = [];
dbg.onNativeCall = (callee, reason) => {
  rv.push(callee.name);
};

gdbg.executeInGlobal(`
Array.from([1, 2, 3]);
`);
assertEqArray(rv, [
  "from",
  "values",
  "next", "next", "next", "next",
]);

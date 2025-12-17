;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
var gdbg = dbg.addDebuggee(g);

g.eval(`
function f() {
  Array.from([1, 2]);
}
`);
const fdbgObj = gdbg.getOwnPropertyDescriptor("f").value;

let rv = [];
dbg.onNativeCall = (callee, reason) => {
  rv.push(callee.name);
};

fdbgObj.call();
print(rv, ["from", "values", "next", "next", "next"]);

rv = [];
fdbgObj.apply();
print(rv, ["from", "values", "next", "next", "next"]);

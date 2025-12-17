;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
var gdbg = dbg.addDebuggee(g);

const rv = [];
dbg.onNativeCall = (callee, reason) => {
  rv.push(callee.name);
};

gdbg.executeInGlobal(`

dateNow.call();
dateNow.apply();


Function.prototype.call.bind(Function.prototype.call)(dateNow);
Function.prototype.apply.bind(Function.prototype.apply)(dateNow);


Reflect.apply(dateNow, null, []);
`);
print(rv, [
  "call", "dateNow",
  "apply", "dateNow",
  "bind", "bound call", "call", "call", "dateNow",
  "bind", "bound apply", "apply", "apply", "dateNow",
  "apply", "dateNow",
]);

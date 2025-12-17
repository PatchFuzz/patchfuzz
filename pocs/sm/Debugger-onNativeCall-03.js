;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var gdbg = dbg.addDebuggee(g);

const rv = [];

dbg.onEnterFrame = f => {
  rv.push("EnterFrame");
};

dbg.onNativeCall = f => {
  rv.push(f.displayName);
};

gdbg.executeInGlobal(`
  var x = [1,3,2];
  x.forEach((a) => {print(a)});
  x.sort((a, b) => {print(a)});
  x.sort(print);
`);

print(rv, [
  "EnterFrame", "forEach",
  "EnterFrame", "print",
  "EnterFrame", "print",
  "EnterFrame", "print",

  "sort",
  "EnterFrame","print",
  "EnterFrame","print",

  "sort",
  "print",
  "print"
]);

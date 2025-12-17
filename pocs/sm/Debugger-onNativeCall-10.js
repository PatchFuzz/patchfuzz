;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
var gdbg = dbg.addDebuggee(g);

g.eval(`
var x = [1];
var callArg = () => true;
function f() {
  x.push(42, 26);
  x.find(callArg);
  x.toString.call(2);
  new Function("code");
}
`);

let rv = [];
dbg.onNativeCall = (callee, reason, object, args) => {
  rv.push({
    name: callee.name, 
    cls: object?.class || null,
    args: args ? args.unsafeDereference().map(a => a.unsafeDereference ? a.unsafeDereference() : a) : null,
  });
};

g.f();


print(dbg.inspectNativeCallArguments, false);
print(rv.length, 5);
print(rv, [
 {
   name: "push",
   cls: null,
   args: null,
 },
 {
   name: "find",
   cls: null,
   args: null,
 },
 {
   name: "call",
   cls: null,
   args: null,
 },
 {
   name: "toString",
   cls: null,
   args: null,
 },
 {
   name: "Function",
   cls:null,
   args:null,
 },
]);


rv = [];
dbg.inspectNativeCallArguments = true;
print(dbg.inspectNativeCallArguments, true);
g.f();
print(rv.length, 5);
print(rv, [
 {
   name: "push",
   cls: "Array",
   args: [42, 26],
 },
 {
   name: "find",
   cls: "Array",
   args: [g.callArg],
 },
 {
   name: "call",
   cls: "Function",
   args: [2],
 },
 {
   name: "toString",
   cls: null,
   args: [],
 },
 {
   name: "Function",
   cls: null,
   args:["code"],
 },
]);

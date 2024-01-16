


load(libdir + "asserts.js");

let proto = Object.getPrototypeOf(saveStack());


print("Testing constructor");
assertThrowsInstanceOf(() => {
  new proto.constructor();
}, TypeError);

for (let p of ["source", "line", "column", "functionDisplayName", "parent"]) {
  print("Testing getter: " + p);
  
  assertThrowsInstanceOf(() => proto[p], TypeError);

  
  let o = {};
  Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(proto, p));
  assertThrowsInstanceOf(() => o[p], TypeError);
}

;

let proto = Object.getPrototypeOf(saveStack());


print("Testing constructor");
print(() => {
  new proto.constructor();
}, TypeError);

for (let p of ["source", "line", "column", "functionDisplayName", "parent"]) {
  print("Testing getter: " + p);
  
  print(() => proto[p], TypeError);

  
  let o = {};
  Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(proto, p));
  print(() => o[p], TypeError);
}

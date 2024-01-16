


load(libdir + "asserts.js")

const constructors = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
];

for (constructor of constructors) {
  print("testing non-empty " + constructor.name);
  let a = new constructor(10);
  assertEq(Object.isExtensible(a), true);
  assertEq(Object.isSealed(a), false);
  assertEq(Object.isFrozen(a), false);

  
  assertThrowsInstanceOf(() => Object.seal(a), TypeError);

  
  assertThrowsInstanceOf(() => Object.freeze(a), TypeError);
}

print();

for (constructor of constructors) {
  print("testing zero-length " + constructor.name);
  let a = new constructor(0);
  assertEq(Object.isExtensible(a), true);
  assertEq(Object.isSealed(a), false);
  assertEq(Object.isFrozen(a), false);

  
  Object.seal(a);
  Object.freeze(a);
}




let a = new Uint8Array(1 << 24);
Object.isSealed(a);
Object.isFrozen(a);

for (constructor of constructors) {
  print("testing extensibility " + constructor.name);
  let a = new constructor(10);

  
  a.foo = "twelve";
  assertEq(a.foo, "twelve");

  
  a[20] = "twelve";
  assertEq(a[20], undefined);

  
  a[-10 >>> 0] = "twelve";
  assertEq(a[-10 >>> 0], undefined);

  
  a[Math.pow(2, 53)] = "twelve";
  assertEq(a[Math.pow(2, 53)], undefined);

  
  Object.defineProperty(a, 5, {value: 3});
  assertEq(a[5], 3);

  
  assertThrowsInstanceOf(() => Object.defineProperty(a, 20, {value: 3}), TypeError);
  assertEq(a[20], undefined);

  
  a[3] = 3;
  delete a[3];
  assertEq(a[3], 3);
}

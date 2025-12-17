const constructors = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float16Array,
  Float32Array,
  Float64Array
];

for (constructor of constructors) {
  print("testing non-empty " + constructor.name);
  let a = new constructor(10);
  print(Object.isExtensible(a), true);
  print(Object.isSealed(a), false);
  print(Object.isFrozen(a), false);

  
  print(() => Object.seal(a), TypeError);

  
  print(() => Object.freeze(a), TypeError);
}

print();

for (constructor of constructors) {
  print("testing zero-length " + constructor.name);
  let a = new constructor(0);
  print(Object.isExtensible(a), true);
  print(Object.isSealed(a), false);
  print(Object.isFrozen(a), false);

  
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
  print(a.foo, "twelve");

  
  a[20] = "twelve";
  print(a[20], undefined);

  
  a[-10 >>> 0] = "twelve";
  print(a[-10 >>> 0], undefined);

  
  a[Math.pow(2, 53)] = "twelve";
  print(a[Math.pow(2, 53)], undefined);

  
  Object.defineProperty(a, 5, {value: 3});
  print(a[5], 3);

  
  print(() => Object.defineProperty(a, 20, {value: 3}), TypeError);
  print(a[20], undefined);

  
  a[3] = 3;
  delete a[3];
  print(a[3], 3);
}

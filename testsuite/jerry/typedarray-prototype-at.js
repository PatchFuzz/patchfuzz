


var normal_typedarrays = [
  new Int8Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint8Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint8ClampedArray([0, 1, 2, 3, 0, 5, 6]),
  new Int16Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint16Array([0, 1, 2, 3, 0, 5, 6]),
  new Int32Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint32Array([0, 1, 2, 3, 0, 5, 6]),
];


var float_typedarrays = [
  new Float32Array([1.5, 1.5, 2.5, 3.5, 0.5, 5.5, 10.5]),
  new Float64Array([1.5, 2.5, 3.5, 0.5, 5.5, 6.5, 10.5]),
];


var bigint_typedarrays = [
  new BigInt64Array([3n, 10n, 2n, 3n, 4n, 5n, 6n]),
  new BigUint64Array([3n, 1n, 2n, 3n, 33n, 5n, 6n])
];

var index = normal_typedarrays[0].at(0);
assert(index === 0);
assert(normal_typedarrays[index].at(0) === 0);


normal_typedarrays.forEach(function(e){
  assert(e.at(normal_typedarrays[1].length) === undefined);
  assert(e.at(normal_typedarrays[2].length+1) === undefined);
  assert(e.at(normal_typedarrays[3].length-1) === 6);
  assert(e.at(0) === 0);
  assert(e.at("-1") === 6);
  assert(e.at(-1) === 6);
  assert(e.at("-20") === undefined);
  assert(e.at(100) === undefined)
});


float_typedarrays.forEach(function(f){
  assert(f.at(float_typedarrays[1].length) === undefined);
  assert(f.at(0) === 1.5);
  assert(f.at("-1") === 10.5);
  assert(f.at(-1) === 10.5);
  assert(f.at("-20") === undefined);
  assert(f.at(100) === undefined)
});


bigint_typedarrays.forEach(function(b){
  assert(b.at(bigint_typedarrays[1].length) === undefined);
  assert(b.at(0) === 3n);
  assert(b.at("-1") === 6n);
  assert(b.at(-1) === 6n);
  assert(b.at("-20") === undefined);
  assert(b.at(100) === undefined)
});

normal_typedarrays.forEach(function(e){
  try {
    e.prototype.at.call(undefined);
    assert(false);
  } catch(e) {
    assert(e instanceof TypeError);
  }
});

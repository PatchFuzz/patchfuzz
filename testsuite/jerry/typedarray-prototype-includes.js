













var typedarrays = [
  new Uint8Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint16Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint32Array([0, 1, 2, 3, 0, 5, 6]),
  new Float32Array([0, 1, 2, 3, 0, 5, 6]),
  new Float64Array([0, 1, 2, 3, 0, 5, 6]),
  new Int8Array([0, 1, 2, 3, 0, 5, 6]),
  new Int16Array([0, 1, 2, 3, 0, 5, 6]),
  new Int32Array([0, 1, 2, 3, 0, 5, 6])
];

typedarrays.forEach(function(e){
  assert(e.includes.length === 1);
  assert(e.includes.name === "includes");
  assert(e.includes() === false);
  assert(e.includes("foo") === false);
  assert(e.includes(undefined) === false);
  assert(e.includes(NaN) === false);
  assert(e.includes(0) === true);
  assert(e.includes(0, 4) === true);
  assert(e.includes(0, 5) === false);
  assert(e.includes(1, Infinity) === false);
  assert(e.includes(1, -Infinity) === true);
  assert(e.includes(6, 8) === false);
  assert(e.includes(3, -5) === true);
});

var empty_typedarrays = [
  new Uint8Array([]),
  new Uint16Array([]),
  new Uint32Array([]),
  new Float32Array([]),
  new Float64Array([]),
  new Int8Array([]),
  new Int16Array([]),
  new Int32Array([])
];

empty_typedarrays.forEach(function(e){
  assert(e.includes(5) === false);
});

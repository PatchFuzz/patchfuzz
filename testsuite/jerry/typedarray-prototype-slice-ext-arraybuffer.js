

var typedarrays = [
  Uint8ClampedArray,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Int8Array,
  Int16Array,
  Int32Array,
];

for (var typeIdx = 0; typeIdx < typedarrays.length; typeIdx++) {
  var buffer = new ArrayBuffer(100);
  var typed = new typedarrays[typeIdx](buffer, 8, 6);
  try {
    typed.prototype.slice.call(undefined);
    assert(false);
  } catch (err) {
    assert(err instanceof TypeError);
  }

  for (var idx = 0; idx < typed.length; idx++) {
    typed[idx] = idx;
  }

  
  assert(typed.slice(1, 3).toString() === "1,2");
  assert(typed.slice(2, 5).toString() === "2,3,4");
  assert(typed.slice(0, 6).toString() === "0,1,2,3,4,5");

  
  assert(typed.slice(-2, 5).toString() === "4");
  assert(typed.slice(0, -3).toString() === "0,1,2");
  assert(typed.slice(-1, -4).toString() === "");

  
  assert(typed.slice(7, 1).toString() === "");
  assert(typed.slice(2, 9).toString() === "2,3,4,5");

  
  assert(typed.slice(undefined, 4).toString() === "0,1,2,3");
  assert(typed.slice(0, undefined).toString() === "0,1,2,3,4,5");
  assert(typed.slice(undefined, undefined).toString() === "0,1,2,3,4,5");

  
  assert(typed.slice(NaN, 3).toString() === "0,1,2");
  assert(typed.slice(2, Infinity).toString() === "2,3,4,5");
  assert(typed.slice(-Infinity, Infinity).toString() === "0,1,2,3,4,5");

  
  assert(typed.slice().toString() === "0,1,2,3,4,5");
  assert(typed.slice(4).toString() === "4,5");

  delete buffer;
}

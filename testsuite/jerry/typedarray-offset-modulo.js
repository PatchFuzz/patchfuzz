

var types = [
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Int16Array,
  Int32Array,
]

var buffer = new ArrayBuffer (100);

for (var idx = 0; idx < types.length; idx++) {
  try {
    var target = types[idx];

    
    new target (buffer, target.BYTES_PER_ELEMENT + 1, 1);
    assert (false);
  } catch (ex) {
    assert (ex instanceof RangeError);
  }
}

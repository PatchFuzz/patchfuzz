













assert(Array.prototype.values === Array.prototype[Symbol.iterator]);
assert(Set.prototype.values === Set.prototype[Symbol.iterator]);
assert(Set.prototype.keys === Set.prototype[Symbol.iterator]);
assert(Map.prototype.entries === Map.prototype[Symbol.iterator]);
assert(Date.prototype.toGMTString === Date.prototype.toUTCString);
assert(Number.parseInt === parseInt);
assert(Number.parseFloat === parseFloat);

var typedarrays = [Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
for (ta1 of typedarrays) {
  for (ta2 of typedarrays) {
    assert(ta1.prototype.values === ta2.prototype[Symbol.iterator]);
  }

  assert(ta1.prototype.toString === Array.prototype.toString);
}

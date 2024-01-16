

var typedArrayTypes = [Int8Array,
                       Uint8Array,
                       Uint8ClampedArray,
                       Int16Array,
                       Uint16Array,
                       Int32Array,
                       Uint32Array,
                       Float32Array,
                       Float64Array];

typedArrayTypes.forEach (function (typedArrayType) {
  var typedArray = new typedArrayType ();
  var fooSymbol = Symbol ("foo");
  var barSymbol = Symbol ("bar");
  typedArray[fooSymbol] = 5;
  assert (typedArray[fooSymbol] === 5);

  Object.defineProperty (typedArray, barSymbol, {value: 10});
  assert (typedArray[barSymbol] === 10);
});

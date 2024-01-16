
















var big_array = new Float64Array([0.523565555, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 333333232134.1]);
big_array.constructor = Float32Array;

var result_float32_array = big_array.filter(x => x % 2 == 0);
assert(result_float32_array instanceof Float32Array);
assert(result_float32_array.length === 5);


big_array.constructor = Uint8Array;
var result_uint8_array = big_array.filter(x => x % 3 == 0);
assert(result_uint8_array instanceof Uint8Array);
assert(result_uint8_array.length === 3);


try {
  big_array.filter(function(x, idx) {
    if (idx > 10) {
        throw new Error("Error test magic");
    }
    return x % 4 == 0;
  });
} catch (ex) {
  assert(ex instanceof Error);
  assert(ex.message === "Error test magic");
}

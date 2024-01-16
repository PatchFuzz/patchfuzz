

var float_array = new Float32Array([1.125, 5.5, -1.25, -0.0]);
var int_array = new Int8Array([3, 2, 1, 100, -30])
var uint_array = new Uint8Array([3, 2, 1, 100, -30])
var empty_array = new Uint32Array();

assert(float_array.toString() === "1.125,5.5,-1.25,0");
assert(int_array.toString() === "3,2,1,100,-30");
assert(uint_array.toString() === "3,2,1,100,226");
assert(empty_array.toString() === "");

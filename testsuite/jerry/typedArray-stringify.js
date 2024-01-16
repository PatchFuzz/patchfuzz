













var float_array = new Float32Array([1.125, 5.5, -1.25, -0.0]);
var int_array = new Int8Array([3, 2, 1, 100, -30])
var uint_array = new Uint8Array([3, 2, 1, 100, -30])
var empty_array = new Uint32Array();

assert((JSON.stringify(float_array)) === '{"0":1.125,"1":5.5,"2":-1.25,"3":0}');
assert((JSON.stringify(int_array)) === '{"0":3,"1":2,"2":1,"3":100,"4":-30}');
assert((JSON.stringify(uint_array)) === '{"0":3,"1":2,"2":1,"3":100,"4":226}');
assert((JSON.stringify(empty_array)) === '{}');

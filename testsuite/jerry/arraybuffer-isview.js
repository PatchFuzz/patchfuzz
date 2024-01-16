

assert(ArrayBuffer.isView() === false);
assert(ArrayBuffer.isView([]) === false);
assert(ArrayBuffer.isView({}) === false);
assert(ArrayBuffer.isView(null) === false);
assert(ArrayBuffer.isView(undefined) === false);
assert(ArrayBuffer.isView(new ArrayBuffer(10)) === false);

assert(ArrayBuffer.isView(new Int8Array()) === true);
assert(ArrayBuffer.isView(new Uint8Array()) === true);
assert(ArrayBuffer.isView(new Uint8ClampedArray()) === true);
assert(ArrayBuffer.isView(new Int16Array()) === true);
assert(ArrayBuffer.isView(new Uint16Array()) === true);
assert(ArrayBuffer.isView(new Int32Array()) === true);
assert(ArrayBuffer.isView(new Uint32Array()) === true);
assert(ArrayBuffer.isView(new Float32Array()) === true);
assert(ArrayBuffer.isView(new Float64Array()) === true);

assert(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)) === true);

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
assert(ArrayBuffer.isView(dv) === true);

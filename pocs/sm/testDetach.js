var ab = new ArrayBuffer(4);
var i32 = new Int32Array(ab);
i32[0] = 42;
detachArrayBuffer(ab);
print(i32.length, 0);
print(ab.byteLength, 0);
print(i32[0], undefined);

var ab = new ArrayBuffer(12);
var i32 = new Int32Array(ab);
i32[0] = 42;
detachArrayBuffer(ab);
print(i32.length, 0);
print(ab.byteLength, 0);
print(i32[0], undefined);

var ab = new ArrayBuffer(4096);
var i32 = new Int32Array(ab);
i32[0] = 42;
detachArrayBuffer(ab);
print(i32.length, 0);
print(ab.byteLength, 0);
print(i32[0], undefined);

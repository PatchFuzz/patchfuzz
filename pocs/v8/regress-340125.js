var a = new Int8Array(2);
var b = a.subarray(2, 4);
print(function () { a.set(b, 1e10); }, RangeError);

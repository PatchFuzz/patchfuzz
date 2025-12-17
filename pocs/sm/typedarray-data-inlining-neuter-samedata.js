var NONINLINABLE_AMOUNT = 40;
var SIZEOF_INT32 = 4;

var INLINABLE_INT8_AMOUNT = 4;



var ab1 = new ArrayBuffer(NONINLINABLE_AMOUNT * SIZEOF_INT32);
var ta1 = new Int32Array(ab1);
for (var i = 0; i < ta1.length; i++)
  ta1[i] = i + 43;
function q1() { return ta1[NONINLINABLE_AMOUNT - 1]; }
print(q1(), NONINLINABLE_AMOUNT - 1 + 43);
print(q1(), NONINLINABLE_AMOUNT - 1 + 43);
detachArrayBuffer(ab1);
print(q1(), undefined);



var ab2 = new ArrayBuffer(INLINABLE_INT8_AMOUNT);
var ta2 = new Int8Array(ab2);
for (var i = 0; i < ta2.length; i++)
  ta2[i] = i + 13;
function q2() { return ta2[INLINABLE_INT8_AMOUNT - 1]; }
print(q2(), INLINABLE_INT8_AMOUNT - 1 + 13);
print(q2(), INLINABLE_INT8_AMOUNT - 1 + 13);
detachArrayBuffer(ab2);
print(q2(), undefined);

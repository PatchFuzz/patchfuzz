;

var ab_inline = new ArrayBuffer(4);
print(pinArrayBufferOrViewLength(ab_inline), true);
print(pinArrayBufferOrViewLength(ab_inline), false);
print(() => detachArrayBuffer(ab_inline), RangeError, /change pinned length/);
print(pinArrayBufferOrViewLength(ab_inline, false), true);
detachArrayBuffer(ab_inline);

var ab_big = new ArrayBuffer(1000);
print(pinArrayBufferOrViewLength(ab_big), true);
print(pinArrayBufferOrViewLength(ab_big), false);
print(() => detachArrayBuffer(ab_big), RangeError, /change pinned length/);
print(pinArrayBufferOrViewLength(ab_big, false), true);
detachArrayBuffer(ab_big);

var rab_small = new ArrayBuffer(4, { maxByteLength: 20 });
print(pinArrayBufferOrViewLength(rab_small), true);
print(pinArrayBufferOrViewLength(rab_small), false);
print(() => detachArrayBuffer(rab_small), RangeError, /change pinned length/);
print(() => rab_small.resize(18), RangeError, /change pinned length/);
print(pinArrayBufferOrViewLength(rab_small, false), true);
print(rab_small.byteLength, 4);
rab_small.resize(18);
print(rab_small.byteLength, 18);
detachArrayBuffer(rab_small);

var rab_big = new ArrayBuffer(200, { maxByteLength: 1000 });
print(pinArrayBufferOrViewLength(rab_big), true);
print(pinArrayBufferOrViewLength(rab_big), false);
print(() => detachArrayBuffer(rab_big), RangeError, /change pinned length/);
print(() => rab_big.resize(400), RangeError, /change pinned length/);
print(pinArrayBufferOrViewLength(rab_big, false), true);
print(rab_big.byteLength, 200);
rab_big.resize(400);
print(rab_big.byteLength, 400);
detachArrayBuffer(rab_big);

var sab = new SharedArrayBuffer(4);
print(pinArrayBufferOrViewLength(sab), false);
print(pinArrayBufferOrViewLength(sab), false);
print(() => serialize([sab], [sab]), TypeError, /Shared memory objects.*transfer/);
print(pinArrayBufferOrViewLength(sab, false), false);
print(() => detachArrayBuffer(sab), TypeError, /ArrayBuffer.*required/);

if (SharedArrayBuffer.prototype.grow) {
  var gab = new SharedArrayBuffer(4, { maxByteLength: 1000 });
  print(pinArrayBufferOrViewLength(gab), false);
  print(pinArrayBufferOrViewLength(gab), false);
  print(() => detachArrayBuffer(gab), TypeError, /ArrayBuffer.*required/);
  
  print(pinArrayBufferOrViewLength(gab, false), false);
  print(gab.byteLength, 4);
  gab.grow(400);
  print(gab.byteLength, 400);
  print(() => detachArrayBuffer(gab), TypeError, /ArrayBuffer.*required/);
} else {
  print("Skipped test: growable SharedArrayBuffers unavailable");
}

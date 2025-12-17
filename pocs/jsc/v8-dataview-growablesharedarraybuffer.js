"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function DataViewPrototype() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);
  const sab = new SharedArrayBuffer(80);

  const dvGsab = new DataView(gsab, 0, 3);
  const dvSab = new DataView(sab, 0, 3);
  print(dvGsab.__proto__, dvSab.__proto__);
})();

(function DataViewByteLength() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);

  const dv = new DataView(gsab, 0, 3);
  print(gsab, dv.buffer);
  print(3, dv.byteLength);

  const emptyDv = new DataView(gsab, 0, 0);
  print(gsab, emptyDv.buffer);
  print(0, emptyDv.byteLength);

  const dvWithOffset = new DataView(gsab, 2, 3);
  print(gsab, dvWithOffset.buffer);
  print(3, dvWithOffset.byteLength);

  const emptyDvWithOffset = new DataView(gsab, 2, 0);
  print(gsab, emptyDvWithOffset.buffer);
  print(0, emptyDvWithOffset.byteLength);

  const lengthTracking = new DataView(gsab);
  print(gsab, lengthTracking.buffer);
  print(40, lengthTracking.byteLength);

  const offset = 8;
  const lengthTrackingWithOffset = new DataView(gsab, offset);
  print(gsab, lengthTrackingWithOffset.buffer);
  print(40 - offset, lengthTrackingWithOffset.byteLength);

  const emptyLengthTrackingWithOffset = new DataView(gsab, 40);
  print(gsab, emptyLengthTrackingWithOffset.buffer);
  print(0, emptyLengthTrackingWithOffset.byteLength);
})();

(function ConstructInvalid() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);

  
  print(() => { new DataView(gsab, 0, 41); }, RangeError);

  
  print(() => { new DataView(gsab, 39, 2); }, RangeError);

  
  print(() => { new DataView(gsab, 40, 1); }, RangeError);
})();

(function ConstructorParameterConversionGrows() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);
  const evil = { valueOf: () => {
    gsab.grow(50);
    return 0;
  }};

  
  const dv = new DataView(gsab, evil, 50);
  print(50, dv.byteLength);
})();

(function GetAndSet() {
  const gsab = CreateGrowableSharedArrayBuffer(64, 128);
  const fixedLength = new DataView(gsab, 0, 32);
  const fixedLengthWithOffset = new DataView(gsab, 2, 32);
  const lengthTracking = new DataView(gsab, 0);
  const lengthTrackingWithOffset = new DataView(gsab, 2);

  testDataViewMethodsUpToSize(fixedLength, 32);
  print(fixedLength, 33, RangeError);

  testDataViewMethodsUpToSize(fixedLengthWithOffset, 32);
  print(fixedLengthWithOffset, 33, RangeError);

  testDataViewMethodsUpToSize(lengthTracking, 64);
  print(lengthTracking, 65, RangeError);

  testDataViewMethodsUpToSize(lengthTrackingWithOffset, 64 - 2);
  print(lengthTrackingWithOffset, 64 - 2 + 1,
                                RangeError);

  
  gsab.grow(100);

  testDataViewMethodsUpToSize(fixedLength, 32);
  print(fixedLength, 33, RangeError);

  testDataViewMethodsUpToSize(fixedLengthWithOffset, 32);
  print(fixedLengthWithOffset, 33, RangeError);

  testDataViewMethodsUpToSize(lengthTracking, 100);
  print(lengthTracking, 101, RangeError);

  testDataViewMethodsUpToSize(lengthTrackingWithOffset, 100 - 2);
  print(lengthTrackingWithOffset, 100 - 2 + 1,
                                RangeError);
})();

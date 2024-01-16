







"use strict";

load("./resources/v8-mjsunit.js", "caller relative");
load("./resources/v8-typedarray-helpers.js", "caller relative");

function NormalizeValue(array, value) {
  if (array instanceof BigInt64Array || array instanceof BigUint64Array) {
    return BigInt(value);
  }
  return value;
}

function CheckWith(orig, index, indexNotEvil, v, vNotEvil) {
  const origLen = orig.length;
  const absoluteIndex = indexNotEvil < 0
        ? indexNotEvil + orig.length
        : indexNotEvil;
  const origVAtIndex = orig[absoluteIndex];
  const copy = orig.with(index, v);

  assertEquals(origLen, copy.length);
  for (let i = 0; i < origLen; i++) {
    assertEquals(i == absoluteIndex ? vNotEvil : orig[i], copy[i]);
  }
  assertEquals(origVAtIndex, orig[absoluteIndex]);
  assertFalse(copy === orig);
  assertFalse(copy.buffer === orig.buffer);
}

function CheckWithShrunkOrDetached(orig, v, vNotEvil) {
  const origLen = orig.length;
  if (orig instanceof BigInt64Array ||
      orig instanceof BigUint64Array) {
    
    
    
    
    assertThrows(() => { orig.with(1, v); }, TypeError);
    return;
  }

  const copy = orig.with(1, v);
  assertEquals(origLen, copy.length);
  assertEquals(NormalizeValue(copy, 0), copy[0]);
  assertEquals(vNotEvil, copy[1]);
  for (let i = 2; i < copy.length; i++) {
    if (copy instanceof Float32Array || copy instanceof Float64Array) {
      assertEquals(NaN, copy[i]);
    } else {
      assertEquals(0, copy[i]);
    }
  }
}

(function TestSurface() {
  for (let TA of ctors) {
    assertEquals(2, TA.prototype.with.length);
    assertEquals("with", TA.prototype.with.name);
  }
})();

(function TestBasic() {
  for (let TA of ctors) {
    let a = new TA(4);
    const v = NormalizeValue(a, 42);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(a, i, i);
    }
    CheckWith(a, 1, 1, v, v);
    CheckWith(a, -1, -1, v, v);
  }
})();

(function TestOutOfBounds() {
  for (let TA of ctors) {
    let a = new TA(4);
    const v = NormalizeValue(a, 42);
    assertThrows(() => { a.with(a.length, v); }, RangeError);
    assertThrows(() => { a.with(-a.length - 1, v); }, RangeError);
  }
})();

(function TestNonTypedArray() {
  for (let TA of ctors) {
    assertThrows(() => { TA.prototype.with.call([1,2,3,4], 1, 42); }, TypeError);
  }
})();

(function TestResizableBuffer() {
  for (let TA of ctors) {
    const rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    const fixedLength = new TA(rab, 0, 4);
    const fixedLengthWithOffset = new TA(rab, 2 * TA.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new TA(rab, 0);
    const lengthTrackingWithOffset = new TA(rab, 2 * TA.BYTES_PER_ELEMENT);

    const v = NormalizeValue(fixedLength, 42);

    
    const taWrite = new TA(rab);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    
    
    

    CheckWith(fixedLength, 1, 1, v, v);
    CheckWith(fixedLengthWithOffset, 1, 1, v, v);
    CheckWith(lengthTracking, 1, 1, v, v);
    CheckWith(lengthTrackingWithOffset, 1, 1, v, v);

    CheckWith(fixedLength, -1, -1, v, v);
    CheckWith(fixedLengthWithOffset, -1, -1, v, v);
    CheckWith(lengthTracking, -1, -1, v, v);
    CheckWith(lengthTrackingWithOffset, -1, -1, v, v);

    
    rab.resize(1 * TA.BYTES_PER_ELEMENT);
    WriteToTypedArray(taWrite, 0, 0);

    assertThrows(() => { fixedLength.with(0, v); }, TypeError);
    assertThrows(() => { fixedLengthWithOffset.with(0, v); }, TypeError);
    CheckWith(lengthTracking, 0, 0, v, v);
    assertThrows(() => { lengthTrackingWithOffset.with(0, v); }, TypeError);

    
    rab.resize(0);

    assertThrows(() => { fixedLength.with(0, v); }, TypeError);
    assertThrows(() => { fixedLengthWithOffset.with(0, v); }, TypeError);
    assertThrows(() => { lengthTracking.with(0, v); }, RangeError);
    assertThrows(() => { lengthTrackingWithOffset.copyWithin(0, 1, 1); },
                 TypeError);

    
    rab.resize(6 * TA.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    
    
    

    CheckWith(fixedLength, 1, 1, v, v);
    CheckWith(fixedLengthWithOffset, 1, 1, v, v);
    CheckWith(lengthTracking, 4, 4, v, v);
    CheckWith(lengthTrackingWithOffset, 1, 1, v, v);

    CheckWith(fixedLength, -1, -1, v, v);
    CheckWith(fixedLengthWithOffset, -1, -1, v, v);
    CheckWith(lengthTracking, -4, -4, v, v);
    CheckWith(lengthTrackingWithOffset, -3, -3, v, v);
  }
})();

(function TestParameterConversionShrinks() {
  for (let TA of ctors) {
    const rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    const fixedLength = new TA(rab, 0, 4);
    const v = NormalizeValue(fixedLength, 42);

    const evilIndex = { valueOf: () => { rab.resize(2 * TA.BYTES_PER_ELEMENT);
                                          return 2; }};
    assertThrows(() => { fixedLength.with(evilIndex, v); },
                 RangeError);

    const evilV = { valueOf: () => { rab.resize(2 * TA.BYTES_PER_ELEMENT);
                                      return v; }};
    rab.resize(4 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(rab, 0);
    CheckWithShrunkOrDetached(lengthTracking, evilV, v);
  }
})();

(function TestParameterConversionGrows() {
  for (let TA of ctors) {
    const rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(rab, 0);
    const v = NormalizeValue(lengthTracking, 42);

    const evilIndex = { valueOf: () => { rab.resize(6 * TA.BYTES_PER_ELEMENT);
                                          return 1; }};
    const evilV = { valueOf: () => { rab.resize(6 * TA.BYTES_PER_ELEMENT);
                                      return v; }};
    CheckWith(lengthTracking, evilIndex, 1, v, v);
    rab.resize(4 * TA.BYTES_PER_ELEMENT);
    CheckWith(lengthTracking, 1, 1, evilV, v);
  }
})();

(function TestParameterConversionDetaches() {
  for (let TA of ctors) {
    let rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                         8 * TA.BYTES_PER_ELEMENT);
    const fixedLength = new TA(rab, 0, 4);
    const v = NormalizeValue(fixedLength, 42);

    const evilIndex = { valueOf: () => { $.detachArrayBuffer(rab);
                                          return 2; }};
    assertThrows(() => { fixedLength.with(evilIndex, v); },
                 RangeError);

    rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                     8 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(rab, 0);
    const evilV = { valueOf: () => { $.detachArrayBuffer(rab);
                                      return v; }};
    assertThrows(() => { fixedLength.with(1, evilV); }, TypeError);
  }
})();

(function TestGrowableSAB() {
  for (let TA of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                                 8 * TA.BYTES_PER_ELEMENT);
    const fixedLength = new TA(gsab, 0, 4);
    const fixedLengthWithOffset = new TA(gsab, 2 * TA.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new TA(gsab, 0);
    const lengthTrackingWithOffset = new TA(gsab, 2 * TA.BYTES_PER_ELEMENT);

    const v = NormalizeValue(fixedLength, 42);

    
    const taWrite = new TA(gsab);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    CheckWith(fixedLength, 1, 1, v, v);
    CheckWith(fixedLengthWithOffset, 1, 1, v, v);
    CheckWith(lengthTracking, 1, 1, v, v);
    CheckWith(lengthTrackingWithOffset, 1, 1, v, v);

    CheckWith(fixedLength, -1, -1, v, v);
    CheckWith(fixedLengthWithOffset, -1, -1, v, v);
    CheckWith(lengthTracking, -1, -1, v, v);
    CheckWith(lengthTrackingWithOffset, -1, -1, v, v);

    
    gsab.grow(6 * TA.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    
    CheckWith(fixedLength, 1, 1, v, v);
    CheckWith(fixedLengthWithOffset, 1, 1, v, v);
    CheckWith(lengthTracking, 4, 4, v, v);
    CheckWith(lengthTrackingWithOffset, 1, 1, v, v);

    CheckWith(fixedLength, -1, -1, v, v);
    CheckWith(fixedLengthWithOffset, -1, -1, v, v);
    CheckWith(lengthTracking, -4, -4, v, v);
    CheckWith(lengthTrackingWithOffset, -3, -3, v, v);
  }
})();

(function TestParameterConversionGrowsSAB() {
  for (let TA of ctors) {
    let gsab = CreateGrowableSharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                               8 * TA.BYTES_PER_ELEMENT);
    let lengthTracking = new TA(gsab, 0);
    const v = NormalizeValue(lengthTracking, 42);

    const evilIndex = { valueOf: () => { gsab.grow(6 * TA.BYTES_PER_ELEMENT);
                                          return 1; }};
    const evilV = { valueOf: () => { gsab.grow(6 * TA.BYTES_PER_ELEMENT);
                                      return v; }};
    CheckWith(lengthTracking, evilIndex, 1, v, v);

    gsab = CreateGrowableSharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    lengthTracking = new TA(gsab, 0);
    CheckWith(lengthTracking, 1, 1, evilV, v);
  }
})();

(function TestNoSpecies() {
  class MyUint8Array extends Uint8Array {
    constructor(len) { super(len); }
    static get [Symbol.species]() { return MyUint8Array; }
  }
  assertEquals(Uint8Array, (new MyUint8Array(4)).with(0, 42).constructor);
})();

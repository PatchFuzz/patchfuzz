print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

function CheckToReversed(orig) {
  let r = orig.toReversed();
  print(orig.length, r.length);
  for (let i = 0; i < r.length; i++) {
    print(orig[orig.length - i - 1], r[i]);
  }
  print(orig === r);
}

(function TestSurface() {
  for (let TA of ctors) {
    print(0, TA.prototype.toReversed.length);
    print("toReversed", TA.prototype.toReversed.name);
  }
})();

(function TestBasic() {
  for (let TA of ctors) {
    let a = new TA(4);
    for (let i = 0; i < 4; i++) {
      a[i] = i + "";
    }
    CheckToReversed(a);
  }
})();

(function TestNonTypedArray() {
  for (let TA of ctors) {
    print(() => { TA.prototype.toReversed.call([1,2,3,4]); }, TypeError);
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

    
    const taWrite = new TA(rab);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    
    
    

    CheckToReversed(fixedLength);
    CheckToReversed(fixedLengthWithOffset);
    CheckToReversed(lengthTracking);
    CheckToReversed(lengthTrackingWithOffset);

    
    rab.resize(1 * TA.BYTES_PER_ELEMENT);
    WriteToTypedArray(taWrite, 0, 0);

    print(() => { fixedLength.toReversed(); }, TypeError);
    print(() => { fixedLengthWithOffset.toReversed(); }, TypeError);
    CheckToReversed(lengthTracking);
    print(() => { lengthTrackingWithOffset.toReversed(); }, TypeError);

    
    rab.resize(0);

    print(() => { fixedLength.toReversed(); }, TypeError);
    print(() => { fixedLengthWithOffset.toReversed(); }, TypeError);
    CheckToReversed(lengthTracking);
    print(() => { lengthTrackingWithOffset.toReversed(); }, TypeError);

    
    rab.resize(6 * TA.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    
    
    

    CheckToReversed(fixedLength);
    CheckToReversed(fixedLengthWithOffset);
    CheckToReversed(lengthTracking);
    CheckToReversed(lengthTrackingWithOffset);
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

    
    const taWrite = new TA(gsab);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    
    CheckToReversed(fixedLength);
    CheckToReversed(fixedLengthWithOffset);
    CheckToReversed(lengthTracking);
    CheckToReversed(lengthTrackingWithOffset);

    
    gsab.grow(6 * TA.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    
    CheckToReversed(fixedLength);
    CheckToReversed(fixedLengthWithOffset);
    CheckToReversed(lengthTracking);
    CheckToReversed(lengthTrackingWithOffset);
  }
})();

(function TestDetached() {
  for (let TA of ctors) {
    let a = new TA(4);
    $.detachArrayBuffer(a.buffer);
    print(() => { a.toReversed(); }, TypeError);
  }
})();

(function TestNoSpecies() {
  class MyUint8Array extends Uint8Array {
    static get [Symbol.species]() { return MyUint8Array; }
  }
  print(Uint8Array, (new MyUint8Array()).toReversed().constructor);
})();

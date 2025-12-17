print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

const TAProto = Object.getPrototypeOf(Int8Array.prototype);

function AssertToSortedAndSortSameResult(input, ...args) {
  const orig = input.slice();
  const s = TAProto.toSorted.apply(input, args);
  const copy = input.slice();
  TAProto.sort.apply(copy, args);

  
  
  print(copy, s);

  
  print(orig, input);

  
  print(s === input);
}

function TestToSortedBasicBehaviorHelper(input) {
  
  AssertToSortedAndSortSameResult(input);
  
  AssertToSortedAndSortSameResult(input, (x, y) => {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
}

(function TestSurface() {
  for (let TA of ctors) {
    print(1, TA.prototype.toSorted.length);
    print("toSorted", TA.prototype.toSorted.name);
  }
})();

(function TestBasic() {
  for (let TA of ctors) {
    let a = new TA(4);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(a, i, (Math.random() * 100)|0);
    }
    TestToSortedBasicBehaviorHelper(a);
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
      WriteToTypedArray(taWrite, i, (Math.random() * 100)|0);
    }

    
    
    
    
    
    
    

    TestToSortedBasicBehaviorHelper(fixedLength);
    TestToSortedBasicBehaviorHelper(fixedLengthWithOffset);
    TestToSortedBasicBehaviorHelper(lengthTracking);
    TestToSortedBasicBehaviorHelper(lengthTrackingWithOffset);

    
    rab.resize(1 * TA.BYTES_PER_ELEMENT);
    WriteToTypedArray(taWrite, 0, 0);

    print(() => { fixedLength.toSorted(); }, TypeError);
    print(() => { fixedLengthWithOffset.toSorted(); }, TypeError);
    TestToSortedBasicBehaviorHelper(lengthTracking);
    print(() => { lengthTrackingWithOffset.toSorted(); }, TypeError);

    
    rab.resize(0);

    print(() => { fixedLength.toSorted(); }, TypeError);
    print(() => { fixedLengthWithOffset.toSorted(); }, TypeError);
    TestToSortedBasicBehaviorHelper(lengthTracking);
    print(() => { lengthTrackingWithOffset.toSorted(); }, TypeError);

    
    rab.resize(6 * TA.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, (Math.random() * 100)|0);
    }

    
    
    
    
    

    TestToSortedBasicBehaviorHelper(fixedLength);
    TestToSortedBasicBehaviorHelper(fixedLengthWithOffset);
    TestToSortedBasicBehaviorHelper(lengthTracking);
    TestToSortedBasicBehaviorHelper(lengthTrackingWithOffset);
  }
})();

(function TestComparatorShrinks() {
  for (let TA of ctors) {
    const rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(rab, 0);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(lengthTracking, i, (Math.random() * 100)|0)
    }

    let resized = false;
    const evilComparator = (x, y) => {
      if (!resized) {
        resized = true;
        rab.resize(2 * TA.BYTES_PER_ELEMENT);
      }
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };

    
    
    let s = lengthTracking.toSorted(evilComparator);
    print(4, s.length);
    
    print(2, lengthTracking.length);
  }
})();

(function TestComparatorGrows() {
  for (let TA of ctors) {
    const rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(rab, 0);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(lengthTracking, i, (Math.random() * 100)|0)
    }

    let resized = false;
    const evilComparator = (x, y) => {
      if (!resized) {
        resized = true;
        rab.resize(6 * TA.BYTES_PER_ELEMENT);
      }
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };

    
    
    let s = lengthTracking.toSorted(evilComparator);
    print(4, s.length);
    
    print(6, lengthTracking.length);
  }
})();

(function TestComparatorDetaches() {
  for (let TA of ctors) {
    const rab = CreateResizableArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                           8 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(rab, 0);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(lengthTracking, i, (Math.random() * 100)|0)
    }

    let detached = false;
    const evilComparator = (x, y) => {
      if (!detached) {
        detached = true;
        $.detachArrayBuffer(rab);
      }
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };

    
    
    let s = lengthTracking.toSorted(evilComparator);
    print(4, s.length);
    
    print(0, lengthTracking.length);
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
      WriteToTypedArray(taWrite, i, (Math.random() * 100)|0);
    }

    
    
    
    
    
    TestToSortedBasicBehaviorHelper(fixedLength);
    TestToSortedBasicBehaviorHelper(fixedLengthWithOffset);
    TestToSortedBasicBehaviorHelper(lengthTracking);
    TestToSortedBasicBehaviorHelper(lengthTrackingWithOffset);

    
    gsab.grow(6 * TA.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, (Math.random() * 100)|0);
    }

    
    
    
    
    
    TestToSortedBasicBehaviorHelper(fixedLength);
    TestToSortedBasicBehaviorHelper(fixedLengthWithOffset);
    TestToSortedBasicBehaviorHelper(lengthTracking);
    TestToSortedBasicBehaviorHelper(lengthTrackingWithOffset);
  }
})();

(function TestComparatorGrows() {
  for (let TA of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT,
                                                 8 * TA.BYTES_PER_ELEMENT);
    const lengthTracking = new TA(gsab, 0);
    for (let i = 0; i < 4; i++) {
      WriteToTypedArray(lengthTracking, i, (Math.random() * 100)|0)
    }

    let resized = false;
    const evilComparator = (x, y) => {
      if (!resized) {
        resized = true;
        gsab.grow(6 * TA.BYTES_PER_ELEMENT);
      }
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };

    
    
    let s = lengthTracking.toSorted(evilComparator);
    print(4, s.length);
    
    print(6, lengthTracking.length);
  }
})();

(function TestNonTypedArray() {
  for (let TA of ctors) {
    print(() => { TA.prototype.toSorted.call([1,2,3,4]); }, TypeError);
  }
})();

(function TestDetached() {
  for (let TA of ctors) {
    let a = new TA(4);
    $.detachArrayBuffer(a.buffer);
    print(() => { a.toSorted(); }, TypeError);
  }
})();

(function TestNoSpecies() {
  class MyUint8Array extends Uint8Array {
    static get [Symbol.species]() { return MyUint8Array; }
  }
  print(Uint8Array, (new MyUint8Array()).toSorted().constructor);
})();

'use strict';

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function ArrayConcatDefault() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);

    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }

    
    

    function helper(receiver, ...params) {
      return ToNumbers(Array.prototype.concat.call(receiver, ...params));
    }

    
    print([lengthTracking, 5, 6, 7],
                 helper(lengthTracking, [5, 6], [7]));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    print([lengthTracking, 5, 6, 7],
                 helper(lengthTracking, [5, 6], [7]));
  }
})();

(function ArrayConcatConcatSpreadable() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    fixedLength[Symbol.isConcatSpreadable] = true;
    fixedLengthWithOffset[Symbol.isConcatSpreadable] = true;
    lengthTracking[Symbol.isConcatSpreadable] = true;
    lengthTrackingWithOffset[Symbol.isConcatSpreadable] = true;

    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }

    
    
    
    
    

    function helper(receiver, ...params) {
      return ToNumbers(Array.prototype.concat.call(receiver, ...params));
    }

    print([0, 1, 2, 3, 4, 5, 6], helper([0], fixedLength, [5, 6]));
    print([0, 3, 4, 5, 6], helper([0], fixedLengthWithOffset, [5, 6]));
    print([0, 1, 2, 3, 4, 5, 6], helper([0], lengthTracking, [5, 6]));
    print([0, 3, 4, 5, 6],
                 helper([0], lengthTrackingWithOffset, [5, 6]));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }
    
    
    
    
    

    print([0, 1, 2, 3, 4, 7, 8], helper([0], fixedLength, [7, 8]));
    print([0, 3, 4, 7, 8], helper([0], fixedLengthWithOffset, [7, 8]));
    print([0, 1, 2, 3, 4, 5, 6, 7, 8],
                 helper([0], lengthTracking, [7, 8]));
    print([0, 3, 4, 5, 6, 7, 8],
                 helper([0], lengthTrackingWithOffset, [7, 8]));
  }
})();


(function ArrayConcatConcatDictionaryElementsProto() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }

    
    
    
    
    

    const largeIndex = 5000;
    function helper(ta) {
      const newArray = [];
      newArray[largeIndex] = 11111;  
      
      newArray.__proto__ = ta;
      return Array.prototype.concat.call([], newArray);
    }

    function print(expectedStart, array) {
      for (let i = 0; i < expectedStart.length; ++i) {
        print(expectedStart[i], Number(array[i]));
      }
      print(largeIndex + 1, array.length);
      
      for (let i = expectedStart.length; i < largeIndex - 1; i += 153) {
        print(undefined, array[i]);
      }
      print(11111, Number(array[largeIndex]));
    }

    print([1, 2, 3, 4], helper(fixedLength));
    print([3, 4], helper(fixedLengthWithOffset));
    print([1, 2, 3, 4], helper(lengthTracking));
    print([3, 4], helper(lengthTrackingWithOffset));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }
    
    
    
    
    

    print([1, 2, 3, 4], helper(fixedLength));
    print([3, 4], helper(fixedLengthWithOffset));
    print([1, 2, 3, 4, 5, 6], helper(lengthTracking));
    print([3, 4, 5, 6], helper(lengthTrackingWithOffset));
  }
})();

(function ArrayPushPopShiftUnshiftSplice() {
  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
      8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    for (let func of [Array.prototype.push, Array.prototype.unshift,
                      Array.prototype.splice]) {
      print(() => {
          func.call(fixedLength, 0); }, TypeError);
      print(() => {
          func.call(fixedLengthWithOffset, 0); }, TypeError);
      print(() => {
          func.call(lengthTracking, 0); }, TypeError);
      print(() => {
        func.call(lengthTrackingWithOffset, 0); }, TypeError);
    }

    for (let func of [Array.prototype.pop, Array.prototype.shift]) {
      print(() => {
          func.call(fixedLength); }, TypeError);
      print(() => {
          func.call(fixedLengthWithOffset); }, TypeError);
      print(() => {
          func.call(lengthTracking); }, TypeError);
      print(() => {
        func.call(lengthTrackingWithOffset); }, TypeError);
    }
  }
})();

(function ArraySlice() {
  const sliceHelper = ArraySliceHelper;
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    const fixedLengthSlice = sliceHelper(fixedLength);
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));

    const fixedLengthWithOffsetSlice = sliceHelper(fixedLengthWithOffset);
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));

    const lengthTrackingSlice = sliceHelper(lengthTracking);
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));

    const lengthTrackingWithOffsetSlice = sliceHelper(lengthTrackingWithOffset);
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));

    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 1, 2, 3], ToNumbers(sliceHelper(fixedLength)));
    print([2, 3], ToNumbers(sliceHelper(fixedLengthWithOffset)));
    print([0, 1, 2, 3, 0, 0], ToNumbers(sliceHelper(lengthTracking)));
    print([2, 3, 0, 0],
                 ToNumbers(sliceHelper(lengthTrackingWithOffset)));

    
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));
  }
})();

(function ArrayFlatFlatMapFrom() {
  const flatHelper = ArrayFlatHelper;
  const flatMapHelper = ArrayFlatMapHelper;

  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    function mapper(n) {
      if (typeof n == 'bigint') {
        return n + 1n;
      }
      return n + 1;
    }

    const fixedLengthFlat = flatHelper(fixedLength);
    print([0, 1, 2, 3], ToNumbers(fixedLengthFlat));
    print(fixedLengthFlat instanceof Array);

    const fixedLengthWithOffsetFlat = flatHelper(fixedLengthWithOffset);
    print([2, 3], ToNumbers(fixedLengthWithOffsetFlat));
    print(fixedLengthWithOffsetFlat instanceof Array);

    const lengthTrackingFlat = flatHelper(lengthTracking);
    print([0, 1, 2, 3], ToNumbers(lengthTrackingFlat));
    print(lengthTrackingFlat instanceof Array);

    const lengthTrackingWithOffsetFlat = flatHelper(lengthTrackingWithOffset);
    print([2, 3], ToNumbers(lengthTrackingWithOffsetFlat));
    print(lengthTrackingWithOffsetFlat instanceof Array);

    print([1, 2, 3, 4],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([3, 4],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([1, 2, 3, 4],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([3, 4],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    print([0, 1, 2, 3], ToNumbers(Array.from(fixedLength)));
    print([2, 3], ToNumbers(Array.from(fixedLengthWithOffset)));
    print([0, 1, 2, 3], ToNumbers(Array.from(lengthTracking)));
    print([2, 3], ToNumbers(Array.from(lengthTrackingWithOffset)));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 1, 2, 3], ToNumbers(flatHelper(fixedLength)));
    print([2, 3], ToNumbers(flatHelper(fixedLengthWithOffset)));
    print([0, 1, 2, 3, 0, 0], ToNumbers(flatHelper(lengthTracking)));
    print([2, 3, 0, 0],
        ToNumbers(flatHelper(lengthTrackingWithOffset)));

    print([1, 2, 3, 4],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([3, 4],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([1, 2, 3, 4, 1, 1],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([3, 4, 1, 1],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    print([0, 1, 2, 3], ToNumbers(Array.from(fixedLength)));
    print([2, 3], ToNumbers(Array.from(fixedLengthWithOffset)));
    print([0, 1, 2, 3, 0, 0], ToNumbers(Array.from(lengthTracking)));
    print([2, 3, 0, 0], ToNumbers(Array.from(lengthTrackingWithOffset)));
  }
})();

(function ArrayFlatParameterConversionGrows() {
  const flatHelper = ArrayFlatHelper;
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    
    print([1, 2, 3, 4], ToNumbers(flatHelper(lengthTracking, evil)));
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }
})();

(function ArrayFlatMapMapperGrows() {
  const flatMapHelper = ArrayFlatMapHelper;

  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    function mapper(n) {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return n;
    }
    print([1, 2, 3, 4], ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }
})();

(function ArrayFromMapperGrows() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    function mapper(n) {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return n;
    }
    
    print([1, 2, 3, 4, 0, 0],
                 ToNumbers(Array.from(lengthTracking, mapper)));
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }
})();

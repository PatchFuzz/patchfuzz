'use strict';

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function ArrayConcatDefault() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }

    
    

    function helper(receiver, ...params) {
      return ToNumbers(Array.prototype.concat.call(receiver, ...params));
    }

    
    print([fixedLength, 5, 6, 7], helper(fixedLength, [5, 6], [7]));

    
    rab.resize(0);
    print([fixedLength, 5, 6, 7], helper(fixedLength, [5, 6], [7]));

    
    $.detachArrayBuffer(rab);
    print([fixedLength, 5, 6, 7], helper(fixedLength, [5, 6], [7]));
  }
})();

(function ArrayConcatConcatSpreadable() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    fixedLength[Symbol.isConcatSpreadable] = true;
    fixedLengthWithOffset[Symbol.isConcatSpreadable] = true;
    lengthTracking[Symbol.isConcatSpreadable] = true;
    lengthTrackingWithOffset[Symbol.isConcatSpreadable] = true;

    const taWrite = new ctor(rab);
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

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    print([0, 5, 6], helper([0], fixedLength, [5, 6]));
    print([0, 5, 6], helper([0], fixedLengthWithOffset, [5, 6]));
    print([0, 1, 2, 3, 5, 6], helper([0], lengthTracking, [5, 6]));
    print([0, 3, 5, 6],
                 helper([0], lengthTrackingWithOffset, [5, 6]));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    
    

    print([0, 5, 6], helper([0], fixedLength, [5, 6]));
    print([0, 5, 6], helper([0], fixedLengthWithOffset, [5, 6]));
    print([0, 1, 5, 6], helper([0], lengthTracking, [5, 6]));
    print([0, 5, 6], helper([0], lengthTrackingWithOffset, [5, 6]));

    
    rab.resize(0);

    
    

    print([0, 5, 6], helper([0], fixedLength, [5, 6]));
    print([0, 5, 6], helper([0], fixedLengthWithOffset, [5, 6]));
    print([0, 5, 6], helper([0], lengthTracking, [5, 6]));
    print([0, 5, 6], helper([0], lengthTrackingWithOffset, [5, 6]));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }
    
    
    
    
    

    print([0, 1, 2, 3, 4, 7, 8], helper([0], fixedLength, [7, 8]));
    print([0, 3, 4, 7, 8], helper([0], fixedLengthWithOffset, [7, 8]));
    print([0, 1, 2, 3, 4, 5, 6, 7, 8],
                 helper([0], lengthTracking, [7, 8]));
    print([0, 3, 4, 5, 6, 7, 8],
                 helper([0], lengthTrackingWithOffset, [7, 8]));

    
    $.detachArrayBuffer(rab);
    print([0, 5, 6], helper([0], fixedLength, [5, 6]));
    print([0, 5, 6], helper([0], fixedLengthWithOffset, [5, 6]));
    print([0, 5, 6], helper([0], lengthTracking, [5, 6]));
    print([0, 5, 6], helper([0], lengthTrackingWithOffset, [5, 6]));
  }
})();


(function ArrayConcatConcatDictionaryElementsProto() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
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

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    print([], helper(fixedLength));
    print([], helper(fixedLengthWithOffset));
    print([1, 2, 3], helper(lengthTracking));
    print([3], helper(lengthTrackingWithOffset));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    
    

    print([], helper(fixedLength));
    print([], helper(fixedLengthWithOffset));
    print([1], helper(lengthTracking));
    print([], helper(lengthTrackingWithOffset));

    
    rab.resize(0);

    
    

    print([], helper(fixedLength));
    print([], helper(fixedLengthWithOffset));
    print([], helper(lengthTracking));
    print([], helper(lengthTrackingWithOffset));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i + 1);
    }
    
    
    
    
    

    print([1, 2, 3, 4], helper(fixedLength));
    print([3, 4], helper(fixedLengthWithOffset));
    print([1, 2, 3, 4, 5, 6], helper(lengthTracking));
    print([3, 4, 5, 6], helper(lengthTrackingWithOffset));

    
    $.detachArrayBuffer(rab);
    print([], helper(fixedLength));
    print([], helper(fixedLengthWithOffset));
    print([], helper(lengthTracking));
    print([], helper(lengthTrackingWithOffset));
  }
})();

(function ArrayPushPopShiftUnshiftSplice() {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    function testAllFuncsThrow() {
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

    testAllFuncsThrow();

    rab.resize(0);

    testAllFuncsThrow();

    $.detachArrayBuffer(rab);

    testAllFuncsThrow();
  }
})();

(function ArraySlice() {
  const sliceHelper = ArraySliceHelper;

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    const fixedLengthSlice = sliceHelper(fixedLength);
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print(fixedLengthSlice instanceof Array);

    const fixedLengthWithOffsetSlice = sliceHelper(fixedLengthWithOffset);
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print(fixedLengthWithOffsetSlice instanceof Array);

    const lengthTrackingSlice = sliceHelper(lengthTracking);
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print(lengthTrackingSlice instanceof Array);

    const lengthTrackingWithOffsetSlice = sliceHelper(lengthTrackingWithOffset);
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));
    print(lengthTrackingWithOffsetSlice instanceof Array);

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    print([], ToNumbers(sliceHelper(fixedLength)));
    print([], ToNumbers(sliceHelper(fixedLengthWithOffset)));

    print([0, 1, 2], ToNumbers(sliceHelper(lengthTracking)));
    print([2], ToNumbers(sliceHelper(lengthTrackingWithOffset)));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print([], sliceHelper(fixedLength));
    print([], sliceHelper(fixedLengthWithOffset));
    print([], sliceHelper(lengthTrackingWithOffset));

    print([0], ToNumbers(sliceHelper(lengthTracking)));

     
    rab.resize(0);

    print([], sliceHelper(fixedLength));
    print([], sliceHelper(fixedLengthWithOffset));
    print([], sliceHelper(lengthTrackingWithOffset));
    print([], sliceHelper(lengthTracking));

    
    
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 0, 0, 0], ToNumbers(sliceHelper(fixedLength)));
    print([0, 0], ToNumbers(sliceHelper(fixedLengthWithOffset)));
    print([0, 0, 0, 0, 0, 0], ToNumbers(sliceHelper(lengthTracking)));
    print([0, 0, 0, 0],
        ToNumbers(sliceHelper(lengthTrackingWithOffset)));
  }
})();

(function ArraySliceParameterConversionShrinks() {
  const sliceHelper = ArraySliceHelper;

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print([undefined, undefined, undefined, undefined],
                sliceHelper(fixedLength, evil));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print([1, 2, undefined, undefined],
                 ToNumbers(sliceHelper(lengthTracking, evil)));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArraySliceParameterConversionDetaches() {
  const sliceHelper = ArraySliceHelper;

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = { valueOf: () => { $.detachArrayBuffer(rab);
                                    return 0; }};
    print([undefined, undefined, undefined, undefined],
                 sliceHelper(fixedLength, evil));
    print(0, rab.byteLength);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { $.detachArrayBuffer(rab);
                                    return 0; }};
    print([undefined, undefined, undefined, undefined],
                ToNumbers(sliceHelper(lengthTracking, evil)));
    print(0, rab.byteLength);
  }
})();

(function ArrayFlatFlatMapFrom() {
  const flatHelper = ArrayFlatHelper;
  const flatMapHelper = ArrayFlatMapHelper;

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(rab);
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

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    print([], ToNumbers(flatHelper(fixedLength)));
    print([], ToNumbers(flatHelper(fixedLengthWithOffset)));

    print([0, 1, 2], ToNumbers(flatHelper(lengthTracking)));
    print([2], ToNumbers(flatHelper(lengthTrackingWithOffset)));

    print([],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([1, 2, 3],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([3],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    
    
    
    print(() => { Array.from(fixedLength); }, TypeError);
    print(() => { Array.from(fixedLengthWithOffset); }, TypeError);
    print([0, 1, 2], ToNumbers(Array.from(lengthTracking)));
    print([2], ToNumbers(Array.from(lengthTrackingWithOffset)));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print([], flatHelper(fixedLength));
    print([], flatHelper(fixedLengthWithOffset));
    print([0], ToNumbers(flatHelper(lengthTracking)));
    print([], flatHelper(lengthTrackingWithOffset));

    print([],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([1],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    print(() => { Array.from(fixedLength); }, TypeError);
    print(() => { Array.from(fixedLengthWithOffset); }, TypeError);
    print([0], ToNumbers(Array.from(lengthTracking)));
    print(() => { Array.from(lengthTrackingWithOffset) }, TypeError);

     
    rab.resize(0);

    print([], flatHelper(fixedLength));
    print([], flatHelper(fixedLengthWithOffset));
    print([], flatHelper(lengthTracking));
    print([], flatHelper(lengthTrackingWithOffset));

    print([],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    print(() => { Array.from(fixedLength); }, TypeError);
    print(() => { Array.from(fixedLengthWithOffset); }, TypeError);
    print([], ToNumbers(Array.from(lengthTracking)));
    print(() => { Array.from(lengthTrackingWithOffset) }, TypeError);

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 0, 0, 0], ToNumbers(flatHelper(fixedLength)));
    print([0, 0], ToNumbers(flatHelper(fixedLengthWithOffset)));
    print([0, 0, 0, 0, 0, 0], ToNumbers(flatHelper(lengthTracking)));
    print([0, 0, 0, 0],
        ToNumbers(flatHelper(lengthTrackingWithOffset)));

    print([1, 1, 1, 1],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([1, 1],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([1, 1, 1, 1, 1, 1],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([1, 1, 1, 1],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    print([0, 0, 0, 0], ToNumbers(Array.from(fixedLength)));
    print([0, 0], ToNumbers(Array.from(fixedLengthWithOffset)));
    print([0, 0, 0, 0, 0, 0], ToNumbers(Array.from(lengthTracking)));
    print([0, 0, 0, 0], ToNumbers(Array.from(lengthTrackingWithOffset)));

    $.detachArrayBuffer(rab);

    print([], flatHelper(fixedLength));
    print([], flatHelper(fixedLengthWithOffset));
    print([], flatHelper(lengthTracking));
    print([], flatHelper(lengthTrackingWithOffset));

    print([],
                 ToNumbers(flatMapHelper(fixedLength, mapper)));
    print([],
                 ToNumbers(flatMapHelper(fixedLengthWithOffset, mapper)));
    print([],
                 ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print([],
                 ToNumbers(flatMapHelper(lengthTrackingWithOffset, mapper)));

    print(() => { Array.from(fixedLength); }, TypeError);
    print(() => { Array.from(fixedLengthWithOffset); }, TypeError);
    print(() => { Array.from(lengthTracking); }, TypeError);
    print(() => { Array.from(lengthTrackingWithOffset) }, TypeError);
  }
})();

(function ArrayFlatParameterConversionShrinks() {
  const flatHelper = ArrayFlatHelper;

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print([], flatHelper(fixedLength, evil));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print([1, 2], ToNumbers(flatHelper(lengthTracking, evil)));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArrayFlatParameterConversionGrows() {
  const flatHelper = ArrayFlatHelper;
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { rab.resize(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    
    print([1, 2, 3, 4], ToNumbers(flatHelper(lengthTracking, evil)));
    print(6 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArrayFlatParameterConversionDetaches() {
  const flatHelper = ArrayFlatHelper;
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = { valueOf: () => { $.detachArrayBuffer(rab);
                                    return 0; }};
    print([], flatHelper(fixedLength, evil));
    print(0, rab.byteLength);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { $.detachArrayBuffer(rab);
                                    return 0; }};
    print([], ToNumbers(flatHelper(lengthTracking, evil)));
    print(0, rab.byteLength);
  }
})();

(function ArrayFlatMapMapperShrinks() {
  const flatMapHelper = ArrayFlatMapHelper;
  let rab;
  let resizeTo;
  function mapper(n) {
    rab.resize(resizeTo);
    return n;
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    const fixedLength = new ctor(rab, 0, 4);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(fixedLength, i, i + 1);
    }
    print([1], ToNumbers(flatMapHelper(fixedLength, mapper)));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    print([1, 2], ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArrayFlatMapMapperGrows() {
  const flatMapHelper = ArrayFlatMapHelper;

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    function mapper(n) {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return n;
    }
    print([1, 2, 3, 4], ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print(6 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArrayFlatMapMapperDetaches() {
  const flatMapHelper = ArrayFlatMapHelper;
  let rab;
  function mapper(n) {
    $.detachArrayBuffer(rab);
    return n;
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(fixedLength, i, i + 1);
    }
    print([1], ToNumbers(flatMapHelper(fixedLength, mapper)));
    print(0, rab.byteLength);
  }
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    print([1], ToNumbers(flatMapHelper(lengthTracking, mapper)));
    print(0, rab.byteLength);
  }
})();

(function ArrayFromMapperShrinks() {
  let rab;
  let resizeTo;
  function mapper(n) {
    rab.resize(resizeTo);
    return n;
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    const fixedLength = new ctor(rab, 0, 4);
    print(() => { Array.from(fixedLength, mapper); }, TypeError);
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    print([1, 2], ToNumbers(Array.from(lengthTracking, mapper)));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArrayFromMapperGrows() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    function mapper(n) {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return n;
    }
    
    print([1, 2, 3, 4, 0, 0],
                 ToNumbers(Array.from(lengthTracking, mapper)));
    print(6 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

(function ArrayFromMapperDetaches() {
  let rab;
  function mapper(n) {
    $.detachArrayBuffer(rab);
    return n;
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    print(() => { Array.from(fixedLength, mapper); }, TypeError);
    print(0, rab.byteLength);
  }
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    print(() => { Array.from(lengthTracking, mapper); }, TypeError);
    print(0, rab.byteLength);
  }
})();

(function ArrayForEachReduceReduceRightShrinkMidIteration() {
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let values;
  let rab;
  let resizeAfter;
  let resizeTo;
  function CollectValuesAndResize(n) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == resizeAfter) {
      rab.resize(resizeTo);
    }
    return true;
  }

  function ForEachHelper(array) {
    values = [];
    ArrayForEachHelper(array, CollectValuesAndResize);
    return values;
  }

  function ReduceHelper(array) {
    values = [];
    ArrayReduceHelper(array,
                 (acc, n) => { CollectValuesAndResize(n); }, "initial value");
    return values;
  }

  function ReduceRightHelper(array) {
    values = [];
    ArrayReduceRightHelper(array, (acc, n) => { CollectValuesAndResize(n); },
                      "initial value");
    return values;
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2], ForEachHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4], ForEachHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4], ForEachHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4], ForEachHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2], ReduceHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4], ReduceHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4], ReduceHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4], ReduceHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([6, 4], ReduceRightHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([6], ReduceRightHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    
    print([6, 4, 2, 0], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 1;
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    print([6, 2, 0], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    
    print([6, 4], ReduceRightHelper(lengthTrackingWithOffset));
  }
})();

(function ArrayForEachReduceReduceRightDetachMidIteration() {
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let values;
  let rab;
  let detachAfter;
  function CollectValuesAndDetach(n) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == detachAfter) {
      $.detachArrayBuffer(rab);
    }
    return true;
  }

  function ForEachHelper(array) {
    values = [];
    ArrayForEachHelper(array, CollectValuesAndDetach);
    return values;
  }

  function ReduceHelper(array) {
    values = [];
    ArrayReduceHelper(array, (acc, n) => { CollectValuesAndDetach(n); },
                      "initial value");
    return values;
  }

  function ReduceRightHelper(array) {
    values = [];
    ArrayReduceRightHelper(array, (acc, n) => { CollectValuesAndDetach(n); },
                           "initial value");
    return values;
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    print([0, 2], ForEachHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    print([4], ForEachHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
    print([0, 2], ForEachHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    print([4], ForEachHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    print([0, 2], ReduceHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    print([4], ReduceHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
    print([0, 2], ReduceHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    print([4], ReduceHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    print([6, 4], ReduceRightHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    print([6], ReduceRightHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
   print([6, 4], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    print([6], ReduceRightHelper(lengthTrackingWithOffset));
  }
})();

(function FilterShrinkMidIteration() {
  const filterHelper = ArrayFilterHelper;
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let values;
  let rab;
  let resizeAfter;
  let resizeTo;
  function CollectValuesAndResize(n) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == resizeAfter) {
      rab.resize(resizeTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([],
                 ToNumbers(filterHelper(fixedLength, CollectValuesAndResize)));
    print([0, 2], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([],ToNumbers(filterHelper(
        fixedLengthWithOffset, CollectValuesAndResize)));
    print([4], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([], ToNumbers(filterHelper(
        lengthTracking, CollectValuesAndResize)));
    print([0, 2, 4], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([], ToNumbers(filterHelper(
        lengthTrackingWithOffset, CollectValuesAndResize)));
    print([4], values);
  }
})();

(function FilterDetachMidIteration() {
  const filterHelper = ArrayFilterHelper;
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let values;
  let rab;
  let detachAfter;
  function CollectValuesAndDetach(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == detachAfter) {
       $.detachArrayBuffer(rab);
    }
    return false;
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    values = [];
    detachAfter = 2;
    print([],
        ToNumbers(filterHelper(fixedLength, CollectValuesAndDetach)));
    print([0, 2], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print([],
        ToNumbers(filterHelper(fixedLengthWithOffset, CollectValuesAndDetach)));
    print([4], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print([],
        ToNumbers(filterHelper(lengthTracking, CollectValuesAndDetach)));
    print([0, 2], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print([],
        ToNumbers(filterHelper(lengthTrackingWithOffset, CollectValuesAndDetach)));
    print([4], values);
  }
})();

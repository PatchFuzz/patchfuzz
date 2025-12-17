"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function ConstructorThrowsIfBufferDetached() {
  const rab = CreateResizableArrayBuffer(40, 80);
  $.detachArrayBuffer(rab);

  for (let ctor of ctors) {
    print(() => { ctor(rab); }, TypeError);
    print(() => { ctor(rab, 8); }, TypeError);
    print(() => { ctor(rab, 8, 1); }, TypeError);
  }
})();

(function TypedArrayLengthAndByteLength() {
  const rab = CreateResizableArrayBuffer(40, 80);

  let tas = [];
  for (let ctor of ctors) {
    tas.push(new ctor(rab, 0, 3));
    tas.push(new ctor(rab, 8, 3));
    tas.push(new ctor(rab));
    tas.push(new ctor(rab, 8));
  }

  $.detachArrayBuffer(rab);

  for (let ta of tas) {
    print(0, ta.length);
    print(0, ta.byteLength);
  }
})();

(function AccessDetachedTypedArray() {
  const rab = CreateResizableArrayBuffer(16, 40);

  const i8a = new Int8Array(rab, 0, 4);

  
  for (let i = 0; i < 4; ++i) {
    print(0, i8a[i]);
  }

  
  for (let i = 0; i < 4; ++i) {
    i8a[i] = i;
  }

  $.detachArrayBuffer(rab);

  
  for (let i = 0; i < 4; ++i) {
    print(undefined, i8a[i]);
  }

  
  for (let i = 0; i < 4; ++i) {
    i8a[i] = 10;
  }

  for (let i = 0; i < 4; ++i) {
    print(undefined, i8a[i]);
  }
})();

(function LoadFromOutOfScopeTypedArrayWithFeedback() {
  function ReadElement2(ta) {
    return ta[2];
  }
  

  const rab = CreateResizableArrayBuffer(16, 40);

  const i8a = new Int8Array(rab, 0, 4);
  print(0, ReadElement2(i8a));

  
  for (let i = 0; i < 4; ++i) {
    i8a[i] = i;
  }

  $.detachArrayBuffer(rab);

  
  for (let i = 0; i < 3; ++i) {
    print(undefined, ReadElement2(i8a));
  }
})();

(function StoreToOutOfScopeTypedArrayWithFeedback() {
  function WriteElement2(ta, i) {
    ta[2] = i;
  }
  

  const rab = CreateResizableArrayBuffer(16, 40);

  const i8a = new Int8Array(rab, 0, 4);
  print(0, i8a[2]);

  
  for (let i = 0; i < 3; ++i) {
    WriteElement2(i8a, 3);
  }

  $.detachArrayBuffer(rab);

  
  for (let i = 0; i < 3; ++i) {
    WriteElement2(i8a, 4);
  }

  
  for (let i = 0; i < 3; ++i) {
    print(undefined, i8a[2]);
  }
})();

(function FillParameterConversionDetaches() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => { $.detachArrayBuffer(rab); return 1;}};
    
    
    print(function() {
      TypedArrayFillHelper(fixedLength, 1, 0, evil);
    }, TypeError);
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => { $.detachArrayBuffer(rab); return 1;}};
    
    
    
    
    ArrayFillHelper(fixedLength, 1, 0, evil);
    print(0, fixedLength.length);
  }
})();

(function CopyWithinParameterConversionDetaches() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => { $.detachArrayBuffer(rab); return 2;}};
    print(function() {
      fixedLength.copyWithin(evil, 0, 1);
    }, TypeError);
  }
})();

function EntriesKeysValues(entriesHelper, keysHelper, valuesHelper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    $.detachArrayBuffer(rab);

    
    
    
    if (oobThrows) {
      print(() => { entriesHelper(fixedLength); });
      print(() => { valuesHelper(fixedLength); });
      print(() => { keysHelper(fixedLength); });

      print(() => { entriesHelper(fixedLengthWithOffset); });
      print(() => { valuesHelper(fixedLengthWithOffset); });
      print(() => { keysHelper(fixedLengthWithOffset); });

      print(() => { entriesHelper(lengthTracking); });
      print(() => { valuesHelper(lengthTracking); });
      print(() => { keysHelper(lengthTracking); });

      print(() => { entriesHelper(lengthTrackingWithOffset); });
      print(() => { valuesHelper(lengthTrackingWithOffset); });
      print(() => { keysHelper(lengthTrackingWithOffset); });
    } else {
      entriesHelper(fixedLength);
      valuesHelper(fixedLength);
      keysHelper(fixedLength);

      entriesHelper(fixedLengthWithOffset);
      valuesHelper(fixedLengthWithOffset);
      keysHelper(fixedLengthWithOffset);

      entriesHelper(lengthTracking);
      valuesHelper(lengthTracking);
      keysHelper(lengthTracking);

      entriesHelper(lengthTrackingWithOffset);
      valuesHelper(lengthTrackingWithOffset);
      keysHelper(lengthTrackingWithOffset);
    }
    print(() => { Array.from(entriesHelper(fixedLength)); });
    print(() => { Array.from(valuesHelper(fixedLength)); });
    print(() => { Array.from(keysHelper(fixedLength)); });

    print(() => { Array.from(entriesHelper(fixedLengthWithOffset)); });
    print(() => { Array.from(valuesHelper(fixedLengthWithOffset)); });
    print(() => { Array.from(keysHelper(fixedLengthWithOffset)); });

    print(() => { Array.from(entriesHelper(lengthTracking)); });
    print(() => { Array.from(valuesHelper(lengthTracking)); });
    print(() => { Array.from(keysHelper(lengthTracking)); });

    print(() => {
      Array.from(entriesHelper(lengthTrackingWithOffset)); });
    print(() => { Array.from(valuesHelper(lengthTrackingWithOffset)); });
    print(() => { Array.from(keysHelper(lengthTrackingWithOffset)); });
  }
}
EntriesKeysValues(
  TypedArrayEntriesHelper, TypedArrayKeysHelper, TypedArrayValuesHelper, true);
EntriesKeysValues(
  ArrayEntriesHelper, ArrayKeysHelper, ArrayValuesHelper, false);

function EveryDetachMidIteration(everyHelper, hasUndefined) {
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let values = [];
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
    return true;
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    values = [];
    detachAfter = 2;
    print(everyHelper(fixedLength, CollectValuesAndDetach));
    if (hasUndefined) {
      print([0, 2, undefined, undefined], values);
    } else {
      print([0, 2], values);
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print(everyHelper(fixedLengthWithOffset, CollectValuesAndDetach));
    if (hasUndefined) {
      print([4, undefined], values);
    } else {
      print([4], values);
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print(everyHelper(lengthTracking, CollectValuesAndDetach));
    if (hasUndefined) {
      print([0, 2, undefined, undefined], values);
    } else {
      print([0, 2], values);
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print(everyHelper(lengthTrackingWithOffset, CollectValuesAndDetach));
    if (hasUndefined) {
      print([4, undefined], values);
    } else {
      print([4], values);
    }
  }
}
EveryDetachMidIteration(TypedArrayEveryHelper, true);
EveryDetachMidIteration(ArrayEveryHelper, false);

function SomeDetachMidIteration(someHelper, hasUndefined) {
  
  
  
  
  
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
    print(someHelper(fixedLength, CollectValuesAndDetach));
    if (hasUndefined) {
      print([0, 2, undefined, undefined], values);
    } else {
      print([0, 2], values);
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print(someHelper(fixedLengthWithOffset, CollectValuesAndDetach));
    if (hasUndefined) {
      print([4, undefined], values);
    } else {
      print([4], values);
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print(someHelper(lengthTracking, CollectValuesAndDetach));
    if (hasUndefined) {
      print([0, 2, undefined, undefined], values);
    } else {
      print([0, 2], values);
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print(someHelper(lengthTrackingWithOffset, CollectValuesAndDetach));
    if (hasUndefined) {
      print([4, undefined], values);
    } else {
      print([4], values);
    }
  }
}
SomeDetachMidIteration(TypedArraySomeHelper, true);
SomeDetachMidIteration(ArraySomeHelper, false);

function FindDetachMidIteration(findHelper) {
  
  
  
  
  
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
    print(undefined, findHelper(fixedLength, CollectValuesAndDetach));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print(undefined,
                 findHelper(fixedLengthWithOffset, CollectValuesAndDetach));
    print([4, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print(undefined, findHelper(lengthTracking, CollectValuesAndDetach));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print(undefined,
                 findHelper(lengthTrackingWithOffset, CollectValuesAndDetach));
    print([4, undefined], values);
  }
}
FindDetachMidIteration(TypedArrayFindHelper);
FindDetachMidIteration(ArrayFindHelper);

function FindIndexDetachMidIteration(findIndexHelper) {
  
  
  
  
  
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
    print(-1, findIndexHelper(fixedLength, CollectValuesAndDetach));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print(-1,
                 findIndexHelper(fixedLengthWithOffset, CollectValuesAndDetach));
    print([4, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print(-1, findIndexHelper(lengthTracking, CollectValuesAndDetach));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print(-1,
        findIndexHelper(lengthTrackingWithOffset, CollectValuesAndDetach));
    print([4, undefined], values);
  }
}
FindIndexDetachMidIteration(TypedArrayFindIndexHelper);
FindIndexDetachMidIteration(ArrayFindIndexHelper);

function FindLastDetachMidIteration(findLastHelper) {
  
  
  
  
  
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
    print(undefined,
                 findLastHelper(fixedLength, CollectValuesAndDetach));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print(undefined,
      findLastHelper(fixedLengthWithOffset, CollectValuesAndDetach));
    print([6, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print(undefined,
                 findLastHelper(lengthTracking, CollectValuesAndDetach));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print(undefined,
        findLastHelper(lengthTrackingWithOffset, CollectValuesAndDetach));
    print([6, undefined], values);
  }
}
FindLastDetachMidIteration(TypedArrayFindLastHelper);
FindLastDetachMidIteration(ArrayFindLastHelper);

function FindLastIndexDetachMidIteration(findLastIndexHelper) {
  
  
  
  
  
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
    print(-1, findLastIndexHelper(fixedLength, CollectValuesAndDetach));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print(-1,
        findLastIndexHelper(fixedLengthWithOffset, CollectValuesAndDetach));
    print([6, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print(-1,
        findLastIndexHelper(lengthTracking, CollectValuesAndDetach));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print(-1,
        findLastIndexHelper(lengthTrackingWithOffset, CollectValuesAndDetach));
    print([6, undefined], values);
  }
}
FindLastIndexDetachMidIteration(TypedArrayFindLastIndexHelper);
FindLastIndexDetachMidIteration(ArrayFindLastIndexHelper);



(function FilterDetachMidIteration() {
  
  
  
  
  
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
    print([], ToNumbers(fixedLength.filter(CollectValuesAndDetach)));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    detachAfter = 1;
    print([], ToNumbers(fixedLengthWithOffset.filter(CollectValuesAndDetach)));
    print([4, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    detachAfter = 2;
    print([], ToNumbers(lengthTracking.filter(CollectValuesAndDetach)));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    detachAfter = 1;
    print([], ToNumbers(lengthTrackingWithOffset.filter(CollectValuesAndDetach)));
    print([4, undefined], values);
  }
})();

(function ForEachReduceReduceRightDetachMidIteration() {
  
  
  
  
  
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
    array.forEach(CollectValuesAndDetach);
    return values;
  }

  function ReduceHelper(array) {
    values = [];
    array.reduce((acc, n) => { CollectValuesAndDetach(n); }, "initial value");
    return values;
  }

  function ReduceRightHelper(array) {
    values = [];
    array.reduceRight((acc, n) => { CollectValuesAndDetach(n); },
                      "initial value");
    return values;
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    print([0, 2, undefined, undefined], ForEachHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    print([4, undefined], ForEachHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
    print([0, 2, undefined, undefined], ForEachHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    print([4, undefined], ForEachHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    print([0, 2, undefined, undefined], ReduceHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    print([4, undefined], ReduceHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
    print([0, 2, undefined, undefined], ReduceHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    print([4, undefined], ReduceHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    print([6, 4, undefined, undefined], ReduceRightHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    print([6, undefined], ReduceRightHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
   print([6, 4, undefined, undefined], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    print([6, undefined], ReduceRightHelper(lengthTrackingWithOffset));
  }
})();

function IncludesParameterConversionDetaches(includesHelper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(includesHelper(fixedLength, undefined));
    
    print(includesHelper(fixedLength, undefined, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(includesHelper(fixedLength, 0));
    
    print(includesHelper(fixedLength, 0, evil));
  }
}
IncludesParameterConversionDetaches(TypedArrayIncludesHelper);
IncludesParameterConversionDetaches(ArrayIncludesHelper);

function IndexOfParameterConversionDetaches(indexOfHelper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(0, indexOfHelper(lengthTracking, 0));
    
    print(-1, indexOfHelper(lengthTracking, 0, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(0, indexOfHelper(lengthTracking, 0));
    
    print(-1, indexOfHelper(lengthTracking, undefined, evil));
  }
}
IndexOfParameterConversionDetaches(TypedArrayIndexOfHelper);
IndexOfParameterConversionDetaches(ArrayIndexOfHelper);

function LastIndexOfParameterConversionDetaches(lastIndexOfHelper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 2;
    }};
    print(3, lastIndexOfHelper(lengthTracking, 0));
    
    print(-1, lastIndexOfHelper(lengthTracking, 0, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 2;
    }};
    print(3, lastIndexOfHelper(lengthTracking, 0));
    
    print(-1, lastIndexOfHelper(lengthTracking, undefined, evil));
  }
}
LastIndexOfParameterConversionDetaches(TypedArrayLastIndexOfHelper);
LastIndexOfParameterConversionDetaches(ArrayLastIndexOfHelper);

(function JoinToLocaleString() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    $.detachArrayBuffer(rab);

    print(() => { fixedLength.join(); });
    print(() => { fixedLength.toLocaleString(); });
    print(() => { fixedLengthWithOffset.join(); });
    print(() => { fixedLengthWithOffset.toLocaleString(); });
    print(() => { lengthTracking.join(); });
    print(() => { lengthTracking.toLocaleString(); });
    print(() => { lengthTrackingWithOffset.join(); });
    print(() => { lengthTrackingWithOffset.toLocaleString(); });
 }
})();

(function ArrayJoinToLocaleString() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    $.detachArrayBuffer(rab);

    print('', ArrayJoinHelper(fixedLength));
    print('', ArrayToLocaleStringHelper(fixedLength));
    print('', ArrayJoinHelper(fixedLengthWithOffset));
    print('', ArrayToLocaleStringHelper(fixedLengthWithOffset));
    print('', ArrayJoinHelper(lengthTracking));
    print('', ArrayToLocaleStringHelper(lengthTracking));
    print('', ArrayJoinHelper(lengthTrackingWithOffset));
    print('', ArrayToLocaleStringHelper(lengthTrackingWithOffset));
 }
})();

function JoinParameterConversionDetaches(joinHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { toString: () => {
      $.detachArrayBuffer(rab);
      return '.';
    }};
    
    
    
    print('...', joinHelper(fixedLength, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { toString: () => {
      $.detachArrayBuffer(rab);
      return '.';
    }};
    
    
    
    print('...', joinHelper(lengthTracking, evil));
  }
}
JoinParameterConversionDetaches(TypedArrayJoinHelper);
JoinParameterConversionDetaches(ArrayJoinHelper);

function ToLocaleStringNumberPrototypeToLocaleStringDetaches(
    toLocaleStringHelper) {
  const oldNumberPrototypeToLocaleString = Number.prototype.toLocaleString;
  const oldBigIntPrototypeToLocaleString = BigInt.prototype.toLocaleString;

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let detachAfter = 2;
    Number.prototype.toLocaleString = function() {
      --detachAfter;
      if (detachAfter == 0) {
        $.detachArrayBuffer(rab);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --detachAfter;
      if (detachAfter == 0) {
        $.detachArrayBuffer(rab);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,0,,', toLocaleStringHelper(fixedLength));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let detachAfter = 2;
    Number.prototype.toLocaleString = function() {
      --detachAfter;
      if (detachAfter == 0) {
        $.detachArrayBuffer(rab);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --detachAfter;
      if (detachAfter == 0) {
        $.detachArrayBuffer(rab);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,0,,', toLocaleStringHelper(lengthTracking));
  }

  Number.prototype.toLocaleString = oldNumberPrototypeToLocaleString;
  BigInt.prototype.toLocaleString = oldBigIntPrototypeToLocaleString;
}
ToLocaleStringNumberPrototypeToLocaleStringDetaches(
    TypedArrayToLocaleStringHelper);
ToLocaleStringNumberPrototypeToLocaleStringDetaches(ArrayToLocaleStringHelper);

function MapDetachMidIteration(mapHelper, hasUndefined) {
  
  
  
  
  
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
  function CollectValuesAndDetach(n, ix, ta) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == detachAfter) {
      $.detachArrayBuffer(rab);
    }
    
    
    if (IsBigIntTypedArray(ta)) {
      return 0n;
    } else {
      return 0;
    }
  }

  function Helper(array) {
    values = [];
    mapHelper(array, CollectValuesAndDetach);
    return values;
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAfter = 2;
    if (hasUndefined) {
      print([0, 2, undefined, undefined], Helper(fixedLength));
    } else {
      print([0, 2], Helper(fixedLength));
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAfter = 1;
    if (hasUndefined) {
      print([4, undefined], Helper(fixedLengthWithOffset));
    } else {
      print([4], Helper(fixedLengthWithOffset));
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAfter = 2;
    if (hasUndefined) {
      print([0, 2, undefined, undefined], Helper(lengthTracking));
    } else {
      print([0, 2], Helper(lengthTracking));
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAfter = 1;
    if (hasUndefined) {
      print([4, undefined], Helper(lengthTrackingWithOffset));
    } else {
      print([4], Helper(lengthTrackingWithOffset));
    }
  }
}
MapDetachMidIteration(TypedArrayMapHelper, true);
MapDetachMidIteration(ArrayMapHelper, false);

(function MapSpeciesCreateDetaches() {
  let values;
  let rab;
  function CollectValues(n, ix, ta) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    
    
    if (IsBigIntTypedArray(ta)) {
      return 0n;
    }
    return 0;
  }

  function Helper(array) {
    values = [];
    array.map(CollectValues);
    return values;
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);

    let detachWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (detachWhenConstructorCalled) {
          $.detachArrayBuffer(rab);
        }
      }
    };

    const fixedLength = new MyArray(rab, 0, 4);
    detachWhenConstructorCalled = true;
    print([undefined, undefined, undefined, undefined],
                 Helper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let detachWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (detachWhenConstructorCalled) {
          $.detachArrayBuffer(rab);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    detachWhenConstructorCalled = true;
    print([undefined, undefined, undefined, undefined],
                 Helper(lengthTracking));
  }
})();

(function SetSourceLengthGetterDetachesTarget() {
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let rab;
  function CreateSourceProxy(length) {
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          $.detachArrayBuffer(rab);
          return length;
        }
        return true; 
      }
    });
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    fixedLength.set(CreateSourceProxy(1));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    fixedLengthWithOffset.set(CreateSourceProxy(1));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    lengthTracking.set(CreateSourceProxy(1));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    lengthTrackingWithOffset.set(CreateSourceProxy(1));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    fixedLength.set(CreateSourceProxy(0));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    fixedLengthWithOffset.set(CreateSourceProxy(0));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    lengthTracking.set(CreateSourceProxy(0));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    lengthTrackingWithOffset.set(CreateSourceProxy(0));
  }
})();

(function SetDetachTargetMidIteration() {
  
  
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  let rab;
  
  
  let detachAt;
  function CreateSourceProxy(length) {
    let requestedIndices = [];
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          return length;
        }
        requestedIndices.push(prop);
        if (requestedIndices.length == detachAt) {
          $.detachArrayBuffer(rab);
        }
        return true; 
      }
    });
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    detachAt = 2;
    fixedLength.set(CreateSourceProxy(4));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    detachAt = 2;
    fixedLengthWithOffset.set(CreateSourceProxy(2));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    detachAt = 2;
    lengthTracking.set(CreateSourceProxy(2));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    detachAt = 2;
    lengthTrackingWithOffset.set(CreateSourceProxy(2));
  }
})();

(function Subarray() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    const fixedLengthSubFull = fixedLength.subarray(0);
    print([0, 2, 4, 6], ToNumbers(fixedLengthSubFull));
    const fixedLengthWithOffsetSubFull = fixedLengthWithOffset.subarray(0);
    print([4, 6], ToNumbers(fixedLengthWithOffsetSubFull));
    const lengthTrackingSubFull = lengthTracking.subarray(0);
    print([0, 2, 4, 6], ToNumbers(lengthTrackingSubFull));
    const lengthTrackingWithOffsetSubFull =
        lengthTrackingWithOffset.subarray(0);
    print([4, 6], ToNumbers(lengthTrackingWithOffsetSubFull));

    $.detachArrayBuffer(rab);

    
    print(0, fixedLengthSubFull.length);
    print(0, fixedLengthWithOffsetSubFull.length);
    print(0, lengthTrackingSubFull.length);
    print(0, lengthTrackingWithOffsetSubFull.length);

    
    print(() => { fixedLength.subarray(0); }, TypeError);
    print(() => { fixedLengthWithOffset.subarray(0); }, TypeError);
    print(() => { lengthTracking.subarray(0); }, TypeError);
    print(() => { lengthTrackingWithOffset.subarray(0); }, TypeError);
  }
})();

(function SubarrayParameterConversionDetaches() {
  
  
  
  function CreateRabForTest(ctor) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return rab;
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(() => { fixedLength.subarray(evil, 0); }, TypeError);
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(() => { fixedLength.subarray(evil, 0); }, TypeError);
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(() => { fixedLength.subarray(0, evil); }, TypeError);
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(() => { fixedLength.subarray(0, evil); }, TypeError);
  }
})();

function SortCallbackDetaches(sortHelper) {
  function WriteUnsortedData(taFull) {
    for (let i = 0; i < taFull.length; ++i) {
      WriteToTypedArray(taFull, i, 10 - i);
    }
  }

  let rab;
  function CustomComparison(a, b) {
    $.detachArrayBuffer(rab);
    return 0;
  }

  function AssertIsDetached(ta) {
    print(0, ta.byteLength);
    print(0, ta.byteOffset);
    print(0, ta.length);
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    try {
      sortHelper(fixedLength, CustomComparison);
    } catch {
      
    }
    AssertIsDetached(fixedLength);
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, 0);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    try {
      sortHelper(lengthTracking, CustomComparison);
    } catch {
      
    }
    AssertIsDetached(lengthTracking);
  }
}
SortCallbackDetaches(TypedArraySortHelper);
SortCallbackDetaches(ArraySortHelper);

(function ObjectDefineProperty() {
  for (let helper of
      [ObjectDefinePropertyHelper, ObjectDefinePropertiesHelper]) {
    for (let ctor of ctors) {
      const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                             8 * ctor.BYTES_PER_ELEMENT);
      const fixedLength = new ctor(rab, 0, 4);
      const fixedLengthWithOffset = new ctor(
          rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
      const lengthTracking = new ctor(rab, 0);
      const lengthTrackingWithOffset = new ctor(
          rab, 2 * ctor.BYTES_PER_ELEMENT);

      
      
      
      
      

      $.detachArrayBuffer(rab);

      print(() => { helper(fixedLength, 0, 8); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 0, 8); }, TypeError);
      print(() => { helper(lengthTracking, 0, 8); }, TypeError);
      print(() => { helper(lengthTrackingWithOffset, 0, 8); },
                   TypeError);
    }
  }
})();

(function ObjectDefinePropertyParameterConversionDetaches() {
  const helper = ObjectDefinePropertyHelper;
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = {toString: () => {
      $.detachArrayBuffer(rab);
      return 0;
    }};
    print(() => { helper(fixedLength, evil, 8); }, TypeError);
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, 0);
    const evil = {toString: () => {
        $.detachArrayBuffer(rab);
        return 0;
    }};
    print(() => { helper(lengthTracking, evil, 8); }, TypeError);
  }
})();

(function FunctionApply() {
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

    function func(...args) {
      return [...args];
    }

    print([0, 1, 2, 3], ToNumbers(func.apply(null, fixedLength)));
    print([2, 3], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([0, 1, 2, 3], ToNumbers(func.apply(null, lengthTracking)));
    print([2, 3], ToNumbers(func.apply(null, lengthTrackingWithOffset)));

    $.detachArrayBuffer(rab);

    print([], ToNumbers(func.apply(null, fixedLength)));
    print([], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([], ToNumbers(func.apply(null, lengthTracking)));
    print([], ToNumbers(func.apply(null, lengthTrackingWithOffset)));
  }
})();



(function SliceParameterConversionDetaches() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print(() => { fixedLength.slice(evil); }, TypeError);
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
    print([1, 2, 0, 0], ToNumbers(lengthTracking.slice(evil)));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

function AtParameterConversionDetaches(atHelper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => { $.detachArrayBuffer(rab); return 0;}};
    print(undefined, atHelper(fixedLength, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => { $.detachArrayBuffer(rab); return -1;}};
    
    print(undefined, atHelper(lengthTracking, evil));
  }
}
AtParameterConversionDetaches(TypedArrayAtHelper);
AtParameterConversionDetaches(ArrayAtHelper);

(function TypedArrayFrom() {
  AllBigIntMatchedCtorCombinations((targetCtor, sourceCtor) => {
    const rab = CreateResizableArrayBuffer(
        4 * sourceCtor.BYTES_PER_ELEMENT,
        8 * sourceCtor.BYTES_PER_ELEMENT);
    const fixedLength = new sourceCtor(rab, 0, 4);
    const fixedLengthWithOffset = new sourceCtor(
        rab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new sourceCtor(rab, 0);
    const lengthTrackingWithOffset = new sourceCtor(
        rab, 2 * sourceCtor.BYTES_PER_ELEMENT);

    $.detachArrayBuffer(rab);

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print(() => { targetCtor.from(lengthTracking); }, TypeError);
    print(() => { targetCtor.from(lengthTrackingWithOffset); },
                 TypeError);
  });

  AllBigIntUnmatchedCtorCombinations((targetCtor, sourceCtor) => {
    const rab = CreateResizableArrayBuffer(
        4 * sourceCtor.BYTES_PER_ELEMENT,
        8 * sourceCtor.BYTES_PER_ELEMENT);
    const fixedLength = new sourceCtor(rab, 0, 4);
    const fixedLengthWithOffset = new sourceCtor(
        rab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new sourceCtor(rab, 0);
    const lengthTrackingWithOffset = new sourceCtor(
        rab, 2 * sourceCtor.BYTES_PER_ELEMENT);

    $.detachArrayBuffer(rab);

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print(() => { targetCtor.from(lengthTracking); }, TypeError);
    print(() => { targetCtor.from(lengthTrackingWithOffset); },
                 TypeError);
  });
})();

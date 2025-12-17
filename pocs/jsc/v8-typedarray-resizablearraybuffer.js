"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function TypedArrayPrototype() {
  const rab = CreateResizableArrayBuffer(40, 80);
  const ab = new ArrayBuffer(80);

  for (let ctor of ctors) {
    const ta_rab = new ctor(rab, 0, 3);
    const ta_ab = new ctor(ab, 0, 3);
    print(ta_rab.__proto__, ta_ab.__proto__);
  }
})();

(function TypedArrayLengthAndByteLength() {
  const rab = CreateResizableArrayBuffer(40, 80);

  for (let ctor of ctors) {
    const ta = new ctor(rab, 0, 3);
    print(rab, ta.buffer);
    print(3, ta.length);
    print(3 * ctor.BYTES_PER_ELEMENT, ta.byteLength);

    const empty_ta = new ctor(rab, 0, 0);
    print(rab, empty_ta.buffer);
    print(0, empty_ta.length);
    print(0, empty_ta.byteLength);

    const ta_with_offset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 3);
    print(rab, ta_with_offset.buffer);
    print(3, ta_with_offset.length);
    print(3 * ctor.BYTES_PER_ELEMENT, ta_with_offset.byteLength);

    const empty_ta_with_offset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 0);
    print(rab, empty_ta_with_offset.buffer);
    print(0, empty_ta_with_offset.length);
    print(0, empty_ta_with_offset.byteLength);

    const length_tracking_ta = new ctor(rab);
    print(rab, length_tracking_ta.buffer);
    print(40 / ctor.BYTES_PER_ELEMENT, length_tracking_ta.length);
    print(40, length_tracking_ta.byteLength);

    const offset = 8;
    const length_tracking_ta_with_offset = new ctor(rab, offset);
    print(rab, length_tracking_ta_with_offset.buffer);
    print((40 - offset) / ctor.BYTES_PER_ELEMENT,
                 length_tracking_ta_with_offset.length);
    print(40 - offset, length_tracking_ta_with_offset.byteLength);

    const empty_length_tracking_ta_with_offset = new ctor(rab, 40);
    print(rab, empty_length_tracking_ta_with_offset.buffer);
    print(0, empty_length_tracking_ta_with_offset.length);
    print(0, empty_length_tracking_ta_with_offset.byteLength);
  }
})();

(function ConstructInvalid() {
  const rab = CreateResizableArrayBuffer(40, 80);

  for (let ctor of ctors) {
    
    print(() => { new ctor(rab, 0, 40 / ctor.BYTES_PER_ELEMENT + 1); },
                 RangeError);

    
    print(() => { new ctor(rab, 40 - ctor.BYTES_PER_ELEMENT, 2); },
                 RangeError);

    
    print(() => { new ctor(rab, 40, 1); }, RangeError);

    if (ctor.BYTES_PER_ELEMENT > 1) {
      
      print(() => { new ctor(rab, 1, 1); }, RangeError);
      print(() => { new ctor(rab, 1); }, RangeError);
    }
  }

  
  print(() => { new Int16Array(rab, 1, 1); }, RangeError,
               /start offset of Int16Array should be a multiple of 2/);

  print(() => { new Int16Array(rab, 38, 2); }, RangeError,
               /Invalid typed array length: 2/);
})();

(function ConstructFromTypedArray() {
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

    
    const taFull = new sourceCtor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taFull, i, i + 1);
    }

    
    
    
    
    

    print([1, 2, 3, 4], ToNumbers(new targetCtor(fixedLength)));
    print([3, 4], ToNumbers(new targetCtor(fixedLengthWithOffset)));
    print([1, 2, 3, 4], ToNumbers(new targetCtor(lengthTracking)));
    print([3, 4], ToNumbers(new targetCtor(lengthTrackingWithOffset)));

    
    rab.resize(3 * sourceCtor.BYTES_PER_ELEMENT);

    
    
    

    print(() => { new targetCtor(fixedLength); }, TypeError);
    print(() => { new targetCtor(fixedLengthWithOffset); }, TypeError);
    print([1, 2, 3], ToNumbers(new targetCtor(lengthTracking)));
    print([3], ToNumbers(new targetCtor(lengthTrackingWithOffset)));

    
    rab.resize(1 * sourceCtor.BYTES_PER_ELEMENT);

    print(() => { new targetCtor(fixedLength); }, TypeError);
    print(() => { new targetCtor(fixedLengthWithOffset); }, TypeError);
    print([1], ToNumbers(new targetCtor(lengthTracking)));
    print(() => { new targetCtor(lengthTrackingWithOffset); },
                 TypeError);

    
    rab.resize(0);

    print(() => { new targetCtor(fixedLength); }, TypeError);
    print(() => { new targetCtor(fixedLengthWithOffset); }, TypeError);
    print([], ToNumbers(new targetCtor(lengthTracking)));
    print(() => { new targetCtor(lengthTrackingWithOffset); },
                 TypeError);

    
    rab.resize(6 * sourceCtor.BYTES_PER_ELEMENT);

    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taFull, i, i + 1);
    }

    
    
    
    
    

    print([1, 2, 3, 4], ToNumbers(new targetCtor(fixedLength)));
    print([3, 4], ToNumbers(new targetCtor(fixedLengthWithOffset)));
    print([1, 2, 3, 4, 5, 6],
                 ToNumbers(new targetCtor(lengthTracking)));
    print([3, 4, 5, 6],
                 ToNumbers(new targetCtor(lengthTrackingWithOffset)));
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

    print(() => { new targetCtor(fixedLength); }, TypeError);
    print(() => { new targetCtor(fixedLengthWithOffset); }, TypeError);
    print(() => { new targetCtor(lengthTracking); }, TypeError);
    print(() => { new targetCtor(lengthTrackingWithOffset); },
                 TypeError);
  });
})();

(function TypedArrayLengthWhenResizedOutOfBounds1() {
  const rab = CreateResizableArrayBuffer(16, 40);

  
  let tas_and_lengths = [];
  for (let ctor of ctors) {
    const length = 8 / ctor.BYTES_PER_ELEMENT;
    tas_and_lengths.push([new ctor(rab, 0, length), length]);
  }

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  rab.resize(2);

  for (let [ta, length] of tas_and_lengths) {
    print(0, ta.length);
    print(0, ta.byteLength);
  }

  
  rab.resize(8);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  rab.resize(40);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }
})();


(function TypedArrayLengthWhenResizedOutOfBounds2() {
  const rab = CreateResizableArrayBuffer(20, 40);

  
  let tas_and_lengths = [];
  for (let ctor of ctors) {
    const length = 8 / ctor.BYTES_PER_ELEMENT;
    tas_and_lengths.push([new ctor(rab, 8, length), length]);
  }

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
    print(8, ta.byteOffset);
  }

  rab.resize(10);

  for (let [ta, length] of tas_and_lengths) {
    print(0, ta.length);
    print(0, ta.byteLength);
    print(0, ta.byteOffset);
  }

  
  rab.resize(16);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
    print(8, ta.byteOffset);
  }

  rab.resize(40);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
    print(8, ta.byteOffset);
  }
})();

(function LengthTracking1() {
  const rab = CreateResizableArrayBuffer(16, 40);

  let tas = [];
  for (let ctor of ctors) {
    tas.push(new ctor(rab));
  }

  for (let ta of tas) {
    print(16 / ta.BYTES_PER_ELEMENT, ta.length);
    print(16, ta.byteLength);
  }

  rab.resize(40);
  for (let ta of tas) {
    print(40 / ta.BYTES_PER_ELEMENT, ta.length);
    print(40, ta.byteLength);
  }

  
  rab.resize(19);
  for (let ta of tas) {
    const expected_length = Math.floor(19 / ta.BYTES_PER_ELEMENT);
    print(expected_length, ta.length);
    print(expected_length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  rab.resize(1);

  for (let ta of tas) {
    if (ta.BYTES_PER_ELEMENT == 1) {
      print(1, ta.length);
      print(1, ta.byteLength);
    } else {
      print(0, ta.length);
      print(0, ta.byteLength);
    }
  }

  rab.resize(0);

  for (let ta of tas) {
    print(0, ta.length);
    print(0, ta.byteLength);
  }

  rab.resize(8);

  for (let ta of tas) {
    print(8 / ta.BYTES_PER_ELEMENT, ta.length);
    print(8, ta.byteLength);
  }

  rab.resize(40);

  for (let ta of tas) {
    print(40 / ta.BYTES_PER_ELEMENT, ta.length);
    print(40, ta.byteLength);
  }
})();


(function LengthTracking2() {
  const rab = CreateResizableArrayBuffer(16, 40);

  const offset = 8;
  let tas = [];
  for (let ctor of ctors) {
    tas.push(new ctor(rab, offset));
  }

  for (let ta of tas) {
    print((16 - offset) / ta.BYTES_PER_ELEMENT, ta.length);
    print(16 - offset, ta.byteLength);
    print(offset, ta.byteOffset);
  }

  rab.resize(40);
  for (let ta of tas) {
    print((40 - offset) / ta.BYTES_PER_ELEMENT, ta.length);
    print(40 - offset, ta.byteLength);
    print(offset, ta.byteOffset);
  }

  
  rab.resize(20);
  for (let ta of tas) {
    const expected_length = Math.floor((20 - offset)/ ta.BYTES_PER_ELEMENT);
    print(expected_length, ta.length);
    print(expected_length * ta.BYTES_PER_ELEMENT, ta.byteLength);
    print(offset, ta.byteOffset);
  }

  
  rab.resize(7);

  for (let ta of tas) {
    print(0, ta.length);
    print(0, ta.byteLength);
    print(0, ta.byteOffset);
  }

  rab.resize(0);

  for (let ta of tas) {
    print(0, ta.length);
    print(0, ta.byteLength);
    print(0, ta.byteOffset);
  }

  rab.resize(8);

  for (let ta of tas) {
    print(0, ta.length);
    print(0, ta.byteLength);
    print(offset, ta.byteOffset);
  }

  
  
  rab.resize(offset + 1);

  for (let ta of tas) {
    if (ta.BYTES_PER_ELEMENT == 1) {
      print(1, ta.length);
      print(1, ta.byteLength);
      print(offset, ta.byteOffset);
    } else {
      print(0, ta.length);
      print(0, ta.byteLength);
      print(offset, ta.byteOffset);
    }
  }

  rab.resize(40);

  for (let ta of tas) {
    print((40 - offset) / ta.BYTES_PER_ELEMENT, ta.length);
    print(40 - offset, ta.byteLength);
    print(offset, ta.byteOffset);
  }
})();

(function AccessOutOfBoundsTypedArray() {
  for (let ctor of ctors) {
    if (ctor.BYTES_PER_ELEMENT != 1) {
      continue;
    }
    const rab = CreateResizableArrayBuffer(16, 40);
    const array = new ctor(rab, 0, 4);

    
    for (let i = 0; i < 4; ++i) {
      print(0, array[i]);
    }

    
    for (let i = 0; i < 4; ++i) {
      array[i] = i;
    }

    
    for (let i = 0; i < 4; ++i) {
      print(i, array[i]);
    }

    rab.resize(2);

    
    
    for (let i = 0; i < 4; ++i) {
      print(undefined, array[i]);
    }

    
    for (let i = 0; i < 4; ++i) {
      array[i] = 10;
    }

    rab.resize(4);

    
    for (let i = 0; i < 2; ++i) {
      print(i, array[i]);
    }
    
    for (let i = 2; i < 4; ++i) {
      print(0, array[i]);
    }

    rab.resize(40);

    
    for (let i = 0; i < 2; ++i) {
      print(i, array[i]);
    }
    for (let i = 2; i < 4; ++i) {
      print(0, array[i]);
    }
  }
})();

(function OutOfBoundsTypedArrayAndHas() {
  for (let ctor of ctors) {
    if (ctor.BYTES_PER_ELEMENT != 1) {
      continue;
    }
    const rab = CreateResizableArrayBuffer(16, 40);
    const array = new ctor(rab, 0, 4);

    
    for (let i = 0; i < 4; ++i) {
      print(i in array);
    }

    rab.resize(2);

    
    
    for (let i = 0; i < 4; ++i) {
      print(i in array);
    }

    rab.resize(4);

    
    for (let i = 0; i < 4; ++i) {
      print(i in array);
    }

    rab.resize(40);

    
    for (let i = 0; i < 4; ++i) {
      print(i in array);
    }
  }
})();

(function LoadFromOutOfBoundsTypedArrayWithFeedback() {
  function ReadElement2(ta) {
    return ta[2];
  }
  

  const rab = CreateResizableArrayBuffer(16, 40);

  const i8a = new Int8Array(rab, 0, 4);
  for (let i = 0; i < 3; ++i) {
    print(0, ReadElement2(i8a));
  }

  
  for (let i = 0; i < 4; ++i) {
    i8a[i] = i;
  }

  
  for (let i = 0; i < 3; ++i) {
    print(2, ReadElement2(i8a));
  }

  rab.resize(2);

  
  for (let i = 0; i < 3; ++i) {
    print(undefined, ReadElement2(i8a));
  }

  rab.resize(4);

  
  for (let i = 0; i < 3; ++i) {
    print(0, ReadElement2(i8a));
  }

  i8a[2] = 3;
  for (let i = 0; i < 3; ++i) {
    print(3, ReadElement2(i8a));
  }

  rab.resize(40);

  
  for (let i = 0; i < 3; ++i) {
    print(3, ReadElement2(i8a));
  }
})();

(function HasAndOutOfBoundsTypedArrayWithFeedback() {
  function HasElement2(ta) {
    return 2 in ta;
  }
  

  const rab = CreateResizableArrayBuffer(16, 40);

  const i8a = new Int8Array(rab, 0, 4);

  
  for (let i = 0; i < 3; ++i) {
    print(HasElement2(i8a));
  }

  rab.resize(2);

  
  for (let i = 0; i < 3; ++i) {
    print(HasElement2(i8a));
  }
  rab.resize(4);

  
  for (let i = 0; i < 3; ++i) {
    print(HasElement2(i8a));
  }

  rab.resize(40);

  
  for (let i = 0; i < 3; ++i) {
    print(HasElement2(i8a));
  }
})();

(function HasWithOffsetsWithFeedback() {
  function GetElements(ta) {
    let result = '';
    for (let i = 0; i < 8; ++i) {
      result += (i in ta) + ',';
      
    }
    return result;
  }
  

  const rab = CreateResizableArrayBuffer(4, 8);
  const fixedLength = new Int8Array(rab, 0, 4);
  const fixedLengthWithOffset = new Int8Array(rab, 1, 3);
  const lengthTracking = new Int8Array(rab, 0);
  const lengthTrackingWithOffset = new Int8Array(rab, 1);

  print('true,true,true,true,false,false,false,false,',
               GetElements(fixedLength));
  print('true,true,true,false,false,false,false,false,',
              GetElements(fixedLengthWithOffset));
  print('true,true,true,true,false,false,false,false,',
              GetElements(lengthTracking));
  print('true,true,true,false,false,false,false,false,',
              GetElements(lengthTrackingWithOffset));

  rab.resize(2);

  print('false,false,false,false,false,false,false,false,',
               GetElements(fixedLength));
  print('false,false,false,false,false,false,false,false,',
              GetElements(fixedLengthWithOffset));
  print('true,true,false,false,false,false,false,false,',
              GetElements(lengthTracking));
  print('true,false,false,false,false,false,false,false,',
              GetElements(lengthTrackingWithOffset));

  
  rab.resize(1);
  print('false,false,false,false,false,false,false,false,',
               GetElements(fixedLength));
  print('false,false,false,false,false,false,false,false,',
              GetElements(fixedLengthWithOffset));
  print('true,false,false,false,false,false,false,false,',
              GetElements(lengthTracking));
  print('false,false,false,false,false,false,false,false,',
              GetElements(lengthTrackingWithOffset));

  rab.resize(8);

  print('true,true,true,true,false,false,false,false,',
               GetElements(fixedLength));
  print('true,true,true,false,false,false,false,false,',
               GetElements(fixedLengthWithOffset));
  print('true,true,true,true,true,true,true,true,',
               GetElements(lengthTracking));
  print('true,true,true,true,true,true,true,false,',
               GetElements(lengthTrackingWithOffset));
})();

(function StoreToOutOfBoundsTypedArrayWithFeedback() {
  function WriteElement2(ta, i) {
    ta[2] = i;
  }
  

  const rab = CreateResizableArrayBuffer(16, 40);

  const i8a = new Int8Array(rab, 0, 4);
  print(0, i8a[2]);

  
  for (let i = 0; i < 3; ++i) {
    WriteElement2(i8a, 3);
  }
  
  for (let i = 0; i < 3; ++i) {
    print(3, i8a[2]);
  }

  rab.resize(2);

  
  for (let i = 0; i < 3; ++i) {
    WriteElement2(i8a, 4);
  }

  rab.resize(4);

  
  for (let i = 0; i < 3; ++i) {
    print(0, i8a[2]);
  }

  
  for (let i = 0; i < 3; ++i) {
    WriteElement2(i8a, 5);
  }

  rab.resize(40);

  
  for (let i = 0; i < 3; ++i) {
    print(5, i8a[2]);
  }
})();

(function OOBBehavesLikeDetached() {
  function ReadElement2(ta) {
    return ta[2];
  }
  function HasElement2(ta) {
    return 2 in ta;
  }

  const rab = CreateResizableArrayBuffer(16, 40);
  const i8a = new Int8Array(rab, 0, 4);
  i8a.__proto__ = {2: 'wrong value'};
  i8a[2] = 10;
  print(10, ReadElement2(i8a));
  print(HasElement2(i8a));

  rab.resize(0);
  print(undefined, ReadElement2(i8a));
  print(HasElement2(i8a));
})();

(function OOBBehavesLikeDetachedWithFeedback() {
  function ReadElement2(ta) {
    return ta[2];
  }
  function HasElement2(ta) {
    return 2 in ta;
  }
  
  

  const rab = CreateResizableArrayBuffer(16, 40);
  const i8a = new Int8Array(rab, 0, 4);
  i8a.__proto__ = {2: 'wrong value'};
  i8a[2] = 10;
  for (let i = 0; i < 3; ++i) {
    print(10, ReadElement2(i8a));
    print(HasElement2(i8a));
  }
  rab.resize(0);

  for (let i = 0; i < 3; ++i) {
    print(undefined, ReadElement2(i8a));
    print(HasElement2(i8a));
  }
})();

(function EnumerateElements() {
  let rab = CreateResizableArrayBuffer(100, 200);
  for (let ctor of ctors) {
    const ta = new ctor(rab, 0, 3);
    let keys = '';
    for (const key in ta) {
      keys += key;
    }
    print('012', keys);
  }
}());

(function IterateTypedArray() {
  const no_elements = 10;
  const offset = 2;

  function TestIteration(ta, expected) {
    let values = [];
    for (const value of ta) {
      values.push(Number(value));
    }
    print(expected, values);
  }

  for (let ctor of ctors) {
    const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
    
    
    const rab = CreateResizableArrayBuffer(buffer_byte_length,
                                         2 * buffer_byte_length);
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    let ta_write = new ctor(rab);
    for (let i = 0; i < no_elements; ++i) {
      WriteToTypedArray(ta_write, i, i % 128);
    }

    
    
    const ta = new ctor(rab, 0, 3);
    TestIteration(ta, [0, 1, 2]);

    const empty_ta = new ctor(rab, 0, 0);
    TestIteration(empty_ta, []);

    const ta_with_offset = new ctor(rab, byte_offset, 3);
    TestIteration(ta_with_offset, [2, 3, 4]);

    const empty_ta_with_offset = new ctor(rab, byte_offset, 0);
    TestIteration(empty_ta_with_offset, []);

    const length_tracking_ta = new ctor(rab);
    {
      let expected = [];
      for (let i = 0; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      TestIteration(length_tracking_ta, expected);
    }

    const length_tracking_ta_with_offset = new ctor(rab, byte_offset);
    {
      let expected = [];
      for (let i = offset; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      TestIteration(length_tracking_ta_with_offset, expected);
    }

    const empty_length_tracking_ta_with_offset = new ctor(rab, buffer_byte_length);
    TestIteration(empty_length_tracking_ta_with_offset, []);
  }
}());


function CreateRab(buffer_byte_length, ctor) {
  const rab = CreateResizableArrayBuffer(buffer_byte_length,
                                         2 * buffer_byte_length);
  
  let ta_write = new ctor(rab);
  for (let i = 0; i < buffer_byte_length / ctor.BYTES_PER_ELEMENT; ++i) {
    WriteToTypedArray(ta_write, i, i % 128);
  }
  return rab;
}

function TestIterationAndResize(ta, expected, rab, resize_after,
                                new_byte_length) {
  let values = [];
  let resized = false;
  for (const value of ta) {
    if (value instanceof Array) {
      
      values.push([value[0], Number(value[1])]);
    } else {
      values.push(Number(value));
    }
    if (!resized && values.length == resize_after) {
      rab.resize(new_byte_length);
      resized = true;
    }
  }
  print(expected, values);
  print(resized);
}

(function IterateTypedArrayAndGrowMidIteration() {
  const no_elements = 10;
  const offset = 2;

  for (let ctor of ctors) {
    const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    

    
    let rab = CreateRab(buffer_byte_length, ctor);
    const ta = new ctor(rab, 0, 3);
    TestIterationAndResize(ta, [0, 1, 2], rab, 2, buffer_byte_length * 2);

    rab = CreateRab(buffer_byte_length, ctor);
    const ta_with_offset = new ctor(rab, byte_offset, 3);
    TestIterationAndResize(ta_with_offset, [2, 3, 4], rab, 2,
                           buffer_byte_length * 2);

    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta = new ctor(rab);
    {
      let expected = [];
      for (let i = 0; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }

      TestIterationAndResize(length_tracking_ta, expected, rab, 2,
                             buffer_byte_length * 2);
    }

    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset = new ctor(rab, byte_offset);
    {
      let expected = [];
      for (let i = offset; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }
      TestIterationAndResize(length_tracking_ta_with_offset, expected, rab, 2,
                             buffer_byte_length * 2);
    }
  }
}());

(function IterateTypedArrayAndGrowJustBeforeIterationWouldEnd() {
  const no_elements = 10;
  const offset = 2;

  
  for (let ctor of ctors) {
    const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    

    let rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta = new ctor(rab);
    {
      let expected = [];
      for (let i = 0; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }

      TestIterationAndResize(length_tracking_ta, expected, rab, no_elements,
                             buffer_byte_length * 2);
    }

    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset = new ctor(rab, byte_offset);
    {
      let expected = [];
      for (let i = offset; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }
      TestIterationAndResize(length_tracking_ta_with_offset, expected, rab,
                             no_elements - offset, buffer_byte_length * 2);
    }
  }
}());

(function IterateTypedArrayAndShrinkMidIteration() {
  const no_elements = 10;
  const offset = 2;

  for (let ctor of ctors) {
    const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    

    
    
    let rab = CreateRab(buffer_byte_length, ctor);
    const ta1 = new ctor(rab, 0, 3);
    TestIterationAndResize(ta1, [0, 1, 2], rab, 2, buffer_byte_length / 2);

    rab = CreateRab(buffer_byte_length, ctor);
    const ta2 = new ctor(rab, 0, 3);
    print(() => { TestIterationAndResize(ta2, null, rab, 2, 1)});

    rab = CreateRab(buffer_byte_length, ctor);
    const ta_with_offset1 = new ctor(rab, byte_offset, 3);
    TestIterationAndResize(ta_with_offset1, [2, 3, 4], rab, 2,
                           buffer_byte_length / 2);

    rab = CreateRab(buffer_byte_length, ctor);
    const ta_with_offset2 = new ctor(rab, byte_offset, 3);
    print(() => {
        TestIterationAndResize(ta_with_offset2, null, rab, 2, 0); });

    
    
    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta = new ctor(rab);
    TestIterationAndResize(length_tracking_ta, [0, 1, 2, 3, 4], rab, 2,
                           buffer_byte_length / 2);

    
    
    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset1 = new ctor(rab, byte_offset);
    print(() => {
        TestIterationAndResize(length_tracking_ta_with_offset1, null, rab, 2,
                               byte_offset / 2);
    });

    
    
    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset2 = new ctor(rab, byte_offset);
    TestIterationAndResize(length_tracking_ta_with_offset2, [2, 3], rab, 2,
                           byte_offset);
  }
}());

(function IterateTypedArrayAndShrinkToZeroMidIteration() {
  const no_elements = 10;
  const offset = 2;

  for (let ctor of ctors) {
    const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    

    
    let rab = CreateRab(buffer_byte_length, ctor);
    const ta = new ctor(rab, 0, 3);
    print(() => { TestIterationAndResize(ta, null, rab, 2, 0)});

    rab = CreateRab(buffer_byte_length, ctor);
    const ta_with_offset = new ctor(rab, byte_offset, 3);
    print(() => {
        TestIterationAndResize(ta_with_offset, null, rab, 2, 0); });

    
    
    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta = new ctor(rab);
    TestIterationAndResize(length_tracking_ta, [0, 1], rab, 2, 0);

    
    rab = CreateRab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset = new ctor(rab, byte_offset);
    print(() => {
        TestIterationAndResize(length_tracking_ta_with_offset, null, rab, 2, 0);
    });
  }
}());

(function Destructuring() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    let ta_write = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(ta_write, i, i);
    }

    {
      let [a, b, c, d, e] = fixedLength;
      print([0, 1, 2, 3], ToNumbers([a, b, c, d]));
      print(undefined, e);
    }

    {
      let [a, b, c] = fixedLengthWithOffset;
      print([2, 3], ToNumbers([a, b]));
      print(undefined, c);
    }

    {
      let [a, b, c, d, e] = lengthTracking;
      print([0, 1, 2, 3], ToNumbers([a, b, c, d]));
      print(undefined, e);
    }

    {
      let [a, b, c] = lengthTrackingWithOffset;
      print([2, 3], ToNumbers([a, b]));
      print(undefined, c);
    }

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    print(() => { let [a, b, c] = fixedLength; }, TypeError);
    print(() => { let [a, b, c] = fixedLengthWithOffset; }, TypeError);

    {
      let [a, b, c, d] = lengthTracking;
      print([0, 1, 2], ToNumbers([a, b, c]));
      print(undefined, d);
    }

    {
      let [a, b] = lengthTrackingWithOffset;
      print([2], ToNumbers([a]));
      print(undefined, b);
    }

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print(() => { let [a, b, c] = fixedLength; }, TypeError);
    print(() => { let [a, b, c] = fixedLengthWithOffset; }, TypeError);
    print(() => { let [a, b, c] = lengthTrackingWithOffset; },
                 TypeError);

    {
      let [a, b] = lengthTracking;
      print([0], ToNumbers([a]));
      print(undefined, b);
    }

    
    rab.resize(0);

    print(() => { let [a, b, c] = fixedLength; }, TypeError);
    print(() => { let [a, b, c] = fixedLengthWithOffset; }, TypeError);
    print(() => { let [a, b, c] = lengthTrackingWithOffset; },
                 TypeError);

    {
      let [a] = lengthTracking;
      print(undefined, a);
    }

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    {
      let [a, b, c, d, e] = fixedLength;
      print([0, 0, 0, 0], ToNumbers([a, b, c, d]));
      print(undefined, e);
    }

    {
      let [a, b, c] = fixedLengthWithOffset;
      print([0, 0], ToNumbers([a, b]));
      print(undefined, c);
    }

    {
      let [a, b, c, d, e, f, g] = lengthTracking;
      print([0, 0, 0, 0, 0, 0], ToNumbers([a, b, c, d, e, f]));
      print(undefined, g);
    }

    {
      let [a, b, c, d, e] = lengthTrackingWithOffset;
      print([0, 0, 0, 0], ToNumbers([a, b, c, d]));
      print(undefined, e);
    }
  }
}());

function TestFill(helper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    print([0, 0, 0, 0], ReadDataFromBuffer(rab, ctor));

    helper(fixedLength, 1);
    print([1, 1, 1, 1], ReadDataFromBuffer(rab, ctor));

    helper(fixedLengthWithOffset, 2);
    print([1, 1, 2, 2], ReadDataFromBuffer(rab, ctor));

    helper(lengthTracking, 3);
    print([3, 3, 3, 3], ReadDataFromBuffer(rab, ctor));

    helper(lengthTrackingWithOffset, 4);
    print([3, 3, 4, 4], ReadDataFromBuffer(rab, ctor));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => helper(fixedLength, 5), TypeError);
      print(() => helper(fixedLengthWithOffset, 6), TypeError);
    } else {
      helper(fixedLength, 5);
      helper(fixedLengthWithOffset, 6);
      
    }
    print([3, 3, 4], ReadDataFromBuffer(rab, ctor));

    helper(lengthTracking, 7);
    print([7, 7, 7], ReadDataFromBuffer(rab, ctor));

    helper(lengthTrackingWithOffset, 8);
    print([7, 7, 8], ReadDataFromBuffer(rab, ctor));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => helper(fixedLength, 9), TypeError);
      print(() => helper(fixedLengthWithOffset, 10), TypeError);
      print(() => helper(lengthTrackingWithOffset, 11), TypeError);
    } else {
      
      helper(fixedLength, 9);
      helper(fixedLengthWithOffset, 10);
      helper(lengthTrackingWithOffset, 11);
    }
    print([7], ReadDataFromBuffer(rab, ctor));

    helper(lengthTracking, 12);
    print([12], ReadDataFromBuffer(rab, ctor));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    helper(fixedLength, 13);
    print([13, 13, 13, 13, 0, 0], ReadDataFromBuffer(rab, ctor));

    helper(fixedLengthWithOffset, 14);
    print([13, 13, 14, 14, 0, 0], ReadDataFromBuffer(rab, ctor));

    helper(lengthTracking, 15);
    print([15, 15, 15, 15, 15, 15], ReadDataFromBuffer(rab, ctor));

    helper(lengthTrackingWithOffset, 16);
    print([15, 15, 16, 16, 16, 16], ReadDataFromBuffer(rab, ctor));

    
    helper(fixedLength, 17, 1, 3);
    print([15, 17, 17, 16, 16, 16], ReadDataFromBuffer(rab, ctor));

    helper(fixedLengthWithOffset, 18, 1, 2);
    print([15, 17, 17, 18, 16, 16], ReadDataFromBuffer(rab, ctor));

    helper(lengthTracking, 19, 1, 3);
    print([15, 19, 19, 18, 16, 16], ReadDataFromBuffer(rab, ctor));

    helper(lengthTrackingWithOffset, 20, 1, 2);
    print([15, 19, 19, 20, 16, 16], ReadDataFromBuffer(rab, ctor));
  }
}
TestFill(TypedArrayFillHelper, true);
TestFill(ArrayFillHelper, false);

(function FillParameterConversionResizes() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 3;
    }};
    print(
        () => { TypedArrayFillHelper(fixedLength, evil, 1, 2); }, TypeError);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 1;
    }};
    print(
        () => { TypedArrayFillHelper(fixedLength, 3, evil, 2); }, TypeError);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 2;
    }};
    print(
        () => { TypedArrayFillHelper(fixedLength, 3, 1, evil); }, TypeError);
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 1;
    }};
    TypedArrayFillHelper(lengthTracking, evil, 0, 4);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 0;
    }};
    TypedArrayFillHelper(lengthTracking, 1, evil, 4);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 4;
    }};
    TypedArrayFillHelper(lengthTracking, 1, 0, evil);
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return 1;
    }};
    TypedArrayFillHelper(lengthTracking, evil, 0, 4);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return 0;
    }};
    TypedArrayFillHelper(lengthTracking, 1, evil, 4);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return 4;
    }};
    TypedArrayFillHelper(lengthTracking, 1, 0, evil);
  }
})();

(function ArrayFillParameterConversionResizes() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 3;
    }};
    ArrayFillHelper(fixedLength, evil, 1, 2);
    
    
    print([0, 0], ReadDataFromBuffer(rab, ctor));
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 1;
    }};
    ArrayFillHelper(fixedLength, 3, evil, 2);
    print([0, 0], ReadDataFromBuffer(rab, ctor));
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 2;
    }};
    ArrayFillHelper(fixedLength, 3, 1, evil);
    print([0, 0], ReadDataFromBuffer(rab, ctor));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 3;
    }};
    ArrayFillHelper(lengthTracking, evil, 0, 4);
    print([3, 3], ReadDataFromBuffer(rab, ctor));
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 0;
    }};
    ArrayFillHelper(lengthTracking, 3, evil, 4);
    print([3, 3], ReadDataFromBuffer(rab, ctor));
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 4;
    }};
    ArrayFillHelper(lengthTracking, 3, 0, evil);
    print([3, 3], ReadDataFromBuffer(rab, ctor));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return 3;
    }};
    ArrayFillHelper(lengthTracking, evil, 0, 4);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return 0;
    }};
    ArrayFillHelper(lengthTracking, 3, evil, 4);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return 4;
    }};
    ArrayFillHelper(lengthTracking, 3, 0, evil);
  }
})();

function At(atHelper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    let ta_write = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(ta_write, i, i);
    }

    print(3, atHelper(fixedLength, -1));
    print(3, atHelper(lengthTracking, -1));
    print(3, atHelper(fixedLengthWithOffset, -1));
    print(3, atHelper(lengthTrackingWithOffset, -1));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { atHelper(fixedLength, -1); });
      print(() => { atHelper(fixedLengthWithOffset, -1); });
    } else {
      print(undefined, atHelper(fixedLength, -1));
      print(undefined, atHelper(fixedLengthWithOffset, -1));
    }

    print(2, atHelper(lengthTracking, -1));
    print(2, atHelper(lengthTrackingWithOffset, -1));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { atHelper(fixedLength, -1); });
      print(() => { atHelper(fixedLengthWithOffset, -1); });
      print(() => { atHelper(lengthTrackingWithOffset, -1); });
    } else {
      print(undefined, atHelper(fixedLength, -1));
      print(undefined, atHelper(fixedLengthWithOffset, -1));
      print(undefined, atHelper(lengthTrackingWithOffset, -1));
    }
    print(0, atHelper(lengthTracking, -1));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    print(0, atHelper(fixedLength, -1));
    print(0, atHelper(lengthTracking, -1));
    print(0, atHelper(fixedLengthWithOffset, -1));
    print(0, atHelper(lengthTrackingWithOffset, -1));
  }
}
At(TypedArrayAtHelper, true);
At(ArrayAtHelper, false);

function AtParameterConversionResizes(atHelper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 0;
    }};
    print(undefined, atHelper(fixedLength, evil));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return -1;
    }};
    
    print(undefined, atHelper(lengthTracking, evil));
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    WriteToTypedArray(lengthTracking, 0, 25);

    const evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT); return 0;
    }};
    
    print(25, atHelper(lengthTracking, evil));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    const evil = { valueOf: () => {
      rab.resize(0); return -1;
    }};
    
    print(undefined, atHelper(lengthTracking, evil));
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    WriteToTypedArray(lengthTracking, 0, 25);

    const evil = { valueOf: () => {
      rab.resize(0); return 0;
    }};
    
    print(undefined, atHelper(lengthTracking, evil));
  }
}
AtParameterConversionResizes(TypedArrayAtHelper);
AtParameterConversionResizes(ArrayAtHelper);



(function Slice() {
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

    const fixedLengthSlice = fixedLength.slice();
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print(fixedLengthSlice.buffer.resizable);

    const fixedLengthWithOffsetSlice = fixedLengthWithOffset.slice();
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print(fixedLengthWithOffsetSlice.buffer.resizable);

    const lengthTrackingSlice = lengthTracking.slice();
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print(lengthTrackingSlice.buffer.resizable);

    const lengthTrackingWithOffsetSlice = lengthTrackingWithOffset.slice();
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));
    print(lengthTrackingWithOffsetSlice.buffer.resizable);

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    print(() => { fixedLength.slice(); });
    print(() => { fixedLengthWithOffset.slice(); });
    print([0, 1, 2], ToNumbers(lengthTracking.slice()));
    print([2], ToNumbers(lengthTrackingWithOffset.slice()));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print(() => { fixedLength.slice(); });
    print(() => { fixedLengthWithOffset.slice(); });
    print([0], ToNumbers(lengthTracking.slice()));
    print(() => { lengthTrackingWithOffset.slice(); });

     
    rab.resize(0);

    print(() => { fixedLength.slice(); });
    print(() => { fixedLengthWithOffset.slice(); });
    print([], ToNumbers(lengthTracking.slice()));
    print(() => { lengthTrackingWithOffset.slice(); });

    
    
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 0, 0, 0], ToNumbers(fixedLength.slice()));
    print([0, 0], ToNumbers(fixedLengthWithOffset.slice()));
    print([0, 0, 0, 0, 0, 0], ToNumbers(lengthTracking.slice()));
    print([0, 0, 0, 0], ToNumbers(lengthTrackingWithOffset.slice()));
  }
})();



(function SliceParameterConversionShrinks() {
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
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { rab.resize(0);
                                    return 0; }};
    print([0, 0, 0, 0], ToNumbers(lengthTracking.slice(evil)));
    print(0, rab.byteLength);
  }
})();

function SliceParameterConversionGrows(sliceHelper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { rab.resize(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print([1, 2, 3, 4], ToNumbers(sliceHelper(lengthTracking, evil)));
    print(6 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
}
SliceParameterConversionGrows(TypedArraySliceHelper);
SliceParameterConversionGrows(ArraySliceHelper);



(function SliceSpeciesCreateResizes() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const fixedLength = new MyArray(rab, 0, 4);
    resizeWhenConstructorCalled = true;
    print(() => { fixedLength.slice(); }, TypeError);
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 1);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    resizeWhenConstructorCalled = true;
    const a = lengthTracking.slice();
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
    
    
    print(4, a.length);
    print([1, 1, 0, 0], ToNumbers(a));
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 1);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    resizeWhenConstructorCalled = true;
    const a = lengthTracking.slice(-3, -1);
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
    
    
    print(2, a.length);
    print([1, 0], ToNumbers(a));
  }

  
  {
    const rab = CreateResizableArrayBuffer(8, 16);

    
    const taWrite = new Uint8Array(rab);
    for (let i = 0; i < 8; ++i) {
      WriteToTypedArray(taWrite, i, 255);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends Uint16Array {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          
          rab.resize(5);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    print([65535, 65535, 65535, 65535], ToNumbers(lengthTracking));
    resizeWhenConstructorCalled = true;
    const a = lengthTracking.slice();
    print(5, rab.byteLength);
    print(4, a.length); 
    print(65535, a[0]);
    print(65535, a[1]);
    print(0, a[2]);
    print(0, a[3]);
  }
})();

function TestCopyWithin(helper, oobThrows) {
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

    
    
    
    
    

    helper(fixedLength, 0, 2);
    print([2, 3, 2, 3], ToNumbers(fixedLength));

    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    helper(fixedLengthWithOffset, 0, 1);
    print([3, 3], ToNumbers(fixedLengthWithOffset));

    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    helper(lengthTracking, 0, 2);
    print([2, 3, 2, 3], ToNumbers(lengthTracking));

    helper(lengthTrackingWithOffset, 0, 1);
    print([3, 3], ToNumbers(lengthTrackingWithOffset));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 3; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    

    if (oobThrows) {
      print(() => { helper(fixedLength, 0, 1); });
      print(() => { helper(fixedLengthWithOffset, 0, 1); });
    } else {
      helper(fixedLength, 0, 1);
      helper(fixedLengthWithOffset, 0, 1);
      
    }
    print([0, 1, 2], ToNumbers(lengthTracking));
    helper(lengthTracking, 0, 1);
    print([1, 2, 2], ToNumbers(lengthTracking));
    helper(lengthTrackingWithOffset, 0, 1);
    print([2], ToNumbers(lengthTrackingWithOffset));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    WriteToTypedArray(taWrite, 0, 0);

    if (oobThrows) {
      print(() => { helper(fixedLength, 0, 1, 1); });
      print(() => { helper(fixedLengthWithOffset, 0, 1, 1); });
      print(() => { helper(lengthTrackingWithOffset, 0, 1, 1); });
    } else {
      helper(fixedLength, 0, 1, 1);
      helper(fixedLengthWithOffset, 0, 1, 1);
      helper(lengthTrackingWithOffset, 0, 1, 1);
    }
    print([0], ToNumbers(lengthTracking));
    helper(lengthTracking, 0, 0, 1);
    print([0], ToNumbers(lengthTracking));

     
    rab.resize(0);

    if (oobThrows) {
      print(() => { helper(fixedLength, 0, 1, 1); });
      print(() => { helper(fixedLengthWithOffset, 0, 1, 1); });
      print(() => { helper(lengthTrackingWithOffset, 0, 1, 1); });
    } else {
      helper(fixedLength, 0, 1, 1);
      helper(fixedLengthWithOffset, 0, 1, 1);
      helper(lengthTrackingWithOffset, 0, 1, 1);
    }
    print([], ToNumbers(lengthTracking));
    helper(lengthTracking, 0, 0, 1);
    print([], ToNumbers(lengthTracking));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    
    
    

    helper(fixedLength, 0, 2);
    print([2, 3, 2, 3], ToNumbers(fixedLength));

    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    helper(fixedLengthWithOffset, 0, 1);
    print([3, 3], ToNumbers(fixedLengthWithOffset));

    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    helper(lengthTracking, 0, 2);
    print([2, 3, 4, 5, 4, 5], ToNumbers(lengthTracking));

    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    helper(lengthTrackingWithOffset, 0, 1);
    print([3, 4, 5, 5], ToNumbers(lengthTrackingWithOffset));
  }
}
TestCopyWithin(TypedArrayCopyWithinHelper, true);
TestCopyWithin(ArrayCopyWithinHelper, false);

(function CopyWithinParameterConversionShrinks() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 2;}};
    print(() => { fixedLength.copyWithin(evil, 0, 1); }, TypeError);
    rab.resize(4 * ctor.BYTES_PER_ELEMENT);
    print(() => { fixedLength.copyWithin(0, evil, 3); }, TypeError);
    rab.resize(4 * ctor.BYTES_PER_ELEMENT);
    print(() => { fixedLength.copyWithin(0, 1, evil); }, TypeError);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }
    
    
    
    
    
    const evil = { valueOf: () => { rab.resize(3 * ctor.BYTES_PER_ELEMENT);
                                    return 2;}};
    lengthTracking.copyWithin(evil, 0);
    print([0, 1, 0], ToNumbers(lengthTracking));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }
    
    
    
    
    
    const evil = { valueOf: () => { rab.resize(3 * ctor.BYTES_PER_ELEMENT);
                                    return 2;}};
    lengthTracking.copyWithin(0, evil);
    print([2, 1, 2], ToNumbers(lengthTracking));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }
    
    
    
    
    
    const evil = { valueOf: () => { rab.resize(0); return 2; }};
    lengthTracking.copyWithin(0, evil);
    print([], ToNumbers(lengthTracking));
  }
})();

(function CopyWithinParameterConversionGrows() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    const evil = { valueOf: () => { rab.resize(6 * ctor.BYTES_PER_ELEMENT);
                                    WriteToTypedArray(lengthTracking, 4, 4);
                                    WriteToTypedArray(lengthTracking, 5, 5);
                                    return 0;} };
    
    
    
    lengthTracking.copyWithin(evil, 2);
    print([2, 3, 2, 3, 4, 5], ToNumbers(lengthTracking));

    rab.resize(4 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    
    
    
    lengthTracking.copyWithin(2, evil);
    print([0, 1, 0, 1, 4, 5], ToNumbers(lengthTracking));
  }
})();

function EntriesKeysValues(entriesHelper, keysHelper, valuesHelper,
  valuesFromEntries, valuesFromValues, oobThrows) {
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

    
    
    
    
    

    print([0, 2, 4, 6], valuesFromEntries(fixedLength));
    print([0, 2, 4, 6], valuesFromValues(fixedLength));
    print([0, 1, 2, 3], Array.from(keysHelper(fixedLength)));

    print([4, 6], valuesFromEntries(fixedLengthWithOffset));
    print([4, 6], valuesFromValues(fixedLengthWithOffset));
    print([0, 1], Array.from(keysHelper(fixedLengthWithOffset)));

    print([0, 2, 4, 6], valuesFromEntries(lengthTracking));
    print([0, 2, 4, 6], valuesFromValues(lengthTracking));
    print([0, 1, 2, 3], Array.from(keysHelper(lengthTracking)));

    print([4, 6], valuesFromEntries(lengthTrackingWithOffset));
    print([4, 6], valuesFromValues(lengthTrackingWithOffset));
    print([0, 1], Array.from(keysHelper(lengthTrackingWithOffset)));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    
    
    
    if (oobThrows) {
      print(() => { entriesHelper(fixedLength); });
      print(() => { valuesHelper(fixedLength); });
      print(() => { keysHelper(fixedLength); });

      print(() => { entriesHelper(fixedLengthWithOffset); });
      print(() => { valuesHelper(fixedLengthWithOffset); });
      print(() => { keysHelper(fixedLengthWithOffset); });
    } else {
      entriesHelper(fixedLength);
      valuesHelper(fixedLength);
      keysHelper(fixedLength);

      entriesHelper(fixedLengthWithOffset);
      valuesHelper(fixedLengthWithOffset);
      keysHelper(fixedLengthWithOffset);
    }
    print(() => { Array.from(entriesHelper(fixedLength)); });
    print(() => { Array.from(valuesHelper(fixedLength)); });
    print(() => { Array.from(keysHelper(fixedLength)); });

    print(() => { Array.from(entriesHelper(fixedLengthWithOffset)); });
    print(() => { Array.from(valuesHelper(fixedLengthWithOffset)); });
    print(() => { Array.from(keysHelper(fixedLengthWithOffset)); });

    print([0, 2, 4], valuesFromEntries(lengthTracking));
    print([0, 2, 4], valuesFromValues(lengthTracking));
    print([0, 1, 2], Array.from(keysHelper(lengthTracking)));

    print([4], valuesFromEntries(lengthTrackingWithOffset));
    print([4], valuesFromValues(lengthTrackingWithOffset));
    print([0], Array.from(keysHelper(lengthTrackingWithOffset)));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { entriesHelper(fixedLength); });
      print(() => { valuesHelper(fixedLength); });
      print(() => { keysHelper(fixedLength); });

      print(() => { entriesHelper(fixedLengthWithOffset); });
      print(() => { valuesHelper(fixedLengthWithOffset); });
      print(() => { keysHelper(fixedLengthWithOffset); });

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

    print(
        () => { Array.from(entriesHelper(lengthTrackingWithOffset)); });
    print(() => { Array.from(valuesHelper(lengthTrackingWithOffset)); });
    print(() => { Array.from(keysHelper(lengthTrackingWithOffset)); });

    print([0], valuesFromEntries(lengthTracking));
    print([0], valuesFromValues(lengthTracking));
    print([0], Array.from(keysHelper(lengthTracking)));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { entriesHelper(fixedLength); });
      print(() => { valuesHelper(fixedLength); });
      print(() => { keysHelper(fixedLength); });

      print(() => { entriesHelper(fixedLengthWithOffset); });
      print(() => { valuesHelper(fixedLengthWithOffset); });
      print(() => { keysHelper(fixedLengthWithOffset); });

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

    print(
        () => { Array.from(entriesHelper(lengthTrackingWithOffset)); });
    print(() => { Array.from(valuesHelper(lengthTrackingWithOffset)); });
    print(() => { Array.from(keysHelper(lengthTrackingWithOffset)); });

    print([], valuesFromEntries(lengthTracking));
    print([], valuesFromValues(lengthTracking));
    print([], Array.from(keysHelper(lengthTracking)));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print([0, 2, 4, 6], valuesFromEntries(fixedLength));
    print([0, 2, 4, 6], valuesFromValues(fixedLength));
    print([0, 1, 2, 3], Array.from(keysHelper(fixedLength)));

    print([4, 6], valuesFromEntries(fixedLengthWithOffset));
    print([4, 6], valuesFromValues(fixedLengthWithOffset));
    print([0, 1], Array.from(keysHelper(fixedLengthWithOffset)));

    print([0, 2, 4, 6, 8, 10], valuesFromEntries(lengthTracking));
    print([0, 2, 4, 6, 8, 10], valuesFromValues(lengthTracking));
    print([0, 1, 2, 3, 4, 5], Array.from(keysHelper(lengthTracking)));

    print([4, 6, 8, 10], valuesFromEntries(lengthTrackingWithOffset));
    print([4, 6, 8, 10], valuesFromValues(lengthTrackingWithOffset));
    print([0, 1, 2, 3],
        Array.from(keysHelper(lengthTrackingWithOffset)));
  }
}
EntriesKeysValues(
    TypedArrayEntriesHelper, TypedArrayKeysHelper, TypedArrayValuesHelper,
    ValuesFromTypedArrayEntries, ValuesFromTypedArrayValues, true);
EntriesKeysValues(
    ArrayEntriesHelper, ArrayKeysHelper, ArrayValuesHelper,
    ValuesFromArrayEntries, ValuesFromArrayValues, false);

function EntriesKeysValuesGrowMidIteration(
  entriesHelper, keysHelper, valuesHelper) {
  
  
  
  
  
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

    
    TestIterationAndResize(entriesHelper(fixedLength),
                           [[0, 0], [1, 2], [2, 4], [3, 6]],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    TestIterationAndResize(entriesHelper(fixedLengthWithOffset),
                           [[0, 4], [1, 6]],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(entriesHelper(lengthTracking),
                           [[0, 0], [1, 2], [2, 4], [3, 6], [4, 0], [5, 0]],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndResize(entriesHelper(lengthTrackingWithOffset),
                           [[0, 4], [1, 6], [2, 0], [3, 0]],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    
    TestIterationAndResize(keysHelper(fixedLength),
                           [0, 1, 2, 3],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    TestIterationAndResize(keysHelper(fixedLengthWithOffset),
                           [0, 1],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(keysHelper(lengthTracking),
                           [0, 1, 2, 3, 4, 5],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndResize(keysHelper(lengthTrackingWithOffset),
                           [0, 1, 2, 3],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    
    TestIterationAndResize(valuesHelper(fixedLength),
                           [0, 2, 4, 6],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    TestIterationAndResize(valuesHelper(fixedLengthWithOffset),
                           [4, 6],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(valuesHelper(lengthTracking),
                           [0, 2, 4, 6, 0, 0],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndResize(valuesHelper(lengthTrackingWithOffset),
                           [4, 6, 0, 0],
                           rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }
}
EntriesKeysValuesGrowMidIteration(
    TypedArrayEntriesHelper, TypedArrayKeysHelper, TypedArrayValuesHelper);
EntriesKeysValuesGrowMidIteration(
    ArrayEntriesHelper, ArrayKeysHelper, ArrayValuesHelper);

function EntriesKeysValuesShrinkMidIteration(
  entriesHelper, keysHelper, valuesHelper) {
  
  
  
  
  
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

    
    print(() => { TestIterationAndResize(
                             entriesHelper(fixedLength),
                             null,
                             rab, 2, 3 * ctor.BYTES_PER_ELEMENT); });
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    print(() => { TestIterationAndResize(
                             entriesHelper(fixedLengthWithOffset),
                             null,
                             rab, 1, 3 * ctor.BYTES_PER_ELEMENT); });
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(entriesHelper(lengthTracking),
                           [[0, 0], [1, 2], [2, 4]],
                           rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(entriesHelper(lengthTracking),
                           [[0, 0]],
                           rab, 1, 0);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndResize(entriesHelper(lengthTrackingWithOffset),
                           [[0, 4], [1, 6]],
                           rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    
    print(() => { TestIterationAndResize(
                             keysHelper(fixedLength),
                             null,
                             rab, 2, 3 * ctor.BYTES_PER_ELEMENT); });
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    print(() => { TestIterationAndResize(
                             keysHelper(fixedLengthWithOffset),
                             null,
                             rab, 2, 3 * ctor.BYTES_PER_ELEMENT); });
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(keysHelper(lengthTracking),
                           [0, 1, 2],
                           rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(keysHelper(lengthTracking),
                           [0],
                           rab, 1, 0);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndResize(keysHelper(lengthTrackingWithOffset),
                           [0, 1],
                           rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    
    print(() => { TestIterationAndResize(
                             valuesHelper(fixedLength),
                             null,
                             rab, 2, 3 * ctor.BYTES_PER_ELEMENT); });
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    print(() => { TestIterationAndResize(
                             valuesHelper(fixedLengthWithOffset),
                             null,
                             rab, 2, 3 * ctor.BYTES_PER_ELEMENT); });
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(valuesHelper(lengthTracking),
                           [0, 2, 4],
                           rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    TestIterationAndResize(valuesHelper(lengthTracking),
                           [0, 2],
                           rab, 2, 0);
  }

  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndResize(valuesHelper(lengthTrackingWithOffset),
                           [4, 6],
                           rab, 2, 3 * ctor.BYTES_PER_ELEMENT);
  }
}
EntriesKeysValuesShrinkMidIteration(
  TypedArrayEntriesHelper, TypedArrayKeysHelper, TypedArrayValuesHelper);
EntriesKeysValuesShrinkMidIteration(
  ArrayEntriesHelper, ArrayKeysHelper, ArrayValuesHelper);

function EverySome(everyHelper, someHelper, oobThrows) {
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

    
    
    
    
    

    function div3(n) {
      return Number(n) % 3 == 0;
    }

    function even(n) {
      return Number(n) % 2 == 0;
    }

    function over10(n) {
      return Number(n) > 10;
    }

    print(everyHelper(fixedLength, div3));
    print(everyHelper(fixedLength, even));
    print(someHelper(fixedLength, div3));
    print(someHelper(fixedLength, over10));

    print(everyHelper(fixedLengthWithOffset, div3));
    print(everyHelper(fixedLengthWithOffset, even));
    print(someHelper(fixedLengthWithOffset, div3));
    print(someHelper(fixedLengthWithOffset, over10));

    print(everyHelper(lengthTracking, div3));
    print(everyHelper(lengthTracking, even));
    print(someHelper(lengthTracking, div3));
    print(someHelper(lengthTracking, over10));

    print(everyHelper(lengthTrackingWithOffset, div3));
    print(everyHelper(lengthTrackingWithOffset, even));
    print(someHelper(lengthTrackingWithOffset, div3));
    print(someHelper(lengthTrackingWithOffset, over10));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { everyHelper(fixedLength, div3); });
      print(() => { someHelper(fixedLength, div3); });

      print(() => { everyHelper(fixedLengthWithOffset, div3); });
      print(() => { someHelper(fixedLengthWithOffset, div3); });
    } else {
      print(everyHelper(fixedLength, div3));
      print(someHelper(fixedLength, div3));

      print(everyHelper(fixedLengthWithOffset, div3));
      print(someHelper(fixedLengthWithOffset, div3));
    }
    print(everyHelper(lengthTracking, div3));
    print(everyHelper(lengthTracking, even));
    print(someHelper(lengthTracking, div3));
    print(someHelper(lengthTracking, over10));

    print(everyHelper(lengthTrackingWithOffset, div3));
    print(everyHelper(lengthTrackingWithOffset, even));
    print(someHelper(lengthTrackingWithOffset, div3));
    print(someHelper(lengthTrackingWithOffset, over10));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { everyHelper(fixedLength, div3); });
      print(() => { someHelper(fixedLength, div3); });

      print(() => { everyHelper(fixedLengthWithOffset, div3); });
      print(() => { someHelper(fixedLengthWithOffset, div3); });

      print(() => { everyHelper(lengthTrackingWithOffset, div3); });
      print(() => { someHelper(lengthTrackingWithOffset, div3); });
    } else {
      print(everyHelper(fixedLength, div3));
      print(someHelper(fixedLength, div3));

      print(everyHelper(fixedLengthWithOffset, div3));
      print(someHelper(fixedLengthWithOffset, div3));

      print(everyHelper(lengthTrackingWithOffset, div3));
      print(someHelper(lengthTrackingWithOffset, div3));
    }

    print(everyHelper(lengthTracking, div3));
    print(everyHelper(lengthTracking, even));
    print(someHelper(lengthTracking, div3));
    print(someHelper(lengthTracking, over10));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { everyHelper(fixedLength, div3); });
      print(() => { someHelper(fixedLength, div3); });

      print(() => { everyHelper(fixedLengthWithOffset, div3); });
      print(() => { someHelper(fixedLengthWithOffset, div3); });

      print(() => { everyHelper(lengthTrackingWithOffset, div3); });
      print(() => { someHelper(lengthTrackingWithOffset, div3); });
    } else {
      print(everyHelper(fixedLength, div3));
      print(someHelper(fixedLength, div3));

      print(everyHelper(fixedLengthWithOffset, div3));
      print(someHelper(fixedLengthWithOffset, div3));

      print(everyHelper(lengthTrackingWithOffset, div3));
      print(someHelper(lengthTrackingWithOffset, div3));
    }

    print(everyHelper(lengthTracking, div3));
    print(everyHelper(lengthTracking, even));
    print(someHelper(lengthTracking, div3));
    print(someHelper(lengthTracking, over10));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print(everyHelper(fixedLength, div3));
    print(everyHelper(fixedLength, even));
    print(someHelper(fixedLength, div3));
    print(someHelper(fixedLength, over10));

    print(everyHelper(fixedLengthWithOffset, div3));
    print(everyHelper(fixedLengthWithOffset, even));
    print(someHelper(fixedLengthWithOffset, div3));
    print(someHelper(fixedLengthWithOffset, over10));

    print(everyHelper(lengthTracking, div3));
    print(everyHelper(lengthTracking, even));
    print(someHelper(lengthTracking, div3));
    print(someHelper(lengthTracking, over10));

    print(everyHelper(lengthTrackingWithOffset, div3));
    print(everyHelper(lengthTrackingWithOffset, even));
    print(someHelper(lengthTrackingWithOffset, div3));
    print(someHelper(lengthTrackingWithOffset, over10));
  }
}
EverySome(TypedArrayEveryHelper, TypedArraySomeHelper, true);
EverySome(ArrayEveryHelper, ArraySomeHelper, false);

function EveryShrinkMidIteration(everyHelper, hasUndefined) {
  
  
  
  
  
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

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(fixedLength, CollectValuesAndResize));
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
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(fixedLengthWithOffset, CollectValuesAndResize));
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
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(lengthTracking, CollectValuesAndResize));
    if (hasUndefined) {
      print([0, 2, 4, undefined], values);
    } else {
      print([0, 2, 4], values);
    }
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 0;
    print(everyHelper(lengthTracking, CollectValuesAndResize));
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
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    if (hasUndefined) {
      print([4, undefined], values);
    } else {
      print([4], values);
    }
  }
}
EveryShrinkMidIteration(TypedArrayEveryHelper, true);
EveryShrinkMidIteration(ArrayEveryHelper, false);

function EveryGrowMidIteration(everyHelper) {
  
  
  
  
  
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

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(fixedLength, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }
}
EveryGrowMidIteration(TypedArrayEveryHelper);
EveryGrowMidIteration(ArrayEveryHelper);

function SomeShrinkMidIteration(someHelper, hasUndefined) {
  
  
  
  
  
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
    print(someHelper(fixedLength, CollectValuesAndResize));
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
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(fixedLengthWithOffset, CollectValuesAndResize));
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
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(lengthTracking, CollectValuesAndResize));
    if (hasUndefined) {
      print([0, 2, 4, undefined], values);
    } else {
      print([0, 2, 4], values);
    }
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 0;
    print(someHelper(lengthTracking, CollectValuesAndResize));
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
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    if (hasUndefined) {
      print([4, undefined], values);
    } else {
      print([4], values);
    }
  }
}
SomeShrinkMidIteration(TypedArraySomeHelper, true);
SomeShrinkMidIteration(ArraySomeHelper, false);

function SomeGrowMidIteration(someHelper) {
  
  
  
  
  
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
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(fixedLength, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    rab = rab;
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }
}
SomeGrowMidIteration(TypedArraySomeHelper);
SomeGrowMidIteration(ArraySomeHelper);

function FindFindIndexFindLastFindLastIndex(
    findHelper, findIndexHelper, findLastHelper, findLastIndexHelper,
    oobThrows) {
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

    
    
    
    
    

    function isTwoOrFour(n) {
      return n == 2 || n == 4;
    }

    print(2, Number(findHelper(fixedLength, isTwoOrFour)));
    print(4, Number(findHelper(fixedLengthWithOffset, isTwoOrFour)));
    print(2, Number(findHelper(lengthTracking, isTwoOrFour)));
    print(4, Number(findHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(1, findIndexHelper(fixedLength, isTwoOrFour));
    print(0, findIndexHelper(fixedLengthWithOffset, isTwoOrFour));
    print(1, findIndexHelper(lengthTracking, isTwoOrFour));
    print(0, findIndexHelper(lengthTrackingWithOffset, isTwoOrFour));

    print(4, Number(findLastHelper(fixedLength, isTwoOrFour)));
    print(4, Number(findLastHelper(fixedLengthWithOffset, isTwoOrFour)));
    print(4, Number(findLastHelper(lengthTracking, isTwoOrFour)));
    print(4,
        Number(findLastHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(2, findLastIndexHelper(fixedLength, isTwoOrFour));
    print(0, findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour));
    print(2, findLastIndexHelper(lengthTracking, isTwoOrFour));
    print(0, findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { findHelper(fixedLength, isTwoOrFour); });
      print(() => { findIndexHelper(fixedLength, isTwoOrFour); });
      print(() => { findLastHelper(fixedLength, isTwoOrFour); });
      print(() => { findLastIndexHelper(fixedLength, isTwoOrFour); });

      print(() => { findHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(() => {
          findIndexHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(() => {
          findLastHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(() => {
          findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour); });
    } else {
      print(undefined, findHelper(fixedLength, isTwoOrFour));
      print(-1, findIndexHelper(fixedLength, isTwoOrFour));
      print(undefined, findLastHelper(fixedLength, isTwoOrFour));
      print(-1, findLastIndexHelper(fixedLength, isTwoOrFour));

      print(undefined, findHelper(fixedLengthWithOffset, isTwoOrFour));
      print(-1,
          findIndexHelper(fixedLengthWithOffset, isTwoOrFour));
      print(undefined,
          findLastHelper(fixedLengthWithOffset, isTwoOrFour));
      print(-1,
          findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour));
    }

    print(2, Number(findHelper(lengthTracking, isTwoOrFour)));
    print(4, Number(findHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(1, findIndexHelper(lengthTracking, isTwoOrFour));
    print(0, findIndexHelper(lengthTrackingWithOffset, isTwoOrFour));

    print(4, Number(findLastHelper(lengthTracking, isTwoOrFour)));
    print(4,
        Number(findLastHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(2, findLastIndexHelper(lengthTracking, isTwoOrFour));
    print(0, findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { findHelper(fixedLength, isTwoOrFour); });
      print(() => { findIndexHelper(fixedLength, isTwoOrFour); });
      print(() => { findLastHelper(fixedLength, isTwoOrFour); });
      print(() => { findLastIndexHelper(fixedLength, isTwoOrFour); });

      print(() => { findHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(
          () => { findIndexHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(
          () => { findLastHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(
          () => { findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour); });

      print(
          () => { findHelper(lengthTrackingWithOffset, isTwoOrFour); });
      print(
          () => { findIndexHelper(lengthTrackingWithOffset, isTwoOrFour); });
      print(
          () => { findLastHelper(lengthTrackingWithOffset, isTwoOrFour); });
      print(
          () => {
              findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour); });
    } else {
      print(undefined, findHelper(fixedLength, isTwoOrFour));
      print(-1, findIndexHelper(fixedLength, isTwoOrFour));
      print(undefined, findLastHelper(fixedLength, isTwoOrFour));
      print(-1, findLastIndexHelper(fixedLength, isTwoOrFour));

      print(undefined, findHelper(fixedLengthWithOffset, isTwoOrFour));
      print(-1,
          findIndexHelper(fixedLengthWithOffset, isTwoOrFour));
      print(undefined,
          findLastHelper(fixedLengthWithOffset, isTwoOrFour));
      print(-1,
          findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour));

      print(undefined,
          findHelper(lengthTrackingWithOffset, isTwoOrFour));
      print(-1,
          findIndexHelper(lengthTrackingWithOffset, isTwoOrFour));
      print(undefined,
          findLastHelper(lengthTrackingWithOffset, isTwoOrFour));
      print(-1,
          findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour));
    }

    print(undefined, findHelper(lengthTracking, isTwoOrFour));
    print(-1, findIndexHelper(lengthTracking, isTwoOrFour));
    print(undefined, findLastHelper(lengthTracking, isTwoOrFour));
    print(-1, findLastIndexHelper(lengthTracking, isTwoOrFour));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { findHelper(fixedLength, isTwoOrFour); });
      print(() => { findIndexHelper(fixedLength, isTwoOrFour); });
      print(() => { findLastHelper(fixedLength, isTwoOrFour); });
      print(() => { findLastIndexHelper(fixedLength, isTwoOrFour); });

      print(() => { findHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(
          () => { findIndexHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(
          () => { findLastHelper(fixedLengthWithOffset, isTwoOrFour); });
      print(
          () => { findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour); });

      print(
          () => { findHelper(lengthTrackingWithOffset, isTwoOrFour); });
      print(
          () => { findIndexHelper(lengthTrackingWithOffset, isTwoOrFour); });
      print(
          () => { findLastHelper(lengthTrackingWithOffset, isTwoOrFour); });
      print(
          () => {
              findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour); });
    } else {
      print(undefined, findHelper(fixedLength, isTwoOrFour));
      print(-1, findIndexHelper(fixedLength, isTwoOrFour));
      print(undefined, findLastHelper(fixedLength, isTwoOrFour));
      print(-1, findLastIndexHelper(fixedLength, isTwoOrFour));

      print(undefined, findHelper(fixedLengthWithOffset, isTwoOrFour));
      print(-1,
          findIndexHelper(fixedLengthWithOffset, isTwoOrFour));
      print(undefined,
          findLastHelper(fixedLengthWithOffset, isTwoOrFour));
      print(-1,
          findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour));

      print(undefined,
          findHelper(lengthTrackingWithOffset, isTwoOrFour));
      print(-1,
          findIndexHelper(lengthTrackingWithOffset, isTwoOrFour));
      print(undefined,
          findLastHelper(lengthTrackingWithOffset, isTwoOrFour));
      print(-1,
          findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour));
    }

    print(undefined, findHelper(lengthTracking, isTwoOrFour));
    print(-1, findIndexHelper(lengthTracking, isTwoOrFour));
    print(undefined, findLastHelper(lengthTracking, isTwoOrFour));
    print(-1, findLastIndexHelper(lengthTracking, isTwoOrFour));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 0);
    }
    WriteToTypedArray(taWrite, 4, 2);
    WriteToTypedArray(taWrite, 5, 4);

    
    
    
    
    

    print(undefined, findHelper(fixedLength, isTwoOrFour));
    print(undefined, findHelper(fixedLengthWithOffset, isTwoOrFour));
    print(2, Number(findHelper(lengthTracking, isTwoOrFour)));
    print(2, Number(findHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(-1, findIndexHelper(fixedLength, isTwoOrFour));
    print(-1, findIndexHelper(fixedLengthWithOffset, isTwoOrFour));
    print(4, findIndexHelper(lengthTracking, isTwoOrFour));
    print(2, findIndexHelper(lengthTrackingWithOffset, isTwoOrFour));

    print(undefined, findLastHelper(fixedLength, isTwoOrFour));
    print(undefined, findLastHelper(fixedLengthWithOffset, isTwoOrFour));
    print(4, Number(findLastHelper(lengthTracking, isTwoOrFour)));
    print(4, Number(findLastHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(-1, findLastIndexHelper(fixedLength, isTwoOrFour));
    print(-1, findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour));
    print(5, findLastIndexHelper(lengthTracking, isTwoOrFour));
    print(3, findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour));
  }
}
FindFindIndexFindLastFindLastIndex(
    TypedArrayFindHelper, TypedArrayFindIndexHelper, TypedArrayFindLastHelper,
    TypedArrayFindLastIndexHelper, true);
FindFindIndexFindLastFindLastIndex(
    ArrayFindHelper, ArrayFindIndexHelper, ArrayFindLastHelper,
    ArrayFindLastIndexHelper, false);

function FindShrinkMidIteration(findHelper) {
  
  
  
  
  
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
    print(undefined, findHelper(fixedLength, CollectValuesAndResize));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([4, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(undefined, findHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, 4, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 0;
    print(undefined, findHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([4, undefined], values);
  }
}
FindShrinkMidIteration(TypedArrayFindHelper);
FindShrinkMidIteration(ArrayFindHelper);

function FindGrowMidIteration(findHelper) {
  
  
  
  
  
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
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined, findHelper(fixedLength, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined, findHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }
}
FindGrowMidIteration(TypedArrayFindHelper);
FindGrowMidIteration(ArrayFindHelper);

function FindIndexShrinkMidIteration(findIndexHelper) {
  
  
  
  
  
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
    print(-1, findIndexHelper(fixedLength, CollectValuesAndResize));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([4, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, 4, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 0;
    print(-1, findIndexHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([4, undefined], values);
  }
}
FindIndexShrinkMidIteration(TypedArrayFindIndexHelper);
FindIndexShrinkMidIteration(ArrayFindIndexHelper);

function FindIndexGrowMidIteration(findIndexHelper) {
  
  
  
  
  
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
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(fixedLength, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(lengthTracking, CollectValuesAndResize));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([4, 6], values);
  }
}
FindIndexGrowMidIteration(TypedArrayFindIndexHelper);
FindIndexGrowMidIteration(ArrayFindIndexHelper);

function FindLastShrinkMidIteration(findLastHelper) {
  
  
  
  
  
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
    print(undefined, findLastHelper(fixedLength, CollectValuesAndResize));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([6, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(lengthTracking, CollectValuesAndResize));
    print([6, 4, 2, 0], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 0;
    print(undefined,
                 findLastHelper(lengthTracking, CollectValuesAndResize));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
        findLastHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([6, 4], values);
  }
}
FindLastShrinkMidIteration(TypedArrayFindLastHelper);
FindLastShrinkMidIteration(ArrayFindLastHelper);

function FindLastGrowMidIteration(findLastHelper) {
  
  
  
  
  
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
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(fixedLength, CollectValuesAndResize));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([6, 4], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(lengthTracking, CollectValuesAndResize));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
        findLastHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([6, 4], values);
  }
}
FindLastGrowMidIteration(TypedArrayFindLastHelper);
FindLastGrowMidIteration(ArrayFindLastHelper);

function FindLastIndexShrinkMidIteration(findLastIndexHelper) {
  
  
  
  
  
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
    print(-1, findLastIndexHelper(fixedLength, CollectValuesAndResize));
    print([6, 4, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([6, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(-1,
                 findLastIndexHelper(lengthTracking, CollectValuesAndResize));
    print([6, 4, 2, 0], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 1;
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    print(-1,
                 findLastIndexHelper(lengthTracking, CollectValuesAndResize));
    print([6, undefined, 2, 0], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 1;
    resizeTo = 0;
    print(-1,
                 findLastIndexHelper(lengthTracking, CollectValuesAndResize));
    print([6, undefined, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([6, 4], values);
  }
}
FindLastIndexShrinkMidIteration(TypedArrayFindLastIndexHelper);
FindLastIndexShrinkMidIteration(ArrayFindLastIndexHelper);

function FindLastIndexGrowMidIteration(findLastIndexHelper) {
  
  
  
  
  
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
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findLastIndexHelper(fixedLength, CollectValuesAndResize));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(fixedLengthWithOffset, CollectValuesAndResize));
    print([6, 4], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(lengthTracking, CollectValuesAndResize));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(lengthTrackingWithOffset, CollectValuesAndResize));
    print([6, 4], values);
  }
}
FindLastIndexGrowMidIteration(TypedArrayFindLastIndexHelper);
FindLastIndexGrowMidIteration(ArrayFindLastIndexHelper);

function Filter(filterHelper, oobThrows) {
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

    
    
    
    
    

    function isEven(n) {
      return n != undefined && Number(n) % 2 == 0;
    }

    print([0, 2], ToNumbers(filterHelper(fixedLength, isEven)));
    print([2], ToNumbers(filterHelper(fixedLengthWithOffset, isEven)));
    print([0, 2], ToNumbers(filterHelper(lengthTracking, isEven)));
    print([2],
                 ToNumbers(filterHelper(lengthTrackingWithOffset, isEven)));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { filterHelper(fixedLength, isEven); });
      print(() => { filterHelper(fixedLengthWithOffset, isEven); });
    } else {
      print([], filterHelper(fixedLength, isEven));
      print([], filterHelper(fixedLengthWithOffset, isEven));
    }

    print([0, 2], ToNumbers(filterHelper(lengthTracking, isEven)));
    print([2],
                 ToNumbers(filterHelper(lengthTrackingWithOffset, isEven)));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { filterHelper(fixedLength, isEven); });
      print(() => { filterHelper(fixedLengthWithOffset, isEven); });
      print(() => { filterHelper(lengthTrackingWithOffset, isEven); });
    } else {
      print([], filterHelper(fixedLength, isEven));
      print([], filterHelper(fixedLengthWithOffset, isEven));
      print([], filterHelper(lengthTrackingWithOffset, isEven));
    }

    print([0], ToNumbers(filterHelper(lengthTracking, isEven)));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { filterHelper(fixedLength, isEven); });
      print(() => { filterHelper(fixedLengthWithOffset, isEven); });
      print(() => { filterHelper(lengthTrackingWithOffset, isEven); });
    } else {
      print([], filterHelper(fixedLength, isEven));
      print([], filterHelper(fixedLengthWithOffset, isEven));
      print([], filterHelper(lengthTrackingWithOffset, isEven));
    }
    print([], ToNumbers(filterHelper(lengthTracking, isEven)));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    
    
    
    
    

    print([0, 2], ToNumbers(filterHelper(fixedLength, isEven)));
    print([2], ToNumbers(filterHelper(fixedLengthWithOffset, isEven)));
    print([0, 2, 4], ToNumbers(filterHelper(lengthTracking, isEven)));
    print([2, 4],
                 ToNumbers(filterHelper(lengthTrackingWithOffset, isEven)));
  }
}
Filter(TypedArrayFilterHelper, true);
Filter(ArrayFilterHelper, false);



(function FilterShrinkMidIteration() {
  
  
  
  
  
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
    print([], ToNumbers(fixedLength.filter(CollectValuesAndResize)));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(fixedLengthWithOffset.filter(CollectValuesAndResize)));
    print([4, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([], ToNumbers(lengthTracking.filter(CollectValuesAndResize)));
    print([0, 2, 4, undefined], values);
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 0;
    print([], ToNumbers(lengthTracking.filter(CollectValuesAndResize)));
    print([0, 2, undefined, undefined], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(lengthTrackingWithOffset.filter(CollectValuesAndResize)));
    print([4, undefined], values);
  }
})();

function FilterGrowMidIteration(filterHelper) {
  
  
  
  
  
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
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
                 ToNumbers(filterHelper(fixedLength, CollectValuesAndResize)));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(filterHelper(fixedLengthWithOffset, CollectValuesAndResize)));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    values = [];
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(filterHelper(lengthTracking, CollectValuesAndResize)));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([], ToNumbers(filterHelper(
        lengthTrackingWithOffset, CollectValuesAndResize)));
    print([4, 6], values);
  }
}
FilterGrowMidIteration(TypedArrayFilterHelper);
FilterGrowMidIteration(ArrayFilterHelper);

function ForEachReduceReduceRight(
    forEachHelper, reduceHelper, reduceRightHelper, oobThrows) {
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

    
    
    
    
    

    function Helper(array) {
      const forEachValues = [];
      const reduceValues = [];
      const reduceRightValues = [];

      forEachHelper(array, (n) => { forEachValues.push(n);});

      reduceHelper(array, (acc, n) => {
        reduceValues.push(n);
      }, "initial value");

      reduceRightHelper(array, (acc, n) => {
        reduceRightValues.push(n);
      }, "initial value");

      print(reduceValues, forEachValues);
      reduceRightValues.reverse();
      print(reduceValues, reduceRightValues);
      return ToNumbers(forEachValues);
    }

    print([0, 2, 4, 6], Helper(fixedLength));
    print([4, 6], Helper(fixedLengthWithOffset));
    print([0, 2, 4, 6], Helper(lengthTracking));
    print([4, 6], Helper(lengthTrackingWithOffset));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { Helper(fixedLength); });
      print(() => { Helper(fixedLengthWithOffset); });
    } else {
      print([], Helper(fixedLength));
      print([], Helper(fixedLengthWithOffset));
    }
    print([0, 2, 4], Helper(lengthTracking));
    print([4], Helper(lengthTrackingWithOffset));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { Helper(fixedLength); });
      print(() => { Helper(fixedLengthWithOffset); });
      print(() => { Helper(lengthTrackingWithOffset); });
    } else {
      print([], Helper(fixedLength));
      print([], Helper(fixedLengthWithOffset));
    }
    print([0], Helper(lengthTracking));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { Helper(fixedLength); });
      print(() => { Helper(fixedLengthWithOffset); });
      print(() => { Helper(lengthTrackingWithOffset); });
    } else {
      print([], Helper(fixedLength));
      print([], Helper(fixedLengthWithOffset));
      print([], Helper(lengthTrackingWithOffset));
    }
    print([], Helper(lengthTracking));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print([0, 2, 4, 6], Helper(fixedLength));
    print([4, 6], Helper(fixedLengthWithOffset));
    print([0, 2, 4, 6, 8, 10], Helper(lengthTracking));
    print([4, 6, 8, 10], Helper(lengthTrackingWithOffset));
  }
}
ForEachReduceReduceRight(TypedArrayForEachHelper, TypedArrayReduceHelper,
                         TypedArrayReduceRightHelper, true);
ForEachReduceReduceRight(ArrayForEachHelper, ArrayReduceHelper,
                         ArrayReduceRightHelper, false);



(function ForEachReduceReduceRightShrinkMidIteration() {
  
  
  
  
  
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
    array.forEach(CollectValuesAndResize);
    return values;
  }

  function ReduceHelper(array) {
    values = [];
    array.reduce((acc, n) => { CollectValuesAndResize(n); }, "initial value");
    return values;
  }

  function ReduceRightHelper(array) {
    values = [];
    array.reduceRight((acc, n) => { CollectValuesAndResize(n); },
                      "initial value");
    return values;
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, undefined, undefined], ForEachHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4, undefined], ForEachHelper(fixedLengthWithOffset));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, undefined], ForEachHelper(lengthTracking));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 0;
    print([0, 2, undefined, undefined], ForEachHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4, undefined], ForEachHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, undefined, undefined], ReduceHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4, undefined], ReduceHelper(fixedLengthWithOffset));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, undefined], ReduceHelper(lengthTracking));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 0;
    print([0, 2, undefined, undefined], ReduceHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([4, undefined], ReduceHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([6, 4, undefined, undefined], ReduceRightHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    print([6, undefined], ReduceRightHelper(fixedLengthWithOffset));
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
    resizeAfter = 2;
    resizeTo = 0;
    print([6, 4, undefined, undefined], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 1;
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    print([6, undefined, 2, 0], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    
    print([6, 4], ReduceRightHelper(lengthTrackingWithOffset));
  }
})();

function ForEachReduceReduceRightGrowMidIteration(
    forEachHelper, reduceHelper, reduceRightHelper) {
  
  
  
  
  
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
    forEachHelper(array, CollectValuesAndResize);
    return values;
  }

  function ReduceHelper(array) {
    values = [];
    reduceHelper(array, (acc, n) => { CollectValuesAndResize(n); },
                 "initial value");
    return values;
  }

  function ReduceRightHelper(array) {
    values = [];
    reduceRightHelper(array, (acc, n) => { CollectValuesAndResize(n); },
                      "initial value");
    return values;
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ForEachHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ForEachHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ForEachHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ForEachHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ReduceHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ReduceHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ReduceHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ReduceHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4, 2, 0], ReduceRightHelper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4], ReduceRightHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4, 2, 0], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4], ReduceRightHelper(lengthTrackingWithOffset));
  }
}
ForEachReduceReduceRightGrowMidIteration(
  TypedArrayForEachHelper, TypedArrayReduceHelper,
  TypedArrayReduceRightHelper);
ForEachReduceReduceRightGrowMidIteration(
  ArrayForEachHelper, ArrayReduceHelper, ArrayReduceRightHelper);

function Includes(helper, oobThrows) {
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

    
    
    
    
    

    print(helper(fixedLength, 2));
    print(helper(fixedLength, undefined));
    print(helper(fixedLength, 2, 1));
    print(helper(fixedLength, 2, 2));
    print(helper(fixedLength, 2, -3));
    print(helper(fixedLength, 2, -2));

    print(helper(fixedLengthWithOffset, 2));
    print(helper(fixedLengthWithOffset, 4));
    print(helper(fixedLengthWithOffset, undefined));
    print(helper(fixedLengthWithOffset, 4, 0));
    print(helper(fixedLengthWithOffset, 4, 1));
    print(helper(fixedLengthWithOffset, 4, -2));
    print(helper(fixedLengthWithOffset, 4, -1));

    print(helper(lengthTracking, 2));
    print(helper(lengthTracking, undefined));
    print(helper(lengthTracking, 2, 1));
    print(helper(lengthTracking, 2, 2));
    print(helper(lengthTracking, 2, -3));
    print(helper(lengthTracking, 2, -2));

    print(helper(lengthTrackingWithOffset, 2));
    print(helper(lengthTrackingWithOffset, 4));
    print(helper(lengthTrackingWithOffset, undefined));
    print(helper(lengthTrackingWithOffset, 4, 0));
    print(helper(lengthTrackingWithOffset, 4, 1));
    print(helper(lengthTrackingWithOffset, 4, -2));
    print(helper(lengthTrackingWithOffset, 4, -1));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { helper(fixedLength, 2); });
      print(() => { helper(fixedLengthWithOffset, 2); });
    } else {
      print(helper(fixedLength, 2));
      print(helper(fixedLengthWithOffset, 2));
    }

    print(helper(lengthTracking, 2));
    print(helper(lengthTracking, undefined));

    print(helper(lengthTrackingWithOffset, 2));
    print(helper(lengthTrackingWithOffset, 4));
    print(helper(lengthTrackingWithOffset, undefined));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { helper(fixedLength, 2); });
      print(() => { helper(fixedLengthWithOffset, 2); });
      print(() => { helper(lengthTrackingWithOffset, 2); });
    } else {
      print(helper(fixedLength, 2));
      print(helper(fixedLengthWithOffset, 2));
      print(helper(lengthTrackingWithOffset, 2));
    }

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { helper(fixedLength, 2); });
      print(() => { helper(fixedLengthWithOffset, 2); });
      print(() => { helper(lengthTrackingWithOffset, 2); });
    } else {
      print(helper(fixedLength, 2));
      print(helper(fixedLengthWithOffset, 2));
      print(helper(lengthTrackingWithOffset, 2));
    }

    print(helper(lengthTracking, 2));
    print(helper(lengthTracking, undefined));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print(helper(fixedLength, 2));
    print(helper(fixedLength, undefined));
    print(helper(fixedLength, 8));

    print(helper(fixedLengthWithOffset, 2));
    print(helper(fixedLengthWithOffset, 4));
    print(helper(fixedLengthWithOffset, undefined));
    print(helper(fixedLengthWithOffset, 8));

    print(helper(lengthTracking, 2));
    print(helper(lengthTracking, undefined));
    print(helper(lengthTracking, 8));

    print(helper(lengthTrackingWithOffset, 2));
    print(helper(lengthTrackingWithOffset, 4));
    print(helper(lengthTrackingWithOffset, undefined));
    print(helper(lengthTrackingWithOffset, 8));
  }
}
Includes(TypedArrayIncludesHelper, true);
Includes(ArrayIncludesHelper, false);

function IncludesParameterConversionResizes(helper) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(helper(fixedLength, undefined));
    
    print(helper(fixedLength, undefined, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(helper(fixedLength, 0));
    
    print(helper(fixedLength, 0, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(helper(lengthTracking, undefined));
    
    print(helper(lengthTracking, undefined, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(0);
      return 0;
    }};
    print(helper(lengthTracking, undefined));
    
    print(helper(lengthTracking, undefined, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, 1);
    }

    let evil = { valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(helper(lengthTracking, 0));
    
    print(helper(lengthTracking, 0, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    WriteToTypedArray(lengthTracking, 0, 1);

    let evil = { valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }};
    print(helper(lengthTracking, 1, -4));
    
    
    print(helper(lengthTracking, 1, evil));
  }
}
IncludesParameterConversionResizes(TypedArrayIncludesHelper);
IncludesParameterConversionResizes(ArrayIncludesHelper);

(function IncludesSpecialValues() {
  for (let ctor of floatCtors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    lengthTracking[0] = -Infinity;
    lengthTracking[1] = Infinity;
    lengthTracking[2] = NaN;
    print(lengthTracking.includes(-Infinity));
    print(lengthTracking.includes(Infinity));
    print(lengthTracking.includes(NaN));
  }
})();

function IndexOfLastIndexOf(indexOfHelper, lastIndexOfHelper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, Math.floor(i / 2));
    }

    
    
    
    
    

    print(0, indexOfHelper(fixedLength, 0));
    print(1, indexOfHelper(fixedLength, 0, 1));
    print(-1, indexOfHelper(fixedLength, 0, 2));
    print(-1, indexOfHelper(fixedLength, 0, -2));
    print(1, indexOfHelper(fixedLength, 0, -3));
    print(2, indexOfHelper(fixedLength, 1, 1));
    print(2, indexOfHelper(fixedLength, 1, -3));
    print(2, indexOfHelper(fixedLength, 1, -2));
    print(-1, indexOfHelper(fixedLength, undefined));

    print(1, lastIndexOfHelper(fixedLength, 0));
    print(1, lastIndexOfHelper(fixedLength, 0, 1));
    print(1, lastIndexOfHelper(fixedLength, 0, 2));
    print(1, lastIndexOfHelper(fixedLength, 0, -2));
    print(1, lastIndexOfHelper(fixedLength, 0, -3));
    print(-1, lastIndexOfHelper(fixedLength, 1, 1));
    print(2, lastIndexOfHelper(fixedLength, 1, -2));
    print(-1, lastIndexOfHelper(fixedLength, 1, -3));
    print(-1, lastIndexOfHelper(fixedLength, undefined));

    print(-1, indexOfHelper(fixedLengthWithOffset, 0));
    print(0, indexOfHelper(fixedLengthWithOffset, 1));
    print(0, indexOfHelper(fixedLengthWithOffset, 1, -2));
    print(1, indexOfHelper(fixedLengthWithOffset, 1, -1));
    print(-1, indexOfHelper(fixedLengthWithOffset, undefined));

    print(-1, lastIndexOfHelper(fixedLengthWithOffset, 0));
    print(1, lastIndexOfHelper(fixedLengthWithOffset, 1));
    print(0, lastIndexOfHelper(fixedLengthWithOffset, 1, -2));
    print(1, lastIndexOfHelper(fixedLengthWithOffset, 1, -1));
    print(-1, lastIndexOfHelper(fixedLengthWithOffset, undefined));

    print(0, indexOfHelper(lengthTracking, 0));
    print(-1, indexOfHelper(lengthTracking, 0, 2));
    print(2, indexOfHelper(lengthTracking, 1, -3));
    print(-1, indexOfHelper(lengthTracking, undefined));

    print(1, lastIndexOfHelper(lengthTracking, 0));
    print(1, lastIndexOfHelper(lengthTracking, 0, 2));
    print(1, lastIndexOfHelper(lengthTracking, 0, -3));
    print(-1, lastIndexOfHelper(lengthTracking, 1, 1));
    print(2, lastIndexOfHelper(lengthTracking, 1, 2));
    print(-1, lastIndexOfHelper(lengthTracking, 1, -3));
    print(-1, lastIndexOfHelper(lengthTracking, undefined));

    print(-1, indexOfHelper(lengthTrackingWithOffset, 0));
    print(0, indexOfHelper(lengthTrackingWithOffset, 1));
    print(1, indexOfHelper(lengthTrackingWithOffset, 1, 1));
    print(0, indexOfHelper(lengthTrackingWithOffset, 1, -2));
    print(-1, indexOfHelper(lengthTrackingWithOffset, undefined));

    print(-1, lastIndexOfHelper(lengthTrackingWithOffset, 0));
    print(1, lastIndexOfHelper(lengthTrackingWithOffset, 1));
    print(1, lastIndexOfHelper(lengthTrackingWithOffset, 1, 1));
    print(0, lastIndexOfHelper(lengthTrackingWithOffset, 1, -2));
    print(1, lastIndexOfHelper(lengthTrackingWithOffset, 1, -1));
    print(-1, lastIndexOfHelper(lengthTrackingWithOffset, undefined));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { indexOfHelper(fixedLength, 1); });
      print(() => { indexOfHelper(fixedLengthWithOffset, 1); });

      print(() => { lastIndexOfHelper(fixedLength, 1); });
      print(() => { lastIndexOfHelper(fixedLengthWithOffset, 1); });
    } else {
      print(-1, indexOfHelper(fixedLength, 1));
      print(-1, indexOfHelper(fixedLengthWithOffset, 1));

      print(-1, lastIndexOfHelper(fixedLength, 1));
      print(-1, lastIndexOfHelper(fixedLengthWithOffset, 1));
    }

    print(2, indexOfHelper(lengthTracking, 1));
    print(-1, indexOfHelper(lengthTracking, undefined));

    print(1, lastIndexOfHelper(lengthTracking, 0));
    print(-1, lastIndexOfHelper(lengthTracking, undefined));

    print(-1, indexOfHelper(lengthTrackingWithOffset, 0));
    print(0, indexOfHelper(lengthTrackingWithOffset, 1));
    print(-1, indexOfHelper(lengthTrackingWithOffset, undefined));

    print(-1, lastIndexOfHelper(lengthTrackingWithOffset, 0));
    print(0, lastIndexOfHelper(lengthTrackingWithOffset, 1));
    print(-1, lastIndexOfHelper(lengthTrackingWithOffset, undefined));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { indexOfHelper(fixedLength, 0); });
      print(() => { indexOfHelper(fixedLengthWithOffset, 0); });
      print(() => { indexOfHelper(lengthTrackingWithOffset, 0); });

      print(() => { lastIndexOfHelper(fixedLength, 0); });
      print(() => { lastIndexOfHelper(fixedLengthWithOffset, 0); });
      print(() => { lastIndexOfHelper(lengthTrackingWithOffset, 0); });
    } else {
      print(-1, indexOfHelper(fixedLength, 0));
      print(-1, indexOfHelper(fixedLengthWithOffset, 0));
      print(-1, indexOfHelper(lengthTrackingWithOffset, 0));

      print(-1, lastIndexOfHelper(fixedLength, 0));
      print(-1, lastIndexOfHelper(fixedLengthWithOffset, 0));
      print(-1, lastIndexOfHelper(lengthTrackingWithOffset, 0));
    }

    print(0, indexOfHelper(lengthTracking, 0));

    print(0, lastIndexOfHelper(lengthTracking, 0));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { indexOfHelper(fixedLength, 0); });
      print(() => { indexOfHelper(fixedLengthWithOffset, 0); });
      print(() => { indexOfHelper(lengthTrackingWithOffset, 0); });

      print(() => { lastIndexOfHelper(fixedLength, 0); });
      print(() => { lastIndexOfHelper(fixedLengthWithOffset, 0); });
      print(() => { lastIndexOfHelper(lengthTrackingWithOffset, 0); });
    } else {
      print(-1, indexOfHelper(fixedLength, 0));
      print(-1, indexOfHelper(fixedLengthWithOffset, 0));
      print(-1, indexOfHelper(lengthTrackingWithOffset, 0));

      print(-1, lastIndexOfHelper(fixedLength, 0));
      print(-1, lastIndexOfHelper(fixedLengthWithOffset, 0));
      print(-1, lastIndexOfHelper(lengthTrackingWithOffset, 0));
    }

    print(-1, indexOfHelper(lengthTracking, 0));
    print(-1, indexOfHelper(lengthTracking, undefined));

    print(-1, lastIndexOfHelper(lengthTracking, 0));
    print(-1, lastIndexOfHelper(lengthTracking, undefined));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, Math.floor(i / 2));
    }

    
    
    
    
    

    print(2, indexOfHelper(fixedLength, 1));
    print(-1, indexOfHelper(fixedLength, 2));
    print(-1, indexOfHelper(fixedLength, undefined));

    print(3, lastIndexOfHelper(fixedLength, 1));
    print(-1, lastIndexOfHelper(fixedLength, 2));
    print(-1, lastIndexOfHelper(fixedLength, undefined));

    print(-1, indexOfHelper(fixedLengthWithOffset, 0));
    print(0, indexOfHelper(fixedLengthWithOffset, 1));
    print(-1, indexOfHelper(fixedLengthWithOffset, 2));
    print(-1, indexOfHelper(fixedLengthWithOffset, undefined));

    print(-1, lastIndexOfHelper(fixedLengthWithOffset, 0));
    print(1, lastIndexOfHelper(fixedLengthWithOffset, 1));
    print(-1, lastIndexOfHelper(fixedLengthWithOffset, 2));
    print(-1, lastIndexOfHelper(fixedLengthWithOffset, undefined));

    print(2, indexOfHelper(lengthTracking, 1));
    print(4, indexOfHelper(lengthTracking, 2));
    print(-1, indexOfHelper(lengthTracking, undefined));

    print(3, lastIndexOfHelper(lengthTracking, 1));
    print(5, lastIndexOfHelper(lengthTracking, 2));
    print(-1, lastIndexOfHelper(lengthTracking, undefined));

    print(-1, indexOfHelper(lengthTrackingWithOffset, 0));
    print(0, indexOfHelper(lengthTrackingWithOffset, 1));
    print(2, indexOfHelper(lengthTrackingWithOffset, 2));
    print(-1, indexOfHelper(lengthTrackingWithOffset, undefined));

    print(-1, lastIndexOfHelper(lengthTrackingWithOffset, 0));
    print(1, lastIndexOfHelper(lengthTrackingWithOffset, 1));
    print(3, lastIndexOfHelper(lengthTrackingWithOffset, 2));
    print(-1, lastIndexOfHelper(lengthTrackingWithOffset, undefined));
  }
}
IndexOfLastIndexOf(TypedArrayIndexOfHelper, TypedArrayLastIndexOfHelper, true);
IndexOfLastIndexOf(ArrayIndexOfHelper, ArrayLastIndexOfHelper, false);

function IndexOfParameterConversionShrinks(indexOfHelper, lastIndexOfHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(0, indexOfHelper(fixedLength, 0));
    
    print(-1, indexOfHelper(fixedLength, 0, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(0, indexOfHelper(fixedLength, 0));
    
    print(-1, indexOfHelper(fixedLength, undefined, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(2, indexOfHelper(lengthTracking, 2));
    
    print(-1, indexOfHelper(lengthTracking, 2, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    let evil = { valueOf: () => {
      rab.resize(0);
      return 2;
    }};
    print(2, indexOfHelper(lengthTracking, 2));
    
    print(-1, indexOfHelper(lengthTracking, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    let evil = { valueOf: () => {
      rab.resize(0);
      return 1;
    }};
    print(2, indexOfHelper(lengthTracking, 2));
    
    print(-1, indexOfHelper(lengthTracking, 2, evil));
  }
}
IndexOfParameterConversionShrinks(TypedArrayIndexOfHelper);
IndexOfParameterConversionShrinks(ArrayIndexOfHelper);

function LastIndexOfParameterConversionShrinks(lastIndexOfHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 2;
    }};
    print(3, lastIndexOfHelper(fixedLength, 0));
    
    print(-1, lastIndexOfHelper(fixedLength, 0, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 2;
    }};
    print(3, lastIndexOfHelper(fixedLength, 0));
    
    print(-1, lastIndexOfHelper(fixedLength, undefined, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 2;
    }};
    print(2, lastIndexOfHelper(lengthTracking, 2));
    
    print(-1, lastIndexOfHelper(lengthTracking, 2, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    const evil = { valueOf: () => {
      rab.resize(0);
      return 2;
    }};
    print(2, lastIndexOfHelper(lengthTracking, 2));
    
    print(-1, lastIndexOfHelper(lengthTracking, evil));
  }

  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    const evil = { valueOf: () => {
      rab.resize(0);
      return 2;
    }};
    print(2, lastIndexOfHelper(lengthTracking, 2));
    
    print(-1, lastIndexOfHelper(lengthTracking, 2, evil));
  }
}
LastIndexOfParameterConversionShrinks(TypedArrayLastIndexOfHelper);
LastIndexOfParameterConversionShrinks(ArrayLastIndexOfHelper);

function IndexOfParameterConversionGrows(indexOfHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, 1);
    }

    let evil = { valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(-1, indexOfHelper(lengthTracking, 0));
    
    print(-1, indexOfHelper(lengthTracking, 0, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    WriteToTypedArray(lengthTracking, 0, 1);

    let evil = { valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }};
    print(0, indexOfHelper(lengthTracking, 1, -4));
    
    
    print(0, indexOfHelper(lengthTracking, 1, evil));
  }
}
IndexOfParameterConversionGrows(TypedArrayIndexOfHelper);
IndexOfParameterConversionGrows(ArrayIndexOfHelper);

function LastIndexOfParameterConversionGrows(lastIndexOfHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, 1);
    }

    let evil = { valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -1;
    }};
    print(-1, lastIndexOfHelper(lengthTracking, 0));
    
    
    
    
    print(-1, lastIndexOfHelper(lengthTracking, 0, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }};
    print(0, lastIndexOfHelper(lengthTracking, 0, -4));
    
    
    print(0, lastIndexOfHelper(lengthTracking, 0, evil));
  }
}
LastIndexOfParameterConversionGrows(TypedArrayLastIndexOfHelper);
LastIndexOfParameterConversionGrows(ArrayLastIndexOfHelper);

(function IndexOfLastIndexOfSpecialValues() {
  for (let ctor of floatCtors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);
    lengthTracking[0] = -Infinity;
    lengthTracking[1] = -Infinity;
    lengthTracking[2] = Infinity;
    lengthTracking[3] = Infinity;
    lengthTracking[4] = NaN;
    lengthTracking[5] = NaN;
    print(0, lengthTracking.indexOf(-Infinity));
    print(1, lengthTracking.lastIndexOf(-Infinity));
    print(2, lengthTracking.indexOf(Infinity));
    print(3, lengthTracking.lastIndexOf(Infinity));
    
    print(-1, lengthTracking.indexOf(NaN));
    print(-1, lengthTracking.lastIndexOf(NaN));
  }
})();

function JoinToLocaleString(joinHelper, toLocaleStringHelper, oobThrows) {
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

    
    
    
    
    

    print('0,2,4,6', joinHelper(fixedLength));
    print('0,2,4,6', toLocaleStringHelper(fixedLength));
    print('4,6', joinHelper(fixedLengthWithOffset));
    print('4,6', toLocaleStringHelper(fixedLengthWithOffset));
    print('0,2,4,6', joinHelper(lengthTracking));
    print('0,2,4,6', toLocaleStringHelper(lengthTracking));
    print('4,6', joinHelper(lengthTrackingWithOffset));
    print('4,6', toLocaleStringHelper(lengthTrackingWithOffset));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { joinHelper(fixedLength); });
      print(() => { toLocaleStringHelper(fixedLength); });
      print(() => { joinHelper(fixedLengthWithOffset); });
      print(() => { toLocaleStringHelper(fixedLengthWithOffset); });
    } else {
      print('', joinHelper(fixedLength));
      print('', toLocaleStringHelper(fixedLength));
      print('', joinHelper(fixedLengthWithOffset));
      print('', toLocaleStringHelper(fixedLengthWithOffset));
    }

    print('0,2,4', joinHelper(lengthTracking));
    print('0,2,4', toLocaleStringHelper(lengthTracking));
    print('4', joinHelper(lengthTrackingWithOffset));
    print('4', toLocaleStringHelper(lengthTrackingWithOffset));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { joinHelper(fixedLength); });
      print(() => { toLocaleStringHelper(fixedLength); });
      print(() => { joinHelper(fixedLengthWithOffset); });
      print(() => { toLocaleStringHelper(fixedLengthWithOffset); });
      print(() => { joinHelper(lengthTrackingWithOffset); });
      print(() => { toLocaleStringHelper(lengthTrackingWithOffset); });
    } else {
      print('', joinHelper(fixedLength));
      print('', toLocaleStringHelper(fixedLength));
      print('', joinHelper(fixedLengthWithOffset));
      print('', toLocaleStringHelper(fixedLengthWithOffset));
      print('', joinHelper(lengthTrackingWithOffset));
      print('', toLocaleStringHelper(lengthTrackingWithOffset));
    }
    print('0', joinHelper(lengthTracking));
    print('0', toLocaleStringHelper(lengthTracking));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { joinHelper(fixedLength); });
      print(() => { toLocaleStringHelper(fixedLength); });
      print(() => { joinHelper(fixedLengthWithOffset); });
      print(() => { toLocaleStringHelper(fixedLengthWithOffset); });
      print(() => { joinHelper(lengthTrackingWithOffset); });
      print(() => { toLocaleStringHelper(lengthTrackingWithOffset); });
    } else {
      print('', joinHelper(fixedLength));
      print('', toLocaleStringHelper(fixedLength));
      print('', joinHelper(fixedLengthWithOffset));
      print('', toLocaleStringHelper(fixedLengthWithOffset));
      print('', joinHelper(lengthTrackingWithOffset));
      print('', toLocaleStringHelper(lengthTrackingWithOffset));
    }
    print('', joinHelper(lengthTracking));
    print('', toLocaleStringHelper(lengthTracking));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print('0,2,4,6', joinHelper(fixedLength));
    print('0,2,4,6', toLocaleStringHelper(fixedLength));
    print('4,6', joinHelper(fixedLengthWithOffset));
    print('4,6', toLocaleStringHelper(fixedLengthWithOffset));
    print('0,2,4,6,8,10', joinHelper(lengthTracking));
    print('0,2,4,6,8,10', toLocaleStringHelper(lengthTracking));
    print('4,6,8,10', joinHelper(lengthTrackingWithOffset));
    print('4,6,8,10', toLocaleStringHelper(lengthTrackingWithOffset));
 }
}
JoinToLocaleString(TypedArrayJoinHelper, TypedArrayToLocaleStringHelper, true);
JoinToLocaleString(ArrayJoinHelper, ArrayToLocaleStringHelper, false);

function JoinParameterConversionShrinks(joinHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { toString: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return '.';
    }};
    
    
    
    print('...', joinHelper(fixedLength, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { toString: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return '.';
    }};
    
    
    print('0.0..', joinHelper(lengthTracking, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { toString: () => {
      rab.resize(0);
      return '.';
    }};
    
    
    print('...', joinHelper(lengthTracking, evil));
  }
}
JoinParameterConversionShrinks(TypedArrayJoinHelper);
JoinParameterConversionShrinks(ArrayJoinHelper);

function JoinParameterConversionGrows(joinHelper) {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { toString: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return '.';
    }};
    print('0.0.0.0', joinHelper(fixedLength, evil));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let evil = { toString: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return '.';
    }};
    
    print('0.0.0.0', joinHelper(lengthTracking, evil));
  }
}
JoinParameterConversionGrows(TypedArrayJoinHelper);
JoinParameterConversionGrows(ArrayJoinHelper);

function ToLocaleStringNumberPrototypeToLocaleStringShrinks(
    toLocaleStringHelper) {
  const oldNumberPrototypeToLocaleString = Number.prototype.toLocaleString;
  const oldBigIntPrototypeToLocaleString = BigInt.prototype.toLocaleString;

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let resizeAfter = 2;
    Number.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,0,,', toLocaleStringHelper(fixedLength));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let resizeAfter = 2;
    Number.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,0,,', toLocaleStringHelper(lengthTracking));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let resizeAfter = 1;
    Number.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(0);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(0);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,,,', toLocaleStringHelper(lengthTracking));
  }

  Number.prototype.toLocaleString = oldNumberPrototypeToLocaleString;
  BigInt.prototype.toLocaleString = oldBigIntPrototypeToLocaleString;
}
ToLocaleStringNumberPrototypeToLocaleStringShrinks(
    TypedArrayToLocaleStringHelper);
ToLocaleStringNumberPrototypeToLocaleStringShrinks(ArrayToLocaleStringHelper);

function ToLocaleStringNumberPrototypeToLocaleStringGrows(
    toLocaleStringHelper) {
  const oldNumberPrototypeToLocaleString = Number.prototype.toLocaleString;
  const oldBigIntPrototypeToLocaleString = BigInt.prototype.toLocaleString;

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);

    let resizeAfter = 2;
    Number.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,0,0,0', toLocaleStringHelper(fixedLength));
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab);

    let resizeAfter = 2;
    Number.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --resizeAfter;
      if (resizeAfter == 0) {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    print('0,0,0,0', toLocaleStringHelper(lengthTracking));
  }

  Number.prototype.toLocaleString = oldNumberPrototypeToLocaleString;
  BigInt.prototype.toLocaleString = oldBigIntPrototypeToLocaleString;
}
ToLocaleStringNumberPrototypeToLocaleStringGrows(
    TypedArrayToLocaleStringHelper);
ToLocaleStringNumberPrototypeToLocaleStringGrows(
    ArrayToLocaleStringHelper);

function TestMap(mapHelper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(rab);
    for (let i = 0; i < taWrite.length; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    function Helper(array) {
      const values = [];
      function GatherValues(n, ix) {
        print(values.length, ix);
        values.push(n);
        if (typeof n == 'bigint') {
          return n + 1n;
        }
        return n + 1;
      }
      const newValues = mapHelper(array, GatherValues);
      for (let i = 0; i < values.length; ++i) {
        if (typeof values[i] == 'bigint') {
          print(newValues[i], values[i] + 1n);
        } else {
          print(newValues[i], values[i] + 1);
        }
      }
      return ToNumbers(values);
    }

    print([0, 2, 4, 6], Helper(fixedLength));
    print([4, 6], Helper(fixedLengthWithOffset));
    print([0, 2, 4, 6], Helper(lengthTracking));
    print([4, 6], Helper(lengthTrackingWithOffset));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    if (oobThrows) {
      print(() => { Helper(fixedLength); });
      print(() => { Helper(fixedLengthWithOffset); });
    } else {
      print([], Helper(fixedLength));
      print([], Helper(fixedLengthWithOffset));
    }
    print([0, 2, 4], Helper(lengthTracking));
    print([4], Helper(lengthTrackingWithOffset));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    if (oobThrows) {
      print(() => { Helper(fixedLength); });
      print(() => { Helper(fixedLengthWithOffset); });
      print(() => { Helper(lengthTrackingWithOffset); });
    } else {
      print([], Helper(fixedLength));
      print([], Helper(fixedLengthWithOffset));
      print([], Helper(lengthTrackingWithOffset));
    }
    print([0], Helper(lengthTracking));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { Helper(fixedLength); });
      print(() => { Helper(fixedLengthWithOffset); });
      print(() => { Helper(lengthTrackingWithOffset); });
    } else {
      print([], Helper(fixedLength));
      print([], Helper(fixedLengthWithOffset));
      print([], Helper(lengthTrackingWithOffset));
    }

    print([], Helper(lengthTracking));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print([0, 2, 4, 6], Helper(fixedLength));
    print([4, 6], Helper(fixedLengthWithOffset));
    print([0, 2, 4, 6, 8, 10], Helper(lengthTracking));
    print([4, 6, 8, 10], Helper(lengthTrackingWithOffset));
  }
}
TestMap(TypedArrayMapHelper, true);
TestMap(ArrayMapHelper, false);

function MapShrinkMidIteration(mapHelper, hasUndefined) {
  
  
  
  
  
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
  function CollectValuesAndResize(n, ix, ta) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == resizeAfter) {
      rab.resize(resizeTo);
    }
    
    
    if (IsBigIntTypedArray(ta)) {
      return 0n;
    }
    return 0;
  }

  function Helper(array) {
    values = [];
    mapHelper(array, CollectValuesAndResize);
    return values;
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    if (hasUndefined) {
      print([0, 2, undefined, undefined], Helper(fixedLength));
    } else {
      print([0, 2], Helper(fixedLength));
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    if (hasUndefined) {
      print([4, undefined], Helper(fixedLengthWithOffset));
    } else {
      print([4], Helper(fixedLengthWithOffset));
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    if (hasUndefined) {
      print([0, 2, 4, undefined], Helper(lengthTracking));
    } else {
      print([0, 2, 4], Helper(lengthTracking));
    }
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 1;
    resizeTo = 0;
    if (hasUndefined) {
      print([0, undefined, undefined, undefined],
                   Helper(lengthTracking));
    } else {
      print([0], Helper(lengthTracking));
    }
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    if (hasUndefined) {
      print([4, undefined], Helper(lengthTrackingWithOffset));
    } else {
      print([4], Helper(lengthTrackingWithOffset));
    }
  }
}
MapShrinkMidIteration(TypedArrayMapHelper, true);
MapShrinkMidIteration(ArrayMapHelper, false);

function MapGrowMidIteration(mapHelper) {
  
  
  
  
  
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
    return n;
  }

  function Helper(array) {
    values = [];
    mapHelper(array, CollectValuesAndResize);
    return values;
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], Helper(fixedLength));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], Helper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAfter = 2;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], Helper(lengthTracking));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAfter = 1;
    resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], Helper(lengthTrackingWithOffset));
  }
}
MapGrowMidIteration(TypedArrayMapHelper);
MapGrowMidIteration(ArrayMapHelper);

(function MapSpeciesCreateShrinks() {
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

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const fixedLength = new MyArray(rab, 0, 4);
    resizeWhenConstructorCalled = true;
    print([undefined, undefined, undefined, undefined],
                 Helper(fixedLength));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    resizeWhenConstructorCalled = true;
    print([0, 1, undefined, undefined], Helper(lengthTracking));
    print(2 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(0);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    resizeWhenConstructorCalled = true;
    print([undefined, undefined, undefined, undefined],
                 Helper(lengthTracking));
    print(0, rab.byteLength);
  }
})();

(function MapSpeciesCreateGrows() {
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
    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(6 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const fixedLength = new MyArray(rab, 0, 4);
    resizeWhenConstructorCalled = true;
    print([0, 1, 2, 3], Helper(fixedLength));
    print(6 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          rab.resize(6 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const lengthTracking = new MyArray(rab);
    resizeWhenConstructorCalled = true;
    print([0, 1, 2, 3], Helper(lengthTracking));
    print(6 * ctor.BYTES_PER_ELEMENT, rab.byteLength);
  }
})();

function Reverse(reverseHelper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    const wholeArrayView = new ctor(rab);
    function WriteData() {
      
      for (let i = 0; i < wholeArrayView.length; ++i) {
        WriteToTypedArray(wholeArrayView, i, 2 * i);
      }
    }
    WriteData();

    
    
    
    
    

    reverseHelper(fixedLength);
    print([6, 4, 2, 0], ToNumbers(wholeArrayView));
    reverseHelper(fixedLengthWithOffset);
    print([6, 4, 0, 2], ToNumbers(wholeArrayView));
    reverseHelper(lengthTracking);
    print([2, 0, 4, 6], ToNumbers(wholeArrayView));
    reverseHelper(lengthTrackingWithOffset);
    print([2, 0, 6, 4], ToNumbers(wholeArrayView));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    WriteData();

    
    
    

    if (oobThrows) {
      print(() => { reverseHelper(fixedLength); });
      print(() => { reverseHelper(fixedLengthWithOffset); });
    } else {
      reverseHelper(fixedLength);
      print([0, 2, 4], ToNumbers(wholeArrayView));
      reverseHelper(fixedLengthWithOffset);
      print([0, 2, 4], ToNumbers(wholeArrayView));
    }

    reverseHelper(lengthTracking);
    print([4, 2, 0], ToNumbers(wholeArrayView));
    reverseHelper(lengthTrackingWithOffset);
    print([4, 2, 0], ToNumbers(wholeArrayView));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);
    WriteData();

    if (oobThrows) {
      print(() => { reverseHelper(fixedLength); });
      print(() => { reverseHelper(fixedLengthWithOffset); });
      print(() => { reverseHelper(lengthTrackingWithOffset); });
    } else {
      reverseHelper(fixedLength);
      print([0], ToNumbers(wholeArrayView));
      reverseHelper(fixedLengthWithOffset);
      print([0], ToNumbers(wholeArrayView));
      reverseHelper(lengthTrackingWithOffset);
      print([0], ToNumbers(wholeArrayView));
    }

    reverseHelper(lengthTracking);
    print([0], ToNumbers(wholeArrayView));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => { reverseHelper(fixedLength); });
      print(() => { reverseHelper(fixedLengthWithOffset); });
      print(() => { reverseHelper(lengthTrackingWithOffset); });
    } else {
      reverseHelper(fixedLength);
      print([], ToNumbers(wholeArrayView));
      reverseHelper(fixedLengthWithOffset);
      print([], ToNumbers(wholeArrayView));
      reverseHelper(lengthTrackingWithOffset);
      print([], ToNumbers(wholeArrayView));
    }
    reverseHelper(lengthTracking);
    print([], ToNumbers(wholeArrayView));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    WriteData();

    
    
    
    
    

    reverseHelper(fixedLength);
    print([6, 4, 2, 0, 8, 10], ToNumbers(wholeArrayView));
    reverseHelper(fixedLengthWithOffset);
    print([6, 4, 0, 2, 8, 10], ToNumbers(wholeArrayView));
    reverseHelper(lengthTracking);
    print([10, 8, 2, 0, 4, 6], ToNumbers(wholeArrayView));
    reverseHelper(lengthTrackingWithOffset);
    print([10, 8, 6, 4, 0, 2], ToNumbers(wholeArrayView));
  }
}
Reverse(TypedArrayReverseHelper, true);
Reverse(ArrayReverseHelper, false);

(function SetWithResizableTarget() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(rab);

    
    
    
    
    

    
    
    const throwingProxy = new Proxy({}, {
      get(target, prop, receiver) {
        throw new Error('Called getter for ' + prop);
      }});

    SetHelper(fixedLength, [1, 2]);
    print([1, 2, 0, 0], ToNumbers(taFull));
    SetHelper(fixedLength, [3, 4], 1);
    print([1, 3, 4, 0], ToNumbers(taFull));
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0], 1)},
                 RangeError);
    print([1, 3, 4, 0], ToNumbers(taFull));

    SetHelper(fixedLengthWithOffset, [5, 6]);
    print([1, 3, 5, 6], ToNumbers(taFull));
    SetHelper(fixedLengthWithOffset, [7], 1);
    print([1, 3, 5, 7], ToNumbers(taFull));
    print(() => { SetHelper(fixedLengthWithOffset, [0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(fixedLengthWithOffset, [0, 0], 1)},
                 RangeError);
    print([1, 3, 5, 7], ToNumbers(taFull));

    SetHelper(lengthTracking, [8, 9]);
    print([8, 9, 5, 7], ToNumbers(taFull));
    SetHelper(lengthTracking, [10, 11], 1);
    print([8, 10, 11, 7], ToNumbers(taFull));
    print(() => { SetHelper(lengthTracking, [0, 0, 0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(lengthTracking, [0, 0, 0, 0], 1)},
                 RangeError);
    print([8, 10, 11, 7], ToNumbers(taFull));

    SetHelper(lengthTrackingWithOffset, [12, 13]);
    print([8, 10, 12, 13], ToNumbers(taFull));
    SetHelper(lengthTrackingWithOffset, [14], 1);
    print([8, 10, 12, 14], ToNumbers(taFull));
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0, 0])});
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0], 1)});
    print([8, 10, 12, 14], ToNumbers(taFull));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    print(() => { SetHelper(fixedLength, throwingProxy)}, TypeError);
    print(() => { SetHelper(fixedLengthWithOffset, throwingProxy)},
                 TypeError);
    print([8, 10, 12], ToNumbers(taFull));

    SetHelper(lengthTracking, [15, 16]);
    print([15, 16, 12], ToNumbers(taFull));
    SetHelper(lengthTracking, [17, 18], 1);
    print([15, 17, 18], ToNumbers(taFull));
    print(() => { SetHelper(lengthTracking, [0, 0, 0, 0])}, RangeError);
    print(() => { SetHelper(lengthTracking, [0, 0, 0], 1)}, RangeError);
    print([15, 17, 18], ToNumbers(taFull));

    SetHelper(lengthTrackingWithOffset, [19]);
    print([15, 17, 19], ToNumbers(taFull));
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0])},
                 RangeError);
    print(() => { SetHelper(lengthTrackingWithOffset, [0], 1)},
                 RangeError);
    print([15, 17, 19], ToNumbers(taFull));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print(() => { SetHelper(fixedLength, throwingProxy)}, TypeError);
    print(() => { SetHelper(fixedLengthWithOffset, throwingProxy)},
                 TypeError);
    print(() => { SetHelper(lengthTrackingWithOffset, throwingProxy)},
                 TypeError);
    print([15], ToNumbers(taFull));

    SetHelper(lengthTracking, [20]);
    print([20], ToNumbers(taFull));

    
    rab.resize(0);

    print(() => { SetHelper(fixedLength, throwingProxy)}, TypeError);
    print(() => { SetHelper(fixedLengthWithOffset, throwingProxy)},
                 TypeError);
    print(() => { SetHelper(lengthTrackingWithOffset, throwingProxy)},
                 TypeError);
    print(() => { SetHelper(lengthTracking, [0])}, RangeError);
    print([], ToNumbers(taFull));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    
    SetHelper(fixedLength, [21, 22]);
    print([21, 22, 0, 0, 0, 0], ToNumbers(taFull));
    SetHelper(fixedLength, [23, 24], 1);
    print([21, 23, 24, 0, 0, 0], ToNumbers(taFull));
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0, 0])}, RangeError);
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0], 1)}, RangeError);
    print([21, 23, 24, 0, 0, 0], ToNumbers(taFull));

    SetHelper(fixedLengthWithOffset, [25, 26]);
    print([21, 23, 25, 26, 0, 0], ToNumbers(taFull));
    SetHelper(fixedLengthWithOffset, [27], 1);
    print([21, 23, 25, 27, 0, 0], ToNumbers(taFull));
    print(() => { SetHelper(fixedLengthWithOffset, [0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(fixedLengthWithOffset, [0, 0], 1)},
                 RangeError);
    print([21, 23, 25, 27, 0, 0], ToNumbers(taFull));

    SetHelper(lengthTracking, [28, 29, 30, 31, 32, 33]);
    print([28, 29, 30, 31, 32, 33], ToNumbers(taFull));
    SetHelper(lengthTracking, [34, 35, 36, 37, 38], 1);
    print([28, 34, 35, 36, 37, 38], ToNumbers(taFull));
    print(() => { SetHelper(lengthTracking, [0, 0, 0, 0, 0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(lengthTracking, [0, 0, 0, 0, 0, 0], 1)},
                 RangeError);
    print([28, 34, 35, 36, 37, 38], ToNumbers(taFull));

    SetHelper(lengthTrackingWithOffset, [39, 40, 41, 42]);
    print([28, 34, 39, 40, 41, 42], ToNumbers(taFull));
    SetHelper(lengthTrackingWithOffset, [43, 44, 45], 1);
    print([28, 34, 39, 43, 44, 45], ToNumbers(taFull));
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0, 0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0, 0, 0], 1)},
                 RangeError);
    print([28, 34, 39, 43, 44, 45], ToNumbers(taFull));
  }
})();

(function SetSourceLengthGetterShrinksTarget() {
  
  
  
  
  
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
  let resizeTo;
  function CreateSourceProxy(length) {
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          rab.resize(resizeTo);
          return length;
        }
        return true; 
      }
    });
  }

  
  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    fixedLength.set(CreateSourceProxy(1));
    print([0, 2, 4], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    fixedLengthWithOffset.set(CreateSourceProxy(1));
    print([0, 2, 4], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    lengthTracking.set(CreateSourceProxy(1));
    print([1, 2, 4], ToNumbers(lengthTracking));
    print([1, 2, 4], ToNumbers(new ctor(rab)));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeTo = 0;
    lengthTracking.set(CreateSourceProxy(1));
    print([], ToNumbers(lengthTracking));
    print([], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(1));
    print([1], ToNumbers(lengthTrackingWithOffset));
    print([0, 2, 1], ToNumbers(new ctor(rab)));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 1 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(1));
    print([0], ToNumbers(new ctor(rab)));
  }

  
  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    fixedLength.set(CreateSourceProxy(0));
    print([0, 2, 4], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    fixedLengthWithOffset.set(CreateSourceProxy(0));
    print([0, 2, 4], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    lengthTracking.set(CreateSourceProxy(0));
    print([0, 2, 4], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(0));
    print([0, 2, 4], ToNumbers(new ctor(rab)));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 1 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(0));
    print([0], ToNumbers(new ctor(rab)));
  }
})();

(function SetSourceLengthGetterGrowsTarget() {
  
  
  
  
  
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
  let resizeTo;
  function CreateSourceProxy(length) {
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          rab.resize(resizeTo);
          return length;
        }
        return true; 
      }
    });
  }

  
  
  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    print(() => { lengthTracking.set(CreateSourceProxy(6)); },
                 RangeError);
    print([0, 2, 4, 6, 0, 0], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    print(() => { lengthTrackingWithOffset.set(CreateSourceProxy(4)); },
                 RangeError);
    print([0, 2, 4, 6, 0, 0], ToNumbers(new ctor(rab)));
  }
})();

(function SetShrinkTargetMidIteration() {
  
  
  
  
  
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
  
  
  let resizeAt;
  let resizeTo;
  function CreateSourceProxy(length) {
    let requestedIndices = [];
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          return length;
        }
        requestedIndices.push(prop);
        if (requestedIndices.length == resizeAt) {
          rab.resize(resizeTo);
        }
        return true; 
      }
    });
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAt = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    fixedLength.set(CreateSourceProxy(4));
    print([1, 2, 4], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAt = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    fixedLengthWithOffset.set(CreateSourceProxy(2));
    print([0, 2, 1], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAt = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    lengthTracking.set(CreateSourceProxy(2));
    print([1, 1, 4], ToNumbers(lengthTracking));
    print([1, 1, 4], ToNumbers(new ctor(rab)));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAt = 2;
    resizeTo = 0;
    lengthTracking.set(CreateSourceProxy(2));
    print([], ToNumbers(lengthTracking));
    print([], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAt = 2;
    resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(2));
    print([1], ToNumbers(lengthTrackingWithOffset));
    print([0, 2, 1], ToNumbers(new ctor(rab)));
  }

  
  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAt = 1;
    resizeTo = 1 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(2));
    print([0], ToNumbers(new ctor(rab)));
  }
})();

(function SetGrowTargetMidIteration() {
  
  
  
  
  
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
  
  
  let resizeAt;
  let resizeTo;
  function CreateSourceProxy(length) {
    let requestedIndices = [];
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          return length;
        }
        requestedIndices.push(prop);
        if (requestedIndices.length == resizeAt) {
          rab.resize(resizeTo);
        }
        return true; 
      }
    });
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);
    resizeAt = 2;
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    fixedLength.set(CreateSourceProxy(4));
    print([1, 1, 1, 1], ToNumbers(fixedLength));
    print([1, 1, 1, 1, 0, 0], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    resizeAt = 1;
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    fixedLengthWithOffset.set(CreateSourceProxy(2));
    print([1, 1], ToNumbers(fixedLengthWithOffset));
    print([0, 2, 1, 1, 0, 0], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);
    resizeAt = 2;
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    lengthTracking.set(CreateSourceProxy(2));
    print([1, 1, 4, 6, 0, 0], ToNumbers(lengthTracking));
    print([1, 1, 4, 6, 0, 0], ToNumbers(new ctor(rab)));
  }

  for (let ctor of ctors) {
    rab = CreateRabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
    resizeAt = 1;
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(2));
    print([1, 1, 0, 0], ToNumbers(lengthTrackingWithOffset));
    print([0, 2, 1, 1, 0, 0], ToNumbers(new ctor(rab)));
  }
})();

(function SetWithResizableSource() {
  for (let targetIsResizable of [false, true]) {
    for (let targetCtor of ctors) {
      for (let sourceCtor of ctors) {
        const rab = CreateResizableArrayBuffer(
            4 * sourceCtor.BYTES_PER_ELEMENT,
            8 * sourceCtor.BYTES_PER_ELEMENT);
        const fixedLength = new sourceCtor(rab, 0, 4);
        const fixedLengthWithOffset = new sourceCtor(
            rab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
        const lengthTracking = new sourceCtor(rab, 0);
        const lengthTrackingWithOffset = new sourceCtor(
            rab, 2 * sourceCtor.BYTES_PER_ELEMENT);

        
        const taFull = new sourceCtor(rab);
        for (let i = 0; i < 4; ++i) {
          WriteToTypedArray(taFull, i, i + 1);
        }

        
        
        
        
        

        const targetAb = targetIsResizable ?
          new ArrayBuffer(6 * targetCtor.BYTES_PER_ELEMENT) :
          new ArrayBuffer(6 * targetCtor.BYTES_PER_ELEMENT,
                         {maxByteLength: 8 * targetCtor.BYTES_PER_ELEMENT});
        const target = new targetCtor(targetAb);

        if (IsBigIntTypedArray(target) != IsBigIntTypedArray(taFull)) {
          
          continue;
        }

        SetHelper(target, fixedLength);
        print([1, 2, 3, 4, 0, 0], ToNumbers(target));

        SetHelper(target, fixedLengthWithOffset);
        print([3, 4, 3, 4, 0, 0], ToNumbers(target));

        SetHelper(target, lengthTracking, 1);
        print([3, 1, 2, 3, 4, 0], ToNumbers(target));

        SetHelper(target, lengthTrackingWithOffset, 1);
        print([3, 3, 4, 3, 4, 0], ToNumbers(target));

        
        rab.resize(3 * sourceCtor.BYTES_PER_ELEMENT);

        
        
        

        print(() => { SetHelper(target, fixedLength)}, TypeError);
        print(() => { SetHelper(target, fixedLengthWithOffset)},
                     TypeError);
        print([3, 3, 4, 3, 4, 0], ToNumbers(target));

        SetHelper(target, lengthTracking);
        print([1, 2, 3, 3, 4, 0], ToNumbers(target));

        SetHelper(target, lengthTrackingWithOffset);
        print([3, 2, 3, 3, 4, 0], ToNumbers(target));

        
        rab.resize(1 * sourceCtor.BYTES_PER_ELEMENT);

        print(() => { SetHelper(target, fixedLength)}, TypeError);
        print(() => { SetHelper(target, fixedLengthWithOffset)},
                     TypeError);
        print(() => { SetHelper(target, lengthTrackingWithOffset)},
                     TypeError);

        SetHelper(target, lengthTracking, 3);
        print([3, 2, 3, 1, 4, 0], ToNumbers(target));

        
        rab.resize(0);

        print(() => { SetHelper(target, fixedLength)}, TypeError);
        print(() => { SetHelper(target, fixedLengthWithOffset)},
                     TypeError);
        print(() => { SetHelper(target, lengthTrackingWithOffset)},
                     TypeError);

        SetHelper(target, lengthTracking, 4);
        print([3, 2, 3, 1, 4, 0], ToNumbers(target));

        
        rab.resize(6 * sourceCtor.BYTES_PER_ELEMENT);

        for (let i = 0; i < 6; ++i) {
          WriteToTypedArray(taFull, i, i + 1);
        }

        
        
        
        
        

        SetHelper(target, fixedLength);
        print([1, 2, 3, 4, 4, 0], ToNumbers(target));

        SetHelper(target, fixedLengthWithOffset);
        print([3, 4, 3, 4, 4, 0], ToNumbers(target));

        SetHelper(target, lengthTracking, 0);
        print([1, 2, 3, 4, 5, 6], ToNumbers(target));

        SetHelper(target, lengthTrackingWithOffset, 1);
        print([1, 3, 4, 5, 6, 6], ToNumbers(target));
      }
    }
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

    
    print([4, 6], ToNumbers(fixedLength.subarray(-2)));
    print([6], ToNumbers(fixedLengthWithOffset.subarray(-1)));
    print([4, 6], ToNumbers(lengthTracking.subarray(-2)));
    print([6], ToNumbers(lengthTrackingWithOffset.subarray(-1)));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    
    
    print([], ToNumbers(fixedLength.subarray(0)));
    print([], ToNumbers(fixedLengthWithOffset.subarray(0)));

    print([0, 2, 4], ToNumbers(lengthTracking.subarray(0)));
    print([4], ToNumbers(lengthTrackingWithOffset.subarray(0)));

    
    print(0, fixedLengthSubFull.length);
    print(0, fixedLengthWithOffsetSubFull.length);

    
    print([2, 4], ToNumbers(lengthTracking.subarray(-2)));
    print([4], ToNumbers(lengthTrackingWithOffset.subarray(-1)));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print([], ToNumbers(fixedLength.subarray(0)));
    print([0], ToNumbers(lengthTracking.subarray(0)));

    
    
    print(() => { fixedLengthWithOffset.subarray(0); }, RangeError);

    
    print(0, fixedLengthSubFull.length);
    print(0, fixedLengthWithOffsetSubFull.length);
    print(0, lengthTrackingWithOffsetSubFull.length);

    
    rab.resize(0);

    print([], ToNumbers(fixedLength.subarray(0)));
    print([], ToNumbers(lengthTracking.subarray(0)));

    print(() => { fixedLengthWithOffset.subarray(0); }, RangeError);
    print(() => { lengthTrackingWithOffset.subarray(0); }, RangeError);

    
    print(0, fixedLengthSubFull.length);
    print(0, fixedLengthWithOffsetSubFull.length);
    print(0, lengthTrackingWithOffsetSubFull.length);

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print([0, 2, 4, 6], ToNumbers(fixedLength.subarray(0)));
    print([4, 6], ToNumbers(fixedLengthWithOffset.subarray(0)));
    print([0, 2, 4, 6, 8, 10], ToNumbers(lengthTracking.subarray(0)));
    print([4, 6, 8, 10],
                 ToNumbers(lengthTrackingWithOffset.subarray(0)));

    
    print(4, fixedLengthSubFull.length);
    print(2, fixedLengthWithOffsetSubFull.length);

    
    
    print(lengthTracking.length, lengthTrackingSubFull.length);
    print(lengthTrackingWithOffset.length,
                 lengthTrackingWithOffsetSubFull.length);
  }
})();

(function SubarrayParameterConversionShrinks() {
  
  
  
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
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(() => { fixedLength.subarray(evil); }, RangeError);
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print([0], ToNumbers(fixedLength.subarray(evil, 1)));
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 3;
    }};
    print(() => { fixedLength.subarray(0, evil); }, RangeError);
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 1;
    }};
    print([0], ToNumbers(fixedLength.subarray(0, evil)));
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => { rab.resize(2 * ctor.BYTES_PER_ELEMENT);
                                    return 0;}};

    print([0], ToNumbers(fixedLength.subarray(evil, 1)));
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(() => {
      lengthTracking.subarray(evil, lengthTracking.length);
    });
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print([0], ToNumbers(lengthTracking.subarray(evil, 1)));
  }

  
  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(() => { lengthTracking.subarray(evil, -1); });
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 3;
    }};
    print(() => { lengthTracking.subarray(0, evil); });
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(0);
      return 1;
    }};
    print(() => { lengthTracking.subarray(0, evil); });
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab);

    let evil = { valueOf: () => {
      rab.resize(0);
      return 0;
    }};
    print([], ToNumbers(lengthTracking.subarray(evil, 0)));
  }
})();

(function SubarrayParameterConversionGrows() {
  
  
  
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

    
    rab.resize(2 * ctor.BYTES_PER_ELEMENT);

    const evil = { valueOf: () => { rab.resize(4 * ctor.BYTES_PER_ELEMENT);
                                    return 0;}};

    
    
    print([], ToNumbers(fixedLength.subarray(evil, 0, 1)));
  }

  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const fixedLength = new ctor(rab, 0, 4);

    const evil = { valueOf: () => { rab.resize(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0;}};

    print([0, 2, 4, 6], ToNumbers(fixedLength.subarray(evil)));
  }

  
  
  for (let ctor of ctors) {
    const rab = CreateRabForTest(ctor);
    const lengthTracking = new ctor(rab, 0);

    const evil = { valueOf: () => { rab.resize(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0;}};

    print([0, 2, 4, 6], ToNumbers(
      lengthTracking.subarray(evil, lengthTracking.length)));
  }
})();



(function SortWithDefaultComparison() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(rab, 0);
    function WriteUnsortedData() {
      
      for (let i = 0; i < taFull.length; ++i) {
        WriteToTypedArray(taFull, i, 10 - 2 * i);
      }
    }
    
    
    
    
    

    WriteUnsortedData();
    fixedLength.sort();
    print([4, 6, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    fixedLengthWithOffset.sort();
    print([10, 8, 4, 6], ToNumbers(taFull));

    WriteUnsortedData();
    lengthTracking.sort();
    print([4, 6, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    lengthTrackingWithOffset.sort();
    print([10, 8, 4, 6], ToNumbers(taFull));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    WriteUnsortedData();
    print(() => { fixedLength.sort(); }, TypeError);

    WriteUnsortedData();
    print(() => { fixedLengthWithOffset.sort(); }, TypeError);

    WriteUnsortedData();
    lengthTracking.sort();
    print([6, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    lengthTrackingWithOffset.sort();
    print([10, 8, 6], ToNumbers(taFull));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    WriteUnsortedData();
    print(() => { fixedLength.sort(); }, TypeError);

    WriteUnsortedData();
    print(() => { fixedLengthWithOffset.sort(); }, TypeError);

    WriteUnsortedData();
    lengthTracking.sort();
    print([10], ToNumbers(taFull));

    WriteUnsortedData();
    print(() => { lengthTrackingWithOffset.sort(); }, TypeError);

    
    rab.resize(0);

    WriteUnsortedData();
    print(() => { fixedLength.sort(); }, TypeError);

    WriteUnsortedData();
    print(() => { fixedLengthWithOffset.sort(); }, TypeError);

    WriteUnsortedData();
    lengthTracking.sort();
    print([], ToNumbers(taFull));

    WriteUnsortedData();
    print(() => { lengthTrackingWithOffset.sort(); }, TypeError);

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    

    WriteUnsortedData();
    fixedLength.sort();
    print([4, 6, 8, 10, 2, 0], ToNumbers(taFull));

    WriteUnsortedData();
    fixedLengthWithOffset.sort();
    print([10, 8, 4, 6, 2, 0], ToNumbers(taFull));

    WriteUnsortedData();
    lengthTracking.sort();
    print([0, 2, 4, 6, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    lengthTrackingWithOffset.sort();
    print([10, 8, 0, 2, 4, 6], ToNumbers(taFull));
  }
})();


(function ArraySortWithDefaultComparison() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(rab, 0);
    function WriteUnsortedData() {
      
      for (let i = 0; i < taFull.length; ++i) {
        WriteToTypedArray(taFull, i, 10 - 2 * i);
      }
    }
    
    
    
    
    

    WriteUnsortedData();
    ArraySortHelper(fixedLength);
    print([10, 4, 6, 8], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(fixedLengthWithOffset);
    print([10, 8, 4, 6], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(lengthTracking);
    print([10, 4, 6, 8], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(lengthTrackingWithOffset);
    print([10, 8, 4, 6], ToNumbers(taFull));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    WriteUnsortedData();
    ArraySortHelper(fixedLength);  
    print([10, 8, 6], ToNumbers(taFull));
    ArraySortHelper(fixedLengthWithOffset);  
    print([10, 8, 6], ToNumbers(taFull));

    ArraySortHelper(lengthTracking);
    print([10, 6, 8], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(lengthTrackingWithOffset);
    print([10, 8, 6], ToNumbers(taFull));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    WriteUnsortedData();
    ArraySortHelper(fixedLength);  
    print([10], ToNumbers(taFull));
    ArraySortHelper(fixedLengthWithOffset);  
    print([10], ToNumbers(taFull));
    ArraySortHelper(lengthTrackingWithOffset);
    print([10], ToNumbers(taFull));   

    ArraySortHelper(lengthTracking);
    print([10], ToNumbers(taFull));

    
    rab.resize(0);

    ArraySortHelper(fixedLength);  
    print([], ToNumbers(taFull));
    ArraySortHelper(fixedLengthWithOffset);  
    print([], ToNumbers(taFull));
    ArraySortHelper(lengthTrackingWithOffset);  
    print([], ToNumbers(taFull));

    ArraySortHelper(lengthTracking);
    print([], ToNumbers(taFull));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    

    WriteUnsortedData();
    ArraySortHelper(fixedLength);
    print([10, 4, 6, 8, 2, 0], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(fixedLengthWithOffset);
    print([10, 8, 4, 6, 2, 0], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(lengthTracking);
    print([0, 10, 2, 4, 6, 8], ToNumbers(taFull));

    WriteUnsortedData();
    ArraySortHelper(lengthTrackingWithOffset);
    print([10, 8, 0, 2, 4, 6], ToNumbers(taFull));
  }
})();

function SortWithCustomComparison(sortHelper, oobThrows) {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(rab, 0);
    function WriteUnsortedData() {
      
      for (let i = 0; i < taFull.length; ++i) {
        WriteToTypedArray(taFull, i, 10 - i);
      }
    }
    function CustomComparison(a, b) {
      
      a = Number(a);
      b = Number(b);
      if (a % 2 == 1 && b % 2 == 0) {
        return -1;
      }
      if (a % 2 == 0 && b % 2 == 1) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    
    
    
    
    

    WriteUnsortedData();
    sortHelper(fixedLength, CustomComparison);
    print([7, 9, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(fixedLengthWithOffset, CustomComparison);
    print([10, 9, 7, 8], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(lengthTracking, CustomComparison);
    print([7, 9, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(lengthTrackingWithOffset, CustomComparison);
    print([10, 9, 7, 8], ToNumbers(taFull));

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    
    
    

    WriteUnsortedData();
    if (oobThrows) {
      print(() => {
          sortHelper(fixedLength, CustomComparison); }, TypeError);
      print([10, 9, 8], ToNumbers(taFull));
      print(() => {
          sortHelper(fixedLengthWithOffset, CustomComparison); }, TypeError);
      print([10, 9, 8], ToNumbers(taFull));
    } else {
      sortHelper(fixedLength, CustomComparison);
      print([10, 9, 8], ToNumbers(taFull));
      sortHelper(fixedLengthWithOffset, CustomComparison);
      print([10, 9, 8], ToNumbers(taFull));
    }

    WriteUnsortedData();
    sortHelper(lengthTracking, CustomComparison);
    print([9, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(lengthTrackingWithOffset, CustomComparison);
    print([10, 9, 8], ToNumbers(taFull));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    WriteUnsortedData();
    if (oobThrows) {
      print(() => {
          sortHelper(fixedLength, CustomComparison); }, TypeError);
      print([10], ToNumbers(taFull));
      print(() => {
          sortHelper(fixedLengthWithOffset, CustomComparison); }, TypeError);
      print([10], ToNumbers(taFull));
      print(() => {
          sortHelper(lengthTrackingWithOffset, CustomComparison); }, TypeError);
      print([10], ToNumbers(taFull));
    } else {
      sortHelper(fixedLength, CustomComparison);
      print([10], ToNumbers(taFull));
      sortHelper(fixedLengthWithOffset, CustomComparison);
      print([10], ToNumbers(taFull));
      sortHelper(lengthTrackingWithOffset, CustomComparison);
      print([10], ToNumbers(taFull));
    }

    WriteUnsortedData();
    sortHelper(lengthTracking, CustomComparison);
    print([10], ToNumbers(taFull));

    
    rab.resize(0);

    if (oobThrows) {
      print(() => {
          sortHelper(fixedLength, CustomComparison); }, TypeError);
      print(() => {
          sortHelper(fixedLengthWithOffset, CustomComparison); }, TypeError);
      print(() => {
          sortHelper(lengthTrackingWithOffset, CustomComparison); }, TypeError);
    } else {
      sortHelper(fixedLength, CustomComparison);
      sortHelper(fixedLengthWithOffset, CustomComparison);
      sortHelper(lengthTrackingWithOffset, CustomComparison);
    }

    sortHelper(lengthTracking, CustomComparison);
    print([], ToNumbers(taFull));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    

    WriteUnsortedData();
    sortHelper(fixedLength, CustomComparison);
    print([7, 9, 8, 10, 6, 5], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(fixedLengthWithOffset, CustomComparison);
    print([10, 9, 7, 8, 6, 5], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(lengthTracking, CustomComparison);
    print([5, 7, 9, 6, 8, 10], ToNumbers(taFull));

    WriteUnsortedData();
    sortHelper(lengthTrackingWithOffset, CustomComparison);
    print([10, 9, 5, 7, 6, 8], ToNumbers(taFull));
  }
}
SortWithCustomComparison(TypedArraySortHelper, true);
SortWithCustomComparison(ArraySortHelper, false);

function SortCallbackShrinks(sortHelper) {
  function WriteUnsortedData(taFull) {
    for (let i = 0; i < taFull.length; ++i) {
      WriteToTypedArray(taFull, i, 10 - i);
    }
  }

  let rab;
  let resizeTo;
  function CustomComparison(a, b) {
    rab.resize(resizeTo);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    const fixedLength = new ctor(rab, 0, 4);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    sortHelper(fixedLength, CustomComparison);

    
    print([10, 9], ToNumbers(taFull));
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 2 * ctor.BYTES_PER_ELEMENT;
    const lengthTracking = new ctor(rab, 0);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    sortHelper(lengthTracking, CustomComparison);

    
    
    const newData = ToNumbers(taFull);
    print(2, newData.length);
    print([10, 9, 8, 7].includes(newData[0]));
    print([10, 9, 8, 7].includes(newData[1]));
  }

  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 0;
    const lengthTracking = new ctor(rab, 0);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    sortHelper(lengthTracking, CustomComparison);
  }
}
SortCallbackShrinks(TypedArraySortHelper);
SortCallbackShrinks(ArraySortHelper);

function SortCallbackGrows(sortHelper) {
  function WriteUnsortedData(taFull) {
    for (let i = 0; i < taFull.length; ++i) {
      WriteToTypedArray(taFull, i, 10 - i);
    }
  }

  let rab;
  let resizeTo;
  function CustomComparison(a, b) {
    rab.resize(resizeTo);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    const fixedLength = new ctor(rab, 0, 4);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    sortHelper(fixedLength, CustomComparison);

    
    print([7, 8, 9, 10, 0, 0], ToNumbers(taFull));
  }

  
  for (let ctor of ctors) {
    rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                     8 * ctor.BYTES_PER_ELEMENT);
    resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
    const lengthTracking = new ctor(rab, 0);
    const taFull = new ctor(rab, 0);
    WriteUnsortedData(taFull);

    sortHelper(lengthTracking, CustomComparison);

    
    
    print([7, 8, 9, 10, 0, 0], ToNumbers(taFull));
  }
}
SortCallbackGrows(TypedArraySortHelper);
SortCallbackGrows(ArraySortHelper);

(function ObjectDefinePropertyDefineProperties() {
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
      const taFull = new ctor(rab, 0);

      
      
      
      
      

      helper(fixedLength, 0, 1);
      print([1, 0, 0, 0], ToNumbers(taFull));
      helper(fixedLengthWithOffset, 0, 2);
      print([1, 0, 2, 0], ToNumbers(taFull));
      helper(lengthTracking, 1, 3);
      print([1, 3, 2, 0], ToNumbers(taFull));
      helper(lengthTrackingWithOffset, 1, 4);
      print([1, 3, 2, 4], ToNumbers(taFull));

      print(() => { helper(fixedLength, 4, 8); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 2, 8); }, TypeError);
      print(() => { helper(lengthTracking, 4, 8); }, TypeError);
      print(() => { helper(lengthTrackingWithOffset, 2, 8); },
                   TypeError);

      
      rab.resize(3 * ctor.BYTES_PER_ELEMENT);

      
      
      

      print(() => { helper(fixedLength, 0, 8); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 0, 8); }, TypeError);
      print([1, 3, 2], ToNumbers(taFull));

      helper(lengthTracking, 0, 5);
      print([5, 3, 2], ToNumbers(taFull));
      helper(lengthTrackingWithOffset, 0, 6);
      print([5, 3, 6], ToNumbers(taFull));

      
      rab.resize(1 * ctor.BYTES_PER_ELEMENT);

      print(() => { helper(fixedLength, 0, 8); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 0, 8); }, TypeError);
      print(() => { helper(lengthTrackingWithOffset, 0, 8); },
                   TypeError);
      print([5], ToNumbers(taFull));

      helper(lengthTracking, 0, 7);
      print([7], ToNumbers(taFull));

      
      rab.resize(0);

      print(() => { helper(fixedLength, 0, 8); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 0, 8); }, TypeError);
      print(() => { helper(lengthTracking, 0, 8); }, TypeError);
      print(() => { helper(lengthTrackingWithOffset, 0, 8); },
                   TypeError);
      print([], ToNumbers(taFull));

      
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);

      helper(fixedLength, 0, 9);
      print([9, 0, 0, 0, 0, 0], ToNumbers(taFull));
      helper(fixedLengthWithOffset, 0, 10);
      print([9, 0, 10, 0, 0, 0], ToNumbers(taFull));
      helper(lengthTracking, 1, 11);
      print([9, 11, 10, 0, 0, 0], ToNumbers(taFull));
      helper(lengthTrackingWithOffset, 2, 12);
      print([9, 11, 10, 0, 12, 0], ToNumbers(taFull));

      
      print(() => { helper(fixedLength, 5, 13); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 3, 13); }, TypeError);
      print([9, 11, 10, 0, 12, 0], ToNumbers(taFull));

      helper(lengthTracking, 4, 14);
      print([9, 11, 10, 0, 14, 0], ToNumbers(taFull));
      helper(lengthTrackingWithOffset, 3, 15);
      print([9, 11, 10, 0, 14, 15], ToNumbers(taFull));
    }
  }
})();

(function ObjectDefinePropertyParameterConversionShrinks() {
  const helper = ObjectDefinePropertyHelper;
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const evil = {toString: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(() => { helper(fixedLength, evil, 8); }, TypeError);
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, 0);
    const evil = {toString: () => {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
        return 3;  
    }};
    print(() => { helper(lengthTracking, evil, 8); }, TypeError);
  }

  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, 0);
    const evil = {toString: () => {
        rab.resize(0);
        return 0;  
    }};
    print(() => { helper(lengthTracking, evil, 8); }, TypeError);
  }
})();

(function ObjectDefinePropertyParameterConversionGrows() {
  const helper = ObjectDefinePropertyHelper;
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    
    rab.resize(2 * ctor.BYTES_PER_ELEMENT);
    const evil = {toString: () => {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
        return 0;
    }};
    helper(fixedLength, evil, 8);
    print([8, 0, 0, 0], ToNumbers(fixedLength));
  }
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, 0);
    const evil = {toString: () => {
        rab.resize(6 * ctor.BYTES_PER_ELEMENT);
        return 4;  
    }};
    helper(lengthTracking, evil, 8);
    print([0, 0, 0, 0, 8, 0], ToNumbers(lengthTracking));
  }
})();

(function ObjectFreeze() {
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 4);
    const fixedLengthWithOffset = new ctor(
        rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(rab, 0);
    const lengthTrackingWithOffset = new ctor(
        rab, 2 * ctor.BYTES_PER_ELEMENT);

    print(() => { Object.freeze(fixedLength); }, TypeError);
    print(() => { Object.freeze(fixedLengthWithOffset); }, TypeError);
    print(() => { Object.freeze(lengthTracking); }, TypeError);
    print(() => { Object.freeze(lengthTrackingWithOffset); }, TypeError);
  }
  
  
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(rab, 0, 0);
    const fixedLengthWithOffset = new ctor(
        rab, 2 * ctor.BYTES_PER_ELEMENT, 0);
    
    const lengthTrackingWithOffset = new ctor(
        rab, 4 * ctor.BYTES_PER_ELEMENT);

    print(() => { Object.freeze(fixedLength); }, TypeError);
    print(() => { Object.freeze(fixedLengthWithOffset); }, TypeError);
    print(() => { Object.freeze(lengthTrackingWithOffset); }, TypeError);
  }
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, );
    const lengthTrackingWithOffset = new ctor(
        rab, 2 * ctor.BYTES_PER_ELEMENT);

    rab.resize(2 * ctor.BYTES_PER_ELEMENT);
    print(() => { Object.freeze(lengthTrackingWithOffset); }, TypeError);

    rab.resize(0 * ctor.BYTES_PER_ELEMENT);
    print(() => { Object.freeze(lengthTracking); }, TypeError);
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

    
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);

    print([], ToNumbers(func.apply(null, fixedLength)));
    print([], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([0, 1, 2], ToNumbers(func.apply(null, lengthTracking)));
    print([2], ToNumbers(func.apply(null, lengthTrackingWithOffset)));

    
    rab.resize(1 * ctor.BYTES_PER_ELEMENT);

    print([], ToNumbers(func.apply(null, fixedLength)));
    print([], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([0], ToNumbers(func.apply(null, lengthTracking)));
    print([], ToNumbers(func.apply(null, lengthTrackingWithOffset)));

     
    rab.resize(0);

    print([], ToNumbers(func.apply(null, fixedLength)));
    print([], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([], ToNumbers(func.apply(null, lengthTracking)));
    print([], ToNumbers(func.apply(null, lengthTrackingWithOffset)));

    
    rab.resize(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 0, 0, 0], ToNumbers(func.apply(null, fixedLength)));
    print([0, 0], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([0, 0, 0, 0, 0, 0],
                 ToNumbers(func.apply(null, lengthTracking)));
    print([0, 0, 0, 0],
                 ToNumbers(func.apply(null, lengthTrackingWithOffset)));
  }
})();

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

    
    const taFull = new sourceCtor(rab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taFull, i, i + 1);
    }

    
    
    
    
    

    print([1, 2, 3, 4], ToNumbers(targetCtor.from(fixedLength)));
    print([3, 4], ToNumbers(targetCtor.from(fixedLengthWithOffset)));
    print([1, 2, 3, 4], ToNumbers(targetCtor.from(lengthTracking)));
    print([3, 4], ToNumbers(targetCtor.from(lengthTrackingWithOffset)));

    
    rab.resize(3 * sourceCtor.BYTES_PER_ELEMENT);

    
    
    

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print([1, 2, 3], ToNumbers(targetCtor.from(lengthTracking)));
    print([3], ToNumbers(targetCtor.from(lengthTrackingWithOffset)));

    
    rab.resize(1 * sourceCtor.BYTES_PER_ELEMENT);

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print([1], ToNumbers(targetCtor.from(lengthTracking)));
    print(() => { targetCtor.from(lengthTrackingWithOffset); },
                 TypeError);

    
    rab.resize(0);

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print([], ToNumbers(targetCtor.from(lengthTracking)));
    print(() => { targetCtor.from(lengthTrackingWithOffset); },
                 TypeError);

    
    rab.resize(6 * sourceCtor.BYTES_PER_ELEMENT);

    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taFull, i, i + 1);
    }

    
    
    
    
    

    print([1, 2, 3, 4], ToNumbers(targetCtor.from(fixedLength)));
    print([3, 4], ToNumbers(targetCtor.from(fixedLengthWithOffset)));
    print([1, 2, 3, 4, 5, 6],
                 ToNumbers(targetCtor.from(lengthTracking)));
    print([3, 4, 5, 6],
                 ToNumbers(targetCtor.from(lengthTrackingWithOffset)));
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

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print(() => { targetCtor.from(lengthTracking); }, TypeError);
    print(() => { targetCtor.from(lengthTrackingWithOffset); },
                 TypeError);
  });
})();

(function ArrayBufferSizeNotMultipleOfElementSize() {
  
  const rab = CreateResizableArrayBuffer(11, 20);
  for (let ctor of ctors) {
    if (ctor.BYTES_PER_ELEMENT == 1) continue;

    
    new ctor(rab);
  }
})();


(function SetValueToNumberResizesToInBounds() {
  for (let ctor of ctors) {
    const rab = CreateResizableArrayBuffer(0,
                                           1 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(rab, 0);

    const evil = { valueOf: () => {
      
      rab.resize(1 * ctor.BYTES_PER_ELEMENT);
      if (IsBigIntTypedArray(lengthTracking)) {
        return 2n;
      }
      return 2;
    }};

    lengthTracking[0] = evil;
    print([2], ToNumbers(lengthTracking));
  }
})();

"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function TypedArrayPrototype() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);
  const sab = new SharedArrayBuffer(80);

  for (let ctor of ctors) {
    const ta_gsab = new ctor(gsab, 0, 3);
    const ta_sab = new ctor(sab, 0, 3);
    print(ta_gsab.__proto__, ta_sab.__proto__);
  }
})();

(function TypedArrayLengthAndByteLength() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);

  for (let ctor of ctors) {
    const ta = new ctor(gsab, 0, 3);
    print(gsab, ta.buffer);
    print(3, ta.length);
    print(3 * ctor.BYTES_PER_ELEMENT, ta.byteLength);

    const empty_ta = new ctor(gsab, 0, 0);
    print(gsab, empty_ta.buffer);
    print(0, empty_ta.length);
    print(0, empty_ta.byteLength);

    const ta_with_offset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 3);
    print(gsab, ta_with_offset.buffer);
    print(3, ta_with_offset.length);
    print(3 * ctor.BYTES_PER_ELEMENT, ta_with_offset.byteLength);

    const empty_ta_with_offset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 0);
    print(gsab, empty_ta_with_offset.buffer);
    print(0, empty_ta_with_offset.length);
    print(0, empty_ta_with_offset.byteLength);

    const length_tracking_ta = new ctor(gsab);
    print(gsab, length_tracking_ta.buffer);
    print(40 / ctor.BYTES_PER_ELEMENT, length_tracking_ta.length);
    print(40, length_tracking_ta.byteLength);

    const offset = 8;
    const length_tracking_ta_with_offset = new ctor(gsab, offset);
    print(gsab, length_tracking_ta_with_offset.buffer);
    print((40 - offset) / ctor.BYTES_PER_ELEMENT,
                 length_tracking_ta_with_offset.length);
    print(40 - offset, length_tracking_ta_with_offset.byteLength);

    const length_tracking_ta_zero = new ctor(gsab, 40);
    print(gsab, length_tracking_ta_zero.buffer);
    print(0, length_tracking_ta_zero.length);
    print(0, length_tracking_ta_zero.byteLength);
  }
})();

(function ConstructInvalid() {
  const gsab = CreateGrowableSharedArrayBuffer(40, 80);

  for (let ctor of ctors) {
    
    print(() => { new ctor(gsab, 0, 40 / ctor.BYTES_PER_ELEMENT + 1); },
                 RangeError);

    
    print(() => { new ctor(gsab, 40 - ctor.BYTES_PER_ELEMENT, 2); },
                 RangeError);

    
    print(() => { new ctor(gsab, 40, 1); }, RangeError);

    if (ctor.BYTES_PER_ELEMENT > 1) {
      
      print(() => { new ctor(gsab, 1, 1); }, RangeError);
      print(() => { new ctor(gsab, 1); }, RangeError);
    }
  }

  
  print(() => { new Int16Array(gsab, 1, 1); }, RangeError,
               /start offset of Int16Array should be a multiple of 2/);

  print(() => { new Int16Array(gsab, 38, 2); }, RangeError,
               /Invalid typed array length: 2/);
})();

(function ConstructFromTypedArray() {
  AllBigIntMatchedCtorCombinations((targetCtor, sourceCtor) => {
    const gsab = CreateGrowableSharedArrayBuffer(
        4 * sourceCtor.BYTES_PER_ELEMENT,
        8 * sourceCtor.BYTES_PER_ELEMENT);
    const fixedLength = new sourceCtor(gsab, 0, 4);
    const fixedLengthWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new sourceCtor(gsab, 0);
    const lengthTrackingWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT);

    
    const taFull = new sourceCtor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taFull, i, i + 1);
    }

    
    
    
    
    

    print([1, 2, 3, 4], ToNumbers(new targetCtor(fixedLength)));
    print([3, 4], ToNumbers(new targetCtor(fixedLengthWithOffset)));
    print([1, 2, 3, 4], ToNumbers(new targetCtor(lengthTracking)));
    print([3, 4], ToNumbers(new targetCtor(lengthTrackingWithOffset)));

    
    gsab.grow(6 * sourceCtor.BYTES_PER_ELEMENT);

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
    const gsab = CreateGrowableSharedArrayBuffer(
        4 * sourceCtor.BYTES_PER_ELEMENT,
        8 * sourceCtor.BYTES_PER_ELEMENT);
    const fixedLength = new sourceCtor(gsab, 0, 4);
    const fixedLengthWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new sourceCtor(gsab, 0);
    const lengthTrackingWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT);

    print(() => { new targetCtor(fixedLength); }, TypeError);
    print(() => { new targetCtor(fixedLengthWithOffset); }, TypeError);
    print(() => { new targetCtor(lengthTracking); }, TypeError);
    print(() => { new targetCtor(lengthTrackingWithOffset); },
                 TypeError);
  });

})();

(function ConstructFromTypedArraySpeciesConstructorNotCalled() {
  class MySharedArrayBuffer extends SharedArrayBuffer {
    constructor(...params) {
      super(...params);
    }
    static get [Symbol.species]() {
      throw new Error('This should not be called!');
    }
  };

  AllBigIntMatchedCtorCombinations((targetCtor, sourceCtor) => {
    const gsab = new MySharedArrayBuffer(
      4 * sourceCtor.BYTES_PER_ELEMENT,
      {maxByteLength: 8 * sourceCtor.BYTES_PER_ELEMENT});
    
    const taWrite = new sourceCtor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    const fixedLength = new sourceCtor(gsab, 0, 4);
    print([0, 2, 4, 6], ToNumbers(new targetCtor(fixedLength)));

    const fixedLengthWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    print([4, 6], ToNumbers(new targetCtor(fixedLengthWithOffset)));

    const lengthTracking = new sourceCtor(gsab, 0);
    print([0, 2, 4, 6], ToNumbers(new targetCtor(lengthTracking)));

    const lengthTrackingWithOffset = new sourceCtor(
      gsab, 2 * sourceCtor.BYTES_PER_ELEMENT);
    print([4, 6], ToNumbers(new targetCtor(lengthTrackingWithOffset)));
  });
})();

(function TypedArrayLengthWhenGrown1() {
  const gsab = CreateGrowableSharedArrayBuffer(16, 40);

  
  let tas_and_lengths = [];
  for (let ctor of ctors) {
    const length = 8 / ctor.BYTES_PER_ELEMENT;
    tas_and_lengths.push([new ctor(gsab, 0, length), length]);
  }

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  gsab.grow(20);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  gsab.grow(40);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }
})();


(function TypedArrayLengthWhenGrown2() {
  const gsab = CreateGrowableSharedArrayBuffer(20, 40);

  
  let tas_and_lengths = [];
  for (let ctor of ctors) {
    const length = 8 / ctor.BYTES_PER_ELEMENT;
    tas_and_lengths.push([new ctor(gsab, 8, length), length]);
  }

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  gsab.grow(20);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  gsab.grow(40);

  for (let [ta, length] of tas_and_lengths) {
    print(length, ta.length);
    print(length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }
})();

(function LengthTracking1() {
  const gsab = CreateGrowableSharedArrayBuffer(16, 40);

  let tas = [];
  for (let ctor of ctors) {
    tas.push(new ctor(gsab));
  }

  for (let ta of tas) {
    print(16 / ta.BYTES_PER_ELEMENT, ta.length);
    print(16, ta.byteLength);
  }

  gsab.grow(24);
  for (let ta of tas) {
    print(24 / ta.BYTES_PER_ELEMENT, ta.length);
    print(24, ta.byteLength);
  }

  
  gsab.grow(26);
  for (let ta of tas) {
    const expected_length = Math.floor(26 / ta.BYTES_PER_ELEMENT);
    print(expected_length, ta.length);
    print(expected_length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  gsab.grow(40);

  for (let ta of tas) {
    print(40 / ta.BYTES_PER_ELEMENT, ta.length);
    print(40, ta.byteLength);
  }
})();


(function LengthTracking2() {
  const gsab = CreateGrowableSharedArrayBuffer(16, 40);

  const offset = 8;
  let tas = [];
  for (let ctor of ctors) {
    tas.push(new ctor(gsab, offset));
  }

  for (let ta of tas) {
    print((16 - offset) / ta.BYTES_PER_ELEMENT, ta.length);
    print(16 - offset, ta.byteLength);
  }

  gsab.grow(24);
  for (let ta of tas) {
    print((24 - offset) / ta.BYTES_PER_ELEMENT, ta.length);
    print(24 - offset, ta.byteLength);
  }

  
  gsab.grow(26);
  for (let ta of tas) {
    const expected_length = Math.floor((26 - offset)/ ta.BYTES_PER_ELEMENT);
    print(expected_length, ta.length);
    print(expected_length * ta.BYTES_PER_ELEMENT, ta.byteLength);
  }

  gsab.grow(40);

  for (let ta of tas) {
    print((40 - offset) / ta.BYTES_PER_ELEMENT, ta.length);
    print(40 - offset, ta.byteLength);
  }
})();

(function LoadWithFeedback() {
  function ReadElement2(ta) {
    return ta[2];
  }
  

  const gsab = CreateGrowableSharedArrayBuffer(16, 40);

  const i8a = new Int8Array(gsab, 0, 4);
  for (let i = 0; i < 3; ++i) {
    print(0, ReadElement2(i8a));
  }

  
  for (let i = 0; i < 4; ++i) {
    i8a[i] = i;
  }

  
  for (let i = 0; i < 3; ++i) {
    print(2, ReadElement2(i8a));
  }

  gsab.grow(20);

  
  for (let i = 0; i < 3; ++i) {
    print(2, ReadElement2(i8a));
  }

  gsab.grow(40);

  
  for (let i = 0; i < 3; ++i) {
    print(2, ReadElement2(i8a));
  }
})();

(function LoadAndStoreWithFeedback() {
  function ReadElement(ta, i) {
    return ta[i];
  }

  function HasElement(ta, i) {
    return i in ta;
  }

  function WriteElement(ta, i, v) {
    ta[i] = v;
  }

  
  
  

  const gsab = CreateGrowableSharedArrayBuffer(16, 40);

  const i8a = new Int8Array(gsab); 
  print(16, i8a.length);

  
  for (let i = 0; i < i8a.length; ++i) {
    print(0, ReadElement(i8a, i));
    print(HasElement(i8a, i));
  }
  print(HasElement(i8a, 17));

  
  for (let i = 0; i < i8a.length; ++i) {
    WriteElement(i8a, i, i);
  }

  
  for (let i = 0; i < i8a.length; ++i) {
    print(i, ReadElement(i8a, i));
  }

  let old_length = i8a.length;
  gsab.grow(20);
  print(20, i8a.length);

  for (let i = 0; i < i8a.length; ++i) {
    if (i < old_length) {
      print(i, ReadElement(i8a, i));
    } else {
      print(0, ReadElement(i8a, i));
    }
    print(HasElement(i8a, i));
  }
  print(HasElement(i8a, 21));

  
  for (let i = 0; i < i8a.length; ++i) {
    WriteElement(i8a, i, i + 1);
  }

  
  for (let i = 0; i < i8a.length; ++i) {
    print(i + 1, ReadElement(i8a, i));
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
  

  const gsab = CreateGrowableSharedArrayBuffer(4, 8);
  const fixedLength = new Int8Array(gsab, 0, 4);
  const fixedLengthWithOffset = new Int8Array(gsab, 1, 3);
  const lengthTracking = new Int8Array(gsab, 0);
  const lengthTrackingWithOffset = new Int8Array(gsab, 1);

  print('true,true,true,true,false,false,false,false,',
               GetElements(fixedLength));
  print('true,true,true,false,false,false,false,false,',
              GetElements(fixedLengthWithOffset));
  print('true,true,true,true,false,false,false,false,',
              GetElements(lengthTracking));
  print('true,true,true,false,false,false,false,false,',
              GetElements(lengthTrackingWithOffset));

  gsab.grow(8);

  print('true,true,true,true,false,false,false,false,',
               GetElements(fixedLength));
  print('true,true,true,false,false,false,false,false,',
               GetElements(fixedLengthWithOffset));
  print('true,true,true,true,true,true,true,true,',
               GetElements(lengthTracking));
  print('true,true,true,true,true,true,true,false,',
               GetElements(lengthTrackingWithOffset));
})();

(function EnumerateElements() {
  let gsab = CreateGrowableSharedArrayBuffer(100, 200);
  for (let ctor of ctors) {
    const ta = new ctor(gsab, 0, 3);
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
    
    
    const gsab = CreateGrowableSharedArrayBuffer(buffer_byte_length,
                                                 2 * buffer_byte_length);
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    let ta_write = new ctor(gsab);
    for (let i = 0; i < no_elements; ++i) {
      WriteToTypedArray(ta_write, i, i % 128);
    }

    
    
    const ta = new ctor(gsab, 0, 3);
    TestIteration(ta, [0, 1, 2]);

    const empty_ta = new ctor(gsab, 0, 0);
    TestIteration(empty_ta, []);

    const ta_with_offset = new ctor(gsab, byte_offset, 3);
    TestIteration(ta_with_offset, [2, 3, 4]);

    const empty_ta_with_offset = new ctor(gsab, byte_offset, 0);
    TestIteration(empty_ta_with_offset, []);

    const length_tracking_ta = new ctor(gsab);
    {
      let expected = [];
      for (let i = 0; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      TestIteration(length_tracking_ta, expected);
    }

    const length_tracking_ta_with_offset = new ctor(gsab, byte_offset);
    {
      let expected = [];
      for (let i = offset; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      TestIteration(length_tracking_ta_with_offset, expected);
    }

    const empty_length_tracking_ta_with_offset = new ctor(gsab, buffer_byte_length);
    TestIteration(empty_length_tracking_ta_with_offset, []);
  }
}());


function CreateGsab(buffer_byte_length, ctor) {
  const gsab = CreateGrowableSharedArrayBuffer(buffer_byte_length,
                                               2 * buffer_byte_length);
  
  let ta_write = new ctor(gsab);
  for (let i = 0; i < buffer_byte_length / ctor.BYTES_PER_ELEMENT; ++i) {
    WriteToTypedArray(ta_write, i, i % 128);
  }
  return gsab;
}

function TestIterationAndGrow(ta, expected, gsab, grow_after,
                              new_byte_length) {
  let values = [];
  let grown = false;
  for (const value of ta) {
    if (value instanceof Array) {
      
      values.push([value[0], Number(value[1])]);
    } else {
      values.push(Number(value));
    }
    if (!grown && values.length == grow_after) {
      gsab.grow(new_byte_length);
      grown = true;
    }
  }
  print(expected, values);
  print(grown);
}

(function IterateTypedArrayAndGrowMidIteration() {
  const no_elements = 10;
  const offset = 2;

  for (let ctor of ctors) {
    const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
    const byte_offset = offset * ctor.BYTES_PER_ELEMENT;

    
    

    
    let gsab = CreateGsab(buffer_byte_length, ctor);
    const ta = new ctor(gsab, 0, 3);
    TestIterationAndGrow(ta, [0, 1, 2], gsab, 2, buffer_byte_length * 2);

    gsab = CreateGsab(buffer_byte_length, ctor);
    const ta_with_offset = new ctor(gsab, byte_offset, 3);
    TestIterationAndGrow(ta_with_offset, [2, 3, 4], gsab, 2,
                         buffer_byte_length * 2);

    gsab = CreateGsab(buffer_byte_length, ctor);
    const length_tracking_ta = new ctor(gsab);
    {
      let expected = [];
      for (let i = 0; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }

      TestIterationAndGrow(length_tracking_ta, expected, gsab, 2,
                           buffer_byte_length * 2);
    }

    gsab = CreateGsab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset = new ctor(gsab, byte_offset);
    {
      let expected = [];
      for (let i = offset; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }
      TestIterationAndGrow(length_tracking_ta_with_offset, expected, gsab, 2,
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

    
    

    let gsab = CreateGsab(buffer_byte_length, ctor);
    const length_tracking_ta = new ctor(gsab);
    {
      let expected = [];
      for (let i = 0; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }

      TestIterationAndGrow(length_tracking_ta, expected, gsab, no_elements,
                           buffer_byte_length * 2);
    }

    gsab = CreateGsab(buffer_byte_length, ctor);
    const length_tracking_ta_with_offset = new ctor(gsab, byte_offset);
    {
      let expected = [];
      for (let i = offset; i < no_elements; ++i) {
        expected.push(i % 128);
      }
      for (let i = 0; i < no_elements; ++i) {
        expected.push(0);
      }
      TestIterationAndGrow(length_tracking_ta_with_offset, expected, gsab,
                           no_elements - offset, buffer_byte_length * 2);
    }
  }
}());

(function Destructuring() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    let ta_write = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

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
      let [a, b, c, d, e, f, g] = lengthTracking;
      print([0, 1, 2, 3, 0, 0], ToNumbers([a, b, c, d, e, f]));
      print(undefined, g);
    }

    {
      let [a, b, c, d, e] = lengthTrackingWithOffset;
      print([2, 3, 0, 0], ToNumbers([a, b, c, d]));
      print(undefined, e);
    }
  }
}());

function TestFill(helper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    print([0, 0, 0, 0], ReadDataFromBuffer(gsab, ctor));

    helper(fixedLength, 1);
    print([1, 1, 1, 1], ReadDataFromBuffer(gsab, ctor));

    helper(fixedLengthWithOffset, 2);
    print([1, 1, 2, 2], ReadDataFromBuffer(gsab, ctor));

    helper(lengthTracking, 3);
    print([3, 3, 3, 3], ReadDataFromBuffer(gsab, ctor));

    helper(lengthTrackingWithOffset, 4);
    print([3, 3, 4, 4], ReadDataFromBuffer(gsab, ctor));

    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

    helper(fixedLength, 13);
    print([13, 13, 13, 13, 0, 0], ReadDataFromBuffer(gsab, ctor));

    helper(fixedLengthWithOffset, 14);
    print([13, 13, 14, 14, 0, 0], ReadDataFromBuffer(gsab, ctor));

    helper(lengthTracking, 15);
    print([15, 15, 15, 15, 15, 15], ReadDataFromBuffer(gsab, ctor));

    helper(lengthTrackingWithOffset, 16);
    print([15, 15, 16, 16, 16, 16], ReadDataFromBuffer(gsab, ctor));

    
    helper(fixedLength, 17, 1, 3);
    print([15, 17, 17, 16, 16, 16], ReadDataFromBuffer(gsab, ctor));

    helper(fixedLengthWithOffset, 18, 1, 2);
    print([15, 17, 17, 18, 16, 16], ReadDataFromBuffer(gsab, ctor));

    helper(lengthTracking, 19, 1, 3);
    print([15, 19, 19, 18, 16, 16], ReadDataFromBuffer(gsab, ctor));

    helper(lengthTrackingWithOffset, 20, 1, 2);
    print([15, 19, 19, 20, 16, 16], ReadDataFromBuffer(gsab, ctor));
  }
}
TestFill(TypedArrayFillHelper);
TestFill(ArrayFillHelper);

function At(atHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    let ta_write = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(ta_write, i, i);
    }

    print(3, atHelper(fixedLength, -1));
    print(3, atHelper(lengthTracking, -1));
    print(3, atHelper(fixedLengthWithOffset, -1));
    print(3, atHelper(lengthTrackingWithOffset, -1));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    print(3, atHelper(fixedLength, -1));
    print(0, atHelper(lengthTracking, -1));
    print(3, atHelper(fixedLengthWithOffset, -1));
    print(0, atHelper(lengthTrackingWithOffset, -1));
  }
}
At(TypedArrayAtHelper);
At(ArrayAtHelper);



(function Slice() {
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

    const fixedLengthSlice = fixedLength.slice();
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print(fixedLengthSlice.buffer instanceof ArrayBuffer);
    print(fixedLengthSlice.buffer instanceof SharedArrayBuffer);
    print(fixedLengthSlice.buffer.resizable);

    const fixedLengthWithOffsetSlice = fixedLengthWithOffset.slice();
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print(fixedLengthWithOffsetSlice.buffer instanceof ArrayBuffer);
    print(fixedLengthWithOffsetSlice.buffer instanceof SharedArrayBuffer);
    print(fixedLengthWithOffsetSlice.buffer.resizable);

    const lengthTrackingSlice = lengthTracking.slice();
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print(lengthTrackingSlice.buffer instanceof ArrayBuffer);
    print(lengthTrackingSlice.buffer instanceof SharedArrayBuffer);
    print(lengthTrackingSlice.buffer.resizable);

    const lengthTrackingWithOffsetSlice = lengthTrackingWithOffset.slice();
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));
    print(lengthTrackingWithOffsetSlice.buffer instanceof ArrayBuffer);
    print(lengthTrackingWithOffsetSlice.buffer instanceof
        SharedArrayBuffer);
    print(lengthTrackingWithOffsetSlice.buffer.resizable);

    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 1, 2, 3], ToNumbers(fixedLength.slice()));
    print([2, 3], ToNumbers(fixedLengthWithOffset.slice()));
    print([0, 1, 2, 3, 0, 0], ToNumbers(lengthTracking.slice()));
    print([2, 3, 0, 0], ToNumbers(lengthTrackingWithOffset.slice()));

    
    print([0, 1, 2, 3], ToNumbers(fixedLengthSlice));
    print([2, 3], ToNumbers(fixedLengthWithOffsetSlice));
    print([0, 1, 2, 3], ToNumbers(lengthTrackingSlice));
    print([2, 3], ToNumbers(lengthTrackingWithOffsetSlice));
  }
})();

function SliceParameterConversionGrows(sliceHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i + 1);
    }
    const evil = { valueOf: () => { gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0; }};
    print([1, 2, 3, 4], ToNumbers(sliceHelper(lengthTracking, evil)));
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }
}
SliceParameterConversionGrows(TypedArraySliceHelper);
SliceParameterConversionGrows(ArraySliceHelper);



(function SliceSpeciesCreateResizes() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 1);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const fixedLength = new MyArray(gsab, 0, 4);
    resizeWhenConstructorCalled = true;
    const a = fixedLength.slice();
    print(4, a.length);
    print([1, 1, 1, 1], ToNumbers(a));

    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }

  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 1);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const lengthTracking = new MyArray(gsab);
    resizeWhenConstructorCalled = true;
    const a = lengthTracking.slice();
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
    
    
    print(4, a.length);
    print([1, 1, 1, 1], ToNumbers(a));
  }
})();

function TestCopyWithin(helper) {
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

    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
TestCopyWithin(TypedArrayCopyWithinHelper);
TestCopyWithin(ArrayCopyWithinHelper);

function CopyWithinParameterConversionGrows(helper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, i);
    }

    const evil = { valueOf: () => { gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
                                    WriteToTypedArray(lengthTracking, 4, 4);
                                    WriteToTypedArray(lengthTracking, 5, 5);
                                    return 0;} };
    
    
    
    helper(lengthTracking, evil, 2);
    
    print([2, 3, 2, 3, 4, 5], ToNumbers(lengthTracking));
  }
}
CopyWithinParameterConversionGrows(TypedArrayCopyWithinHelper);
CopyWithinParameterConversionGrows(ArrayCopyWithinHelper);

function EntriesKeysValues(keysHelper, valuesFromEntries, valuesFromValues) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
    TypedArrayKeysHelper, ValuesFromTypedArrayEntries,
    ValuesFromTypedArrayValues);
EntriesKeysValues(
    ArrayKeysHelper, ValuesFromArrayEntries, ValuesFromArrayValues);

function EntriesKeysValuesGrowMidIteration(
  entriesHelper, keysHelper, valuesHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);

    
    TestIterationAndGrow(entriesHelper(fixedLength),
                         [[0, 0], [1, 2], [2, 4], [3, 6]],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    TestIterationAndGrow(entriesHelper(fixedLengthWithOffset),
                         [[0, 4], [1, 6]],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);

    TestIterationAndGrow(entriesHelper(lengthTracking),
                         [[0, 0], [1, 2], [2, 4], [3, 6], [4, 0], [5, 0]],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndGrow(entriesHelper(lengthTrackingWithOffset),
                         [[0, 4], [1, 6], [2, 0], [3, 0]],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);

    
    TestIterationAndGrow(keysHelper(fixedLength),
                         [0, 1, 2, 3],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    TestIterationAndGrow(keysHelper(fixedLengthWithOffset),
                         [0, 1],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);

    TestIterationAndGrow(keysHelper(lengthTracking),
                         [0, 1, 2, 3, 4, 5],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndGrow(keysHelper(lengthTrackingWithOffset),
                         [0, 1, 2, 3],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);

    
    TestIterationAndGrow(valuesHelper(fixedLength),
                         [0, 2, 4, 6],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);

    
    TestIterationAndGrow(valuesHelper(fixedLengthWithOffset),
                         [4, 6],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);

    TestIterationAndGrow(valuesHelper(lengthTracking),
                         [0, 2, 4, 6, 0, 0],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }

  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    TestIterationAndGrow(valuesHelper(lengthTrackingWithOffset),
                         [4, 6, 0, 0],
                         gsab, 2, 6 * ctor.BYTES_PER_ELEMENT);
  }
}
EntriesKeysValuesGrowMidIteration(
  TypedArrayEntriesHelper, TypedArrayKeysHelper, TypedArrayValuesHelper);
EntriesKeysValuesGrowMidIteration(
  ArrayEntriesHelper, ArrayKeysHelper, ArrayValuesHelper);

function EverySome(everyHelper, someHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
EverySome(TypedArrayEveryHelper, TypedArraySomeHelper);
EverySome(ArrayEveryHelper, ArraySomeHelper);

function EveryGrowMidIteration(everyHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return true;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(fixedLength, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(fixedLengthWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(lengthTracking, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(everyHelper(lengthTrackingWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }
}
EveryGrowMidIteration(TypedArrayEveryHelper);
EveryGrowMidIteration(ArrayEveryHelper);

function SomeGrowMidIteration(someHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(fixedLength, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    gsab = gsab;
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(fixedLengthWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(lengthTracking, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(someHelper(lengthTrackingWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }
}
SomeGrowMidIteration(TypedArraySomeHelper);
SomeGrowMidIteration(ArraySomeHelper);

function FindFindIndexFindLastFindLastIndex(
  findHelper, findIndexHelper, findLastHelper, findLastIndexHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
    print(4,
                 Number(findLastHelper(lengthTrackingWithOffset, isTwoOrFour)));

    print(-1, findLastIndexHelper(fixedLength, isTwoOrFour));
    print(-1, findLastIndexHelper(fixedLengthWithOffset, isTwoOrFour));
    print(5, findLastIndexHelper(lengthTracking, isTwoOrFour));
    print(3, findLastIndexHelper(lengthTrackingWithOffset, isTwoOrFour));
  }
}
FindFindIndexFindLastFindLastIndex(
    TypedArrayFindHelper, TypedArrayFindIndexHelper, TypedArrayFindLastHelper,
    TypedArrayFindLastIndexHelper);
FindFindIndexFindLastFindLastIndex(
    ArrayFindHelper, ArrayFindIndexHelper, ArrayFindLastHelper,
    ArrayFindLastIndexHelper);

function FindGrowMidIteration(findHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined, findHelper(fixedLength, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findHelper(fixedLengthWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined, findHelper(lengthTracking, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findHelper(lengthTrackingWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }
}
FindGrowMidIteration(TypedArrayFindHelper);
FindGrowMidIteration(ArrayFindHelper);

function FindIndexGrowMidIteration(findIndexHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(fixedLength, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
                 findIndexHelper(fixedLengthWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findIndexHelper(lengthTracking, CollectValuesAndGrow));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findIndexHelper(lengthTrackingWithOffset, CollectValuesAndGrow));
    print([4, 6], values);
  }
}
FindIndexGrowMidIteration(TypedArrayFindIndexHelper);
FindIndexGrowMidIteration(ArrayFindIndexHelper);

function FindLastGrowMidIteration(findLastHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined, findLastHelper(fixedLength, CollectValuesAndGrow));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(fixedLengthWithOffset, CollectValuesAndGrow));
    print([6, 4], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
                 findLastHelper(lengthTracking, CollectValuesAndGrow));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(undefined,
      findLastHelper(lengthTrackingWithOffset, CollectValuesAndGrow));
    print([6, 4], values);
  }
}
FindLastGrowMidIteration(TypedArrayFindLastHelper);
FindLastGrowMidIteration(ArrayFindLastHelper);

function FindLastIndexGrowMidIteration(findLastIndexHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1, findLastIndexHelper(fixedLength, CollectValuesAndGrow));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(fixedLengthWithOffset, CollectValuesAndGrow));
    print([6, 4], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
                 findLastIndexHelper(lengthTracking, CollectValuesAndGrow));
    print([6, 4, 2, 0], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print(-1,
        findLastIndexHelper(lengthTrackingWithOffset, CollectValuesAndGrow));
    print([6, 4], values);
  }
}
FindLastIndexGrowMidIteration(TypedArrayFindLastIndexHelper);
FindLastIndexGrowMidIteration(ArrayFindLastIndexHelper);

function Filter(filterHelper) {
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

    
    
    
    
    

    function isEven(n) {
      return n != undefined && Number(n) % 2 == 0;
    }

    print([0, 2], ToNumbers(filterHelper(fixedLength, isEven)));
    print([2], ToNumbers(filterHelper(fixedLengthWithOffset, isEven)));
    print([0, 2], ToNumbers(filterHelper(lengthTracking, isEven)));
    print([2],
        ToNumbers(filterHelper(lengthTrackingWithOffset, isEven)));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
Filter(TypedArrayFilterHelper);
Filter(ArrayFilterHelper);

function FilterGrowMidIteration(filterHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndGrow(n) {
    if (n == undefined) {
      values.push(n);
    } else {
      values.push(Number(n));
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return false;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(filterHelper(fixedLength, CollectValuesAndGrow)));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(filterHelper(fixedLengthWithOffset, CollectValuesAndGrow)));
    print([4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    values = [];
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(filterHelper(lengthTracking, CollectValuesAndGrow)));
    print([0, 2, 4, 6], values);
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    values = [];
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([],
        ToNumbers(filterHelper(lengthTrackingWithOffset, CollectValuesAndGrow)));
    print([4, 6], values);
  }
}
FilterGrowMidIteration(TypedArrayFilterHelper);
FilterGrowMidIteration(ArrayFilterHelper);

function ForEachReduceReduceRight(
    forEachHelper, reduceHelper, reduceRightHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
                         TypedArrayReduceRightHelper);
ForEachReduceReduceRight(ArrayForEachHelper, ArrayReduceHelper,
                         ArrayReduceRightHelper);

function ForEachReduceReduceRightGrowMidIteration(
    forEachHelper, reduceHelper, reduceRightHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndResize(n) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
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
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ForEachHelper(fixedLength));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ForEachHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ForEachHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ForEachHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ReduceHelper(fixedLength));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ReduceHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], ReduceHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], ReduceHelper(lengthTrackingWithOffset));
  }

  

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4, 2, 0], ReduceRightHelper(fixedLength));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4], ReduceRightHelper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4, 2, 0], ReduceRightHelper(lengthTracking));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([6, 4], ReduceRightHelper(lengthTrackingWithOffset));
  }
}
ForEachReduceReduceRightGrowMidIteration(TypedArrayForEachHelper,
    TypedArrayReduceHelper, TypedArrayReduceRightHelper);
ForEachReduceReduceRightGrowMidIteration(ArrayForEachHelper,
    ArrayReduceHelper, ArrayReduceRightHelper);

function Includes(helper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
Includes(TypedArrayIncludesHelper);
Includes(ArrayIncludesHelper);

function IncludesParameterConversionGrows(helper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, 1);
    }

    let evil = { valueOf: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(helper(lengthTracking, 0));
    
    print(helper(lengthTracking, 0, evil));
  }

  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    WriteToTypedArray(lengthTracking, 0, 1);

    let evil = { valueOf: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }};
    print(helper(lengthTracking, 1, -4));
    
    
    print(helper(lengthTracking, 1, evil));
  }
}
IncludesParameterConversionGrows(TypedArrayIncludesHelper);
IncludesParameterConversionGrows(ArrayIncludesHelper);

(function IncludesSpecialValues() {
  for (let ctor of floatCtors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    lengthTracking[0] = -Infinity;
    lengthTracking[1] = Infinity;
    lengthTracking[2] = NaN;
    print(lengthTracking.includes(-Infinity));
    print(lengthTracking.includes(Infinity));
    print(lengthTracking.includes(NaN));
  }
})();

function IndexOfLastIndexOf(indexOfHelper, lastIndexOfHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
IndexOfLastIndexOf(TypedArrayIndexOfHelper, TypedArrayLastIndexOfHelper);
IndexOfLastIndexOf(ArrayIndexOfHelper, ArrayLastIndexOfHelper);

function IndexOfParameterConversionGrows(indexOfHelper) {
  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, 1);
    }

    let evil = { valueOf: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }};
    print(-1, indexOfHelper(lengthTracking, 0));
    
    print(-1, indexOfHelper(lengthTracking, 0, evil));
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    WriteToTypedArray(lengthTracking, 0, 1);

    let evil = { valueOf: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(lengthTracking, i, 1);
    }

    let evil = { valueOf: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return -1;
    }};
    print(-1, lastIndexOfHelper(lengthTracking, 0));
    
    
    
    
    print(-1, lastIndexOfHelper(lengthTracking, 0, evil));
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);

    let evil = { valueOf: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);
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

function JoinToLocaleString(joinHelper, toLocaleStringHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
JoinToLocaleString(TypedArrayJoinHelper, TypedArrayToLocaleStringHelper);
JoinToLocaleString(ArrayJoinHelper, ArrayToLocaleStringHelper);

function JoinParameterConversionGrows(joinHelper) {
  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);

    let evil = { toString: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return '.';
    }};
    print('0.0.0.0', joinHelper(fixedLength, evil));
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);

    let evil = { toString: () => {
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      return '.';
    }};
    
    print('0.0.0.0', joinHelper(lengthTracking, evil));
  }
}
JoinParameterConversionGrows(TypedArrayJoinHelper);

function ToLocaleStringNumberPrototypeToLocaleStringGrows(
    toLocaleStringHelper) {
  const oldNumberPrototypeToLocaleString = Number.prototype.toLocaleString;
  const oldBigIntPrototypeToLocaleString = BigInt.prototype.toLocaleString;

  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);

    let growAfter = 2;
    Number.prototype.toLocaleString = function() {
      --growAfter;
      if (growAfter == 0) {
        gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --growAfter;
      if (growAfter == 0) {
        gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldBigIntPrototypeToLocaleString.call(this);
    }

    
    
    print('0,0,0,0', toLocaleStringHelper(fixedLength));
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab);

    let growAfter = 2;
    Number.prototype.toLocaleString = function() {
      --growAfter;
      if (growAfter == 0) {
        gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
      }
      return oldNumberPrototypeToLocaleString.call(this);
    }
    BigInt.prototype.toLocaleString = function() {
      --growAfter;
      if (growAfter == 0) {
        gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
ToLocaleStringNumberPrototypeToLocaleStringGrows(ArrayToLocaleStringHelper);

function TestMap(mapHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    for (let i = 0; i < 6; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }

    
    
    
    
    

    print([0, 2, 4, 6], Helper(fixedLength));
    print([4, 6], Helper(fixedLengthWithOffset));
    print([0, 2, 4, 6, 8, 10], Helper(lengthTracking));
    print([4, 6, 8, 10], Helper(lengthTrackingWithOffset));
  }
}
TestMap(TypedArrayMapHelper);
TestMap(ArrayMapHelper);

function MapGrowMidIteration(mapHelper) {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let values;
  let gsab;
  let growAfter;
  let growTo;
  function CollectValuesAndResize(n) {
    if (typeof n == 'bigint') {
      values.push(Number(n));
    } else {
      values.push(n);
    }
    if (values.length == growAfter) {
      gsab.grow(growTo);
    }
    return n;
  }

  function Helper(array) {
    values = [];
    mapHelper(array, CollectValuesAndResize);
    return values;
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], Helper(fixedLength));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], Helper(fixedLengthWithOffset));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    growAfter = 2;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([0, 2, 4, 6], Helper(lengthTracking));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    growAfter = 1;
    growTo = 5 * ctor.BYTES_PER_ELEMENT;
    print([4, 6], Helper(lengthTrackingWithOffset));
  }
}
MapGrowMidIteration(TypedArrayMapHelper);
MapGrowMidIteration(ArrayMapHelper);

(function MapSpeciesCreateGrows() {
  let values;
  let gsab;
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
    gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const fixedLength = new MyArray(gsab, 0, 4);
    resizeWhenConstructorCalled = true;
    print([0, 1, 2, 3], Helper(fixedLength));
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }

  for (let ctor of ctors) {
    gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);

    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, i);
    }

    let resizeWhenConstructorCalled = false;
    class MyArray extends ctor {
      constructor(...params) {
        super(...params);
        if (resizeWhenConstructorCalled) {
          gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
        }
      }
    };

    const lengthTracking = new MyArray(gsab);
    resizeWhenConstructorCalled = true;
    print([0, 1, 2, 3], Helper(lengthTracking));
    print(6 * ctor.BYTES_PER_ELEMENT, gsab.byteLength);
  }
})();

function Reverse(reverseHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    const wholeArrayView = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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
Reverse(TypedArrayReverseHelper);
Reverse(ArrayReverseHelper);

(function SetWithGrowableTarget() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taFull = new ctor(gsab);

    
    
    
    
    

    SetHelper(fixedLength, [1, 2]);
    print([1, 2, 0, 0], ToNumbers(taFull));
    SetHelper(fixedLength, [3, 4], 1);
    print([1, 3, 4, 0], ToNumbers(taFull));
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0, 0])}, RangeError);
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0], 1)}, RangeError);
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
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0, 0])},
                 RangeError);
    print(() => { SetHelper(lengthTrackingWithOffset, [0, 0], 1)},
                 RangeError);
    print([8, 10, 12, 14], ToNumbers(taFull));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    
    SetHelper(fixedLength, [21, 22]);
    print([21, 22, 12, 14, 0, 0], ToNumbers(taFull));
    SetHelper(fixedLength, [23, 24], 1);
    print([21, 23, 24, 14, 0, 0], ToNumbers(taFull));
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0, 0])}, RangeError);
    print(() => { SetHelper(fixedLength, [0, 0, 0, 0], 1)}, RangeError);
    print([21, 23, 24, 14, 0, 0], ToNumbers(taFull));

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

(function SetSourceLengthGetterGrowsTarget() {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let gsab;
  let growTo;
  function CreateSourceProxy(length) {
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          gsab.grow(growTo);
          return length;
        }
        return true; 
      }
    });
  }

  
  
  
  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    print(() => { lengthTracking.set(CreateSourceProxy(6)); },
                 RangeError);
    print([0, 2, 4, 6, 0, 0], ToNumbers(new ctor(gsab)));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    print(() => { lengthTrackingWithOffset.set(CreateSourceProxy(6)); },
                 RangeError);
    print([0, 2, 4, 6, 0, 0], ToNumbers(new ctor(gsab)));
  }
})();

(function SetGrowTargetMidIteration() {
  
  
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  let gsab;
  
  
  let growAt;
  let growTo;
  function CreateSourceProxy(length) {
    let requestedIndices = [];
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop == 'length') {
          return length;
        }
        requestedIndices.push(prop);
        if (requestedIndices.length == growAt) {
          gsab.grow(growTo);
        }
        return true; 
      }
    });
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);
    growAt = 2;
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    fixedLength.set(CreateSourceProxy(4));
    print([1, 1, 1, 1], ToNumbers(fixedLength));
    print([1, 1, 1, 1, 0, 0], ToNumbers(new ctor(gsab)));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    growAt = 1;
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    fixedLengthWithOffset.set(CreateSourceProxy(2));
    print([1, 1], ToNumbers(fixedLengthWithOffset));
    print([0, 2, 1, 1, 0, 0], ToNumbers(new ctor(gsab)));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);
    growAt = 2;
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    lengthTracking.set(CreateSourceProxy(2));
    print([1, 1, 4, 6, 0, 0], ToNumbers(lengthTracking));
    print([1, 1, 4, 6, 0, 0], ToNumbers(new ctor(gsab)));
  }

  for (let ctor of ctors) {
    gsab = CreateGsabForTest(ctor);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);
    growAt = 1;
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    lengthTrackingWithOffset.set(CreateSourceProxy(2));
    print([1, 1, 0, 0], ToNumbers(lengthTrackingWithOffset));
    print([0, 2, 1, 1, 0, 0], ToNumbers(new ctor(gsab)));
  }
})();

(function SetWithGrowableSource() {
  for (let targetIsGrowable of [false, true]) {
    for (let targetCtor of ctors) {
      for (let sourceCtor of ctors) {
        const gsab = CreateGrowableSharedArrayBuffer(
            4 * sourceCtor.BYTES_PER_ELEMENT,
            8 * sourceCtor.BYTES_PER_ELEMENT);
        const fixedLength = new sourceCtor(gsab, 0, 4);
        const fixedLengthWithOffset = new sourceCtor(
            gsab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
        const lengthTracking = new sourceCtor(gsab, 0);
        const lengthTrackingWithOffset = new sourceCtor(
            gsab, 2 * sourceCtor.BYTES_PER_ELEMENT);

        
        const taFull = new sourceCtor(gsab);
        for (let i = 0; i < 4; ++i) {
          WriteToTypedArray(taFull, i, i + 1);
        }

        
        
        
        
        

        const targetAb = targetIsGrowable ?
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

        
        gsab.grow(6 * sourceCtor.BYTES_PER_ELEMENT);

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
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    
    const taWrite = new ctor(gsab);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
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

(function SubarrayParameterConversionGrows() {
  
  
  
  function CreateGsabForTest(ctor) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    
    const taWrite = new ctor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taWrite, i, 2 * i);
    }
    return gsab;
  }

  
  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const fixedLength = new ctor(gsab, 0, 4);

    const evil = { valueOf: () => { gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0;}};
    print([0, 2, 4, 6], ToNumbers(fixedLength.subarray(evil)));
  }

  
  
  for (let ctor of ctors) {
    const gsab = CreateGsabForTest(ctor);
    const lengthTracking = new ctor(gsab, 0);

    const evil = { valueOf: () => { gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
                                    return 0;}};

    print([0, 2, 4, 6], ToNumbers(
      lengthTracking.subarray(evil, lengthTracking.length)));
  }
})();



(function SortWithDefaultComparison() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(gsab, 0);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    

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
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(gsab, 0);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    

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

function SortWithCustomComparison(sortHelper) {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(gsab, 2 * ctor.BYTES_PER_ELEMENT);

    const taFull = new ctor(gsab, 0);
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

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

    
    
    
    
    

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
SortWithCustomComparison(TypedArraySortHelper);
SortWithCustomComparison(ArraySortHelper);

function SortCallbackGrows(sortHelper) {
  function WriteUnsortedData(taFull) {
    for (let i = 0; i < taFull.length; ++i) {
      WriteToTypedArray(taFull, i, 10 - i);
    }
  }

  let gsab;
  let growTo;
  function CustomComparison(a, b) {
    gsab.grow(growTo);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  
  for (let ctor of ctors) {
    gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    const fixedLength = new ctor(gsab, 0, 4);
    const taFull = new ctor(gsab, 0);
    WriteUnsortedData(taFull);

    sortHelper(fixedLength, CustomComparison);

    
    print([7, 8, 9, 10, 0, 0], ToNumbers(taFull));
  }

  
  for (let ctor of ctors) {
    gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    growTo = 6 * ctor.BYTES_PER_ELEMENT;
    const lengthTracking = new ctor(gsab, 0);
    const taFull = new ctor(gsab, 0);
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
      const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                   8 * ctor.BYTES_PER_ELEMENT);
      const fixedLength = new ctor(gsab, 0, 4);
      const fixedLengthWithOffset = new ctor(
          gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
      const lengthTracking = new ctor(gsab, 0);
      const lengthTrackingWithOffset = new ctor(
          gsab, 2 * ctor.BYTES_PER_ELEMENT);
      const taFull = new ctor(gsab, 0);

      
      
      
      
      

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

      
      gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

      helper(fixedLength, 0, 9);
      print([9, 3, 2, 4, 0, 0], ToNumbers(taFull));
      helper(fixedLengthWithOffset, 0, 10);
      print([9, 3, 10, 4, 0, 0], ToNumbers(taFull));
      helper(lengthTracking, 1, 11);
      print([9, 11, 10, 4, 0, 0], ToNumbers(taFull));
      helper(lengthTrackingWithOffset, 2, 12);
      print([9, 11, 10, 4, 12, 0], ToNumbers(taFull));

      
      print(() => { helper(fixedLength, 5, 13); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 3, 13); }, TypeError);
      print([9, 11, 10, 4, 12, 0], ToNumbers(taFull));

      helper(lengthTracking, 4, 14);
      print([9, 11, 10, 4, 14, 0], ToNumbers(taFull));
      helper(lengthTrackingWithOffset, 3, 15);
      print([9, 11, 10, 4, 14, 15], ToNumbers(taFull));

      print(() => { helper(fixedLength, 6, 8); }, TypeError);
      print(() => { helper(fixedLengthWithOffset, 4, 8); }, TypeError);
      print(() => { helper(lengthTracking, 6, 8); }, TypeError);
      print(() => { helper(lengthTrackingWithOffset, 4, 8); },
                   TypeError);

    }
  }
})();

(function ObjectDefinePropertyParameterConversionGrows() {
  const helper = ObjectDefinePropertyHelper;
  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab, 0);
    const evil = {toString: () => {
        gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
        return 4;  
    }};
    helper(lengthTracking, evil, 8);
    print([0, 0, 0, 0, 8, 0], ToNumbers(lengthTracking));
  }
})();

(function ObjectFreeze() {
  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 4);
    const fixedLengthWithOffset = new ctor(
        gsab, 2 * ctor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new ctor(gsab, 0);
    const lengthTrackingWithOffset = new ctor(
        gsab, 2 * ctor.BYTES_PER_ELEMENT);

    print(() => { Object.freeze(fixedLength); }, TypeError);
    print(() => { Object.freeze(fixedLengthWithOffset); }, TypeError);
    print(() => { Object.freeze(lengthTracking); }, TypeError);
    print(() => { Object.freeze(lengthTrackingWithOffset); }, TypeError);
  }
  
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                           8 * ctor.BYTES_PER_ELEMENT);
    const fixedLength = new ctor(gsab, 0, 0);
    const fixedLengthWithOffset = new ctor(
        gsab, 2 * ctor.BYTES_PER_ELEMENT, 0);
    
    const lengthTrackingWithOffset = new ctor(
        gsab, 4 * ctor.BYTES_PER_ELEMENT);

    Object.freeze(fixedLength);
    Object.freeze(fixedLengthWithOffset);
    print(() => { Object.freeze(lengthTrackingWithOffset); }, TypeError);
  }
})();

(function FunctionApply() {
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

    function func(...args) {
      return [...args];
    }

    print([0, 1, 2, 3], ToNumbers(func.apply(null, fixedLength)));
    print([2, 3], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([0, 1, 2, 3], ToNumbers(func.apply(null, lengthTracking)));
    print([2, 3], ToNumbers(func.apply(null, lengthTrackingWithOffset)));

    
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    print([0, 1, 2, 3], ToNumbers(func.apply(null, fixedLength)));
    print([2, 3], ToNumbers(func.apply(null, fixedLengthWithOffset)));
    print([0, 1, 2, 3, 0, 0],
                 ToNumbers(func.apply(null, lengthTracking)));
    print([2, 3, 0, 0],
                 ToNumbers(func.apply(null, lengthTrackingWithOffset)));
  }
})();

(function TypedArrayFrom() {
  AllBigIntMatchedCtorCombinations((targetCtor, sourceCtor) => {
    const gsab = CreateGrowableSharedArrayBuffer(
        4 * sourceCtor.BYTES_PER_ELEMENT,
        8 * sourceCtor.BYTES_PER_ELEMENT);
    const fixedLength = new sourceCtor(gsab, 0, 4);
    const fixedLengthWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new sourceCtor(gsab, 0);
    const lengthTrackingWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT);

    
    const taFull = new sourceCtor(gsab);
    for (let i = 0; i < 4; ++i) {
      WriteToTypedArray(taFull, i, i + 1);
    }

    
    
    
    
    

    print([1, 2, 3, 4], ToNumbers(targetCtor.from(fixedLength)));
    print([3, 4], ToNumbers(targetCtor.from(fixedLengthWithOffset)));
    print([1, 2, 3, 4], ToNumbers(targetCtor.from(lengthTracking)));
    print([3, 4], ToNumbers(targetCtor.from(lengthTrackingWithOffset)));

    
    gsab.grow(6 * sourceCtor.BYTES_PER_ELEMENT);

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
    const gsab = CreateGrowableSharedArrayBuffer(
        4 * sourceCtor.BYTES_PER_ELEMENT,
        8 * sourceCtor.BYTES_PER_ELEMENT);
    const fixedLength = new sourceCtor(gsab, 0, 4);
    const fixedLengthWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT, 2);
    const lengthTracking = new sourceCtor(gsab, 0);
    const lengthTrackingWithOffset = new sourceCtor(
        gsab, 2 * sourceCtor.BYTES_PER_ELEMENT);

    print(() => { targetCtor.from(fixedLength); }, TypeError);
    print(() => { targetCtor.from(fixedLengthWithOffset); }, TypeError);
    print(() => { targetCtor.from(lengthTracking); }, TypeError);
    print(() => { targetCtor.from(lengthTrackingWithOffset); },
                 TypeError);
  });
})();

(function ArrayBufferSizeNotMultipleOfElementSize() {
  
  const gsab = CreateGrowableSharedArrayBuffer(11, 20);
  for (let ctor of ctors) {
    if (ctor.BYTES_PER_ELEMENT == 1) continue;

    
    new ctor(gsab);
  }
})();

(function SetValueToNumberResizesToInBounds() {
  for (let ctor of ctors) {
    const gsab = CreateGrowableSharedArrayBuffer(0,
                                                 1 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab, 0);

    const evil = { valueOf: () => {
      
      gsab.grow(1 * ctor.BYTES_PER_ELEMENT);
      if (IsBigIntTypedArray(lengthTracking)) {
        return 2n;
      }
      return 2;
    }};

    lengthTracking[0] = evil;
    print([2], ToNumbers(lengthTracking));
  }
})();

"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

function resizeHelper(ab, value) {
  const return_value = ab.resize(value);
  print(undefined, return_value);
  print(value, ab.byteLength);
}

function growHelper(ab, value) {
  const return_value = ab.grow(value);
  print(undefined, return_value);
  print(value, ab.byteLength);
}

(function TestRABBasics() {
  const rab = CreateResizableArrayBuffer(10, 20);
  print(rab instanceof ArrayBuffer);
  print(rab instanceof SharedArrayBuffer);
  print(10, rab.byteLength);
  print(20, rab.maxByteLength);
})();

(function TestRABCtorByteLengthEqualsMax() {
  const rab = CreateResizableArrayBuffer(10, 10);
  print(10, rab.byteLength);
  print(10, rab.maxByteLength);
})();

(function TestRABCtorByteLengthZero() {
  const rab = CreateResizableArrayBuffer(0, 10);
  print(0, rab.byteLength);
  print(10, rab.maxByteLength);
})();

(function TestRABCtorByteLengthAndMaxZero() {
  const rab = CreateResizableArrayBuffer(0, 0);
  print(0, rab.byteLength);
  print(0, rab.maxByteLength);
})();

const arrayBufferCtors = [[ArrayBuffer, (b) => b.resizable],
                          [SharedArrayBuffer, (b) => b.growable]];

(function TestOptionsBagNotObject() {
  for (let [ctor, resizable] of arrayBufferCtors) {
    const buffer = new ctor(10, 'this is not an options bag');
    print(resizable(buffer));
  }
})();

(function TestOptionsBagMaxByteLengthGetterThrows() {
  let evil = {};
  Object.defineProperty(evil, 'maxByteLength',
                        {get: () => { throw new Error('thrown'); }});
  for (let [ctor, resizable] of arrayBufferCtors) {
    let caught = false;
    try {
      new ctor(10, evil);
    } catch(e) {
      print('thrown', e.message);
      caught = true;
    }
    print(caught);
  }
})();

(function TestMaxByteLengthNonExisting() {
  for (let [ctor, resizable] of arrayBufferCtors) {
    const buffer = new ctor(10, {});
    print(resizable(buffer));
  }
})();

(function TestMaxByteLengthUndefinedOrNan() {
  for (let [ctor, resizable] of arrayBufferCtors) {
    const buffer1 = new ctor(10, {maxByteLength: undefined});
    print(resizable(buffer1));
    const buffer2 = new ctor(0, {maxByteLength: NaN});
    print(resizable(buffer2));
    print(0, buffer2.byteLength);
    print(0, buffer2.maxByteLength);
  }
})();

(function TestMaxByteLengthBooleanNullOrString() {
  for (let [ctor, resizable] of arrayBufferCtors) {
    const buffer1 = new ctor(0, {maxByteLength: true});
    print(resizable(buffer1));
    print(0, buffer1.byteLength);
    print(1, buffer1.maxByteLength);
    const buffer2 = new ctor(0, {maxByteLength: false});
    print(resizable(buffer2));
    print(0, buffer2.byteLength);
    print(0, buffer2.maxByteLength);
    const buffer3 = new ctor(0, {maxByteLength: null});
    print(resizable(buffer3));
    print(0, buffer3.byteLength);
    print(0, buffer3.maxByteLength);
    const buffer4 = new ctor(0, {maxByteLength: '100'});
    print(resizable(buffer4));
    print(0, buffer4.byteLength);
    print(100, buffer4.maxByteLength);
  }
})();

(function TestMaxByteLengthDouble() {
  for (let [ctor, resizable] of arrayBufferCtors) {
    const buffer1 = new ctor(0, {maxByteLength: -0.0});
    print(resizable(buffer1));
    print(0, buffer1.byteLength);
    print(0, buffer1.maxByteLength);
    const buffer2 = new ctor(0, {maxByteLength: -0.1});
    print(resizable(buffer2));
    print(0, buffer2.byteLength);
    print(0, buffer2.maxByteLength);
    const buffer3 = new ctor(0, {maxByteLength: 1.2});
    print(resizable(buffer3));
    print(0, buffer3.byteLength);
    print(1, buffer3.maxByteLength);
    print(() => { new ctor(0, {maxByteLength: -1.5}) });
    print(() => { new ctor(0, {maxByteLength: -1}) });
  }
})();

(function TestMaxByteLengthThrows() {
  const evil = {valueOf: () => { throw new Error('thrown');}};
  for (let [ctor, resizable] of arrayBufferCtors) {
    let caught = false;
    try {
      new ctor(0, {maxByteLength: evil});
    } catch (e) {
      print('thrown', e.message);
      caught = true;
    }
    print(caught);
  }
})();

(function TestByteLengthThrows() {
  const evil1 = {valueOf: () => { throw new Error('byteLength throws');}};
  const evil2 = {valueOf: () => { throw new Error('maxByteLength throws');}};
  for (let [ctor, resizable] of arrayBufferCtors) {
    let caught = false;
    try {
      new ctor(evil1, {maxByteLength: evil2});
    } catch (e) {
      print('byteLength throws', e.message);
      caught = true;
    }
    print(caught);
  }
})();

(function TestAllocatingOutrageouslyMuchThrows() {
  print(() => { CreateResizableArrayBuffer(0, 2 ** 100);}, RangeError);
})();

(function TestRABCtorOperationOrder() {
  let log = '';
  const mock_length = {valueOf: function() {
      log += 'valueof length, '; return 10; }};
  const mock_max_length = {valueOf: function() {
      log += 'valueof max_length, '; return 10; }};
  CreateResizableArrayBuffer(mock_length, mock_max_length);

  print('valueof length, valueof max_length, ', log);
})();

(function TestGSABCtorOperationOrder() {
  let log = '';
  const mock_length = {valueOf: function() {
      log += 'valueof length, '; return 10; }};
  const mock_max_length = {valueOf: function() {
      log += 'valueof max_length, '; return 10; }};
  CreateResizableArrayBuffer(mock_length, mock_max_length);

  print('valueof length, valueof max_length, ', log);
})();

(function TestByteLengthGetterReceiverChecks() {
  const name = 'byteLength';
  const ab_getter = Object.getOwnPropertyDescriptor(
      ArrayBuffer.prototype, name).get;
  const sab_getter = Object.getOwnPropertyDescriptor(
      SharedArrayBuffer.prototype, name).get;

  const ab = new ArrayBuffer(40);
  const sab = new SharedArrayBuffer(40);
  const rab = CreateResizableArrayBuffer(40, 40);
  const gsab = CreateGrowableSharedArrayBuffer(40, 40);

  print(40, ab_getter.call(ab));
  print(40, ab_getter.call(rab));
  print(40, sab_getter.call(sab));
  print(40, sab_getter.call(gsab));

  print(() => { ab_getter.call(sab);});
  print(() => { ab_getter.call(gsab);});

  print(() => { sab_getter.call(ab);});
  print(() => { sab_getter.call(rab);});
})();

(function TestMaxByteLengthGetterReceiverChecks() {
  const name = 'maxByteLength';
  const ab_getter = Object.getOwnPropertyDescriptor(
      ArrayBuffer.prototype, name).get;
  const sab_getter = Object.getOwnPropertyDescriptor(
      SharedArrayBuffer.prototype, name).get;

  const ab = new ArrayBuffer(40);
  const sab = new SharedArrayBuffer(40);
  const rab = CreateResizableArrayBuffer(20, 40);
  const gsab = CreateGrowableSharedArrayBuffer(20, 40);

  print(40, ab_getter.call(ab));
  print(40, ab_getter.call(rab));
  print(40, sab_getter.call(sab));
  print(40, sab_getter.call(gsab));

  print(() => { ab_getter.call(sab);});
  print(() => { ab_getter.call(gsab);});

  print(() => { sab_getter.call(ab);});
  print(() => { sab_getter.call(rab);});
})();

(function TestResizableGetterReceiverChecks() {
  const ab_getter = Object.getOwnPropertyDescriptor(
      ArrayBuffer.prototype, 'resizable').get;
  const sab_getter = Object.getOwnPropertyDescriptor(
      SharedArrayBuffer.prototype, 'growable').get;

  const ab = new ArrayBuffer(40);
  const sab = new SharedArrayBuffer(40);
  const rab = CreateResizableArrayBuffer(40, 40);
  const gsab = CreateGrowableSharedArrayBuffer(40, 40);

  print(false, ab_getter.call(ab));
  print(true, ab_getter.call(rab));
  print(false, sab_getter.call(sab));
  print(true, sab_getter.call(gsab));

  print(() => { ab_getter.call(sab);});
  print(() => { ab_getter.call(gsab);});

  print(() => { sab_getter.call(ab);});
  print(() => { sab_getter.call(rab);});
})();

(function TestByteLengthAndMaxByteLengthOfDetached() {
  const rab = CreateResizableArrayBuffer(10, 20);
  $.detachArrayBuffer(rab);
  print(0, rab.byteLength);
  print(0, rab.maxByteLength);
})();

(function TestResizeAndGrowReceiverChecks() {
  const rab_resize = ArrayBuffer.prototype.resize;
  const gsab_grow = SharedArrayBuffer.prototype.grow;

  const ab = new ArrayBuffer(40);
  const sab = new SharedArrayBuffer(40);
  const rab = CreateResizableArrayBuffer(10, 40);
  const gsab = CreateGrowableSharedArrayBuffer(10, 40);

  rab_resize.call(rab, 20);
  gsab_grow.call(gsab, 20);
  print(() => { rab_resize.call(ab, 30);});
  print(() => { rab_resize.call(sab, 30);});
  print(() => { rab_resize.call(gsab, 30);});

  print(() => { gsab_grow.call(ab, 30);});
  print(() => { gsab_grow.call(sab, 30);});
  print(() => { gsab_grow.call(rab, 30);});
})();

(function TestRABResizeToMax() {
  const rab = CreateResizableArrayBuffer(10, 20);
  resizeHelper(rab, 20);
})();

(function TestRABResizeToSameSize() {
  const rab = CreateResizableArrayBuffer(10, 20);
  resizeHelper(rab, 10);
})();

(function TestRABResizeToSmaller() {
  const rab = CreateResizableArrayBuffer(10, 20);
  resizeHelper(rab, 5);
})();

(function TestRABResizeToZero() {
  const rab = CreateResizableArrayBuffer(10, 20);
  resizeHelper(rab, 0);
})();

(function TestRABResizeZeroToZero() {
  const rab = CreateResizableArrayBuffer(0, 20);
  resizeHelper(rab, 0);
})();

(function TestRABGrowBeyondMaxThrows() {
  const rab = CreateResizableArrayBuffer(10, 20);
  print(10, rab.byteLength);
  print(() => {rab.grow(21)});
  print(10, rab.byteLength);
})();

(function TestRABResizeMultipleTimes() {
  const rab = CreateResizableArrayBuffer(10, 20);
  const sizes = [15, 7, 7, 0, 8, 20, 20, 10];
  for (let s of sizes) {
    resizeHelper(rab, s);
  }
})();

(function TestRABResizeParameters() {
  const rab = CreateResizableArrayBuffer(10, 20);
  rab.resize('15');
  print(15, rab.byteLength);
  rab.resize({valueOf: function() { return 16; }});
  print(16, rab.byteLength);
  rab.resize(17.9);
  print(17, rab.byteLength);
})();

(function TestRABResizeInvalidParameters() {
  const rab = CreateResizableArrayBuffer(10, 20);
  print(() => { rab.resize(-1) }, RangeError);
  print(() => { rab.resize({valueOf: function() {
      throw new Error('length param'); }})});
  print(10, rab.byteLength);

  
  rab.resize('string');
  print(0, rab.byteLength);
  rab.resize();
  print(0, rab.byteLength);
})();

(function TestRABResizeDetached() {
  const rab = CreateResizableArrayBuffer(10, 20);
  $.detachArrayBuffer(rab);
  print(() => { rab.resize(15) }, TypeError);
})();

(function DetachInsideResizeParameterConversion() {
  const rab = CreateResizableArrayBuffer(40, 80);

  const evil = {
    valueOf: () => { $.detachArrayBuffer(rab); return 20; }
  };

  print(() => { rab.resize(evil); });
})();

(function ResizeInsideResizeParameterConversion() {
  const rab = CreateResizableArrayBuffer(40, 80);

  const evil = {
    valueOf: () => { rab.resize(10); return 20; }
  };

  rab.resize(evil);
  print(20, rab.byteLength);
})();


(function TestRABNewMemoryAfterResizeInitializedToZero() {
  const maybe_page_size = 4096;
  const rab = CreateResizableArrayBuffer(maybe_page_size, 2 * maybe_page_size);
  const i8a = new Int8Array(rab);
  rab.resize(2 * maybe_page_size);
  for (let i = 0; i < 2 * maybe_page_size; ++i) {
    print(0, i8a[i]);
  }
})();

(function TestRABMemoryInitializedToZeroAfterShrinkAndGrow() {
  const maybe_page_size = 4096;
  const rab = CreateResizableArrayBuffer(maybe_page_size, 2 * maybe_page_size);
  const i8a = new Int8Array(rab);
  for (let i = 0; i < maybe_page_size; ++i) {
    i8a[i] = 1;
  }
  rab.resize(maybe_page_size / 2);
  rab.resize(maybe_page_size);
  for (let i = maybe_page_size / 2; i < maybe_page_size; ++i) {
    print(0, i8a[i]);
  }
})();

(function TestGSABBasics() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(gsab instanceof ArrayBuffer);
  print(gsab instanceof SharedArrayBuffer);
  print(10, gsab.byteLength);
  print(20, gsab.maxByteLength);
})();

(function TestGSABCtorByteLengthEqualsMax() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 10);
  print(10, gsab.byteLength);
  print(10, gsab.maxByteLength);
})();

(function TestGSABCtorByteLengthZero() {
  const gsab = CreateGrowableSharedArrayBuffer(0, 10);
  print(0, gsab.byteLength);
  print(10, gsab.maxByteLength);
})();

(function TestGSABCtorByteLengthAndMaxZero() {
  const gsab = CreateGrowableSharedArrayBuffer(0, 0);
  print(0, gsab.byteLength);
  print(0, gsab.maxByteLength);
})();

(function TestAllocatingOutrageouslyMuchThrows() {
  print(() => { CreateGrowableSharedArrayBuffer(0, 2 ** 100);},
               RangeError);
})();

(function TestGSABGrowToMax() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);
  growHelper(gsab, 20);
})();

(function TestGSABGrowToSameSize() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);
  growHelper(gsab, 10);
})();

(function TestGSABGrowToSmallerThrows() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);
  print(() => {gsab.grow(5)});
  print(10, gsab.byteLength);
})();

(function TestGSABGrowToZeroThrows() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);
  print(() => {gsab.grow(0)});
  print(10, gsab.byteLength);
})();

(function TestGSABGrowBeyondMaxThrows() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);
  print(() => {gsab.grow(21)});
  print(10, gsab.byteLength);
})();

(function TestGSABGrowMultipleTimes() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);
  const sizes = [15, 7, 7, 0, 8, 20, 20, 10];
  for (let s of sizes) {
    const current_size = gsab.byteLength;
    if (s < gsab.byteLength) {
      print(() => {gsab.grow(s)});
      print(current_size, gsab.byteLength);
    } else {
      growHelper(gsab, s);
    }
  }
})();

(function TestGSABGrowParameters() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  gsab.grow('15');
  print(15, gsab.byteLength);
  gsab.grow({valueOf: function() { return 16; }});
  print(16, gsab.byteLength);
  gsab.grow(17.9);
  print(17, gsab.byteLength);
})();

(function TestGSABGrowInvalidParameters() {
  const gsab = CreateGrowableSharedArrayBuffer(0, 20);
  print(() => { gsab.grow(-1) }, RangeError);
  print(() => { gsab.grow({valueOf: function() {
      throw new Error('length param'); }})});
  print(0, gsab.byteLength);

  
  gsab.grow('string');
  print(0, gsab.byteLength);
  gsab.grow();
  print(0, gsab.byteLength);
})();

(function TestGSABMemoryInitializedToZeroAfterGrow() {
  const maybe_page_size = 4096;
  const gsab = CreateGrowableSharedArrayBuffer(maybe_page_size,
                                             2 * maybe_page_size);
  const i8a = new Int8Array(gsab);
  gsab.grow(2 * maybe_page_size);
  print(2 * maybe_page_size, i8a.length);
  for (let i = 0; i < 2 * maybe_page_size; ++i) {
    print(0, i8a[i]);
  }
})();

(function GrowGSABOnADifferentThread() {
  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  print(10, gsab.byteLength);

    $.agent.start(`
        $262.agent.receiveBroadcast(function(gsab) {
          function print(thing) {
            if (!thing) {
              $262.agent.report("FAIL");
            }
          }
          print(!(gsab instanceof ArrayBuffer));
          print(gsab instanceof SharedArrayBuffer);
          print(10 == gsab.byteLength);
          print(20 == gsab.maxByteLength);
          gsab.grow(15);
          $262.agent.report("PASS");
          $262.agent.leaving();
        });
    `);

    $262.agent.broadcast(gsab);
    while (true) {
        let report = $262.agent.getReport();
        if (report === null) {
            $262.agent.sleep(1);
            continue;
        }
        print('PASS', report);
        break;
    }

  print(15, gsab.byteLength);
})();

(function Slice() {
  const rab = CreateResizableArrayBuffer(10, 20);
  const sliced1 = rab.slice();
  print(10, sliced1.byteLength);
  print(sliced1 instanceof ArrayBuffer);
  print(sliced1 instanceof SharedArrayBuffer);
  print(sliced1.resizable);

  const gsab = CreateGrowableSharedArrayBuffer(10, 20);
  const sliced2 = gsab.slice();
  print(10, sliced2.byteLength);
  print(sliced2 instanceof ArrayBuffer);
  print(sliced2 instanceof SharedArrayBuffer);
  print(sliced2.growable);
})();

(function SliceSpeciesConstructorReturnsResizable() {
  class MyArrayBuffer extends ArrayBuffer {
    static get [Symbol.species]() { return MyResizableArrayBuffer; }
  }

  class MyResizableArrayBuffer extends ArrayBuffer {
    constructor(byteLength) {
      super(byteLength, {maxByteLength: byteLength * 2});
    }
  }

  const ab = new MyArrayBuffer(20);
  const sliced1 = ab.slice();
  print(sliced1.resizable);

  class MySharedArrayBuffer extends SharedArrayBuffer {
    static get [Symbol.species]() { return MyGrowableSharedArrayBuffer; }
  }

  class MyGrowableSharedArrayBuffer extends SharedArrayBuffer {
    constructor(byteLength) {
      super(byteLength, {maxByteLength: byteLength * 2});
    }
  }

  const sab = new MySharedArrayBuffer(20);
  const sliced2 = sab.slice();
  print(sliced2.growable);
})();

(function SliceSpeciesConstructorResizes() {
  let rab;
  let resizeWhenConstructorCalled = false;
  class MyArrayBuffer extends ArrayBuffer {
    constructor(...params) {
      super(...params);
      if (resizeWhenConstructorCalled) {
        rab.resize(2);
      }
    }
  }
  rab = new MyArrayBuffer(4, {maxByteLength: 8});
  const taWrite = new Uint8Array(rab);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = 1;
  }
  print([1, 1, 1, 1], ToNumbers(taWrite));
  resizeWhenConstructorCalled = true;
  const sliced = rab.slice();
  print(2, rab.byteLength);
  print(4, sliced.byteLength);
  print([1, 1, 0, 0], ToNumbers(new Uint8Array(sliced)));
})();

(function DecommitMemory() {
  const pageSize = 4096;
  const rab = new ArrayBuffer(6 * pageSize, {maxByteLength: 12 * pageSize});
  const ta = new Uint8Array(rab);
  for (let i = 0; i < 6 * pageSize; ++i) {
    ta[i] = 1;
  }
  for (let i = 0; i < 6 * pageSize; ++i) {
    print(1, ta[i]);
  }

  
  rab.resize(2 * pageSize);

  for (let i = 0; i < 2 * pageSize; ++i) {
    print(1, ta[i]);
  }

  for (let i = 2 * pageSize; i < 6 * pageSize; ++i) {
    print(undefined, ta[i]);
  }

  
  rab.resize(12 * pageSize);

  for (let i = 0; i < 2 * pageSize; ++i) {
    print(1, ta[i]);
  }
  
  for (let i = 2 * pageSize; i < 12 * pageSize; ++i) {
    print(0, ta[i]);
  }
  for (let i = 0; i < 12 * pageSize; ++i) {
    ta[i] = 2;
  }
  for (let i = 0; i < 12 * pageSize; ++i) {
    print(2, ta[i]);
  }
})();

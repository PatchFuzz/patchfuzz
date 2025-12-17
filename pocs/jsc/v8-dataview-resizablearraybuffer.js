"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function DataViewPrototype() {
  const rab = CreateResizableArrayBuffer(40, 80);
  const ab = new ArrayBuffer(80);

  const dvRab = new DataView(rab, 0, 3);
  const dvAb = new DataView(ab, 0, 3);
  print(dvRab.__proto__, dvAb.__proto__);
})();

(function DataViewByteLength() {
  const rab = CreateResizableArrayBuffer(40, 80);

  const dv = new DataView(rab, 0, 3);
  print(rab, dv.buffer);
  print(3, dv.byteLength);

  const emptyDv = new DataView(rab, 0, 0);
  print(rab, emptyDv.buffer);
  print(0, emptyDv.byteLength);

  const dvWithOffset = new DataView(rab, 2, 3);
  print(rab, dvWithOffset.buffer);
  print(3, dvWithOffset.byteLength);

  const emptyDvWithOffset = new DataView(rab, 2, 0);
  print(rab, emptyDvWithOffset.buffer);
  print(0, emptyDvWithOffset.byteLength);

  const lengthTracking = new DataView(rab);
  print(rab, lengthTracking.buffer);
  print(40, lengthTracking.byteLength);

  const offset = 8;
  const lengthTrackingWithOffset = new DataView(rab, offset);
  print(rab, lengthTrackingWithOffset.buffer);
  print(40 - offset, lengthTrackingWithOffset.byteLength);

  const emptyLengthTrackingWithOffset = new DataView(rab, 40);
  print(rab, emptyLengthTrackingWithOffset.buffer);
  print(0, emptyLengthTrackingWithOffset.byteLength);
})();

(function ConstructInvalid() {
  const rab = CreateResizableArrayBuffer(40, 80);

  
  print(() => { new DataView(rab, 0, 41); }, RangeError);

  
  print(() => { new DataView(rab, 39, 2); }, RangeError);

  
  print(() => { new DataView(rab, 40, 1); }, RangeError);
})();

(function ConstructorParameterConversionShrinks() {
  const rab = CreateResizableArrayBuffer(40, 80);
  const evil = { valueOf: () => {
    rab.resize(10);
    return 0;
  }};

  print(() => { new DataView(rab, evil, 20);}, RangeError);
})();

(function ConstructorParameterConversionGrows() {
  const gsab = CreateResizableArrayBuffer(40, 80);
  const evil = { valueOf: () => {
    gsab.resize(50);
    return 0;
  }};

  
  const dv = new DataView(gsab, evil, 50);
  print(50, dv.byteLength);
})();

(function OrdinaryCreateFromConstructorShrinks() {
  {
    const rab = CreateResizableArrayBuffer(16, 40);
    const newTarget = function() {}.bind(null);
    Object.defineProperty(newTarget, "prototype", {
      get() {
        rab.resize(8);
        return DataView.prototype;
      }
    });
    print(() => {Reflect.construct(DataView, [rab, 0, 16], newTarget); },
                 RangeError);
  }
  {
    const rab = CreateResizableArrayBuffer(16, 40);
    const newTarget = function() {}.bind(null);
    Object.defineProperty(newTarget, "prototype", {
      get() {
        rab.resize(6);
        return DataView.prototype;
      }
    });
    print(() => {Reflect.construct(DataView, [rab, 8, 2], newTarget); },
                 RangeError);
  }
})();

(function DataViewByteLengthWhenResizedOutOfBounds1() {
  const rab = CreateResizableArrayBuffer(16, 40);

  const fixedLength = new DataView(rab, 0, 8);
  const lengthTracking = new DataView(rab);

  print(8, fixedLength.byteLength);
  print(16, lengthTracking.byteLength);

  print(0, fixedLength.byteOffset);
  print(0, lengthTracking.byteOffset);

  rab.resize(2);

  print(() => { fixedLength.byteLength; }, TypeError);
  print(2, lengthTracking.byteLength);

  print(() => { fixedLength.byteOffset; }, TypeError);
  print(0, lengthTracking.byteOffset);

  rab.resize(8);

  print(8, fixedLength.byteLength);
  print(8, lengthTracking.byteLength);

  print(0, fixedLength.byteOffset);
  print(0, lengthTracking.byteOffset);

  rab.resize(40);

  print(8, fixedLength.byteLength);
  print(40, lengthTracking.byteLength);

  print(0, fixedLength.byteOffset);
  print(0, lengthTracking.byteOffset);

  rab.resize(0);

  print(() => { fixedLength.byteLength; }, TypeError);
  print(0, lengthTracking.byteLength);

  print(() => { fixedLength.byteOffset; }, TypeError);
  print(0, lengthTracking.byteOffset);
})();


(function DataViewByteLengthWhenResizedOutOfBounds2() {
  const rab = CreateResizableArrayBuffer(20, 40);

  const fixedLengthWithOffset = new DataView(rab, 8, 8);
  const lengthTrackingWithOffset = new DataView(rab, 8);

  print(8, fixedLengthWithOffset.byteLength);
  print(12, lengthTrackingWithOffset.byteLength);

  print(8, fixedLengthWithOffset.byteOffset);
  print(8, lengthTrackingWithOffset.byteOffset);

  rab.resize(10);

  print(() => { fixedLengthWithOffset.byteLength }, TypeError);
  print(2, lengthTrackingWithOffset.byteLength);

  print(() => { fixedLengthWithOffset.byteOffset }, TypeError);
  print(8, lengthTrackingWithOffset.byteOffset);

  rab.resize(16);

  print(8, fixedLengthWithOffset.byteLength);
  print(8, lengthTrackingWithOffset.byteLength);

  print(8, fixedLengthWithOffset.byteOffset);
  print(8, lengthTrackingWithOffset.byteOffset);

  rab.resize(40);

  print(8, fixedLengthWithOffset.byteLength);
  print(32, lengthTrackingWithOffset.byteLength);

  print(8, fixedLengthWithOffset.byteOffset);
  print(8, lengthTrackingWithOffset.byteOffset);

  rab.resize(6);

  print(() => { fixedLengthWithOffset.byteLength }, TypeError);
  print(() => { lengthTrackingWithOffset.byteLength }, TypeError);

  print(() => { fixedLengthWithOffset.byteOffset }, TypeError);
  print(() => { lengthTrackingWithOffset.byteOffset }, TypeError);
})();

(function GetAndSet() {
  const rab = CreateResizableArrayBuffer(64, 128);
  const fixedLength = new DataView(rab, 0, 32);
  const fixedLengthWithOffset = new DataView(rab, 2, 32);
  const lengthTracking = new DataView(rab, 0);
  const lengthTrackingWithOffset = new DataView(rab, 2);

  testDataViewMethodsUpToSize(fixedLength, 32);
  print(fixedLength, 33, RangeError);

  testDataViewMethodsUpToSize(fixedLengthWithOffset, 32);
  print(fixedLengthWithOffset, 33, RangeError);

  testDataViewMethodsUpToSize(lengthTracking, 64);
  print(lengthTracking, 65, RangeError);

  testDataViewMethodsUpToSize(lengthTrackingWithOffset, 64 - 2);
  print(lengthTrackingWithOffset, 64 - 2 + 1,
                                RangeError);

  
  rab.resize(30);

  print(fixedLength, 0, TypeError);
  print(fixedLengthWithOffset, 0, TypeError);

  testDataViewMethodsUpToSize(lengthTracking, 30);
  testDataViewMethodsUpToSize(lengthTrackingWithOffset, 30 - 2);

  
  rab.resize(1);

  print(fixedLength, 0, TypeError);
  print(fixedLengthWithOffset, 0, TypeError);
  print(lengthTrackingWithOffset, 0, TypeError);

  testDataViewMethodsUpToSize(lengthTracking, 1);
  print(lengthTracking, 2, RangeError);

  
  rab.resize(0);

  print(fixedLength, 0, TypeError);
  print(fixedLengthWithOffset, 0, TypeError);
  print(lengthTrackingWithOffset, 0, TypeError);

  testDataViewMethodsUpToSize(lengthTracking, 0);
  print(lengthTracking, 1, RangeError);

  
  rab.resize(34);

  testDataViewMethodsUpToSize(fixedLength, 32);
  print(fixedLength, 33, RangeError);

  testDataViewMethodsUpToSize(fixedLengthWithOffset, 32);
  print(fixedLengthWithOffset, 33, RangeError);

  testDataViewMethodsUpToSize(lengthTracking, 34);
  print(lengthTracking, 35, RangeError);

  testDataViewMethodsUpToSize(lengthTrackingWithOffset, 34 - 2);
  print(lengthTrackingWithOffset, 34 - 2 + 1,
                                RangeError);
})();

(function GetParameterConversionShrinks() {
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const fixedLength = new DataView(rab, 0, 64);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    print(() => { fixedLength.getUint8(evil); }, TypeError);
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const fixedLengthWithOffset = new DataView(rab, 2, 64);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    print(() => { fixedLengthWithOffset.getUint8(evil); }, TypeError);
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const lengthTracking = new DataView(rab);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 12;
    }};
    
    print(() => { lengthTracking.getUint8(evil); }, RangeError);
    print(0, lengthTracking.getUint8(2));
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const lengthTrackingWithOffset = new DataView(rab, 2);

    let evil = { valueOf: () => {
      rab.resize(10);
      return 12;
    }};
    
    print(() => { lengthTrackingWithOffset.getUint8(evil); },
                 RangeError);
    evil = { valueOf: () => {
      rab.resize(0);
      return 0;
    }};
    
    print(() => { lengthTrackingWithOffset.getUint8(evil); }, TypeError);
  }
})();

(function SetParameterConversionShrinks() {
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const fixedLength = new DataView(rab, 0, 64);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    print(() => { fixedLength.setUint8(evil, 0); }, TypeError);
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const fixedLengthWithOffset = new DataView(rab, 2, 64);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    print(() => { fixedLengthWithOffset.setUint8(evil, 0); }, TypeError);
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const lengthTracking = new DataView(rab);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 12;
    }};
    lengthTracking.setUint8(12, 0); 
    
    print(() => { lengthTracking.setUint8(evil, 0); }, RangeError);
    lengthTracking.setUint8(2, 0); 
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const lengthTrackingWithOffset = new DataView(rab, 2);

    let evil = { valueOf: () => {
      rab.resize(10);
      return 12;
    }};
    lengthTrackingWithOffset.setUint8(12, 0); 
    
    print(() => { lengthTrackingWithOffset.setUint8(evil, 0); },
                 RangeError);
    evil = { valueOf: () => {
      rab.resize(0);
      return 0;
    }};
    
    print(() => { lengthTrackingWithOffset.setUint8(evil, 0); },
                 TypeError);
  }

  
  
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const fixedLength = new DataView(rab, 0, 64);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    print(() => { fixedLength.setUint8(0, evil); }, TypeError);
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const fixedLengthWithOffset = new DataView(rab, 2, 64);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    print(() => { fixedLengthWithOffset.setUint8(0, evil); }, TypeError);
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const lengthTracking = new DataView(rab);

    const evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    lengthTracking.setUint8(12, 0); 
    
    print(() => { lengthTracking.setUint8(12, evil); }, RangeError);
    lengthTracking.setUint8(2, 0); 
  }
  {
    const rab = CreateResizableArrayBuffer(640, 1280);
    const lengthTrackingWithOffset = new DataView(rab, 2);

    let evil = { valueOf: () => {
      rab.resize(10);
      return 0;
    }};
    
    print(() => { lengthTrackingWithOffset.setUint8(12, evil); },
                 RangeError);
    evil = { valueOf: () => {
      rab.resize(0);
      return 0;
    }};
    
    print(() => { lengthTrackingWithOffset.setUint8(0, evil); },
                 TypeError);
  }
})();

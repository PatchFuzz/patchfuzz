






var ab = new ArrayBuffer(10);
ab.constructor = { get [Symbol.species]() { %ArrayBufferDetach(ab); return ArrayBuffer; } };
assertThrows(() => ab.slice(0), TypeError);


class DetachedArrayBuffer extends ArrayBuffer {
  constructor(...args) {
    super(...args);
    %ArrayBufferDetach(this);
  }
}

var ab2 = new ArrayBuffer(10);
ab2.constructor = DetachedArrayBuffer;
assertThrows(() => ab2.slice(0), TypeError);

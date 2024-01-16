

load(libdir + "asserts.js");

var sab = new SharedArrayBuffer(1 * Int32Array.BYTES_PER_ELEMENT);


var sab2 = (setSharedObject(sab), getSharedObject());


assertEq(sab === sab2, false);


new Int32Array(sab)[0] = 0x12345678;
assertEq(new Int32Array(sab2)[0], 0x12345678)

sab.constructor = {
  [Symbol.species]: function(length) {
    return sab2;
  }
};



assertThrowsInstanceOf(() => sab.slice(), TypeError);

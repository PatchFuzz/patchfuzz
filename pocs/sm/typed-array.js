;

var gb = 1 * 1024 * 1024 * 1024;
var ta = new Uint8Array(4 * gb + 10);

function testSetFromTyped() {
    var ta2 = new Int8Array(10);
    ta2[0] = 23;
    ta2[9] = -10;
    ta.set(ta2, 4 * gb);
    print(ta[4 * gb + 0], 23);
    print(ta[4 * gb + 9], 246);
}
testSetFromTyped();

function testSetFromOther() {
    ta.set([12, 34], 4 * gb + 4);
    print(ta[4 * gb + 4], 12);
    print(ta[4 * gb + 5], 34);
}
testSetFromOther();

function testCopyWithin() {
    
    ta[ta.length - 1] = 3;
    ta.copyWithin(0, 4 * gb);
    print(ta[9], 3);

    
    ta[ta.length - 1] = 4;
    ta.copyWithin(0, -10);
    print(ta[9], 4);

    
    ta[ta.length - 3] = 5;
    ta[ta.length - 2] = 66;
    ta[1] = 1;
    ta.copyWithin(0, ta.length - 3, ta.length - 2);
    print(ta[0], 5);
    print(ta[1], 1);

    
    ta.copyWithin(4 * gb + 5, 4 * gb + 7);
    print(ta[4 * gb + 6], 66);

    
    ta[6] = 117;
    ta.copyWithin(4 * gb);
    print(ta[4 * gb + 6], 117);
}
testCopyWithin();

function testSlice() {
    
    ta[4 * gb + 0] = 11;
    ta[4 * gb + 1] = 22;
    ta[4 * gb + 2] = 33;
    ta[4 * gb + 3] = 44;
    var ta2 = ta.slice(4 * gb, 4 * gb + 4);
    print(ta2.toString(), "11,22,33,44");

    
    ta[ta.length - 3] = 99;
    ta[ta.length - 2] = 88;
    ta[ta.length - 1] = 77;
    ta2 = ta.slice(4 * gb + 8);
    print(ta2.toString(), "88,77");

    
    ta2 = ta.slice(-3, -1);
    print(ta2.toString(), "99,88");

    
    ta[0] = 100;
    ta[1] = 101;
    ta[2] = 102;
    ta2 = ta.slice(-ta.length, -ta.length + 3);
    print(ta2.toString(), "100,101,102");
}
testSlice();

function testSubarray() {
    
    ta[4 * gb + 0] = 11;
    ta[4 * gb + 1] = 22;
    ta[4 * gb + 2] = 33;
    ta[4 * gb + 3] = 44;
    var ta2 = ta.subarray(4 * gb, 4 * gb + 4);
    print(ta2.toString(), "11,22,33,44");

    
    ta[ta.length - 3] = 99;
    ta[ta.length - 2] = 88;
    ta[ta.length - 1] = 77;
    ta2 = ta.subarray(4 * gb + 8);
    print(ta2.toString(), "88,77");

    
    ta2 = ta.subarray(-3, -1);
    print(ta2.toString(), "99,88");

    
    ta[0] = 100;
    ta[1] = 101;
    ta[2] = 102;
    ta2 = ta.subarray(-ta.length, -ta.length + 3);
    print(ta2.toString(), "100,101,102");
}
testSubarray();

function testIterators() {
    var ex;

    ex = null;
    try {
        for (var p in ta) {}
    } catch (e) {
        ex = e;
    }
    print(ex, "out of memory");

    ex = null;
    try {
        Object.getOwnPropertyNames(ta);
    } catch (e) {
        ex = e;
    }
    const msg = ex + "";
    print(msg.includes("out of memory") || msg.includes("InternalError: allocation size overflow"), true);
}
testIterators();

function testArraySliceSparse() {
    
    var len = 4 * gb - 1;
    var ta2 = new Int8Array(ta.buffer, 0, len);
    ta2[len - 1] = 1;

    
    
    var o = {
        length: len,
        100000: 0, 
        __proto__: ta2,
    };

    
    var r = Array.prototype.slice.call(o, -2000);
    print(r.length, 2000);
    print(r[r.length - 1], 1);
}
testArraySliceSparse();

function testArrayIterator() {
    for (var i = 0; i < 20; i++) {
        ta[i] = i;
    }
    var sum = 0;
    var i = 0;
    for (var x of ta) {
        if (i++ > 20) {
            break;
        }
        sum += x;
    }
    print(sum, 190);
}
testArrayIterator();

function testArrayBufferSlice() {
    
    ta[4 * gb + 0] = 11;
    ta[4 * gb + 1] = 22;
    ta[4 * gb + 2] = 33;
    ta[4 * gb + 3] = 44;
    var ta2 = new Uint8Array(ta.buffer.slice(4 * gb, 4 * gb + 4));
    print(ta2.toString(), "11,22,33,44");

    
    ta[ta.length - 3] = 99;
    ta[ta.length - 2] = 88;
    ta[ta.length - 1] = 77;
    ta2 = new Uint8Array(ta.buffer.slice(4 * gb + 8));
    print(ta2.toString(), "88,77");

    
    ta2 = new Uint8Array(ta.buffer.slice(-3, -1));
    print(ta2.toString(), "99,88");

    
    ta[0] = 100;
    ta[1] = 101;
    ta[2] = 102;
    ta2 = new Uint8Array(ta.buffer.slice(-ta.length, -ta.length + 3));
    print(ta2.toString(), "100,101,102");
}
testArrayBufferSlice();

function testFromObjectTooLargeLength() {
    print(() => new Uint8Array({length: 17 * gb}), RangeError);
    print(() => ta.set({length: 17 * gb}), RangeError);
}
testFromObjectTooLargeLength();

function testStringKeys() {
  for (var i = 0; i < 20; i++) {
    print(4 * gb - 1 in ta, true);
    print("4294967295" in ta, true);
    print(4 * gb in ta, true);
    print("4294967296" in ta, true);
    print(4 * gb + 10 in ta, false);
    print("4294967306" in ta, false);
  }
}
testStringKeys();

function testStringKeysFromProto() {
  var obj = {__proto__: ta};
  for (var i = 0; i < 20; i++) {
    print(4 * gb - 1 in obj, true);
    print("4294967295" in obj, true);
    print(4 * gb in obj, true);
    print("4294967296" in obj, true);
    print(4 * gb + 10 in obj, false);
    print("4294967306" in obj, false);
  }
}
testStringKeysFromProto();

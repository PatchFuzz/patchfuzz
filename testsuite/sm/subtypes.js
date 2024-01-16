



load(libdir + "asserts.js");



class MySharedArrayBuffer1 extends SharedArrayBuffer {
    constructor(n) { super(n) }
}

let mv1 = new MySharedArrayBuffer1(1024);
assertEq(mv1 instanceof SharedArrayBuffer, true);
assertEq(mv1 instanceof MySharedArrayBuffer1, true);
assertEq(mv1.byteLength, 1024);



let mva1 = new Int8Array(mv1);
assertEq(mva1.length, mv1.byteLength);
assertEq(mva1.buffer, mv1);

for ( let i=1 ; i < mva1.length ; i++ )
    mva1[i] = i;

for ( let i=1 ; i < mva1.length ; i++ )
    assertEq(mva1[i], (i << 24) >> 24);



class MySharedArrayBuffer2 extends SharedArrayBuffer {
    constructor(n) { super(n-1) }
}

let mv2 = new MySharedArrayBuffer2(10);
assertEq(mv2 instanceof SharedArrayBuffer, true);
assertEq(mv2 instanceof MySharedArrayBuffer2, true);
assertEq(mv2.byteLength, 9);



class MySharedArrayBuffer3 extends SharedArrayBuffer {
    constructor(n) {
	return new Array(n);
    }
}

let mv3 = new MySharedArrayBuffer3(10);
assertEq(mv3 instanceof Array, true);
assertEq(mv3 instanceof MySharedArrayBuffer3, false);
assertEq(mv3.length, 10);

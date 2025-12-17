;



class MySharedArrayBuffer1 extends SharedArrayBuffer {
    constructor(n) { super(n) }
}

let mv1 = new MySharedArrayBuffer1(1024);
print(mv1 instanceof SharedArrayBuffer, true);
print(mv1 instanceof MySharedArrayBuffer1, true);
print(mv1.byteLength, 1024);



let mva1 = new Int8Array(mv1);
print(mva1.length, mv1.byteLength);
print(mva1.buffer, mv1);

for ( let i=1 ; i < mva1.length ; i++ )
    mva1[i] = i;

for ( let i=1 ; i < mva1.length ; i++ )
    print(mva1[i], (i << 24) >> 24);



class MySharedArrayBuffer2 extends SharedArrayBuffer {
    constructor(n) { super(n-1) }
}

let mv2 = new MySharedArrayBuffer2(10);
print(mv2 instanceof SharedArrayBuffer, true);
print(mv2 instanceof MySharedArrayBuffer2, true);
print(mv2.byteLength, 9);



class MySharedArrayBuffer3 extends SharedArrayBuffer {
    constructor(n) {
	return new Array(n);
    }
}

let mv3 = new MySharedArrayBuffer3(10);
print(mv3 instanceof Array, true);
print(mv3 instanceof MySharedArrayBuffer3, false);
print(mv3.length, 10);

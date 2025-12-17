function test(SharedOrUnsharedArrayBuffer) {
var ia = new Int32Array(new SharedOrUnsharedArrayBuffer(4));







function f() {
    print(Atomics.store(ia, 0, 3.5), 3);
    print(ia[0], 3);

    print(Atomics.store(ia, 0, -0), +0);
    print(ia[0], 0);

    print(Atomics.store(ia, 0, '4.6'), 4);
    print(ia[0], 4);

    print(Atomics.store(ia, 0, '-4.6'), -4);
    print(ia[0], -4);

    print(Atomics.store(ia, 0, undefined), 0);
    print(ia[0], 0);

    print(Atomics.store(ia, 0, Infinity), Infinity);
    print(ia[0], 0);

    print(Atomics.store(ia, 0, -Infinity), -Infinity);
    print(ia[0], 0);

    print(Atomics.store(ia, 0, Math.pow(2, 32)+5), Math.pow(2, 32)+5);
    print(ia[0], 5);

    print(Atomics.store(ia, 0, { valueOf: () => 3.7 }), 3);
    print(ia[0], 3);
}

for ( var i=0 ; i < 10 ; i++ )
    f();
}

test(SharedArrayBuffer);
test(ArrayBuffer);

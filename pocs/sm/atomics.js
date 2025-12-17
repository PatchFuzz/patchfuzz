let gb = 1 * 1024 * 1024 * 1024;
let buflen = 4 * gb + 64;
let sab = new SharedArrayBuffer(buflen);
print(sab.byteLength, buflen);

function testBasic(base) {
    var uint8 = new Uint8Array(sab);
    var uint8Part = new Uint8Array(sab, base, 64);

    for (var i = 0; i < 50; i++) {
        var index = base + i;
        uint8Part[i] = 123;
        print(uint8[index], 123);

        
        print(Atomics.add(uint8, index, 1), 123);
        print(Atomics.and(uint8, index, 0xf), 124);
        print(Atomics.or(uint8, index, 0xf), 12);
        print(Atomics.xor(uint8, index, 0xee), 0xf);
        print(Atomics.sub(uint8, index, 100), 225);
        print(uint8Part[i], 125);

        
        print(Atomics.compareExchange(uint8, index, 125, 90), 125);
        print(Atomics.compareExchange(uint8, index, 125, 90), 90);
        print(uint8Part[i], 90);

        
        print(Atomics.exchange(uint8, index, 42), 90);
        print(uint8Part[i], 42);

        
        print(Atomics.;
        print(Atomics.store(uint8, index, 99), 99);
        print(uint8Part[i], 99);
    }
}
for (let i = 0; i <= 4; i++) {
    testBasic(i * gb);
}

function testWait() {
    let int32 = new Int32Array(sab);
    let index = int32.length - 1;
    print(int32[index], 0);
    print(Atomics.wait(int32, index, 1), "not-equal");
    int32[index] = 12345;
    print(Atomics.wait(int32, index, 12345, 1), "timed-out");
    print(Atomics.notify(int32, index), 0);

    let int32WithOffset = new Int32Array(sab, int32.byteLength - 4);
    print(int32WithOffset[0], 12345);
    print(Atomics.wait(int32WithOffset, 0, 12345, 1), "timed-out");
}
testWait();

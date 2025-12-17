"use strict";

function print(b) {
    if (!b)
        throw new Error;
}

function getIsLittleEndian() {
    let ab = new ArrayBuffer(2);
    let ta = new Int16Array(ab);
    ta[0] = 0x0102;
    let dv = new DataView(ab);
    return dv.getInt16(0, true) === 0x0102;
}

let isLittleEndian = getIsLittleEndian();

function readHex(dv, bytes) {
    let str = "";
    function readByte(i) {
        let b = dv.getUint8(i).toString(16);
        if (b.length === 1)
            b = "0" + b;
        else
            print(b.length === 2)
        return b;
    }
    if (isLittleEndian) {
        for (let i = bytes; i--;)
            str = str + readByte(i);
    } else {
        for (let i = 0; i < bytes; ++i)
            str = str + readByte(i);
    }

    return "0x" + str;
}

{
    let b = new ArrayBuffer(4);
    let dv = new DataView(b);
    dv.setInt32(0, 0x00112233, isLittleEndian);
    print(readHex(dv, 4) === "0x00112233");
}

function adjustForEndianessUint16(value) {
    if (isLittleEndian)
        return value;

    let ab = new ArrayBuffer(4);
    let ta = new Uint16Array(ab);
    ta[0] = value;
    let dv = new DataView(ab);
    return dv.getUint16(0, true);
}

function test() {
    function storeLittleEndian(dv, index, value) {
        dv.setInt16(index, value, true);
    }
    noInline(storeLittleEndian);

    function storeBigEndian(dv, index, value) {
        dv.setInt16(index, value, false);
    }
    noInline(storeBigEndian);

    function store(dv, index, value, littleEndian) {
        dv.setInt16(index, value, littleEndian);
    }
    noInline(store);

    let buffer = new ArrayBuffer(2);
    let arr = new Uint16Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        storeLittleEndian(dv, 0, adjustForEndianessUint16(0xfaba));
        print(arr[0] === 0xfaba);

        store(dv, 0, adjustForEndianessUint16(0xabcd), true);
        print(arr[0] === 0xabcd);

        store(dv, 0, adjustForEndianessUint16(0xbadbeef), true);
        print(arr[0] === 0xbeef);

        storeLittleEndian(dv, 0, adjustForEndianessUint16(0xbb4db33f), true);
        print(arr[0] === 0xb33f);

        storeBigEndian(dv, 0, adjustForEndianessUint16(0xfada));
        print(arr[0] === 0xdafa);

        storeBigEndian(dv, 0, adjustForEndianessUint16(0x12ab));
        print(arr[0] === 0xab12);

        store(dv, 0, adjustForEndianessUint16(0x1234), false);
        print(arr[0] === 0x3412);

        store(dv, 0, adjustForEndianessUint16(0x0102), false);
        print(arr[0] === 0x0201);

        store(dv, 0, adjustForEndianessUint16(-1), false);
        print(arr[0] === 0xffff);

        store(dv, 0, adjustForEndianessUint16(-2), false);
        print(arr[0] === 0xfeff);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-1));
        print(arr[0] === 0xffff);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-2));
        print(arr[0] === 0xfeff);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-2147483648));
        print(arr[0] === 0x0000);

        storeLittleEndian(dv, 0, adjustForEndianessUint16(-2147483648));
        print(arr[0] === 0x0000);

        storeLittleEndian(dv, 0, adjustForEndianessUint16(-2147478988));
        print(arr[0] === 0x1234);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-2147478988));
        print(arr[0] === 0x3412);
    }
}
test();

function test2() {
    function storeLittleEndian(dv, index, value) {
        dv.setUint16(index, value, true);
    }
    noInline(storeLittleEndian);

    function storeBigEndian(dv, index, value) {
        dv.setUint16(index, value, false);
    }
    noInline(storeBigEndian);

    function store(dv, index, value, littleEndian) {
        dv.setUint16(index, value, littleEndian);
    }
    noInline(store);

    let buffer = new ArrayBuffer(2);
    let arr = new Uint16Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        storeLittleEndian(dv, 0, adjustForEndianessUint16(0xfaba));
        print(arr[0] === 0xfaba);

        store(dv, 0, adjustForEndianessUint16(0xabcd), true);
        print(arr[0] === 0xabcd);

        store(dv, 0, adjustForEndianessUint16(0xbadbeef), true);
        print(arr[0] === 0xbeef);

        storeLittleEndian(dv, 0, adjustForEndianessUint16(0xbb4db33f), true);
        print(arr[0] === 0xb33f);

        storeBigEndian(dv, 0, adjustForEndianessUint16(0xfada));
        print(arr[0] === 0xdafa);

        storeBigEndian(dv, 0, adjustForEndianessUint16(0x12ab));
        print(arr[0] === 0xab12);

        store(dv, 0, adjustForEndianessUint16(0x1234), false);
        print(arr[0] === 0x3412);

        store(dv, 0, adjustForEndianessUint16(0x0102), false);
        print(arr[0] === 0x0201);

        store(dv, 0, adjustForEndianessUint16(-1), false);
        print(arr[0] === 0xffff);

        store(dv, 0, adjustForEndianessUint16(-2), false);
        print(arr[0] === 0xfeff);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-1));
        print(arr[0] === 0xffff);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-2));
        print(arr[0] === 0xfeff);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-2147483648));
        print(arr[0] === 0x0000);

        storeLittleEndian(dv, 0, adjustForEndianessUint16(-2147483648));
        print(arr[0] === 0x0000);

        storeLittleEndian(dv, 0, adjustForEndianessUint16(-2147478988));
        print(arr[0] === 0x1234);

        storeBigEndian(dv, 0, adjustForEndianessUint16(-2147478988));
        print(arr[0] === 0x3412);
    }
}
test2();

function adjustForEndianessUint32(value) {
    if (isLittleEndian)
        return value;

    let ab = new ArrayBuffer(4);
    let ta = new Uint32Array(ab);
    ta[0] = value;
    let dv = new DataView(ab);
    return dv.getUint32(0, true);
}

function test3() {
    function storeLittleEndian(dv, index, value) {
        dv.setUint32(index, value, true);
    }
    noInline(storeLittleEndian);

    function storeBigEndian(dv, index, value) {
        dv.setUint32(index, value, false);
    }
    noInline(storeBigEndian);

    function store(dv, index, value, littleEndian) {
        dv.setUint32(index, value, littleEndian);
    }
    noInline(store);

    let buffer = new ArrayBuffer(4);
    let arr = new Uint32Array(buffer);
    let arr2 = new Int32Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        storeLittleEndian(dv, 0, adjustForEndianessUint32(0xffffffff));
        print(arr[0] === 0xffffffff);
        print(arr2[0] === -1);

        storeLittleEndian(dv, 0, adjustForEndianessUint32(0xffaabbcc));
        print(arr[0] === 0xffaabbcc);

        storeBigEndian(dv, 0, adjustForEndianessUint32(0x12345678));
        print(arr[0] === 0x78563412);

        storeBigEndian(dv, 0, adjustForEndianessUint32(0xffaabbcc));
        print(arr[0] === 0xccbbaaff);

        store(dv, 0, adjustForEndianessUint32(0xfaeadaca), false);
        print(arr[0] === 0xcadaeafa);

        store(dv, 0, adjustForEndianessUint32(0xcadaeafa), false);
        print(arr2[0] === -85271862);

        store(dv, 0, adjustForEndianessUint32(0x12345678), false);
        print(arr[0] === 0x78563412);

        storeBigEndian(dv, 0, adjustForEndianessUint32(0xbeeffeeb));
        print(arr2[0] === -335614018);
    }
}
test3();

function test4() {
    function storeLittleEndian(dv, index, value) {
        dv.setInt32(index, value, true);
    }
    noInline(storeLittleEndian);

    function storeBigEndian(dv, index, value) {
        dv.setInt32(index, value, false);
    }
    noInline(storeBigEndian);

    function store(dv, index, value, littleEndian) {
        dv.setInt32(index, value, littleEndian);
    }
    noInline(store);

    let buffer = new ArrayBuffer(4);
    let arr = new Uint32Array(buffer);
    let arr2 = new Int32Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        storeLittleEndian(dv, 0, adjustForEndianessUint32(0xffffffff));
        print(arr[0] === 0xffffffff);
        print(arr2[0] === -1);

        storeLittleEndian(dv, 0, adjustForEndianessUint32(0xffaabbcc));
        print(arr[0] === 0xffaabbcc);

        storeBigEndian(dv, 0, adjustForEndianessUint32(0x12345678));
        print(arr[0] === 0x78563412);

        storeBigEndian(dv, 0, adjustForEndianessUint32(0xffaabbcc));
        print(arr[0] === 0xccbbaaff);

        store(dv, 0, adjustForEndianessUint32(0xfaeadaca), false);
        print(arr[0] === 0xcadaeafa);

        store(dv, 0, adjustForEndianessUint32(0xcadaeafa), false);
        print(arr2[0] === -85271862);

        store(dv, 0, adjustForEndianessUint32(0x12345678), false);
        print(arr[0] === 0x78563412);

        storeBigEndian(dv, 0, adjustForEndianessUint32(0xbeeffeeb));
        print(arr2[0] === -335614018);
    }
}
test4();

function adjustForEndianessFloat32(value) {
    if (isLittleEndian)
        return value;

    let ab = new ArrayBuffer(4);
    let ta = new Float32Array(ab);
    ta[0] = value;
    let dv = new DataView(ab);
    return dv.getFloat32(0, true);
}

function test5() {
    function storeLittleEndian(dv, index, value) {
        dv.setFloat32(index, value, true);
    }
    noInline(storeLittleEndian);

    function storeBigEndian(dv, index, value) {
        dv.setFloat32(index, value, false);
    }
    noInline(storeBigEndian);

    function store(dv, index, value, littleEndian) {
        dv.setFloat32(index, value, littleEndian);
    }
    noInline(store);

    let buffer = new ArrayBuffer(4);
    let arr = new Float32Array(buffer);
    let bits = new Uint32Array(buffer);
    let dv = new DataView(buffer);
    let f32_exponent_bits = 0x7F800000;
    let f32_fraction_bits = 0x007FFFFF;

    for (let i = 0; i < testLoopCount; ++i) {
        storeLittleEndian(dv, 0, adjustForEndianessFloat32(1.5));
        print(arr[0] === 1.5);

        
        
        
        
        store(dv, 0, 12912.124123215122, isLittleEndian);
        print(bits[0] === 0x4649c07f);
        print(arr[0] === 12912.1240234375);

        storeLittleEndian(dv, 0, adjustForEndianessFloat32(NaN));
        print(isNaN(arr[0]));
        
        
        
        
        
        
        print(((bits[0] & f32_exponent_bits) === f32_exponent_bits) && !!(bits[0] & f32_fraction_bits))

        storeLittleEndian(dv, 0, adjustForEndianessFloat32(2.3879393e-38));
        print(arr[0] === 2.387939260590663e-38);
        print(bits[0] === 0x01020304);

        storeBigEndian(dv, 0, adjustForEndianessFloat32(2.3879393e-38));
        print(arr[0] === 1.539989614439558e-36);
        print(bits[0] === 0x04030201);
    }
}
test5();

function adjustForEndianessFloat64(value) {
    if (isLittleEndian)
        return value;

    let ab = new ArrayBuffer(8);
    let ta = new Float64Array(ab);
    ta[0] = value;
    let dv = new DataView(ab);
    return dv.getFloat64(0, true);
}

function test6() {
    function storeLittleEndian(dv, index, value) {
        dv.setFloat64(index, value, true);
    }
    noInline(storeLittleEndian);

    function storeBigEndian(dv, index, value) {
        dv.setFloat64(index, value, false);
    }
    noInline(storeBigEndian);

    function store(dv, index, value, littleEndian) {
        dv.setFloat64(index, value, littleEndian);
    }
    noInline(store);

    let buffer = new ArrayBuffer(8);
    let arr = new Float64Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        storeLittleEndian(dv, 0, adjustForEndianessFloat64(NaN));
        print(isNaN(arr[0]));
        
        print(readHex(dv, 8) == "0x7ff8000000000000");

        storeLittleEndian(dv, 0, adjustForEndianessFloat64(-2.5075187084135162e+284));
        print(arr[0] === -2.5075187084135162e+284);
        print(readHex(dv, 8) === "0xfafafafafafafafa");

        store(dv, 0, adjustForEndianessFloat64(124.553), true);
        print(readHex(dv, 8) === "0x405f23645a1cac08");

        store(dv, 0, adjustForEndianessFloat64(Infinity), true);
        print(readHex(dv, 8) === "0x7ff0000000000000");

        store(dv, 0, adjustForEndianessFloat64(Infinity), false);
        print(readHex(dv, 8) === "0x000000000000f07f");

        store(dv, 0, adjustForEndianessFloat64(-Infinity), true);
        print(readHex(dv, 8) === "0xfff0000000000000");

        storeBigEndian(dv, 0, adjustForEndianessFloat64(-2.5075187084135162e+284));
        print(arr[0] === -2.5075187084135162e+284);
        print(readHex(dv, 8) === "0xfafafafafafafafa");

        storeBigEndian(dv, 0, adjustForEndianessFloat64(124.553));
        print(readHex(dv, 8) === "0x08ac1c5a64235f40");
    }
}
test6();

function test7() {
    function store(dv, index, value) {
        dv.setInt8(index, value);
    }
    noInline(store);

    let buffer = new ArrayBuffer(1);
    let arr = new Uint8Array(buffer);
    let arr2 = new Int8Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        store(dv, 0, 0xff);
        print(arr[0] === 0xff);
        print(arr2[0] === -1);

        store(dv, 0, 0xff00);
        print(arr[0] === 0);
        print(arr2[0] === 0);

        store(dv, 0, -1);
        print(arr[0] === 0xff);
        print(arr2[0] === -1);

        store(dv, 0, 0x0badbeef);
        print(arr[0] === 0xef);
        print(arr2[0] === -17);
    }
}
test7();

function test8() {
    function store(dv, index, value) {
        dv.setInt8(index, value);
    }
    noInline(store);

    let buffer = new ArrayBuffer(1);
    let arr = new Uint8Array(buffer);
    let arr2 = new Int8Array(buffer);
    let dv = new DataView(buffer);

    for (let i = 0; i < testLoopCount; ++i) {
        store(dv, 0, 0xff);
        print(arr[0] === 0xff);
        print(arr2[0] === -1);

        store(dv, 0, 0xff00);
        print(arr[0] === 0);
        print(arr2[0] === 0);

        store(dv, 0, -1);
        print(arr[0] === 0xff);
        print(arr2[0] === -1);

        store(dv, 0, 0x0badbeef);
        print(arr[0] === 0xef);
        print(arr2[0] === -17);
    }
}
test8();

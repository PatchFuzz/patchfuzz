;

const maxByteLength = 16 * 1024 * 1024 * 1024;



for (let ctor of [Int8Array, BigInt64Array]) {
    const maxLength = maxByteLength / ctor.BYTES_PER_ELEMENT;
    let ta1 = new ctor(maxLength);
    print(ta1.length, maxLength);
    ta1[maxLength - 1]++;

    let ta2 = new ctor(ta1.buffer, 0, maxLength);
    print(ta2.length, maxLength);
    print(ta1[maxLength - 1], ta2[maxLength - 1]);

    print(() => new ctor(maxLength + 1), RangeError);
    print(() => new ctor(ta1.buffer, 0, maxLength + 1), RangeError);
}

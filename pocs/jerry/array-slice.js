let buf = new ArrayBuffer(10);
let a1 = new Int8Array(buf, 0, 5);
a1.fill(1);
a1.constructor = {
    [Symbol.species]: function (len) {
        return new Int8Array(buf, 5, 5);
    }
};
let a2 = a1.slice(2,4);
res = new Int8Array(buf, 0, 10);


for (let i = 0; i < 10; i++) {
    if (i < 7) {
        assert(res[i] === 1);
    } else {
        assert(res[i] === 0);
    }
}

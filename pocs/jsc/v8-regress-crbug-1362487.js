print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

const rab1 = new ArrayBuffer(1000, {'maxByteLength': 4000});
class MyInt8Array extends Int8Array {
    constructor() {
        super(rab1);
    }
};
const rab2 = new ArrayBuffer(2000, {'maxByteLength': 4000});
const ta = new Int8Array(rab2);
ta.constructor = MyInt8Array;
print(() => { ta.slice(); }, TypeError);

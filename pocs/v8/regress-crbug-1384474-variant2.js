const rab1 = new ArrayBuffer(4, {"maxByteLength": 100});
const ta = new Int8Array(rab1);
const rab2 = new ArrayBuffer(10, {"maxByteLength": 20});
const lengthTracking = new Int8Array(rab2);
rab2.resize(0);
ta.constructor = { [Symbol.species]: function() { return lengthTracking; } };
print(() => { ta.slice(); }, TypeError);

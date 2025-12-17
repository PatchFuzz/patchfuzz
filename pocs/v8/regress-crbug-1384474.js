const ta = new Int8Array(4);
const rab = new ArrayBuffer(10, {"maxByteLength": 20});
const lengthTracking = new Int8Array(rab);
rab.resize(0);
ta.constructor = { [Symbol.species]: function() { return lengthTracking; } };
print(() => { ta.slice(); }, TypeError);

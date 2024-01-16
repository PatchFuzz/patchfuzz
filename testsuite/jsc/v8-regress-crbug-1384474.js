






load("./resources/v8-mjsunit.js", "caller relative");
load("./resources/v8-typedarray-helpers.js", "caller relative");

const ta = new Int8Array(4);
const rab = new ArrayBuffer(10, {"maxByteLength": 20});
const lengthTracking = new Int8Array(rab);
rab.resize(0);
ta.constructor = { [Symbol.species]: function() { return lengthTracking; } };
assertThrows(() => { ta.slice(); }, TypeError);

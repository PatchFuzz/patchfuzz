



const ab = new ArrayBuffer(1000, {"maxByteLength": 1000});
const ta = new Int16Array(ab);

let mapperCallCount = 0;
function evilMapper() {
  ++mapperCallCount;
  ab.resize(0);
}

function evilCtor() {
  return ta;
}

assertThrows(() => { Float64Array.from.call(evilCtor, [0, 1], evilMapper); });
assertEquals(1, mapperCallCount);

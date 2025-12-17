const rab = new ArrayBuffer(3782, {maxByteLength: 4096});
const u16a = new Int16Array(rab);
rab.resize(0);

function ctor() {
  return u16a;
}

print(() => { Float64Array.of.call(ctor, 1); }, TypeError);

rab.resize(8);
const u16a2 = Int16Array.of.call(ctor, 3);
print(3, u16a2[0]);

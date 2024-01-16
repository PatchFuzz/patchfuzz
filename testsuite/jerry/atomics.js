













const buffer = new SharedArrayBuffer (16);
const uint8 = new Uint8Array (buffer);
uint8[0] = 7;

Atomics.add (uint8, 0, 2);
Atomics.and (uint8, 0, 2);
Atomics.compareExchange (uint8, 0, 5, 2);
Atomics.exchange (uint8, 0, 2);
Atomics.or (uint8, 0, 2);
Atomics.sub (uint8, 0, 2);
Atomics.xor (uint8, 0, 2)
Atomics.isLockFree (3);
Atomics.load (uint8, 0);
Atomics.store (uint8, 0, 2);

const sab = new SharedArrayBuffer (1024);
const int32 = new Int32Array (sab);

Atomics.wait (int32, 0, 0);
Atomics.notify (int32, 0, 1);

try {
  let a;
  Atomics.add (a, 0, 0);
} catch (ex) {
  assert (ex instanceof TypeError);
}

try {
  Atomics.add (new Float32Array(10), 0, 2);
} catch (ex) {
  assert (ex instanceof TypeError);
}
try{
  const uint16 = new Uint16Array (new ArrayBuffer (16));
  Atomics.add(uint16, 0, 0);
} catch (ex) {
  assert (ex instanceof TypeError);
}

try {
  Atomics.add (uint8, 100, 0);
} catch (ex) {
  assert (ex instanceof RangeError);
}

try {
  Atomics.add (uint8, -1, 0);
} catch (ex) {
  assert (ex instanceof RangeError);
}

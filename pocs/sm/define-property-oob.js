const ta = new Int32Array(1);
const desc = {value: 0, writable: true, enumerable: true, configurable: true};


for (let i = 0; i < 1000; ++i) {
  let didThrow = false;
  try {
    Object.defineProperty(ta, 10, desc);
  } catch {
    didThrow = true;
  }
  print(didThrow, true);
}


for (let i = 0; i < 1000; ++i) {
  let didThrow = false;
  try {
    Object.defineProperty(ta, 12.3, desc);
  } catch {
    didThrow = true;
  }
  print(didThrow, true);
}

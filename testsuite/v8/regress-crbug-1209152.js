





let size = 8 * 1024 * 1024;
let initialized = 2 * 1024 * 1008;
let array = new Uint8Array(size);
for (let i = 0; i < initialized; i++) {
  array[i] = 42;
}
array.sort();

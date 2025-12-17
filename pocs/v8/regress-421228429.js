const gsab = new SharedArrayBuffer(129, {
  maxByteLength: 1024
});
const lengthTracking = new Float64Array(gsab);
lengthTracking.sort();

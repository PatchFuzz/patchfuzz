const gsab = new SharedArrayBuffer(1024, {maxByteLength: 11337});
const ta = new Float64Array(gsab);
Object.defineProperty(ta, 0, {});

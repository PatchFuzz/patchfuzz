













var sab = new SharedArrayBuffer(4);
var a = new Int32Array(sab);


assert(Atomics.add(a, -0, 1) === 0);

delete Float64Array.prototype.__proto__[Symbol.iterator];

let a = new Float64Array(9);
Object.defineProperty(a, "length", {
  get: function () { %ArrayBufferDetach(a.buffer); return 6; }
});

Float64Array.from(a);

delete Float64Array.prototype.__proto__[Symbol.iterator];
let ar = new Float64Array();
Object.defineProperty(ar, "length", {
  get: function () { return 121567939849373; }
});

try { Float64Array.from(ar); } catch (e) {}

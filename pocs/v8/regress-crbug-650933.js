var a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var o = {length: 1e40};
try { new Uint8Array(o); } catch (e) { }
new Float64Array(a);

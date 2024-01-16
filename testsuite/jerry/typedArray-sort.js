


var a = Uint8Array.from([4, 1, 3, 5, 4, 2]);
assert(a.sort().toString() === '1,2,3,4,4,5');
assert(a.toString() === '1,2,3,4,4,5');


var b = Uint8Array.from([2, 1, 4, 3, 0]);
assert(b.subarray(2, 4).sort().toString() === '3,4');
assert(b.toString() === '2,1,3,4,0');


var c = Uint8Array.from([]);
assert(c.sort().toString() === '');


var d = Float32Array.from([Infinity, 3, 2, 1, -Infinity]);
assert(d.sort().toString() === '-Infinity,1,2,3,Infinity');


var e = Float32Array.from([1, 0, -0, -1]);
assert(e.sort().toString() === '-1,0,0,1');


var f = Float32Array.from([NaN, 0, 1, -1, -Infinity, Infinity, NaN]);
assert(f.sort().toString() === '-Infinity,-1,0,1,Infinity,NaN,NaN');


var ab = new ArrayBuffer(4);
var g = new Uint32Array(ab);
var h = new Uint8Array(ab);
h.set([0xFF, 0, 0xFF, 0]);
assert(h.toString() === '255,0,255,0');
assert(g.toString() === '16711935');
assert(h.subarray(0, 2).sort().toString() === '0,255');
assert(h.subarray(2, 4).sort().toString() === '0,255');
assert(g.toString() === '4278255360');
assert(g.sort().toString() === '4278255360');
assert(h.toString() === '0,255,0,255');


var i = Uint8Array.from([1, 2, 3]);
try {
  i.sort({});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


i.sort(function (lhs, rhs) {
  return rhs - lhs;
});
assert(i.toString() === '3,2,1');


i.sort(function (lhs, rhs) {
  return { valueOf: function() { return rhs - lhs; } };
});
assert(i.toString() === '3,2,1');















var a = Int32Array.prototype;
a.__proto__ = [];

var b = a.splice(7, -4, 8, 9, 10);

b.__proto__ = a;
b.length = 5;

try {
  b = b.concat([]);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

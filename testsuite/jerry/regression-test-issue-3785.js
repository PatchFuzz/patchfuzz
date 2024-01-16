













var a = new Proxy({length:2}, {});
a.__proto__ = a;

try {
  a[1];
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}

try {
  a[1] = 2;
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}

try {
  Array.prototype.forEach.call(a, ()=>{});
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}

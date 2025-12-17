function foo(a, b) {
  a[b] = 1;
  return a[b];
}
v = [];
print(foo(v, 1), 1);
v.__proto__.__proto__ = new Int32Array();
print(foo(Object(), 1), 1);
print(foo(v, 2), undefined);

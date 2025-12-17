function f(a) {
  a.foo = {};
  a[0] = 1;
  a.__defineGetter__('foo', function() {});
  a[0] = {};
  a.bar = 0;
}
f(new Array());















function f(a, b) {
  return {
    a: a,
    b: b
  };
}

var o = f('1', '2');

assert(o.a == '1');
assert(o.b == '2');

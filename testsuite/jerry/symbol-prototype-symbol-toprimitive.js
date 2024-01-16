

try {
  Symbol.prototype[Symbol.toPrimitive].call ('NonSymbolValue');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Symbol.prototype[Symbol.toPrimitive].call ({});
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var foo = Symbol ('foo');
assert (foo[Symbol.toPrimitive] () === foo);

var fooObj = Object (foo);
assert (fooObj[Symbol.toPrimitive] () === foo);

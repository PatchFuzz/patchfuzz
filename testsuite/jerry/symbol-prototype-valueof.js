

try {
  Symbol.prototype.valueOf.call ('NonSymbolValue');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Symbol.prototype.valueOf.call ({});
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var foo = Symbol ('foo');
assert (foo.valueOf () === foo);

var fooObj = Object (foo);
assert (fooObj.valueOf () === foo);

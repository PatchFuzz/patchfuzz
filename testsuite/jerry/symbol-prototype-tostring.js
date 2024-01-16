

try {
  Symbol.prototype.toString.call ('NonSymbolValue');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Symbol.prototype.toString.call ({});
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var foo = Symbol ('foo');
assert (foo.toString () === "Symbol(foo)");
assert (String (foo) === "Symbol(foo)");

var fooObj = Object (foo);
assert (fooObj.toString () === "Symbol(foo)");

try {
  String (fooObj);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

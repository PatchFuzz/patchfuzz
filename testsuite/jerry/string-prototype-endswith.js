













var x = "Dancer of the Boreal Valley";
assert (x.endsWith ("Valley"));
assert (x.endsWith ("Boreal", 20));
assert (x.endsWith ("Dancer", 6));
assert (x.endsWith (""));
assert (x.endsWith ([]));

var y = "Lalafell";
assert (y.endsWith ("Lala") === false);
assert (y.endsWith ("fell", 2) === false);
assert (y.endsWith ("Final", "Fantasy") === false);
assert (y.endsWith ("Hydaelyn", 30) === false);
assert (y.endsWith (undefined) === false);

assert(String.prototype.endsWith.call (5) === false);

var test_obj = {toString: function() { return "A realm reborn"; } };
test_obj.endsWith = String.prototype.endsWith;
assert (test_obj.endsWith ("reborn") === true);
assert (test_obj.endsWith ("realm") === false);

try {
  String.prototype.endsWith.call (Symbol());
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.endsWith.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.endsWith.call (null);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var z = /[/]/;
try {
  y.endsWith (z);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

z[Symbol.match] = false;
assert(y.endsWith(z) === false);

try {
  "foo".endsWith({[Symbol.match] : true});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".endsWith({get [Symbol.match] () { throw 5}});
  assert(false);
} catch (e) {
  assert(e === 5);
}

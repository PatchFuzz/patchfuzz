













var x = "My cat is awesome";
assert (x.startsWith ("My"));
assert (x.startsWith ("cat", 3));
assert (x.startsWith ("awesome", 10));
assert (x.startsWith (""));
assert (x.startsWith ("", 1));
assert (x.startsWith ("", 17));
assert (x.startsWith ([]));

assert (x.startsWith ("doggo") === false);
assert (x.startsWith ("awesome", 2) === false);
assert (x.startsWith ("awesome", "oi") === false);
assert (x.startsWith ("kitten", 30) === false);
assert (x.startsWith (undefined) === false);
assert(String.prototype.startsWith.call (5) === false);

var test_obj = {toString: function() { return "The world of Eorzea"; } };
test_obj.startsWith = String.prototype.startsWith;
assert (test_obj.startsWith ("The") === true);
assert (test_obj.startsWith ("Viera") === false);

try {
  String.prototype.startsWith.call (Symbol());
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.startsWith.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

y = /[/]/;
try {
  x.startsWith (y);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

y[Symbol.match] = false;
assert(x.startsWith(y) === false);

try {
  "foo".startsWith({[Symbol.match] : true});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".startsWith({get [Symbol.match] () { throw 5}});
  assert(false);
} catch (e) {
  assert(e === 5);
}

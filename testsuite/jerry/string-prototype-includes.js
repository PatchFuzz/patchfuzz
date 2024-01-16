













var x = "Good King Moggle Mog XII";
assert (x.includes ("Moggle"));
assert (x.includes ("Moggle Mog", 3));
assert (x.includes (""));
assert (x.includes ([]));

var y = "Nidhogg's Rage";
assert (y.includes ("Dragon") === false);
assert (y.includes ("Rage", 11) === false);
assert (y.includes ("Final", "Fantasy") === false);
assert (y.includes ("Hydaelyn", 30) === false);
assert (y.includes (undefined) === false);

assert(String.prototype.includes.call (5) === false);

var test_obj = {toString: function() { return "The world of Eorzea"; } };
test_obj.includes = String.prototype.includes;
assert (test_obj.includes ("Eorzea") === true);
assert (test_obj.includes ("Viera") === false);

try {
  String.prototype.includes.call (Symbol());
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.includes.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.includes.call (null);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var z = /[/]/;
try {
  y.includes (z);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

z[Symbol.match] = false;
assert(y.includes(z) === false);

try {
  "foo".includes({[Symbol.match] : true});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".includes({get [Symbol.match] () { throw 5}});
  assert(false);
} catch (e) {
  assert(e === 5);
}

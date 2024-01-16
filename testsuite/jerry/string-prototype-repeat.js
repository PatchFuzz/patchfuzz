


var z = "I am vengeance";
try {
  z.repeat (-1);
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}


var x = "I am the night";
try {
  print(z.repeat (Infinity));
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}


assert (z.repeat (0) === "");
assert (z.repeat (NaN) === "");

var y = "I am batman ";
assert (y.repeat (3) === "I am batman I am batman I am batman ");

assert (String.prototype.repeat.call ("My cat is awesome. ", 3) === "My cat is awesome. My cat is awesome. My cat is awesome. ");

try {
  String.prototype.repeat.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.repeat.call (null);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  String.prototype.repeat.call (undefined, "Sylveon");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var a = Symbol ("Unicorn invasion.", 3);
try {
  String.prototype.repeat.call (a);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


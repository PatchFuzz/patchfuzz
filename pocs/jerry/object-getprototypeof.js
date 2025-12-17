var a = true;
obj = Object.getPrototypeOf(a);
assert (obj == Boolean.prototype);

a = 5;
obj = Object.getPrototypeOf(a);
assert (obj == Number.prototype);

a = "string";
obj = Object.getPrototypeOf(a);
assert (obj == String.prototype);

a = [1,2,3];
obj = Object.getPrototypeOf(a);
assert (obj == Array.prototype);

try {
  a = null;
  obj = Object.getPrototypeOf(a);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}















assert (Reflect['getPrototypeOf']({}) === Object.prototype);
assert (Reflect['getPrototypeOf'](Object.create(null)) === null);
assert (Reflect['getPrototypeOf'](Object.prototype) === null);

try {
  Reflect.getPrototypeOf();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.getPrototypeOf("str");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

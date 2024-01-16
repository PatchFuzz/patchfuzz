













assert(Array.isArray([]) === true);
assert(Array.isArray([1]) === true);
assert(Array.isArray(new Array()) === true);
assert(Array.isArray(new Array('a', 'b', 'c', 'd')) === true);
assert(Array.isArray(new Array(3)) === true);
assert(Array.isArray(Array.prototype) === true);
assert(Array.isArray(new Proxy([], {})) === true);

assert(Array.isArray() === false);
assert(Array.isArray({}) === false);
assert(Array.isArray(null) === false);
assert(Array.isArray(undefined) === false);
assert(Array.isArray(17) === false);
assert(Array.isArray('Array') === false);
assert(Array.isArray(true) === false);
assert(Array.isArray(false) === false);
assert(Array.isArray(new Uint8Array(32)) === false);
assert(Array.isArray({ __proto__: Array.prototype }) === false);

var revocable = Proxy.revocable ({}, {});
var proxy = revocable.proxy;
revocable.revoke();

try {
  Array.isArray(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var revocable = Proxy.revocable ([], {});
var proxy = revocable.proxy;

assert(Array.isArray(proxy) === true);

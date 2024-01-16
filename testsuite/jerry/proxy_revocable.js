













var target = function () {};
var handler = { get (name) {
  return 5;
}};

var revocable = Proxy.revocable(target, handler);

var proxy = revocable.proxy;

assert(proxy.a === 5);

revocable.revoke();

try {
  proxy.a;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Proxy.revocable();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Proxy.revocable(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var p1 = Proxy.revocable({}, proxy);
p1.a = 3;
assert(p1.a == 3);

var p2 = Proxy.revocable(proxy, {});
p2.b = 43;
assert(p2.b == 43);

assert(typeof(target.a) === "undefined");
assert(typeof(target.b) === "undefined");


try {
  proxy.a;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

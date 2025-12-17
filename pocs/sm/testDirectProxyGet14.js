;

var target = {x: 5};
var returnValue = 42;
var handler = {
  get(t, p) {
    return returnValue;
  }
};
var {proxy, revoke} = Proxy.revocable(target, handler);

function testGet(p) {
  return p.x;
}

for (i = 0; i < 200; i++) {
  print(testGet(proxy), returnValue);
}

print(testGet(proxy), returnValue);
revoke();
print(function () { testGet(proxy) }, TypeError);

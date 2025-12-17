;

var target = {x:5};
var magic = false;
var returnValue = 42;
var handler = {
  get(t, p, a, b) {
    print(a, proxy);
    print(b, undefined);
    print(arguments.length, 3);
    if (magic) {
      Object.defineProperty(target, 'x', {
          value: 42,
          writable: false,
          configurable: false
      });
      if (returnValue != 42) {
        gc(testGet, "shrinking");
      }
    }
    return returnValue;
  }
};
var proxy = new Proxy(target, handler);



var maybeProxies = [
  {x: returnValue},
  proxy,
];

function testGet(p) {
  return p.x;
}

for (i = 0; i < 200; i++) {
  print(testGet(maybeProxies[i % maybeProxies.length]), returnValue);
}
magic = true;
print(testGet(proxy), returnValue);
returnValue = 41;
print(function () { testGet(proxy) }, TypeError);

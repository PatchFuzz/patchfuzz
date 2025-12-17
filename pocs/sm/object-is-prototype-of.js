function testPrimitive() {
  for (var i = 0; i < 100; ++i) {
    
    print(Object.prototype.isPrototypeOf(null), false);
    print(Object.prototype.isPrototypeOf(void 0), false);

    
    print(String.prototype.isPrototypeOf(""), false);
    print(Number.prototype.isPrototypeOf(0), false);
    print(Boolean.prototype.isPrototypeOf(true), false);
    print(BigInt.prototype.isPrototypeOf(0n), false);
    print(Symbol.prototype.isPrototypeOf(Symbol.hasInstance), false);
  }
}
testPrimitive();

function testObject() {
  for (var i = 0; i < 100; ++i) {
    print(Object.prototype.isPrototypeOf({}), true);
    print(Object.prototype.isPrototypeOf([]), true);

    print(Array.prototype.isPrototypeOf({}), false);
    print(Array.prototype.isPrototypeOf([]), true);
  }
}
testObject();

function testProxy() {
  var proxy = new Proxy({}, new Proxy({}, {
    get(t, pk, r) {
      print(pk, "getPrototypeOf");
      return Reflect.get(t, pk, r);
    }
  }));

  for (var i = 0; i < 100; ++i) {
    print(Object.prototype.isPrototypeOf(proxy), true);
    print(Array.prototype.isPrototypeOf(proxy), false);
  }
}
testProxy();

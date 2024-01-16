



PI = [];
PI[250] = PI;
Object.seal(PI);
assertTrue(Object.isSealed(PI));
var proxy = new Proxy(PI, PI);
Object.freeze(proxy);
assertTrue(Object.isFrozen(proxy));

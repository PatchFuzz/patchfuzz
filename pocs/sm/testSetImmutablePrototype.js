;

let p = {};
let x = new Proxy({__proto__: p}, {});
print(Reflect.getPrototypeOf(x), p);
setImmutablePrototype(x);
print(Reflect.getPrototypeOf(x), p);
print(Reflect.setPrototypeOf(x, Date.prototype), false);
print(Reflect.setPrototypeOf(x, p), true);
print(() => Object.setPrototypeOf(x, Date.prototype), TypeError);
print(Reflect.getPrototypeOf(x), p);

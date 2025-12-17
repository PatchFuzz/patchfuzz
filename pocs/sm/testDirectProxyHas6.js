var target = {};
Object.preventExtensions(target);

var handler = { has: () => false };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    print('foo' in p, false);
    print(Symbol.iterator in p, false);
}

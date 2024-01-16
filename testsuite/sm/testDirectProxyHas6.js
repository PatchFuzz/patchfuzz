
var target = {};
Object.preventExtensions(target);

var handler = { has: () => false };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    assertEq('foo' in p, false);
    assertEq(Symbol.iterator in p, false);
}

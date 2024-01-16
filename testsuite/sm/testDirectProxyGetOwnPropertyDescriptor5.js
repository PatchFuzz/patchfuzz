load(libdir + "asserts.js");


var target = {};
Object.defineProperty(target, 'foo', {
    configurable: true
});
Object.preventExtensions(target);

var handler = { getOwnPropertyDescriptor: () => undefined };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);

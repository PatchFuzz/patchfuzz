load(libdir + "asserts.js");


var target = {};
Object.preventExtensions(target);

var handler = { ownKeys: () => [ 'foo' ] };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyNames(p), TypeError);

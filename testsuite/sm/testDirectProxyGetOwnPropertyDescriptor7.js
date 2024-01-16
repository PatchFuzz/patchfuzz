load(libdir + "asserts.js");


var target = {};
Object.preventExtensions(target);

var handler = { getOwnPropertyDescriptor: () => ({}) };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);

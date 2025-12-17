;


var target = {};
Object.preventExtensions(target);

var handler = { ownKeys: () => [ 'foo' ] };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    print(() => Object.getOwnPropertyNames(p), TypeError);

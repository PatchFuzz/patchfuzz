;


var target = {};
Object.preventExtensions(target);

var handler = { getOwnPropertyDescriptor: () => ({}) };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    print(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);

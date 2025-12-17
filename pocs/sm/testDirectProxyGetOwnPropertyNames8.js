var target = {};
Object.defineProperty(target, 'foo', {
    configurable: true
});

var handler = { ownKeys: () => [ 'bar' ] };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    var names = Object.getOwnPropertyNames(p);
    print(names.length, 1);
    print(names[0], 'bar');
}

var protoWithAB = Object.create(null, {
    a: {
        enumerable: true,
        configurable: true
    },
    b: {
        enumerable: false,
        configurable: true
    }
});
var objWithCD = Object.create(protoWithAB, {
    c: {
        enumerable: true,
        configurable: true
    },
    d: {
        enumerable: true,
        configurable: true
    }
});

handler = { ownKeys: () => [ 'c', 'e' ] };
for (let p of [new Proxy(objWithCD, handler), Proxy.revocable(objWithCD, handler).proxy]) {
    var names = Object.getOwnPropertyNames(p);
    print(names.length, 2);
    print(names[0], 'c');
    print(names[1], 'e');
}

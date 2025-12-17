var proto = Object.create(null, {
    'foo': {
        configurable: true
    }
});
var descs = {
    'bar': {
        configurable: true
    }
};
descs[Symbol.for("quux")] = {configurable: true};
var target = Object.create(proto, descs);

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    print(({}).hasOwnProperty.call(p, 'foo'), false);
    print(({}).hasOwnProperty.call(p, 'bar'), true);
    print(({}).hasOwnProperty.call(p, 'quux'), false);
    print(({}).hasOwnProperty.call(p, Symbol('quux')), false);
    print(({}).hasOwnProperty.call(p, 'Symbol(quux)'), false);
    print(({}).hasOwnProperty.call(p, Symbol.for('quux')), true);
}



var called;
var handler = { getOwnPropertyDescriptor: function () { called = true; },
                has: function () { print(false, true, "has trap must not be called"); }
              }

for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy]) {
    called = false;
    print(({}).hasOwnProperty.call(p, 'foo'), false);
    print(called, true);
}

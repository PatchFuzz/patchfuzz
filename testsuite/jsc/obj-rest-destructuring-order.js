function assert(a) {
    if (!a)
        throw new Error('Bad assertion');
}


(function () {
    var calls = [];
    var o = { get z() { calls.push('z') }, get a() { calls.push('a') } };
    Object.defineProperty(o, 1, { get: () => { calls.push(1) }, enumerable: true });
    Object.defineProperty(o, Symbol('foo'), { get: () => { calls.push('Symbol(foo)') }, enumerable: true });

    var {...r} = o;

    assert(calls[0] === 1);
    assert(calls[1] === 'z');
    assert(calls[2] === 'a');
    assert(calls[3] === 'Symbol(foo)');
    assert(Object.keys(r).length === 3);
})();


(function () {
    var calls = [];
    var o = { z: 2, a: 3 };
    var fooSymbol = Symbol('foo');
    Object.defineProperty(o, 1, { value: 4, enumerable: true });
    Object.defineProperty(o, fooSymbol, { value: 5, enumerable: true });

    var p = new Proxy(o, {
        get: function(target, property, receiver) {
            calls.push(property);
            return target[property];
        }
    });

    var {...r} = p;

    assert(calls[0] == 1);
    assert(calls[1] == 'z');
    assert(calls[2] == 'a');
    assert(calls[3] === fooSymbol);
    assert(Object.keys(r).length === 3);
})();


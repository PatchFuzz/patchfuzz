;

function testProxy(handlerReturn, prop, shouldThrow) {
    var handler = { get: function () { return handlerReturn; } };
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
        if (shouldThrow)
            print(function () { return p[prop]; }, TypeError);
        else
            print(p[prop], handlerReturn);
    }
}


var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    writable: false,
    configurable: false
});
testProxy('baz', 'foo', true);

testProxy('bar', 'foo', false);


Object.defineProperty(target, 'prop', {
    value: 'bar',
    writable: true,
    configurable: false
});
testProxy('baz', 'prop', false);


Object.defineProperty(target, 'prop2', {
    value: 'bar',
    writable: false,
    configurable: true
});
testProxy('baz', 'prop2', false);


var target = {
    foo: 'bar'
};

var handler = { set: (target, name) => target[name] = 'qux' };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    p['foo'] = 'baz';
    assertEq(target['foo'], 'qux');

    
    target['foo'] = 'bar';
}

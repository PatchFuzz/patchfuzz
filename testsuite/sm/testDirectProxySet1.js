
var target = {
    foo: 'bar'
};
for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    
    
    p.foo = 'baz';
    assertEq(target.foo, 'baz');
    p['foo'] = 'buz';
    assertEq(target.foo, 'buz');

    var sym = Symbol.for('quux');
    p[sym] = sym;
    assertEq(target[sym], sym);
    
    target[sym] = undefined;
}

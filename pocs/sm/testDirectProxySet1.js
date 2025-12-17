var target = {
    foo: 'bar'
};
for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    
    
    p.foo = 'baz';
    print(target.foo, 'baz');
    p['foo'] = 'buz';
    print(target.foo, 'buz');

    var sym = Symbol.for('quux');
    p[sym] = sym;
    print(target[sym], sym);
    
    target[sym] = undefined;
}

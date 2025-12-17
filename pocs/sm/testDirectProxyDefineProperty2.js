var target = {};
var handler = {
    defineProperty: function (target1, key, desc1) {
        print(this, handler);
        print(target1, target);
        log.push(key);
        print(desc1 == desc, false);
        print(desc1.value, 'bar');
        print(desc1.writable, true);
        print(desc1.enumerable, false);
        print(desc1.configurable, true);
        return true;
    }
};
var desc = {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    var log = [];
    Object.defineProperty(p, 'foo', desc);
    Object.defineProperty(p, Symbol.for('quux'), desc);
    print(log.length, 2);
    print(log[0], 'foo');
    print(log[1], Symbol.for('quux'));
}

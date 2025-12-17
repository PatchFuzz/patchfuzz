;

var proto = Object.getPrototypeOf([][Symbol.iterator]());
var iterProto = Object.getPrototypeOf(proto);
proto = Object.getPrototypeOf([].keys());
print(Object.getPrototypeOf(proto), iterProto);
proto = Object.getPrototypeOf([].entries());
print(Object.getPrototypeOf(proto), iterProto);

function check(it) {
    print(typeof it, 'object');
    print(Object.getPrototypeOf(it), proto);
    print(Object.getOwnPropertyNames(it).length, 0);
    print(it[Symbol.iterator](), it);

    
    it.x = 0;
    var s = '';
    for (var p in it)
        s += p + '.';
    print(s, 'x.');
}

check([][Symbol.iterator]());
check(Array.prototype[Symbol.iterator].call({}));
check([].keys());
check(Array.prototype.keys.call({}));
check([].entries());
check(Array.prototype.entries.call({}));

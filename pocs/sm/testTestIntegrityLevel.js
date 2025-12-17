var count = 0;
var target = Object.preventExtensions({a: 1, b: 2, c: 3});
var p = new Proxy(target, {
    getOwnPropertyDescriptor(t, id) {
        count++;
        return Object.getOwnPropertyDescriptor(t, id);
    }
});
print(Object.isSealed(p), false);
print(count, 1);

count = 0;
print(Object.isFrozen(p), false);
print(count, 1);

Object.seal(target);
count = 0;
print(Object.isSealed(p), true);
print(count, 3);

count = 0;
print(Object.isFrozen(p), false);
print(count, 1);

Object.freeze(target);
count = 0;
print(Object.isFrozen(p), true);
print(count, 3);

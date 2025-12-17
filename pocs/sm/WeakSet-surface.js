var desc = Object.getOwnPropertyDescriptor(this, "WeakSet");
print(desc.enumerable, false);
print(desc.configurable, true);
print(desc.writable, true);

print(typeof WeakSet, 'function');
print(Object.keys(WeakSet).length, 0);
print(WeakSet.length, 0);
print(WeakSet.name, "WeakSet");

print(Object.getPrototypeOf(WeakSet.prototype), Object.prototype);
print(Object.prototype.toString.call(WeakSet.prototype), "[object WeakSet]");
print(Object.prototype.toString.call(new WeakSet), "[object WeakSet]");
print(Object.keys(WeakSet.prototype).length, 0);
print(WeakSet.prototype.constructor, WeakSet);

function checkMethod(name, arity) {
    var desc = Object.getOwnPropertyDescriptor(WeakSet.prototype, name);
    print(desc.enumerable, false);
    print(desc.configurable, true);
    print(desc.writable, true);
    print(typeof desc.value, 'function');
    print(desc.value.name, name);
    print(desc.value.length, arity);
}

checkMethod("has", 1);
checkMethod("add", 1);
checkMethod("delete", 1);

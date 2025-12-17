var desc = Object.getOwnPropertyDescriptor(this, "WeakMap");
print(desc.enumerable, false);
print(desc.configurable, true);
print(desc.writable, true);

print(typeof WeakMap, 'function');
print(Object.keys(WeakMap).length, 0);
print(WeakMap.length, 0);
print(WeakMap.name, "WeakMap");

print(Object.getPrototypeOf(WeakMap.prototype), Object.prototype);
print(Object.prototype.toString.call(WeakMap.prototype), "[object WeakMap]");
print(Object.prototype.toString.call(new WeakMap()), "[object WeakMap]");
print(Object.keys(WeakMap.prototype).join(), "");
print(WeakMap.prototype.constructor, WeakMap);

function checkMethod(name, arity) {
    var desc = Object.getOwnPropertyDescriptor(WeakMap.prototype, name);
    print(desc.enumerable, false);
    print(desc.configurable, true);
    print(desc.writable, true);
    print(typeof desc.value, 'function');
    print(desc.value.name, name);
    print(desc.value.length, arity);
}

checkMethod("get", 1);
checkMethod("has", 1);
checkMethod("set", 2);
checkMethod("delete", 1);

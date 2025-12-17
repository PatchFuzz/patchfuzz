;

var desc = Object.getOwnPropertyDescriptor(this, "Set");
print(desc.enumerable, false);
print(desc.configurable, true);
print(desc.writable, true);

print(typeof Set, 'function');
print(Object.keys(Set).length, 0);
print(Set.length, 0);
print(Set.name, "Set");

print(Object.getPrototypeOf(Set.prototype), Object.prototype);
print(Object.prototype.toString.call(Set.prototype), "[object Set]");
print(Object.prototype.toString.call(new Set()), "[object Set]");
print(Object.keys(Set.prototype).join(), "");
print(Set.prototype.constructor, Set);

function checkMethod(name, arity) { 
    var desc = Object.getOwnPropertyDescriptor(Set.prototype, name);
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
checkMethod("values", 0);
checkMethod("entries", 0);

var desc = Object.getOwnPropertyDescriptor(Set.prototype, "size");
print(desc.enumerable, false);
print(desc.configurable, true);
print(typeof desc.get, 'function');
print(desc.get.length, 0);
print(desc.set, undefined);
checkMethod("clear", 0);


print(Set.prototype.keys, Set.prototype.values);
print(Set.prototype[Symbol.iterator], Set.prototype.values);

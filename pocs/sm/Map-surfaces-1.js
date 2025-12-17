;

var desc = Object.getOwnPropertyDescriptor(this, "Map");
print(desc.enumerable, false);
print(desc.configurable, true);
print(desc.writable, true);

print(typeof Map, 'function');
print(Object.keys(Map).length, 0);
print(Map.length, 0);
print(Map.name, "Map");

print(Object.getPrototypeOf(Map.prototype), Object.prototype);
print(Object.prototype.toString.call(Map.prototype), "[object Map]");
print(Object.prototype.toString.call(new Map()), "[object Map]");
print(Object.keys(Map.prototype).join(), "");
print(Map.prototype.constructor, Map);

function checkMethod(name, arity) { 
    var desc = Object.getOwnPropertyDescriptor(Map.prototype, name);
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
checkMethod("keys", 0);
checkMethod("values", 0);
checkMethod("entries", 0);

var desc = Object.getOwnPropertyDescriptor(Map.prototype, "size");
print(desc.enumerable, false);
print(desc.configurable, true);
print(typeof desc.get, 'function');
print(desc.get.length, 0);
print(desc.set, undefined);
checkMethod("clear", 0);


print(Map.prototype[Symbol.iterator], Map.prototype.entries);

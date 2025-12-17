var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
print(desc.enumerable);
print(desc.configurable);
print("function", typeof desc.get);
print("function", typeof desc.set);


function replaced_get() {};
Object.defineProperty(Object.prototype, "__proto__", { get:replaced_get });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
print(desc.enumerable);
print(desc.configurable);
print(replaced_get, desc.get);


function replaced_set(x) {};
Object.defineProperty(Object.prototype, "__proto__", { set:replaced_set });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
print(desc.enumerable);
print(desc.configurable);
print(replaced_set, desc.set);


Object.defineProperty(Object.prototype, "__proto__", { configurable:false });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
print(desc.enumerable);
print(desc.configurable);
print(replaced_get, desc.get);
print(replaced_set, desc.set);


Object.freeze(Object.prototype);
print(Object.isFrozen(Object.prototype));

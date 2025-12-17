let global = new Function('return this;')();
print(global.toString());
print(global[Symbol.toStringTag]);
let descriptor = Object.getOwnPropertyDescriptor(global, Symbol.toStringTag);
print(descriptor.writable);
print(descriptor.enumerable);
print(descriptor.configurable);






let global = new Function('return this;')();
console.log(global.toString());
console.log(global[Symbol.toStringTag]);
let descriptor = Object.getOwnPropertyDescriptor(global, Symbol.toStringTag);
console.log(descriptor.writable);
console.log(descriptor.enumerable);
console.log(descriptor.configurable);















var array = [5.1, Infinity]
Reflect.preventExtensions(array);

assert(array.pop() == Infinity);

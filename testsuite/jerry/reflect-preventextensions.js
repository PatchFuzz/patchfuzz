













var object1 = {};

assert (Reflect['isExtensible'](object1) === true);

Reflect.preventExtensions(object1);
assert (Reflect['isExtensible'](object1) === false);

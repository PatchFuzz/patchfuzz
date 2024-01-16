













var empty = {};
assert (Reflect['isExtensible'](empty) === true);

Reflect.preventExtensions(empty);
assert (Reflect['isExtensible'](empty) === false);

var sealed = Object.seal({});
assert (Reflect['isExtensible'](sealed) === false);

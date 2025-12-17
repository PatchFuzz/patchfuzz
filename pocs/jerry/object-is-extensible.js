var empty = {};
assert (Object.isExtensible(empty) === true);


Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);


var sealed = Object.seal({});
assert (Object.isExtensible(sealed) === false);


var frozen = Object.freeze({});
assert(Object.isExtensible(frozen) === false);

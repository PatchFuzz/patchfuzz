














var empty = {};
print(Object.isExtensible(empty) === true);


Object.preventExtensions(empty);
print(Object.isExtensible(empty) === false);


var sealed = Object.seal({});
print(Object.isExtensible(sealed) === false);


var frozen = Object.freeze({});
print(Object.isExtensible(frozen) === false);

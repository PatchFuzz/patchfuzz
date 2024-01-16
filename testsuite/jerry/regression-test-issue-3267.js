













var hasProp = $ => { }
Object.preventExtensions(hasProp);
assert (Object.isSealed(hasProp) === false);

var keys = Object.getOwnPropertyNames(hasProp);
assert (keys.length === 2);
assert (keys[0] === "length");
assert (keys[1] === "name");















var object1 = {};

assert(Reflect.setPrototypeOf(object1, Object.prototype) === true);
assert(Reflect.setPrototypeOf(object1, null) === true);

var object2 = {};
assert(Reflect.setPrototypeOf(Object.freeze(object2), null) === false);

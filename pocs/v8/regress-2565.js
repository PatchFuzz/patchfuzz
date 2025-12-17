Object.freeze(Object.prototype);
var p = {};
var o = Object.create(p);
print(p, o.__proto__);
print(p, Object.getPrototypeOf(o));

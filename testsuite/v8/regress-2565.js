


























Object.freeze(Object.prototype);
var p = {};
var o = Object.create(p);
assertSame(p, o.__proto__);
assertSame(p, Object.getPrototypeOf(o));

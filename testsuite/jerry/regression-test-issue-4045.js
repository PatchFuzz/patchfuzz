













var a = new Proxy(eval, {});
var b = {
    y : 2
};
b.__proto__ = a;

var f = [];
var c = [];
var d = new Date();
d.__proto__ = b;
a.__proto__ = f;

c.__proto__ = d;


var a1 = new String();
a1.__proto__ = c;

assert(a.__proto__ === f);
assert(b.__proto__.__proto__ === f);
assert(d.__proto__.__proto__ === a);
assert(c.__proto__.__proto__.__proto__ === a);
assert(a1.__proto__.__proto__.__proto__.__proto__ === a);

var e = []
a1.__proto__ = e;

assert(a1.__proto__ === e);

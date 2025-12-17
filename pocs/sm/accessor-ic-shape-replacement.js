function f(obj) {
    var x;
    for (var i = 0; i < 20; ++i) {
	x = obj.foo;
    }
    return x;
}

var proto = {};
var obj1 = Object.create(proto);
var obj2 = Object.create(proto);
obj2.bar = "5";
Object.defineProperty(proto, "foo",
		      { get: function() { return 1; }, configurable: true });
print(f(obj1), 1);
print(f(obj2), 1);

Object.defineProperty(proto, "foo",
		      { get: function() { return 2; }, configurable: true });
print(f(obj1), 2);
print(f(obj2), 2);



function g(obj) {
    var x;
    for (var i = 0; i < 20; ++i) {
	obj.foo = i;
    }
    return x;
}

var proto = {};
var obj1 = Object.create(proto);
var obj2 = Object.create(proto);
var sideEffect;
obj2.bar = "5";
Object.defineProperty(proto, "foo",
		      { set: function() { sideEffect = 1; }, configurable: true });
g(obj1);
print(sideEffect, 1);
sideEffect = undefined;
g(obj2);
print(sideEffect, 1);
sideEffect = undefined;

Object.defineProperty(proto, "foo",
		      { set: function() { sideEffect = 2; }, configurable: true });
g(obj1);
print(sideEffect, 2);
sideEffect = undefined;
g(obj2);
print(sideEffect, 2);

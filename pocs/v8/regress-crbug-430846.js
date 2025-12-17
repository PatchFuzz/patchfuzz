function foo() { return 1; };
var o1 = {};
o1.foo = foo;

var json = '{"foo": {"x": 1}}';
var o2 = JSON.parse(json);
var o3 = JSON.parse(json);
print(%HaveSameMap(o2, o3));

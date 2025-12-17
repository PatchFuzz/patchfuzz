var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var v3 = 44;
var k4 = {};

var wrong1 = 8;
var wrong2 = 9;
var wrong3 = 10;

var arr = [[k1, wrong1], [k2, v2], [k3, wrong2], [k1, wrong3], [k3, v3], [k1, v1]];

var m = new WeakMap(arr);

print(m.has(k1), true);
print(m.has(k2), true);
print(m.has(k3), true);
print(m.has(k4), false);
print(m.get(k1), v1);
print(m.get(k2), v2);
print(m.get(k3), v3);
print(m.get(k4), undefined);

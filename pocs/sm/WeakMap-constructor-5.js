;

var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var v3 = {};

print(function () { new WeakMap([undefined]); }, TypeError);
print(function () { new WeakMap([null]); }, TypeError);
print(function () { new WeakMap([[k1, v1], [k2, v2], , [k3, k3]]); }, TypeError);
print(function () { new WeakMap([[k1, v1], [k2, v2], ,]); }, TypeError);



print(function () { new WeakMap([1, 2, 3]); }, TypeError);
print(function () {
  let s = new Set([1, 2, "abc"]);
  new WeakMap(s);
}, TypeError);

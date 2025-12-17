var k1 = {};
var k2 = {};
var k3 = {};

var arr = [[k1], [k2]];

var m = new WeakMap(arr);

print(m.has(k1), true);
print(m.has(k2), true);
print(m.has(k3), false);
print(m.get(k1), undefined);
print(m.get(k2), undefined);
print(m.get(k3), undefined);

var arraylike1 = {
  0: k1,
  1: undefined
};
var arraylike2 = {
  0: k2,
};

arr = [arraylike1, arraylike2];

m = new WeakMap(arr);

print(m.has(k1), true);
print(m.has(k2), true);
print(m.has(k3), false);
print(m.get(k1), undefined);
print(m.get(k2), undefined);
print(m.get(k3), undefined);

var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};

var done = false;

function* data() {
  yield [k1, v1];
  yield [k2, v2];
  done = true;
};

m = new WeakMap(data());

print(done, true);  
print(m.has(k1), true);
print(m.has(k2), true);
print(m.has(k3), false);
print(m.get(k1), v1);
print(m.get(k2), v2);
print(m.get(k3), undefined);

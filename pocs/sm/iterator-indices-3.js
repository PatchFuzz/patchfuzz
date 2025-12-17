function test(o, deleter) {
  var result = 0;
  for (var s in o) {
    if (!o.hasOwnProperty(s)) { continue; }
    result += o[s];
    deleter(o);
  }
  return result;
}

with ({}) {}


for (var i = 0; i < 2000; i++) {
  var obj = {};
  obj["x" + i] = 1;
  test(obj, () => 1);
  test(obj, () => 2);
}

print(test({x: 1, y: 2}, (o) => delete o.y), 1);
print(test([1,2], (o) => delete o[1]), 1);
print(test([1,2], (o) => {o.length = 0}), 1);

print(test({x: 1, y: 2, z: 3}, (o) => delete o.y), 4);
print(test([1,2,3], (o) => delete o[1]), 4);
print(test([1,2,3,4], (o) => {o.length = 2}), 3);

print(test({x: 1, y: 2, z: 3}, (o) => delete o.x), 6);
print(test([1,2,3], (o) => delete o[0]), 6);
print(test([1], (o) => {o.length = 0}), 1);

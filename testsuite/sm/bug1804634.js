

function inner(o) {
  return o.x;
}
function outer(o) {
  return inner(o);
}

with ({}) {}

var arr = [];
for (var i = 0; i < 3; i++) {
  var obj = {x: 1};
  obj["y" + i] = 2;
  arr.push(obj);
}


for (var i = 0; i < 2000; i++) {
  assertEq(outer(arr[i % arr.length]), 1);
}


for (var i = 0; i < 10; i++) {
  var obj = {x: 1};
  obj["z" + i] = 3;
  assertEq(outer(obj), 1);
}


for (var i = 0; i < 2000; i++) {
  assertEq(outer(arr[i % arr.length]), 1);
}

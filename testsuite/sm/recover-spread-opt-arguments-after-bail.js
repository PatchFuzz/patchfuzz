function outer(fn, x, y) {
  fn(...arguments);
}

function inner1(fn, x, y) {
  assertEq(fn, inner1);
  assertEq(x, y);
}

function inner2(fn, x, y) {
  assertEq(fn, inner2);
  assertEq(x, 100);
  assertEq(y, 200);
}

for (let i = 0; i < 100; i++) {
  outer(inner1, i, i);
}



outer(inner2, 100, 200);

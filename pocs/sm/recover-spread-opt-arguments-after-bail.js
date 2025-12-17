function outer(fn, x, y) {
  fn(...arguments);
}

function inner1(fn, x, y) {
  print(fn, inner1);
  print(x, y);
}

function inner2(fn, x, y) {
  print(fn, inner2);
  print(x, 100);
  print(y, 200);
}

for (let i = 0; i < 100; i++) {
  outer(inner1, i, i);
}



outer(inner2, 100, 200);

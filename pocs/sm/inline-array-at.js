function f(x) {
  print(x.at(0), 1);
  print(x.at(-1), 3);
  print(x.at(10), undefined);
}

function g() {
  for (var i = 0; i < 100; i++) {
    f([1, 2, 3]);
  }
}

for (var j = 0; j < 10; j++) {
  g();
}

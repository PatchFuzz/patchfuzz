function f(index, expected) {
  function g(index) {
    return arguments[index];
  }
  print(g(index), expected);
}


with ({});

for (var i = 0; i < 100; ++i) {
  f(0, 0);
  f(1, undefined);
}

function foo(x) {
  return x === x;
}

for (var i = 0; i < 20; i++) {
  print(foo(1.2), true);
  print(foo(NaN), false);
}

function bar(x) {
  if (x === x)
    return true;
  return false;
}

for (var i = 0; i < 20; i++) {
  print(bar(1.2), true);
  print(bar(NaN), false);
}

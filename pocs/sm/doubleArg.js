function foo(x, y) {
  if (y < 0) {}
  return x * 1000;
}
function bar(x, y) {
  while (false) {}
  print(foo(x, false), 10500);
  print(foo(y, false), 11000);
}
bar(10.5, 11);

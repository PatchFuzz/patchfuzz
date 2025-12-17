function foo(a,b) {
  var c;
  if (a < b) {
    c = a + 1;
  } else {
    c = 0.5;
  }
  return c;
}
print(foo(0, 1), 1);

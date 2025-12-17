function foo(x) {
  for (var i = 0x7ffffff0; i <= x; i++) {
    var y = i;
  }
  return y;
}
print(foo(0x7fffffff), 0x7fffffff);

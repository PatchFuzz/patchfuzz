function foo(y) {
  var x = y;
  if (x != x)
    return true;
  return false;
}
print(foo("three"), false);
print(foo(NaN), true);

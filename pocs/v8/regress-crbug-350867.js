function f1(a, i) {
  return a[i];
}
function f2(a, b, c, index) {
  return f1(arguments, index);
}

f2(2, 3, 4, "foo");
f2(2, 3, 4, "foo");
print(11, f1([11, 22, 33], 0));
print(22, f2(22, 33, 44, 0));

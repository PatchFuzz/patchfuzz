function foo(a, i) {
  var o = [0.5,,1];
  a[i] = o[i];
}
var a1 = [0.1,0.1];
foo(a1, 0);
foo(a1, 1);
print(undefined, a1[1]);

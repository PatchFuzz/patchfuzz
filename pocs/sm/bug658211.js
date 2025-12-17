function foo(x) {
  return bar(x);
}
function bar(x) {
  return x.f + 10;
}
var g = Object();
g.f = 10;
print(foo(g), 20);
print(foo(g), 20);
print(foo(g), 20);
eval("g.f = 'three'");
print(foo(g), 'three10');

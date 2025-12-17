function foo(n) { return n % 2; }

with ({}) {}
for (var i = 0; i < 1000; i++) {
  foo(0);
}

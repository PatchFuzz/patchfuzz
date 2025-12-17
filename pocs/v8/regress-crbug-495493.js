function foo(p) {
  for (var i = 0; i < 100000; ++i) {
    p = Math.min(-1, 0);
  }
}
foo(0);

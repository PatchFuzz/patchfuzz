function* gen() {
  for (var i = 0; i < 3; ++i) {
    yield i
  }
}
gen().next();
gen().next();

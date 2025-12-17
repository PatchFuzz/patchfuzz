function f(...rest) {
  for (var i = 0; i < 100; ++i) {
    rest[0] = 0;
    var v = Math.max.apply(Math, rest);

    rest[0] = i;
    var w = Math.max.apply(Math, rest);

    print(v, 0);
    print(w, i);
  }
}
for (var i = 0; i < 2; ++i) {
    f(0, 0);
}

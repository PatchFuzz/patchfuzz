function g(f, x, name) {
  var v2 = f(x);
  for (var i = 0; i < 13000; i++) {
    f(i);
  }
  var v1 = f(x);
  print(v1, v2);
}

g(Math.sin, 6.283185307179586, "Math.sin");

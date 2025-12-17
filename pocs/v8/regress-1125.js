function f(x, y) {
  with ("abcdefghijxxxxxxxxxx")
    var y = {};
}

function g() {
  f.apply(this, arguments);
}

for (var i = 0; i < 150000; i++) {
  g(i);
}







function f(a, x) {
  return a[x] + 1;
}
var b = false;
for (var i = 0; i < 1000; ++i) {
    var x = f(b, "bar");
    try {
        if (x != 43) throw "Error: bad result: " + x;
    } catch (e) {}
}

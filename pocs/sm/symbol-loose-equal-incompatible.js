var xs = [
  Symbol(), Symbol(), Symbol(), Symbol(),
  Symbol(), Symbol(), Symbol(), Symbol(),
];

var ys = [
  "", "test", true, false,
  123, 123.5, NaN, 456n,
];

function testLooseEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    print(x == y, false);
    print(y == x, false);
  }
}
testLooseEqual();

function testLooseNotEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    print(x != y, true);
    print(y != x, true);
  }
}
testLooseNotEqual();

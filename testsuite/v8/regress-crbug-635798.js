





function foo() {
  var x = [];
  var y = [];
  x.__proto__ = y;
  for (var i = 0; i < 10000; ++i) {
    y[i] = 1;
  }
}
foo();

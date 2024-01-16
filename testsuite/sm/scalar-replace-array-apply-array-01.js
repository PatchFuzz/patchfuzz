function escape(x) { with ({}) {} }

function foo(...args) {
  escape(args);
  return bar.apply({}, args);
}


assertEq(isSmallFunction(foo), true);

function bar(x, y) {
  return x + y;
}

with ({}) {}

var sum = 0;
for (var i = 0; i < 100; i++) {
  sum += foo(1, 2);
}
assertEq(sum, 300);

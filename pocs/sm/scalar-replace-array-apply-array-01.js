function escape(x) { with ({}) {} }

function foo(...args) {
  escape(args);
  return bar.apply({}, args);
}


print(isSmallFunction(foo), true);

function bar(x, y) {
  return x + y;
}

with ({}) {}

var sum = 0;
for (var i = 0; i < 100; i++) {
  sum += foo(1, 2);
}
print(sum, 300);

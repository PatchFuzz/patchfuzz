actual = '';
expected = 'g 0,g 1,g 2,g 3,g 4,';

function g(x) {
  print('g ' + x);
}

function f() {
  g.apply(this, arguments);
}

for (var i = 0; i < 5; ++i) {
  f(i);
}


print(actual, expected)

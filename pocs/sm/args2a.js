actual = '';
expected = 'g,g,g,g,g,';

function g() {
  print('g');
}

function f() {
  g.apply(this, arguments);
}

for (var i = 0; i < 5; ++i) {
  f();
}


print(actual, expected)

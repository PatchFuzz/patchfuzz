actual = '';
expected = '0,0,0,';

function f() {
  arguments.length--;
  for (var i = 0; i < arguments.length; ++i) {
    print(i);
  }
}

f(1, 2);
f(1, 2);
f(2, 2);


print(actual, expected)

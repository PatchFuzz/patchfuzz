actual = '';
expected = 'undefined,undefined,undefined,undefined,undefined,';

function h() {
  for (var i = 0; i < 5; ++i) {
    print(arguments[100]);
  }
}

h();


print(actual, expected)

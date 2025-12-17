actual = '';
expected = '5,';

function f() {
  var p = 0;

  function g() {
    for (var i = 0; i < 5; ++i) {
      p++;
    }
  }

  g();

  print(p);
}

f();


print(actual, expected)

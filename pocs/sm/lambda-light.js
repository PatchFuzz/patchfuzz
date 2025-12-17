actual = '';
expected = '10,';

function f(x) {
  {
    let x2 = 10;
    for (var i = 0; i < 5; ++i) {
      var g = function () {
	print(x2);
      };
    }
    g();
  }
}

f(1);


print(actual, expected)

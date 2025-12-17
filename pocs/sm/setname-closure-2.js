actual = '';
expected = '16,';

var f = function() {
  var p = 1;
  
  function g() {
    for (var i = 0; i < 5; ++i) {
      p = i * i;
    }
  }
  
  function h() {
    print(p);
  }

  return [g, h];
};

var [ g,h ] = f();
for (var i = 0; i < 5; ++i) {
  g();
}
h();


print(actual, expected)

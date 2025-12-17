actual = '';
expected = '10,20,30,40,50,60,70,80,90,100,110,';

function f() {
  var x = 10;
  
  var g = function(p) {
    for (var i = 0; i < 10; ++i)
      x++;
  }
  
  for (var i = 0; i < 10; ++i) {
    print(x);
    g(100 * i + x);
  }

  print(x);
}

f();


print(actual, expected)

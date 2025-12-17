actual = '';
expected = '2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,';

var f = function() {
  var p = 1;
  
  function g() {
    for (var i = 0; i < 5; ++i) {
      p = p * 2;
      print(p);
    }
  }
  
  g();
  
  print(p);
}

for (var i = 0; i < 5; ++i) {
  f();
  print();
}



print(actual, expected)

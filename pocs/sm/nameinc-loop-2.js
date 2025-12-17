actual = '';
expected = '1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,';

var f = function() {
  var p = 0;
  
  function g() {
    for (var i = 0; i < 5; ++i) {
      p++;
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

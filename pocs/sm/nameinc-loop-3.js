actual = '';
expected = 'g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,';

var f = function() {
  var p = 0;

  function h() {
    var q = 0;

    function g() {
      for (var i = 0; i < 5; ++i) {
	p++;
	print('g ' + p + ' ' + q);
	q--;
      }
    }
    g();
    print('h ' + p + ' ' + q);
  }
  
  h();
  
  print('f ' + p);
}

for (var i = 0; i < 5; ++i) {
  f();
  print();
}



print(actual, expected)

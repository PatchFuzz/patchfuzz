actual = '';
expected = '0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,';

function g(a) {
  a();
}

function n() {
}

function f(y) {
  for (var i = 0; i < 7; ++i) {
    var q;
    q = function() { 
      print(y);
      
      var m = 1;
      var z = function() {
	print(m);
      }
      m = 2;
    };
    g(q);
  }
}

for (var i = 0; i < 5; ++i) {
  f(i);
 }


print(actual, expected)

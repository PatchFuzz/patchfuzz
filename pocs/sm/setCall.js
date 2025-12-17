function f() {
  var x = 11;

  function g() {
    var y = 12;

    function h() {
      for (var i = 0; i < 5; ++i) {
	y = 4;
	x = i * 2;
      }
    }
    h();

    print(y, 4);
  }
  g();

  print(x, 8);
} 

f();

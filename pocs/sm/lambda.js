function f() {
  var k = 0;
  
  var g = function() {
    return ++k;
  }

  return g;
}

function h() {
  for (var i = 0; i < 10; ++i) {
    var vf = f();
    print(vf(), 1);
    print(vf(), 2);
    for (var j = 0; j < 10; ++j) {
      print(vf(), j + 3);
    }
  }
}

h();

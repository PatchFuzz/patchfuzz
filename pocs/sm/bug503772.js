function f(a) {
  
  var z = arguments;
  
  if (false) {
    var p = function() { ++a; }
  }
}

function g() {
  for (var i = 0; i < 5; ++i) {
    f(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
  }
}

g();

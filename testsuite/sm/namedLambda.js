

var f = function ff() {
  var k = 0;
  var counter = function q() {
      return ++k;
  }
  return counter;
}

function g() {
  for (var i = 0; i < 10; ++i) {
    f();
  }
}

g();

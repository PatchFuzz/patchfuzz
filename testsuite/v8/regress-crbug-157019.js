




























function makeConstructor() {
  return function() {
    this.a = 1;
    this.b = 2;
  };
}

var c1 = makeConstructor();
var o1 = new c1();

c1.prototype = {};

for (var i = 0; i < 10; i++) {
  var o = new c1();
  for (var j = 0; j < 8; j++) {
    o["x" + j] = 0;
  }
}

var c2 = makeConstructor();
var o2 = new c2();

for (var i = 0; i < 50000; i++) {
  new c2();
}

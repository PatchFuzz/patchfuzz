































String.prototype.valueOf = function() { return 'y' };

function test() {
  var o = Object('x');
  assertEquals('y', o + '');
  assertEquals('y', '' + o);
}

for (var i = 0; i < 10; i++) {
  var o = Object('x');
  assertEquals('y', o + '');
  assertEquals('y', '' + o);
}

for (var i = 0; i < 10; i++) {
  test()
}

































function test() {
  var o = Object('x');
  o.valueOf = function() { return 'y' };
  assertEquals('y', o + '');
  assertEquals('y', '' + o);
}

for (var i = 0; i < 10; i++) {
  var o = Object('x');
  o.valueOf = function() { return 'y' };
  assertEquals('y', o + '');
  assertEquals('y', '' + o);
}

for (var i = 0; i < 10; i++) {
  test()
}

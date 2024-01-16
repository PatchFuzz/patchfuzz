



function f_1() {
  var v = new Array();
  v[0] = 10;
  return v;
}

function test() {
  var setter_called = false;
  
  Array.prototype[123456789] = 42;
  assertEquals(f_1().length, 1);

  
  Array.prototype.length = 0;

  
  Array.prototype.__defineSetter__("0", function() {setter_called = true});
  f_1();
  assertEquals(setter_called, true);
}
test();

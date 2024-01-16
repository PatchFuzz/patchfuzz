function t() {
  var x = 0x123456789abcd;
  x = x + x; 
  x = x + x; 
  x = x + x; 
  x = x + x; 
  x = x + x; 
  assertEq(x+1 | 0, -248153696)
}
t()

function t2() {
  var x = -0x123456789abcd;
  x = x + x;
  x = x + x;
  x = x + x;
  x = x + x;
  x = x + x;
  assertEq(x + 7 | 0, 248153704)
}
t2()

function t() {
  var x = 4294967296+1;
  assertEq(x|0, 1);
}

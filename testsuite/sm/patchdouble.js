
function foo(x) {
  var y = x & 0xffff;
  y = (y * (x * 1000));
  assertEq(y, 140735340806145000);
}
foo(0x7fffffff);

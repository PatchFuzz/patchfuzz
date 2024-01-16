


























function test1(x) {
  var a = arguments.callee;
  x = 1;
  x = 2;
  assertEquals(2, x);
}
test1(0)

function test2(x) {
  var a = arguments.callee;
  x++;
  x++;
  assertEquals(2, x);
}
test2(0)

function test3(x) {
  var a = arguments.callee;
  x += 1;
  x += 1;
  assertEquals(2, x);
}
test3(0)

function test4(x) {
  var arguments = { 0 : 3, 'x' : 4 };
  x += 1;
  x += 1;
  assertEquals(2, x);
  assertEquals(3, arguments[0])
  assertEquals(4, arguments['x'])
}
test4(0)

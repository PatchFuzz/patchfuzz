




























function f() {
  var test = {x:1};
  var a = test;
  a.x = a = 42;
  return test.x;
}

assertEquals(42, f());






























function test() {
  var o = [1];
  var a = o[o ^= 1];
  return a;
};

assertEquals(1, test());

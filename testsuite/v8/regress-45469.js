




























var re = /x/g;

for (var i = 0; i < 15; i++) {
  assertEquals(i % 3, re.lastIndex, "preindex" + i);
  var res = re.exec("xx");
  assertEquals(i % 3 == 2 ? null : ["x"], res, "res" + i);
}

re = /x/g;

for (var i = 0; i < 15; i++) {
  assertEquals(i % 3, re.lastIndex, "testpreindex" + i);
  var res = re.test("xx");
  assertEquals(i % 3 != 2, res, "testres" + i);
}

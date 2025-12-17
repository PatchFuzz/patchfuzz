var re = /x/g;

for (var i = 0; i < 15; i++) {
  print(i % 3, re.lastIndex, "preindex" + i);
  var res = re.exec("xx");
  print(i % 3 == 2 ? null : ["x"], res, "res" + i);
}

re = /x/g;

for (var i = 0; i < 15; i++) {
  print(i % 3, re.lastIndex, "testpreindex" + i);
  var res = re.test("xx");
  print(i % 3 != 2, res, "testres" + i);
}

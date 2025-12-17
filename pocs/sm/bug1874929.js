function test() {
  var r = 0;
  for (let i = 100; i >= 0; --i) {
    for (let j = 0; j < 15; ++j) {
      r += ("aaaaaaaaaa").padStart(i, "bbb").length;
    }
  }
  print(r, 76575);
}
test();

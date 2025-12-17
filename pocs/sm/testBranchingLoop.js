function testBranchingLoop() {
  var x = 0;
  for (var i=0; i < 100; ++i) {
    if (i == 51) {
      x += 10;
    }
    x++;
  }
  return x;
}
print(testBranchingLoop(), 110);

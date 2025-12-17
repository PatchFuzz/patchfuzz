function test0() {
  var IntArr0 = [];
  v5 = IntArr0.length;
  for (var i = 10; i < v5; i++) {
    IntArr0[i] = 0.5;
  }
  return i;
}
test0();
if (test0() !== 10) {
  print("FAILED");
} else {
  print("PASSED");
}

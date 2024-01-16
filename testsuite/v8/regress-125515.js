




























function test(a) {
  a[0] = 1.5;
  assertEquals(0, a.length = 0);
}
a = new Array();
test(a);
test(a);

gc();
gc();
test(a);
test(a);

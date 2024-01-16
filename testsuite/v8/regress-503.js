


























assertTrue(undefined == undefined, 1);
assertFalse(undefined <= undefined, 2);
assertFalse(undefined >= undefined, 3);
assertFalse(undefined < undefined, 4);
assertFalse(undefined > undefined, 5);

assertTrue(null == null, 6);
assertTrue(null <= null, 7);
assertTrue(null >= null, 8);
assertFalse(null < null, 9);
assertFalse(null > null, 10);

assertTrue(void 0 == void 0, 11);
assertFalse(void 0 <= void 0, 12);
assertFalse(void 0 >= void 0, 13);
assertFalse(void 0 < void 0, 14);
assertFalse(void 0 > void 0, 15);

var x = void 0;

assertTrue(x == x, 16);
assertFalse(x <= x, 17);
assertFalse(x >= x, 18);
assertFalse(x < x, 19);
assertFalse(x > x, 20);

var not_undefined = [null, 0, 1, 1/0, -1/0, "", true, false];
for (var i = 0; i < not_undefined.length; i++) {
  x = not_undefined[i];

  assertTrue(x == x, "" + 21 + x);
  assertTrue(x <= x, "" + 22 + x);
  assertTrue(x >= x, "" + 23 + x);
  assertFalse(x < x, "" + 24 + x);
  assertFalse(x > x, "" + 25 + x);
}







a = [1];
b = [];
a.__defineGetter__(0, function () {
  b.length = 0xffffffff;
});
c = a.concat(b);
for (var i = 0; i < 20; i++) {
  assertEquals(undefined, (c[i]));
}

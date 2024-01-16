

var s = new Set();
for (var i = 0; i < 10; i++) {
    assertEq(s.size, i);
    s.add(i);
}
for (var i = 0; i < 10; i++) {
    assertEq(s.size, 10);
    s.add(i);
}

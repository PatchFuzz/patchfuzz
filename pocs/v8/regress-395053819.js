let o = {}
for (var i = 0; i < 10000; i++) {
  o[8589933568 + i] = i;
}
for (var i = 0; i < 10000; i++) {
  print(o[8589933568 + i], i);
}

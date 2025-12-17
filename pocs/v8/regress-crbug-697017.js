for (var i = 0; i < 100; i++) {
  print(i);
  (Int32Array)["abc" + i] = i;
}

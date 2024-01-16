





























function num_ops() {
  var x;
  var tmp = 0;
  x = (tmp = 1578221999, tmp)+(tmp = 572285336, tmp);
  assertEquals(2150507335, x, "++");
  x = 1578221999 + 572285336;
  assertEquals(2150507335, x);

  x = (tmp = -1500000000, tmp)+(tmp = -2000000000, tmp);
  assertEquals(-3500000000, x, "+-");
  x = -1500000000 + -2000000000;
  assertEquals(-3500000000, x);

  x = (tmp = 1578221999, tmp)-(tmp = -572285336, tmp);
  assertEquals(2150507335, x, "--");
  x = 1578221999 - -572285336;
  assertEquals(2150507335, x);

  x = (tmp = -1500000000, tmp)-(tmp = 2000000000, tmp);
  assertEquals(-3500000000, x, "-+");
  x = -1500000000 - 2000000000;
  assertEquals(-3500000000, x);
}

num_ops();

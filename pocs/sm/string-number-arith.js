function test(half, minusOneHalf) {
  print(10 - half, 9.5);
  print(10 - minusOneHalf, 11.5);
  print(half - 0, 0.5);
  print(minusOneHalf - 1, -2.5);

  print(10 * half, 5);
  print(half * 10, 5);
  print(10 * minusOneHalf, -15);
  print(minusOneHalf * 10, -15);

  print(10 / half, 20);
  print(half / 1, 0.5);
  print(12 / minusOneHalf, -8);
  print(minusOneHalf / 1, -1.5);

  print(10 % half, 0);
  print(half % 1, 0.5);
  print(12 % minusOneHalf, 0);
  print(minusOneHalf % 1, -0.5);

  print(10 ** half, Math.sqrt(10));
  print(half ** 4, 0.0625);
  print(16 ** minusOneHalf, 0.015625);
  print(minusOneHalf ** 4, 5.0625);
}

for (var i = 0; i < 10; i++) {
  test(0.5, -1.5);
  test("0.5", "-1.5");
  test("5e-1", "-15e-1");
}

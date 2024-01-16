































function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

for (var i = 0; i < 10; i++) {
  assertEquals(0, add(0, 0));
  assertEquals(0, add(0, -0));
  assertEquals(0, add(-0, 0));
  assertEquals(-0, add(-0, -0));

  assertEquals(0, sub(0, 0));
  assertEquals(0, sub(0, -0));
  assertEquals(-0, sub(-0, 0));
  assertEquals(0, sub(-0, -0));

  assertEquals(0, mul(0, 0));
  assertEquals(-0, mul(0, -0));
  assertEquals(-0, mul(-0, 0));
  assertEquals(0, mul(-0, -0));

  assertEquals(0, div(0, 1));
  assertEquals(-0, div(0, -1));
  assertEquals(-0, div(-0, 1));
  assertEquals(0, div(-0, -1));
}

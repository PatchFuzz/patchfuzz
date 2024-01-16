





























function f(s) {
  arguments.length;
  return (s += 10) < 0;
}

assertTrue(f(-100));
assertTrue(f(-20));
assertFalse(f(-10));
assertFalse(f(-5));
assertFalse(f(0));
assertFalse(f(10));



































function test() {
  try {
    test(1, test(1));
  } catch(e) {
    assertFalse(delete e, "deleting catch variable");
    assertEquals(42, e);
  }
}

var exception = false;
try {
  test();
} catch (e) {
  exception = true;
}
assertTrue(exception);































function test() {
  try {
    throw 42;
  } catch(e) {
    assertFalse(delete e, "deleting catch variable");
    assertEquals(42, e);
  }
}

test();

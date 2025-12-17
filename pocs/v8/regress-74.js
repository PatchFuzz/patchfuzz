function test() {
  try {
    throw 42;
  } catch(e) {
    print(delete e, "deleting catch variable");
    print(42, e);
  }
}

test();

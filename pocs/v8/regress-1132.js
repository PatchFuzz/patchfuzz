function test() {
  try {
    test(1, test(1));
  } catch(e) {
    print(delete e, "deleting catch variable");
    print(42, e);
  }
}

var exception = false;
try {
  test();
} catch (e) {
  exception = true;
}
print(exception);

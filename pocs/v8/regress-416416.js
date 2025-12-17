function foo() {
  try {
    String.prototype.length.x();
  } catch (e) {
  }
}

foo();
foo();
foo();

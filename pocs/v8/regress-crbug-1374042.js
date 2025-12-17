function foo() {
  try {
    foo();
  } catch(e) {
    /\0/.test();
  }
}
foo();

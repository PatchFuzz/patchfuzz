try {
  eval("7E9.");
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

assert(7E9.toString() === "7000000000");

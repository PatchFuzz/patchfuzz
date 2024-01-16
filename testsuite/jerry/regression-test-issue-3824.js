













try {
  eval(`var a = {"foo
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
















try {
  eval(`function write([a] of { }
    (function Test1() {
        write("");
    });`);
  assert(false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

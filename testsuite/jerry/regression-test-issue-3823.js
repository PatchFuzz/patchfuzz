













try {
  eval(`function f ({"aba,a"}){}`);
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}


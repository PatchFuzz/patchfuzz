













try {
  eval(`[]=$--['']`);
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}


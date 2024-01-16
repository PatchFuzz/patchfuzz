













try {
  eval(`typeof (a) = 1 === 'undefined';`);
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}


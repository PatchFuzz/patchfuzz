













try {
  eval('[this,000000000,this,99999999=9999999]');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

try {
  eval('[this,999+=8]');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}















try {
  eval('/(?<=^abc)def/');
} catch(e) {
  assert(e instanceof SyntaxError);
}

try {
  eval('/(?a)/;')
} catch(e) {
  assert(e instanceof SyntaxError);
}

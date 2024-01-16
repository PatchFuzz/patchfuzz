













try {
  eval ("new Strin = class extends f ()() { constructor () { var C = class extends$B {}");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

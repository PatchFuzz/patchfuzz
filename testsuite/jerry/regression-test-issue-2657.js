













try {
  eval ("var Mixin1 = (superclass) => class extends super.lass {};");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

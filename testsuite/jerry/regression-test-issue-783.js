













try {
  RegExp.prototype.compile(RegExp.prototype);
  assert(false);
} catch (e) {
  assert (e instanceof TypeError);
}

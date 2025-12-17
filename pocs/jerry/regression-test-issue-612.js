try {
  RegExp.prototype.compile([]);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

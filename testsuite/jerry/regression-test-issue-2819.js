













try {
  for (this << class extends this {} in this) { }
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}















try {
  [$, this.$] = [ ];
} catch (e) {
  assert (e instanceof TypeError);
}

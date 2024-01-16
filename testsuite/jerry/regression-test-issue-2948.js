













try {
  new (new Object()).constructor().constructor('abcdefghi').repeat(-4956799914495204378)
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}

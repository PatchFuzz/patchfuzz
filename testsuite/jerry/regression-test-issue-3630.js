













try {
  {
    class eval {}
    eval()
  }
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

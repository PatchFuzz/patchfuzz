try {
  eval("if (true) {}\n/a/;");
} catch (e) {
  assert (false);
}

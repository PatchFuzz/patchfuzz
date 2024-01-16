













try {
  new RegExp("\{{91[06,456}");
  assert (false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

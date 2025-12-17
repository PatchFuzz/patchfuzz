var src = "0?0:0+++++0";

try {
  eval (src);
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

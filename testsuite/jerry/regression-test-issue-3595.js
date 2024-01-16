
















var src = "({ $($) { a(...args) }";

try {
  eval (src);
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

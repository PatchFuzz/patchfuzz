













var src = "function $() { return $ ? $ : $ * $++() } switch ($) {}";

try {
  eval (src);
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}















var src = "function $() { return $ ? $ : $ * $++() } switch ($) {}";

try {
  eval (src);
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

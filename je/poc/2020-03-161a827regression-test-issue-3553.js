













var src = "0?0:0+++++0";

try {
  eval (src);
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

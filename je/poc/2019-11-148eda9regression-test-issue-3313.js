













try {
  eval("var" + "\u2029" + 'g\\u0065t: break get' );
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

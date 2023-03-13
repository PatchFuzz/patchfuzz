













try {
  new RegExp("\{{91[06,456}");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

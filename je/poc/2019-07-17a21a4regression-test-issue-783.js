













try {
  RegExp.prototype.compile(RegExp.prototype);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

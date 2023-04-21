













function a() {}

try {
  eval('(a()) = a');
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

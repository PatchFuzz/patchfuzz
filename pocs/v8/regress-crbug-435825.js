Error.prepareStackTrace = function (a,b) { return b; };

try {
  eval("/(invalid regexp/;");
  print();
} catch (e) {
  print("[object global]", e.stack[0].getThis().toString());
}

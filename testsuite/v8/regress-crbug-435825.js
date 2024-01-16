



Error.prepareStackTrace = function (a,b) { return b; };

try {
  eval("/(invalid regexp/;");
  assertUnreachable();
} catch (e) {
  assertEquals("[object global]", e.stack[0].getThis().toString());
}

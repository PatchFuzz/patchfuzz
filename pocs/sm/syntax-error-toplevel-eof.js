var caught = false;
try {
  Reflect.parse("}");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("unexpected garbage after script, starting with '}'") == -1, false);
  caught = true;
}
print(caught, true);

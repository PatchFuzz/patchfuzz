var caught = false;
try {
  new Function("switch (x) {} }");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("unexpected garbage after function body, starting with '}'") == -1, false);
  caught = true;
}
print(caught, true);

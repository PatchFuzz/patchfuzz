var caught = false;
try {
  new Function("throw;");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("throw statement is missing an expression") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("throw\n1;");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("no line break is allowed between 'throw' and its expression") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("throw}");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("throw statement is missing an expression") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("throw");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("throw statement is missing an expression") == -1, false);
  caught = true;
}
print(caught, true);

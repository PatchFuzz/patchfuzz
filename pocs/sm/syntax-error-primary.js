var caught = false;
try {
  new Function(")");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected expression, got ')'") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("...;");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected rest argument name, got ';'") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("...a;");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected closing parenthesis, got ';'") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("...a);");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected '=>' after argument list, got ';'") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("...a) @");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected '=>' after argument list, got '@'") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("(if)");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected expression, got keyword 'if'") == -1, false);
  caught = true;
}
print(caught, true);

caught = false;
try {
  new Function("(");
} catch (e) {
  print(e instanceof SyntaxError, true);
  print(e.message.startsWith("expected expression, got end of script") == -1, false);
  caught = true;
}
print(caught, true);

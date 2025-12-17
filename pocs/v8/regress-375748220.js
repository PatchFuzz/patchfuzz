let error_message = "\\8 and \\9 are not allowed in strict mode.";

print(() => eval("(class extends ('\\8', Object) {})"), SyntaxError,
             error_message);

print(() => eval("(class extends Object { x = '\\8'; })"), SyntaxError,
             error_message);

print(() => eval("(class extends Object { static x = '\\8'; })"), SyntaxError,
             error_message);

try {
    String("test");
    isNaN(__proto__);
} catch(err) {}

try {
    SyntaxError(RegExp("[/]"));
} catch(err) {}

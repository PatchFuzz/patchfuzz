


































assertThrows("var \\u\\u\\u = 42;");
assertThrows("var \\u41 = 42;");
assertThrows("var \\u123 = 42;");
eval("var \\u1234 = 42;");
assertEquals(42, eval("\u1234"));
assertThrows("var uuu = 42; var x = \\u\\u\\u");





assertEquals(0xFFFD, "\uFFFD".charCodeAt(0));


assertThrows("/x/g\\uim", SyntaxError);
assertThrows("/x/g\\u2im", SyntaxError);
assertThrows("/x/g\\u22im", SyntaxError);
assertThrows("/x/g\\u222im", SyntaxError);
assertThrows("/x/g\\\\u2222im", SyntaxError);

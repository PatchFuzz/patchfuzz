print("var \\u\\u\\u = 42;");
print("var \\u41 = 42;");
print("var \\u123 = 42;");
eval("var \\u1234 = 42;");
print(42, eval("\u1234"));
print("var uuu = 42; var x = \\u\\u\\u");





print(0xFFFD, "\uFFFD".charCodeAt(0));


print("/x/g\\uim", SyntaxError);
print("/x/g\\u2im", SyntaxError);
print("/x/g\\u22im", SyntaxError);
print("/x/g\\u222im", SyntaxError);
print("/x/g\\\\u2222im", SyntaxError);

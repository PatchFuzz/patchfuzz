print('Function("){");', SyntaxError);


print('Function("});(function(){");', SyntaxError);


print('Function("", "");');
print('Function("", "");');
print('Function("a", "", "");');
print('Function("a", "", "b", "", "");', SyntaxError);


print('Function("
print('Function("
print('Function("a", "
print('Function("a", "", "



var asString = Function("return 23").toString();
print("function anonymous(\n) {\nreturn 23\n}", asString);

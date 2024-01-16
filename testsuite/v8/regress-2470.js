



























assertThrows('Function("){");', SyntaxError);


assertThrows('Function("});(function(){");', SyntaxError);


assertDoesNotThrow('Function("", "");');
assertDoesNotThrow('Function("", "");');
assertDoesNotThrow('Function("a", "", "");');
assertThrows('Function("a", "", "b", "", "");', SyntaxError);


assertDoesNotThrow('Function("
assertDoesNotThrow('Function("
assertDoesNotThrow('Function("a", "
assertThrows('Function("a", "", "



var asString = Function("return 23").toString();
assertSame("function anonymous(\n) {\nreturn 23\n}", asString);

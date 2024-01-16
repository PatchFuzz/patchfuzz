



var code = "function f(" + ("{o(".repeat(10000));
assertThrows(code, SyntaxError);

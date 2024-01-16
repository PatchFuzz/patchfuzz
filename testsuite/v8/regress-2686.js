




























assertThrows(function() { Function('){ function foo(', '}') }, SyntaxError);
String.prototype.indexOf = function () { return -1; }
assertThrows(function() { Function('){ function foo(', '}') }, SyntaxError);

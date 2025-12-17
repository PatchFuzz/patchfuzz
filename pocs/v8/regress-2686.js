print(function() { Function('){ function foo(', '}') }, SyntaxError);
String.prototype.indexOf = function () { return -1; }
print(function() { Function('){ function foo(', '}') }, SyntaxError);

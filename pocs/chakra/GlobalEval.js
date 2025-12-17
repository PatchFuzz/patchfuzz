"use strict";

function testFromInsideFunction() {
    var a = 2;
    var b = 0;
    var c = eval("eval('var b = 3; a + b;');");
    print(a, b, c);
}
testFromInsideFunction();

var a = 2;
var b = 0;
var c = eval("eval('var b = 3; a + b;');");
print(a, b, c);

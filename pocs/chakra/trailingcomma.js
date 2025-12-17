print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Trailing comma in function",
        body: function () {
            print(function () { eval("function foo(a,) {}"); }, "Trailing comma in function declaration is a valid syntax");
            print(function () { eval("function foo(a,) {'use strict'; }"); }, "Trailing comma in function declaration under strict mode is a valid syntax");
            print(function () { eval("function foo(a, ,) {}"); }, SyntaxError, "More than one trailing comma is not valid syntax", "Expected identifier");
            print(function () { eval("function foo(...a,) {}"); }, SyntaxError, "Trailing comma after rest is not valid syntax", "The rest parameter must be the last parameter in a formals list.");
            print(function () { eval("function foo(...[a],) {}"); }, SyntaxError, "Trailing comma after rest pattern is not valid syntax", "The rest parameter must be the last parameter in a formals list.");
            print(function () { eval("function foo(,) {}"); }, SyntaxError, "Trailing comma after missing name is not valid syntax", "Expected identifier");
            function f1(a,b,) {}
            print(f1.length, 2, "Function's length is not affected by a trailing comma");
        }
    },
    {
        name: "Trailing comma in call expression",
        body: function () {
            print(function () { eval("function foo() {}; foo(1, 2,);"); }, "Trailing comma in a user function call is a valid syntax");
            print(function () { eval("Math.min(1, 2, );"); }, "Trailing comma in built-in function call is a valid syntax");
        }
    },
    {
        name: "Trailing comma in arrow function",
        body: function () {
            print(function () { eval("(a,) => {}"); }, "Trailing comma in an arrow function is a valid syntax");
            print(function () { eval("let f = (a,) => {}"); }, "Trailing comma in an arrow function is a valid syntax");
            print(function () { eval("(b = (a,) => {}) => {}"); }, "Trailing comma in an nested arrow function is a valid syntax");
            print(function () { eval("({b = (a,) => {}}) => {}"); }, "Trailing comma in an nested arrow function in destructuring is a valid syntax");
            print(function () { eval("(b = (a,)) => {}"); }, SyntaxError, "Trailing comma in a comma expression is not valid syntax");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

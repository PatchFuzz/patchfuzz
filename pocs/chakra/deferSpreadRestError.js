print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  { 
    name: "Deferred spread/rest errors in lambda formals",
    body: function () {
      print(function () { (a, b = [...[1,2,3]], ...rest) => {}; },     "Correct spread and rest usage");
      print(function () { (a, b = ([...[1,2,3]]), ...rest) => {}; },   "Correct spread and rest usage with added parens");
      print(function () { (a, b = (([...[1,2,3]])), ...rest) => {}; }, "Correct spread and rest usage with added parens");
      print(function () { eval("(a = ...NaN, b = [...[1,2,3]], ...rest) => {};"); },
                    SyntaxError,
                    "Invalid spread with valid rest throws on the first invalid spread",
                    "Unexpected ... operator");
      print(function () { eval("(a = (...NaN), ...b = [...[1,2,3]], ...rest) => {};"); },
                    SyntaxError,
                    "Invalid spread in parens with invalid and valid rest throws on the first invalid spread",
                    "Invalid use of the ... operator. Spread can only be used in call arguments or an array literal.");
      print(function () { eval("(a = (...NaN), ...b = [...[1,2,3]], rest) => {};"); },
                    SyntaxError,
                    "Invalid spread in parens with invalid rest throws on the first invalid spread",
                    "Invalid use of the ... operator. Spread can only be used in call arguments or an array literal.");
      print(function () { eval("(a = [...NaN], ...b = [...[1,2,3]], rest) => {};"); },
                    SyntaxError,
                    "Invalid spread (runtime error) with invalid rest throws on the first invalid rest",
                    "Unexpected ... operator");
      print(function () { eval("(a, ...b, ...rest) => {};"); },
                    SyntaxError,
                    "Invalid rest with valid rest throws on the first invalid rest",
                    "Unexpected ... operator");
      print(function () { eval("(...rest = ...NaN) => {};"); },
                    SyntaxError,
                    "Invalid rest with invalid spread initializer throws on the invalid rest",
                    "The rest parameter cannot have a default initializer.");
    }
  },
    {
        name: "Nested parenthesized expressions",
        body: function () {
            print(function () { eval("(function f() { if (...mznxbp) { (mmqykj) => undefined; } });"); }, 
                          SyntaxError, 
                          "Parenthesized expression outside a function does not contribute to nested count",
                          "Invalid use of the ... operator. Spread can only be used in call arguments or an array literal.");
            print(function () { eval("(a, (...b, ...a))"); }, 
                          SyntaxError, 
                          "Nested parenthesized expression throws rest error before deferred spread error",
                          "Unexpected ... operator");
            print(function () { eval("((...a)) => 1"); }, 
                          SyntaxError, 
                          "Nested parenthesized expression as lambda formals throws deferred spread error",
                          "Invalid use of the ... operator. Spread can only be used in call arguments or an array literal.");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
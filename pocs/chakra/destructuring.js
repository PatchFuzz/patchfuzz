print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Basic parsing and early errors",
    body: function () {
      
      print(function () { eval("var [];"); },    SyntaxError, "Destructured var array declaration must have at least one identifier reference",   "Destructuring declarations must have an initializer");
      print(function () { eval("let [];"); },    SyntaxError, "Destructured let array declaration must have at least one identifier reference",   "Destructuring declarations must have an initializer");
      print(function () { eval("const [];"); },  SyntaxError, "Destructured const array declaration must have at least one identifier reference", "Destructuring declarations must have an initializer");
      print(function () { eval("var [a];"); },   SyntaxError, "Destructured var array declaration must have an initializer",                      "Destructuring declarations must have an initializer");
      print(function () { eval("let [a];"); },   SyntaxError, "Destructured let array declaration must have an initializer",                      "Destructuring declarations must have an initializer");
      print(function () { eval("const [a];"); }, SyntaxError, "Destructured const array declaration must have an initializer",                    "Destructuring declarations must have an initializer");

      
      print(function () { eval("var [] = [];"); },   "Destructured var array declaration with no identifiers does not throw");
      print(function () { eval("let [] = [];"); },   "Destructured let array declaration with no identifiers does not throw");
      print(function () { eval("const [] = [];"); }, "Destructured const array declaration with no identifiers does not throw");
      print(function () { eval("[] = [];"); },       "Destructured array assignment with no identifiers does not throw");

      
      print(function () { eval("var [a] = [];"); },    "Destructured var array declaration with an empty initializer array does not throw");
      print(function () { eval("let [a] = [];"); },    "Destructured let array declaration with an empty initializer array does not throw");
      print(function () { eval("const [a] = [];"); },  "Destructured const array declaration with an empty initializer array does not throw");
      print(function () { eval("var a; [a] = [];"); }, "Destructured var array assignment with an empty initializer array does not throw");
      print(function () { eval("let a; [a] = [];"); }, "Destructured let array assignment with an empty initializer array does not throw");

      print(function () { eval("var [a] = [1];"); },    "Destructured var array declaration with matching initializer array size does not throw");
      print(function () { eval("let [a] = [2];"); },    "Destructured let array declaration with matching initializer array size does not throw");
      print(function () { eval("const [a] = [1];"); },  "Destructured const array declaration with matching initializer array size does not throw");
      print(function () { eval("var a; [a] = [1];"); }, "Destructured var array assignment with matching initializer array size does not throw");
      print(function () { eval("let a; [a] = [2];"); }, "Destructured let array assignment with matching initializer array size does not throw");

      print(function () { eval("var [a, b] = [1];"); },       "Destructured var array declaration with smaller initializer array size does not throw");
      print(function () { eval("let [a, b] = [1];"); },       "Destructured let array declaration with smaller initializer array size does not throw");
      print(function () { eval("const [a, b] = [1];"); },     "Destructured const array declaration with smaller initializer array size does not throw");
      print(function () { eval("var a, b; [a, b] = [1];"); }, "Destructured var array assignment with smaller initializer array size does not throw");
      print(function () { eval("let a, b; [a, b] = [1];"); }, "Destructured let array assignment with smaller initializer array size does not throw");

      print(function () { eval("var [a] = [1, 2];"); },       "Destructured var array declaration with larger initializer array size does not throw");
      print(function () { eval("let [a] = [1, 2];"); },       "Destructured let array declaration with larger initializer array size does not throw");
      print(function () { eval("const [a] = [1, 2];"); },     "Destructured const array declaration with larger initializer array size does not throw");
      print(function () { eval("var a; [a] = [1, 2];"); },    "Destructured var array assignment with larger initializer array size does not throw");
      print(function () { eval("let a; [a] = [1, 2];"); },    "Destructured let array assignment with larger initializer array size does not throw");

      
      print(function () { eval("var [a--] = [];"); },        SyntaxError, "Destructured var array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      print(function () { eval("let [a--] = [];"); },        SyntaxError, "Destructured let array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      print(function () { eval("const [a--] = [];"); },      SyntaxError, "Destructured const array declaration with an operator throws", "Unexpected operator in destructuring expression");
      print(function () { eval("var [a + 1] = [];"); },      SyntaxError, "Destructured var array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      print(function () { eval("let [a + 1] = [];"); },      SyntaxError, "Destructured let array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      print(function () { eval("const [a + 1] = [];"); },    SyntaxError, "Destructured const array declaration with an operator throws", "Unexpected operator in destructuring expression");
      print(function () { eval("var [++a] = [];"); },        SyntaxError, "Destructured var array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      print(function () { eval("let [++a] = [];"); },        SyntaxError, "Destructured let array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      print(function () { eval("const [++a] = [];"); },      SyntaxError, "Destructured const array declaration with an operator throws", "Unexpected operator in destructuring expression");
      print(function () { eval("var a; [a--] = [];"); },     SyntaxError, "Destructured var array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      print(function () { eval("let a; [a--] = [];"); },     SyntaxError, "Destructured let array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      print(function () { eval("var a; [a + 1] = [];"); },   SyntaxError, "Destructured var array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      print(function () { eval("let a; [a + 1] = [];"); },   SyntaxError, "Destructured let array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      print(function () { eval("var a; [++a] = [];"); },     SyntaxError, "Destructured var array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      print(function () { eval("let a; [++a] = [];"); },     SyntaxError, "Destructured let array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      print(function () { eval("var a = [1], i = 0; [a[i++]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");
      print(function () { eval("let a = [1], i = 0; [a[i++]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");
      print(function () { eval("var a = [1], i = 0; [a[(() => 1 + i)()]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");
      print(function () { eval("let a = [1], i = 0; [a[(() => 1 + i)()]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");

      
      print(function () { eval("var [,] = [];"); },   "Destructured var array declaration with no identifiers and missing values does not throw");
      print(function () { eval("let [,] = [];"); },   "Destructured let array declaration with no identifiers and missing values does not throw");
      print(function () { eval("const [,] = [];"); }, "Destructured const array declaration with no identifiers and missing values does not throw");
      print(function () { eval("[,] = [];"); },       "Destructured array assignment with no identifiers and missing values does not throw");

      print(function () { eval("var [a,] = [];"); },    "Destructured var array declaration ending with a missing value does not throw");
      print(function () { eval("let [a,] = [];"); },    "Destructured let array declaration ending with a missing value does not throw");
      print(function () { eval("const [a,] = [];"); },  "Destructured const array declaration ending with a missing value does not throw");
      print(function () { eval("var a; [a,] = [];"); }, "Destructured var array assignment ending with a missing value does not throw");
      print(function () { eval("let a; [a,] = [];"); }, "Destructured let array assignment ending with a missing value does not throw");

      print(function () { eval("var [a,,b] = [];"); },       "Destructured var array declaration with some missing values does not throw");
      print(function () { eval("let [a,,b] = [];"); },       "Destructured let array declaration with some missing values does not throw");
      print(function () { eval("const [a,,b] = [];"); },     "Destructured const array declaration with some missing values does not throw");
      print(function () { eval("var a, b; [a,,b] = [];"); }, "Destructured var array assignment with some missing values does not throw");
      print(function () { eval("let a, b; [a,,b] = [];"); }, "Destructured let array assignment with some missing values does not throw");

      print(function () { eval("var [,,a] = [];"); },    "Destructured var array declaration beginning with missing values does not throw");
      print(function () { eval("let [,,a] = [];"); },    "Destructured let array declaration beginning with missing values does not throw");
      print(function () { eval("const [,,a] = [];"); },  "Destructured const array declaration beginning with missing values does not throw");
      print(function () { eval("var a; [,,a] = [];"); }, "Destructured var array assignment beginning with missing values does not throw");
      print(function () { eval("let a; [,,a] = [];"); }, "Destructured let array assignment beginning with missing values does not throw");

      print(function () { eval("var [a] = [,,];"); },    "Destructured var array declaration with an initializer containing missing values does not throw");
      print(function () { eval("let [a] = [,,];"); },    "Destructured let array declaration with an initializer containing missing values does not throw");
      print(function () { eval("const [a] = [,,];"); },  "Destructured const array declaration with an initializer containing missing values does not throw");
      print(function () { eval("var a; [a] = [,,];"); }, "Destructured var array assignment with an initializer containing missing values does not throw");
      print(function () { eval("let a; [a] = [,,];"); }, "Destructured let array assignment with an initializer containing missing values does not throw");

      
      print(function () { eval("var [1] = [];"); },         SyntaxError, "Destructured var array declaration with no identifier references throws",                  "Destructuring expressions can only have identifier references");
      print(function () { eval("let [1] = [];"); },         SyntaxError, "Destructured let array declaration with no identifier references throws",                  "Destructuring expressions can only have identifier references");
      print(function () { eval("const [1] = [];"); },       SyntaxError, "Destructured const array declaration with no identifier references throws",                "Destructuring expressions can only have identifier references");
      print(function () { eval("[1] = [];"); },             SyntaxError, "Destructured array assignment with no identifier references throws",                       "Destructuring expressions can only have identifier references");
      print(function () { eval("var [1, a] = [];"); },      SyntaxError, "Destructured var array declaration with valid and invalid identifier references throws",   "Destructuring expressions can only have identifier references");
      print(function () { eval("let [1, a] = [];"); },      SyntaxError, "Destructured let array declaration with valid and invalid identifier references throws",   "Destructuring expressions can only have identifier references");
      print(function () { eval("const [1, a] = [];"); },    SyntaxError, "Destructured const array declaration with valid and invalid identifier references throws", "Destructuring expressions can only have identifier references");
      print(function () { eval("var a; [1, a] = [];"); },   SyntaxError, "Destructured var array assignment with valid and invalid identifier references throws",    "Destructuring expressions can only have identifier references");
      print(function () { eval("let a; [1, a] = [];"); },   SyntaxError, "Destructured let array assignment with valid and invalid identifier references throws",    "Destructuring expressions can only have identifier references");

      
      print(function () { eval("var [...a] = [];"); },    "Destructured var array declaration with a single rest parameter does not throw");
      print(function () { eval("let [...a] = [];"); },    "Destructured let array declaration with a single rest parameter does not throw");
      print(function () { eval("const [...a] = [];"); },  "Destructured const array declaration with a single rest parameter does not throw");
      print(function () { eval("var a; [...a] = [];"); }, "Destructured var array assignment with a single rest parameter does not throw");
      print(function () { eval("let a; [...a] = [];"); }, "Destructured let array assignment with a single rest parameter does not throw");

      print(function () { eval("var [...a, ...b] = [];"); },         SyntaxError, "Destructured var array declaration with multiple rest parameters throws",   "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("let [...a, ...b] = [];"); },         SyntaxError, "Destructured let array declaration with multiple rest parameters throws",   "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("const [...a, ...b] = [];"); },       SyntaxError, "Destructured const array declaration with multiple rest parameters throws", "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("var a, b; [...a, ...b] = [];"); },   SyntaxError, "Destructured var array assignment with multiple rest parameters throws",    "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("let a, b; [...a, ...b] = [];"); },   SyntaxError, "Destructured let array assignment with multiple rest parameters throws",    "Destructuring rest variables must be in the last position of the expression");

      print(function () { eval("var [...a, b] = [];"); },         SyntaxError, "Destructured var array declaration with rest parameter in non-last position throws",   "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("let [...a, b] = [];"); },         SyntaxError, "Destructured let array declaration with rest parameter in non-last position throws",   "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("const [...a, b] = [];"); },       SyntaxError, "Destructured const array declaration with rest parameter in non-last position throws", "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("var a, b; [...a, b] = [];"); },   SyntaxError, "Destructured var array assignment with rest parameter in non-last position throws",    "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("let a, b; [...a, b] = [];"); },   SyntaxError, "Destructured let array assignment with rest parameter in non-last position throws",    "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("let [...a,] = [];"); },           SyntaxError, "Destructured array declaration has comma after rest parameter throws",                 "Destructuring rest variables must be in the last position of the expression");
      print(function () { eval("let a; [...a,] = [];"); },        SyntaxError, "Destructured array assignment has comma after rest parameter throws",                  "Destructuring rest variables must be in the last position of the expression");

      
      print(function () { eval("var [a = 1] = [];"); },    "Destructured var array declaration with all default values does not throw");
      print(function () { eval("let [a = 1] = [];"); },    "Destructured let array declaration with all default values does not throw");
      print(function () { eval("const [a = 1] = [];"); },  "Destructured const array declaration with all default values does not throw");
      print(function () { eval("var a; [a = 1] = [];"); }, "Destructured var array assignment with all default values does not throw");
      print(function () { eval("let a; [a = 1] = [];"); }, "Destructured let array assignment with all default values does not throw");

      print(function () { eval("var [a, b = 1] = [];"); },       "Destructured var array declaration with trailing default values does not throw");
      print(function () { eval("let [a, b = 1] = [];"); },       "Destructured let array declaration with trailing default values does not throw");
      print(function () { eval("const [a, b = 1] = [];"); },     "Destructured const array declaration with trailing default values does not throw");
      print(function () { eval("var a, b; [a, b = 1] = [];"); }, "Destructured var array assignment with trailing default values does not throw");
      print(function () { eval("let a, b; [a, b = 1] = [];"); }, "Destructured let array assignment with trailing default values does not throw");

      print(function () { eval("var [a = 1, b] = [];"); },       "Destructured var array declaration with mixed default values does not throw");
      print(function () { eval("let [a = 1, b] = [];"); },       "Destructured let array declaration with mixed default values does not throw");
      print(function () { eval("const [a = 1, b] = [];"); },     "Destructured const array declaration with mixed default values does not throw");
      print(function () { eval("var a, b; [a = 1, b] = [];"); }, "Destructured var array assignment with mixed default values does not throw");
      print(function () { eval("let a, b; [a = 1, b] = [];"); }, "Destructured let array assignment with mixed default values does not throw");

      
      print(function () { eval("var [...a = 1] = [];"); },      SyntaxError, "Destructured var array declaration with a rest parameter with a default value throws",   "Unexpected default initializer");
      print(function () { eval("let [...a = 1] = [];"); },      SyntaxError, "Destructured let array declaration with a rest parameter with a default value throws",   "Unexpected default initializer");
      print(function () { eval("const [...a = 1] = [];"); },    SyntaxError, "Destructured const array declaration with a rest parameter with a default value throws", "Unexpected default initializer");
      print(function () { eval("var a; [...a = 1] = [];"); },   SyntaxError, "Destructured var array assignment with a rest parameter with a default value throws",    "The rest parameter cannot have a default initializer.");
      print(function () { eval("let a; [...a = 1] = [];"); },   SyntaxError, "Destructured let array assignment with a rest parameter with a default value throws",    "The rest parameter cannot have a default initializer.");

      
      print(function () { eval("var [[a]] = [[]];"); },    "Destructured var array declaration with nesting does not throw");
      print(function () { eval("let [[a]] = [[]];"); },    "Destructured let array declaration with nesting does not throw");
      print(function () { eval("const [[a]] = [[]];"); },  "Destructured const array declaration with nesting does not throw");
      print(function () { eval("var a; [[a]] = [[]];"); }, "Destructured var array assignment with nesting does not throw");
      print(function () { eval("let a; [[a]] = [[]];"); }, "Destructured let array assignment with nesting does not throw");

      print(function () { eval("var [a, [b]] = [1, []];"); },       "Destructured var array declaration with some nesting does not throw");
      print(function () { eval("let [a, [b]] = [1, []];"); },       "Destructured let array declaration with some nesting does not throw");
      print(function () { eval("const [a, [b]] = [1, []];"); },     "Destructured const array declaration with some nesting does not throw");
      print(function () { eval("var a, b; [a, [b]] = [1, []];"); }, "Destructured var array assignment with some nesting does not throw");
      print(function () { eval("let a, b; [a, [b]] = [1, []];"); }, "Destructured let array assignment with some nesting does not throw");

      print(function () { eval("var [((a)] = [];"); },    SyntaxError, "Destructured var array declaration with a mismatched paren count throws");
      print(function () { eval("let [((a)] = [];"); },    SyntaxError, "Destructured let array declaration with a mismatched paren count throws",   "Destructuring expressions can only have identifier references");
      print(function () { eval("const [((a)] = [];"); },  SyntaxError, "Destructured const array declaration with a mismatched paren count throws", "Destructuring expressions can only have identifier references");
      print(function () { eval("var a; [((a)] = [];"); }, SyntaxError, "Destructured var array assignment with a mismatched paren count throws",    "Expected ')'");
      print(function () { eval("let a; [((a)] = [];"); }, SyntaxError, "Destructured let array assignment with a mismatched paren count throws");
      print(function () { eval("var [a)] = [];"); },      SyntaxError, "Destructured var array declaration with a mismatched paren count throws");
      print(function () { eval("let [a)] = [];"); },      SyntaxError, "Destructured let array declaration with a mismatched paren count throws");
      print(function () { eval("const [a)] = [];"); },    SyntaxError, "Destructured const array declaration with a mismatched paren count throws");
      print(function () { eval("var a; [a)] = [];"); },   SyntaxError, "Destructured var array assignment with a mismatched paren count throws",    "Expected ']'");
      print(function () { eval("let a; [a)] = [];"); },   SyntaxError, "Destructured let array assignment with a mismatched paren count throws");
      print(function () { eval("var [((((a)))), b] = [];"); }, SyntaxError, "Destructured var array declaration with some nested parens throws");
      print(function () { eval("let [((((a)))), b] = [];"); }, SyntaxError, "Destructured let array declaration with some nested parens throws");
      print(function () { eval("const [((((a)))), b] = [];"); }, SyntaxError, "Destructured const array declaration with some nested parens throws");
      
      print(function () { eval("var a, b; [((((a)))), b] = [];"); }, "Destructured var array assignment with some nested parens does not throw");
      print(function () { eval("let a, b; [((((a)))), b] = [];"); }, "Destructured let array assignment with some nested parens does not throw");
      print(function () { eval("var [[[...a]]] = [[[]]];"); },    "Destructured var array declaration with nested rest parameter does not throw");
      print(function () { eval("let [[[...a]]] = [[[]]];"); },    "Destructured let array declaration with nested rest parameter does not throw");
      print(function () { eval("const [[[...a]]] = [[[]]];"); },  "Destructured const array declaration with nested rest parameter does not throw");
      print(function () { eval("var a; [[[...a]]] = [[[]]];"); }, "Destructured var array assignment with nested rest parameter does not throw");
      print(function () { eval("let a; [[[...a]]] = [[[]]];"); }, "Destructured let array assignment with nested rest parameter does not throw");

      print(function () { eval("var [[...a], ...b] = [[],];"); },       "Destructured var array declaration with valid nested rest parameters does not throw");
      print(function () { eval("let [[...a], ...b] = [[],];"); },       "Destructured let array declaration with valid nested rest parameters does not throw");
      print(function () { eval("const [[...a], ...b] = [[],];"); },     "Destructured const array declaration with valid nested rest parameters does not throw");
      print(function () { eval("var a, b; [[...a], ...b] = [[],];"); }, "Destructured var array assignment with valid nested rest parameters does not throw");
      print(function () { eval("let a, b; [[...a], ...b] = [[],];"); }, "Destructured let array assignment with valid nested rest parameters does not throw");

      print(function () { eval("var [[(a)], ((((((([b])))))))] = [[],[]];"); }, SyntaxError, "Destructured var array declaration with valid mixed paren and array nesting throws");
      print(function () { eval("let [[(a)], ((((((([b])))))))] = [[],[]];"); }, SyntaxError, "Destructured let array declaration with valid mixed paren and array nesting throws");
      print(function () { eval("const [[(a)], ((((((([b])))))))] = [[],[]];"); }, SyntaxError, "Destructured const array declaration with valid mixed paren and array nesting does not throw");
      print(function () { eval("const [[(a)], ((((((([b])))))))] = [[],[]];"); }, SyntaxError, "Destructured const array declaration with valid mixed paren and array nesting does not throw");
      print(function () { eval("var a; [([a])] = [[]];"); }, SyntaxError, "Destructured var array assignment with nested patterns surrounded by paren is not valid syntax");
      print(function () { eval("var a, b; [([a]), (((([b]))))] = [[], []];"); }, SyntaxError, "Destructured var array assignment with nested patterns surrounded by paren is not valid syntax");
      print(function () { eval("var a, b; [({a}), (((({b}))))] = [{}, {}];"); }, SyntaxError, "Destructured var array assignment with nested patterns surrounded by paren is not valid syntax");
      print(function () { eval("var a, b; ({a:({a}), b:((({b})))} = {a:{}, b:{}} );"); }, SyntaxError, "Destructured var array assignment with nested patterns surrounded by paren is not valid syntax");

      
      print(function () { eval("var [a, a] = [];"); },    "Destructured var array declaration with a repeated identifier reference does not throw");
      print(function () { eval("let [a, a] = [];"); },   SyntaxError, "Destructured let array declaration with a repeated identifier reference throws", "Let/Const redeclaration");
      print(function () { eval("const [a, a] = [];"); }, SyntaxError, "Destructured const array declaration with a repeated identifier reference throws", "Let/Const redeclaration");
      print(function () { eval("var a; [a, a] = [];"); }, "Destructured var array assignment with a repeated identifier reference does not throw");
      print(function () { eval("let a; [a, a] = [];"); }, "Destructured let array assignment with a repeated identifier reference does not throw");

      
      print(function () { eval("var a = {}; [a.x] = [];"); },      "Destructured var array assignment with an identifier property reference does not throw");
      print(function () { eval("let a = {}; [a.x] = [];"); },      "Destructured let array assignment with an identifier property reference does not throw");
      print(function () { eval("var a = {}; [a[\"x\"]] = [];"); }, "Destructured var array assignment with an identifier property reference does not throw");
      print(function () { eval("let a = {}; [a[\"x\"]] = [];"); }, "Destructured let array assignment with an identifier property reference does not throw");

      
      print(function () { eval("function foo() { return {}; }; var [foo()] = [];"); },       SyntaxError,    "Destructured var array declaration with a call expression throws",                      "Syntax error");
      print(function () { eval("function foo() { return {}; }; let [foo()] = [];"); },       SyntaxError,    "Destructured let array declaration with a call expression throws",                      "Let/Const redeclaration");
      print(function () { eval("function foo() { return {}; }; const [foo()] = [];"); },     SyntaxError,    "Destructured const array declaration with a call expression throws",                    "Let/Const redeclaration");
      print(function () { eval("function foo() { return {}; }; [foo()] = [];"); },           SyntaxError,    "Destructured array assignment with a call expression throws",                           "Invalid destructuring assignment target");
      print(function () { eval("function foo() { return {}; }; var [foo().x] = [];"); },     SyntaxError,    "Destructured var array declaration with a call expression property reference throws",   "Syntax error");
      print(function () { eval("function foo() { return {}; }; let [foo().x] = [];"); },     SyntaxError,    "Destructured let array declaration with a call expression property reference throws",   "Let/Const redeclaration");
      print(function () { eval("function foo() { return {}; }; const [foo().x] = [];"); },   SyntaxError,    "Destructured const array declaration with a call expression property reference throws", "Let/Const redeclaration");
      print(function () { eval("function foo() { return {}; }; [foo().x] = [];"); },      "Destructured array assignment with super a property reference does not throw");
      print(function () { eval("function foo() { return {}; }; [foo()[\"x\"]] = [];"); }, "Destructured array assignment with a call expression property reference does not throw");

      
      print(function () { eval("class foo { method() { var [super()] = []; } }"); },     SyntaxError, "Destructured var array declaration with a super call throws",                         "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { let [super()] = []; } }"); },     SyntaxError, "Destructured let array declaration with a super call throws",                         "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { const [super()] = []; } }"); },   SyntaxError, "Destructured const array declaration with a super call throws",                       "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { [super()] = []; } }"); },         SyntaxError, "Destructured array assignment with a super call throws",                              "Invalid use of the 'super' keyword");
      print(function () { eval("class foo { method() { var [super.x] = []; } }"); },     SyntaxError, "Destructured var array declaration with a super property reference throws",           "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { let [super.x] = []; } }"); },     SyntaxError, "Destructured let array declaration with a super property reference does not throw",   "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { const [super.x] = []; } }"); },   SyntaxError, "Destructured const array declaration with a super property reference does not throw", "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { [super.x] = []; } }"); },      "Destructured var array assignment with super a property reference does not throw");
      print(function () { eval("class foo { method() { [super[\"x\"]] = []; } }"); }, "Destructured array assignment with a super property reference does not throw");

      
      print(function () { eval("var a; `${[a] = [1]}`"); }, "Destructured assignment does not throw inside a string template");

      
      print(function () { eval("[((((vrh190 )))) = 5184] = []"); }, "Destructured array assignment with parens before a default expression should not throw");
    }
  },
  {
    name: "Array destructuring basic functionality",
    body : function () {
      
      {
        let a1; [a1] = [1];
        let     [a2] = [1];

        print(a1, a2, "Destructured array declaration and assignment assigning single values match");
        print(a1, 1,  "Destructured array assignment assigns single value correctly");
        print(a2, 1,  "Destructured array declaration assigns single value correctly");
      }
      {
        let a1; [a1] = [];
        let     [a2] = [];

        print(a1, a2,        "Destructured array declaration and assignment assigning an empty array match");
        print(a1, undefined, "Destructured array assignment assigning an empty array results in undefined");
        print(a2, undefined, "Destructured array declaration assigning an empty array results in undefined");

        let a3; [a3] = [,1];
        let     [a4] = [,1];

        print(a3, a4,        "Destructured array declaration and assignment assigning an array with missing values match");
        print(a3, undefined, "Destructured array assignment assigning an array with missing values results in undefined");
        print(a4, undefined, "Destructured array declaration assigning an array with missing values in undefined");
      }

      
      {
        let a1, b1, c1, d1, e1;
        [a1, b1, c1, d1, e1]     = [1, 2, 3, 4, 5];

        let [a2, b2, c2, d2, e2] = [1, 2, 3, 4, 5];

        print([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2], "Destructured array assignment and declaration assigning multiple values match");
        print([1, 2, 3, 4, 5],      [a1, b1, c1, d1, e1], "Destructured array assignment assigns multiple values correctly");
        print([1, 2, 3, 4, 5],      [a2, b2, c2, d2, e2], "Destructured array declaration assigns multiple values correctly");
      }
      {
        let a1, b1, c1, d1, e1;
        [a1, b1, c1, d1, e1]     = [1, 2, 3];

        let [a2, b2, c2, d2, e2] = [1, 2, 3];

        print([a1, b1, c1, d1, e1],            [a2, b2, c2, d2, e2], "Destructured array assignment and declaration assigning a smaller array match");
        print([1, 2, 3, undefined, undefined], [a1, b1, c1, d1, e1], "Destructured array assignment assigns a smaller array correctly");
        print([1, 2, 3, undefined, undefined], [a2, b2, c2, d2, e2], "Destructured array declaration assigns a smaller array correctly");
      }
      {
        let a1, b1, c1, d1, e1;
        [a1, b1, c1, d1, e1]     = [1, , 3, , 5];

        let [a2, b2, c2, d2, e2] = [1, , 3, , 5];

        print([a1, b1, c1, d1, e1],            [a2, b2, c2, d2, e2], "Destructured array assignment and declaration assigning an array with some missing values match");
        print([1, undefined, 3, undefined, 5], [a1, b1, c1, d1, e1], "Destructured array assignment assigns an array with some missing values correctly");
        print([1, undefined, 3, undefined, 5], [a2, b2, c2, d2, e2], "Destructured array declaration assigns an array with some missing values correctly");
      }

      
      {
        let rest1;
        [...rest1]     = [1, 2, 3, 4, 5];

        let [...rest2] = [1, 2, 3, 4, 5];

        print(rest1,           rest2, "Destructured array assignment and declaration using only a rest parameter match");
        print([1, 2, 3, 4, 5], rest1, "Destructured array assignment uses only a rest parameter correctly");
        print([1, 2, 3, 4, 5], rest2, "Destructured array declaration uses only a rest parameter correctly");
      }
      {
        let a1, b1, c1, d1, e1;
        [a1, b1, c1, ...rest1]     = [1, 2, 3, 4, 5];

        let [a2, b2, c2, ...rest2] = [1, 2, 3, 4, 5];

        print([a1, b1, c1, rest1], [a2, b2, c2, rest2], "Destructured array assignment and declaration using a rest parameter match");
        print([1, 2, 3, [4, 5]],   [a1, b1, c1, rest1], "Destructured array assignment uses a rest parameter correctly");
        print([1, 2, 3, [4, 5]],   [a2, b2, c2, rest2], "Destructured array declaration uses a rest parameter correctly");

        let a3, b3, c3, d3, e3;
        [a3, b3, c3, ...rest3]     = [1, 2, 3];

        let [a4, b4, c4, ...rest4] = [1, 2, 3];

        print([a3, b3, c3, rest3], [a4, b4, c4, rest4], "Destructured array assignment and declaration using a rest parameter and a smaller array match");
        print([1, 2, 3, []],       [a3, b3, c3, rest3], "Destructured array assignment uses a rest parameter and a smaller array correctly");
        print([1, 2, 3, []],       [a4, b4, c4, rest4], "Destructured array declaration uses a rest parameter and a smaller array correctly");
      }
      {
        let a1, b1;
        [[...a1], ...b1]     = [[1, 2, 3, 4], 5, 6, 7, 8];

        let [[...a2], ...b2] = [[1, 2, 3, 4], 5, 6, 7, 8];

        print([a1, b1], [a2, b2],                     "Destructured array assignment and declaration with nested rest parameters match");
        print([a1, b1], [[1, 2, 3, 4], [5, 6, 7, 8]], "Destructured array assignment uses nested rest parameters correctly");
        print([a2, b2], [[1, 2, 3, 4], [5, 6, 7, 8]], "Destructured array declaration uses nested rest parameters correctly");
      }

      
      {
        let a1, b1, c1, d1, e1;
        [a1 = 1, b1 = 2, c1 = 3, d1 = 4, e1 = 5]     = [];

        let [a2 = 1, b2 = 2, c2 = 3, d2 = 4, e2 = 5] = [];

        print([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2], "Destructured array assignment and declaration with default values assigning an empty array match");
        print([1, 2, 3, 4, 5],      [a1, b1, c1, d1, e1], "Destructured array assignment assigns an array with default values assigning an empty array correctly");
        print([1, 2, 3, 4, 5],      [a2, b2, c2, d2, e2], "Destructured array declaration assigns an array with default values assigning an empty array correctly");
      }
      {
        let a1, b1, c1, d1, e1;
        [a1 = 1, b1 = 2, c1 = 3, d1 = 4, e1 = 5]     = [5, , 3, 2, ];

        let [a2 = 1, b2 = 2, c2 = 3, d2 = 4, e2 = 5] = [5, , 3, 2, ];

        print([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2], "Destructured array assignment and declaration assigning an array with some missing values match");
        print([5, 2, 3, 2, 5],      [a1, b1, c1, d1, e1], "Destructured array assignment assigns an array with some missing values correctly");
        print([5, 2, 3, 2, 5],      [a2, b2, c2, d2, e2], "Destructured array declaration assigns an array with some missing values correctly");
      }

      
      {
        let a    = {};
        [a.x]    = [10];
        print(10,   a.x,        "Destructured array with an object property assignment works correctly");
        [a["x"]] = [20];
        print(20,   a["x"],     "Destructured array with an object index assignment works correctly");

        var obj = { x: 10 };
        function foo() { return obj };

        [foo().x] = [20];
        print(20,   foo().x,    "Destructured array with a call result property assignment works correctly");

        [foo()["x"]] = [30];
        print(30,   foo()["x"], "Destructured array with a call result index assignment works correctly");

        [...foo().x] = [20];
        print([20], foo().x,    "Destructured array with a call result rest element works correctly");

        [...foo()["x"]] = [30];
        print([30], foo()["x"], "Destructured array with a call result rest element works correctly");

        class base {
          methodProp()      { return {}; }
          methodIndex()     { return {}; }
          methodRestProp()  { return {}; }
          methodRestIndex() { return {}; }
          get x()           { return this._x; }
          set x(v)          { this._x = v; }
        };
        class extended extends base {
          methodProp()      { return [super.x] = [10, 20, 30]; }
          methodIndex()     { return [super["x"]] = [40, 50, 60]; }
          methodRestProp()  { return [...super.x] = [10, 20, 30]; }
          methodRestIndex() { return [...super.x] = [40, 50, 60]; }
          getValue()        { return super.x;}
        };

        let c = new extended();
        print(undefined,    c.getValue(), "Super property before destructured assignment is undefined");

        c.methodProp();
        print(10,           c.getValue(), "Super property after destructured super property assignment");

        c.methodIndex();
        print(40,           c.getValue(), "Super property after destructured super index assignment");

        c.methodRestProp();
        print([10, 20, 30], c.getValue(), "Super property after destructured super property assignment");

        c.methodRestIndex();
        print([40, 50, 60], c.getValue(), "Super property after destructured super index assignment");
      }

      
      {
        let a1; [[a1]] = [[1]];
        let     [[a2]] = [[1]];

        print(a1, a2, "Destructured array declaration and assignment assigning single values match");
        print(a1, 1,  "Destructured array assignment assigns single value correctly");
        print(a2, 1,  "Destructured array declaration assigns single value correctly");
      }
      {
        let a1, b1, c1, d1, e1;
        [[a1, b1], c1, [d1, [e1]]]     = [[1, 2], 3, [4, [5]]];

        let [[a2, b2], c2, [d2, [e2]]] = [[1, 2], 3, [4, [5]]];

        print([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2], "Destructured array assignment and declaration assigning multiple values match");
        print([1, 2, 3, 4, 5],      [a1, b1, c1, d1, e1], "Destructured array assignment assigns multiple values correctly");
        print([1, 2, 3, 4, 5],      [a2, b2, c2, d2, e2], "Destructured array declaration assigns multiple values correctly");
      }
      {
        let a1; [[a1, b1] = [1, 2]] = [];
        let     [[a2, b2] = [1, 2]] = [];

        print([a1, b1], [a2, b2], "Destructured array declaration and assignment using nested values match");
        print([1, 2],   [a1, b1], "Destructured array assignment assigns nested values correctly");
        print([1, 2],   [a2, b2], "Destructured array declaration assigns nested values correctly");
      }
      {
        let a1; [[[a1] = [1], [[b1]] = [[2]]] = [, undefined]] = [undefined, ];
        let     [[[a2] = [1], [[b2]] = [[2]]] = [, undefined]] = [undefined, ];

        print([a1, b1], [a2, b2], "Destructured array declaration and assignment using nested default values match");
        print([1, 2],   [a1, b1], "Destructured array assignment assigns nested default values correctly");
        print([1, 2],   [a2, b2], "Destructured array declaration assigns nested default values correctly");
      }

      
      {
        let a1; [a1, b1, c1, d1, ...rest1] = "testing";
        let [a2, b2, c2, d2, ...rest2]     = "testing";

        print([a1, b1, c1, d1, rest1],               [a2, b2, c2, d2, rest2], "Destructured array declaration and assignment using nested values match");
        print(["t", "e", "s", "t", ["i", "n", "g"]], [a1, b1, c1, d1, rest1], "Destructured array assignment assigns nested values correctly");
        print(["t", "e", "s", "t", ["i", "n", "g"]], [a2, b2, c2, d2, rest2], "Destructured array declaration assigns nested values correctly");
      }
      {
        let map = new Map();

        map.set(1, 6);
        map.set(2, 7);
        map.set(3, 8);
        map.set(4, 9);
        map.set(5, 10);

        let a1; [a1, b1, c1, d1, ...rest1] = map.entries();
        let [a2, b2, c2, d2, ...rest2]     = map.entries();

        print([a1, b1, c1, d1, rest1],                     [a2, b2, c2, d2, rest2], "Destructured array declaration and assignment using nested values match");
        print([[1, 6], [2, 7], [3, 8], [4, 9], [[5, 10]]], [a1, b1, c1, d1, rest1], "Destructured array assignment assigns nested values correctly");
        print([[1, 6], [2, 7], [3, 8], [4, 9], [[5, 10]]], [a2, b2, c2, d2, rest2], "Destructured array declaration assigns nested values correctly");
      }
      {
        let getIteratorCalledCount = 0;
        let nextCalledCount = 0;
        let doneCalledCount = 0;
        let valueCalledCount = 0;

        let simpleIterator = {
            [Symbol.iterator]: function () {
            ++getIteratorCalledCount;
            return {
              i: 0,
              next: function () {
                ++nextCalledCount;
                var that = this;
                return {
                  get done() {
                    ++doneCalledCount;
                    return that.i == 1;
                  },
                  get value() {
                    ++valueCalledCount;
                    return that.i++;
                  }
                };
              }
            };
          }
        };

        let [a, b, c] = simpleIterator;
        print(1, getIteratorCalledCount, "GetIterator is called once per iterator");
        print(3, nextCalledCount,        "'.next()' is called once per destructuring reference");
        print(3, doneCalledCount,        "'done' is read once per destructuring reference");
        print(1, valueCalledCount,       "'value' is read once per .next() call until done is true");

        [getIteratorCalledCount, nextCalledCount, doneCalledCount, valueCalledCount] = [0, 0, 0, 0];

        let [...rest] = simpleIterator;
        print(1, getIteratorCalledCount, "GetIterator is called once per iterator");
        print(2, nextCalledCount,        "'.next()' is called until done is true when filling a rest element");
        print(2, doneCalledCount,        "'done' is read until it is true");
        print(1, valueCalledCount,       "'value' is read once for each .next() call until done is true");

        [getIteratorCalledCount, nextCalledCount, doneCalledCount, valueCalledCount] = [0, 0, 0, 0];

        [a, b, c, ...rest] = simpleIterator;
        print(1, getIteratorCalledCount, "GetIterator is called once per iterator");
        print(4, nextCalledCount,        "'.next()' is called once per destructuring reference");
        print(4, doneCalledCount,        "'done' is read once per destructuring reference");
        print(1, valueCalledCount,       "'value' is read once per .next() call until done is true");
      }

      
      print(function () { eval("let [a] = 1;") },       TypeError, "Non-object used as an iterator in a declaration throws",        "Object doesn't support property or method 'Symbol.iterator'");
      print(function () { eval("let a; [a] = 1;") },    TypeError, "Non-object used as an iterator an assignment throws"   ,        "Object doesn't support property or method 'Symbol.iterator'");
      print(function () { eval("let [[a]] = [];") },    TypeError, "Nested non-object used as an iterator in a declaration throws", "Unable to get property 'Symbol.iterator' of undefined or null reference");
      print(function () { eval("let a; [[a]] = [];") }, TypeError, "Nested non-object used as an iterator an assignment throws",    "Unable to get property 'Symbol.iterator' of undefined or null reference");

      
      {
        let a, b, c;
        function foo(x = [a, b = 2, ...c] = [1,,3,4,5,6,7]) {
          print([1, 2, [3,4,5,6,7]], [a, b, c], "Destructuring array assignment works correctly inside a default parameter expression");
          print([1,,3,4,5,6,7],      x,         "Destructuring array assignment evaluates to RHS in a default parameter expression");
        }
        foo();

        `${[a = 5, b, ...c] = [, 1, 3, 5, 7, 9]}`;
        print([5, 1, [3, 5, 7, 9]], [a, b, c], "Destructuring array assignment inside a string template works correctly");

        (() => [a,, b, c] = [1, 2, 3])();
        print([1, 3, undefined], [a, b, c], "Destructuring array assignment inside a lambda expression works correctly");
      }

          
          {
        let [[a]=[1]] = [[2]];
                print(a, 2, "Nested destructuring - value is present");

                [[a]=[1]] = [[]];
                print(a, undefined, "Nested destructuring - value is present but undefined");

                [[a]=[1]] = [];
                print(a, 1, "Nested destructuring - value is not present - use default");

                [[a]=1] = [[]];
                print(a, undefined, "Nested destructuring - value is present - default is incorrect - does not have @@iterator");
          }

       
       {
         function foo() {
            for(var [i, j, k] in { qux: 1 }) {
                return i === "q" && j === "u" && k === "x";
            }
        }
        print(foo(), "Array destructuring pattern on for..in is initialized correctly");
      }
      
      {
         let obj1 = {};
         obj1[Symbol.iterator] = function () {
            return {
                next: function() {
                    print("next function should not be called");
                }
            };
         };
         
         
         var [] = obj1;
      }

      {
         let obj1 = {};
         obj1[Symbol.iterator] = function () {
            return {
                next: function() {
                    this.counter++;
                    if (this.counter > 1)
                    {
                        print("next function should not be called for the second time");
                    }
                    return {value : undefined, done: false};
                },
                counter : 0
            };
         };
         
         
         var [,] = obj1;
      }

    }
  }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

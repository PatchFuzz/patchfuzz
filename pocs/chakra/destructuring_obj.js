print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Basic object destructuring syntax",
    body: function () {
      print(function () { eval("var {} = {};"); },  "var object declaration pattern with no identifier is valid syntax");
      print(function () { eval("let {} = {};"); },  "let object declaration pattern with no identifier is valid syntax");
      print(function () { eval("const {} = {};"); }, "const object declaration pattern with no identifier is valid syntax");
      print(function () { eval("({} = {});"); },      "Object pattern as an expression with no identifier is valid syntax");
      print(function () { eval("var {x:y} = {};"); }, "var object declaration pattern with a single member is valid syntax");
      print(function () { eval("let {x:y} = {};"); }, "let object declaration pattern with a single member is valid syntax");
      print(function () { eval("const {x:y} = {};"); }, "const object declaration pattern with a single member is valid syntax");
      print(function () { eval("({x:y} = {});"); }, "Object pattern as an expression with a single member is valid syntax");
      print(function () { eval("var {x} = {};"); }, "var object declaration pattern with a single member as shorthand is valid syntax");
      print(function () { eval("({x:y} = {});"); }, "Object pattern as an expression with a single member as shorthand is valid syntax");
      print(function () { eval("var {x} = {}, {y} = {};"); }, "Multiple object pattern in a single var declaration is valid syntax");
    }
  },

  {
    name: "Basic object destructuring invalid syntax",
    body: function () {
      print(function () { eval("var {};"); }, SyntaxError, "var empty object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      print(function () { eval("let {};"); }, SyntaxError, "let empty object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      print(function () { eval("const {};"); }, SyntaxError, "const empty object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      print(function () { eval("var {a};"); }, SyntaxError, "var object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      print(function () { eval("let {a};"); }, SyntaxError, "let object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      print(function () { eval("const {a};"); }, SyntaxError, "const object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      print(function () { eval("var {,} = {}"); }, SyntaxError, "Object declaration pattern without an identifier is not valid syntax", "Expected identifier, string or number");
      print(function () { eval("({,} = {});"); }, SyntaxError, "Object expression pattern without an identifier is not valid syntax", "Expected identifier, string or number");

      print(function () { eval("var {x:y--} = {};"); }, SyntaxError, "Object declaration pattern with an operator -- is not valid syntax", "Unexpected operator in destructuring expression");
      print(function () { eval("var {x:y+1} = {};"); }, SyntaxError, "Object declaration pattern with an operator + is not valid syntax", "Unexpected operator in destructuring expression");

      print(function () { eval("var y; ({x:y--} = {});"); }, SyntaxError, "Object expression pattern with an operator -- is not valid syntax",   "Unexpected operator in destructuring expression");
      print(function () { eval("var y; ({x:y+1} = {});"); }, SyntaxError, "Object expression pattern with an operator + is not valid syntax",   "Unexpected operator in destructuring expression");
    }
  },

  {
    name: "Object destructuring syntax with initializer",
    body: function () {
      print(function () { eval("var {x:x = 20} = {};"); }, "var object declaration pattern with default is valid syntax");
      print(function () { eval("let {x:x = 20} = {};"); }, "let object declaration pattern with default is valid syntax");
      print(function () { eval("const {x:x = 20} = {};"); }, "const object declaration pattern with default is valid syntax");
      print(function () { eval("var x; ({x:x = 20} = {});"); }, "Object declaration pattern with default is valid syntax");

      print(function () { eval("var {x, x1:y = 20} = {};"); }, "Object declaration pattern with default other than first is valid syntax");
      print(function () { eval("var {x:z = 1, x1:y = 20} = {};"); }, "Object declaration pattern with defaults on more than one is valid syntax");

      print(function () { eval("var x, y; ({x, x1:y = 20} = {});"); }, "Object expression pattern with default other than first is valid syntax");
      print(function () { eval("var z, y; ({x:z = 1, x1:y = 20} = {});"); }, "Object expression pattern with defaults on more than one is valid syntax");
    }
  },

  {
    name: "Object destructuring syntax with identifier reference",
    body: function () {
      print(function () { eval("function foo() { return {}; }; let {x:foo()} = {};"); }, SyntaxError,  "Object declaration pattern with a call expression is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("function foo() { return {}; }; ({x:foo()} = {});"); }, SyntaxError,  "Object expression pattern with a call expression is not valid syntax", "Invalid destructuring assignment target");
      print(function () { eval("function foo() { return {}; }; var {x:foo().x} = {};"); }, SyntaxError,  "Object declaration pattern with property reference on call is not valid syntax", "Syntax error");

      print(function () { eval("var a = {}; ({x:a.x} = {});"); }, "Object expresion pattern with a property reference is valid syntax");
      print(function () { eval("let a = {}; ({x:a['x']} = {});"); }, "Object expression pattern with a property reference as index is valid syntax");

      print(function () { eval("function foo() { return {}; }; ({x:foo().x} = {});"); }, "Object declaration pattern with property reference on call is valid syntax");
      print(function () { eval("function foo() { return {}; }; ({x:foo()['x']} = {});"); }, "Object declaration pattern with property reference as index on call is valid syntax");

      print(function () { eval("class foo { method() { let {x:super()} = {}; } }"); },SyntaxError, "Object declaration pattern with a super call is not valid syntax", "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { ({x:super()} = {}); } }"); }, SyntaxError, "Object expression pattern with a super call is not valid syntax", "Invalid use of the 'super' keyword");
      print(function () { eval("class foo { method() { var {x:super.x} = {}; } }"); }, SyntaxError, "Object declaration pattern with a property reference on super is not valid syntax", "The use of a keyword for an identifier is invalid");
      print(function () { eval("class foo { method() { ({x:super.x} = {}); } }"); }, "Object expression pattern with a property reference on super is valid syntax");
      print(function () { eval("class foo { method() { ({x:super['x']} = {}); } }"); }, "Object expression pattern with a property reference as an index on super is valid syntax");

      print(function () { eval("var a = [1], i = 0; ({x:a[i++]} = {});"); }, "Object Destructuring pattern assignment operators inside an identifier reference is valid syntax");
      }
   },

   {
    name: "Object destructuring syntax with computed property name",
    body: function () {

      print(function () { eval("var zee = 'x'; var {[zee]:x1} = {}"); }, "Object declaration pattern with computed property name is valid syntax");
      print(function () { eval("var zee = 'x'; var x1; ({[zee]:x1} = {})"); }, "Object expression pattern with computed property name is valid syntax");
      print(function () { eval("var zee = 'x'; var {[zee + 'foo']:x1} = {}"); }, "Object declaration pattern with computed property name with add operator is valid syntax");
      print(function () { eval("var zee = 'x'; var x1; ({[zee +'foo']:x1} = {})"); }, "Object expression pattern with computed property name with add operator is valid syntax");
    }
   },
   {
    name: "Destructing syntax - having rest element as pattern",
    body: function () {
      print(function () { eval("let [...[a]] = [[]];"); }, "Under declaration, having rest element as array pattern is valid syntax");
      print(function () { eval("let a; [...[a]] = [[]];"); }, "Under expression, having rest element as array pattern is valid syntax");

      print(function () { eval("let [...{a}] = [{}];"); }, "Under declaration, having rest element as object pattern is valid syntax");
      print(function () { eval("let a; [...{a}] = [{}];"); }, "Under expression, having rest element as object pattern is valid syntax");

      print(function () { eval("let a; [...[a = 1]] = [[]];"); }, "Under expression, having rest element as array pattern has initializer is valid syntax");
      print(function () { eval("let a; [...{a:a = 1}] = [{}];"); }, "Under expression, having rest element as object pattern has initializer is valid syntax");

      print(function () { eval("let obj = {x:1}; [...obj.x] = [10];"); }, "Rest element being property reference is valid syntax");
      print(function () { eval("let obj = {x:1}; [...obj['x']] = [10];"); }, "Rest element being property reference as index is valid syntax");

      print(function () { eval("function foo() { return {x:1}; }; [...foo().x] = [10];"); }, "Rest element being property reference on call expression is valid syntax");
      print(function () { eval("function foo() { return {x:1}; }; [...foo()['x']] = [10];"); }, "Rest element being property reference as index on call expression is valid syntax");

      print(function () { eval("let [...[...[...a]]] = [[[]]];"); }, "Nesting rest element inside another rest element is valid syntax");

      print(function () { eval("let [...[a+1] = [{}];"); },   SyntaxError, "Under declaration, having rest element as pattern which has operator is not valid syntax",   "Unexpected operator in destructuring expression");
      print(function () { eval("let a; [...1+a] = [{}];"); }, SyntaxError, "Under declaration, rest element has operator is not valid syntax",   "Invalid destructuring assignment target");

      print(function () { eval("let a; [...[a+1] = [{}];"); }, SyntaxError, "Under expression, having rest element as pattern which has operator is not valid syntax",   "Unexpected operator in destructuring expression");
      print(function () { eval("function foo() { return {x:1}; }; [...foo()] = [10];"); }, SyntaxError, "Under expression, having rest element as call expression is not valid syntax", "Invalid destructuring assignment target");
      print(function () { eval("let [...[a] = []] = [[]];"); }, SyntaxError, "Under declaration - rest as array pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
      print(function () { eval("let [...{x} = {}] = [{}];"); }, SyntaxError, "Under declaration - rest as object pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
      print(function () { eval("let a; ([...[a] = []] = [[]]);"); }, SyntaxError, "Under assignment - rest as array pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
      print(function () { eval("let x; ([...{x} = {}] = [{}]);"); }, SyntaxError, "Under assignment - rest as object pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
    }
   },
   {
    name: "Object destructuring syntax with repeated identifier",
    body: function () {
      print(function () { eval("var {a:a, a:a} = {};"); },    "var declaration pattern with a repeated identifier is valid syntax");
      print(function () { eval("let {a:a, a:a} = {};"); },   SyntaxError, "let declaration pattern with a repeated identifier is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("const {a:a, a:a} = {};"); }, SyntaxError, "const declaration pattern with a repeated identifier is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("let {b, b} = {};"); },   SyntaxError, "let declaration pattern with a repeated identifier as shorthand is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("const {b, b} = {};"); }, SyntaxError, "const declaration pattern with a repeated identifier as shorthand is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("let {x:c, y:c} = {};"); },   SyntaxError, "let declaration pattern with a repeated identifier but different matching pattern is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("const {x:c, y:c} = {};"); }, SyntaxError, "const declaration pattern with a repeated identifier but different matching pattern is not valid syntax", "Let/Const redeclaration");
      print(function () { eval("let a; ({a:a, a:a} = {});"); }, "Object expression pattern with a repeated identifier is valid syntax");
    }
   },
   {
    name: "Object destructuring syntax on misc expressions",
    body: function () {
      print(function () { eval("let a; ({a:((((a1))))} = {a:20})"); }, "Object expression pattern with parens is valid syntax");
      print(function () { eval("let a, r1; ({a:a1 = r1} = {})"); }, "Object expression pattern with defaults as reference is valid syntax");
      print(function () { eval("let a, r1; ({a:a1 = r1 = 44} = {})"); }, "Object expression pattern with chained assignments as defaults is valid syntax");
      print(function () { eval("let a, r1; ({a:(a1 = r1) = 44} = {})"); }, SyntaxError, "Object expression pattern with chained assignments but paren in between is not valid syntax", "Invalid left-hand side in assignment.");
      print(function () { eval("var a; `${({a} = {})}`"); }, "Object expression pattern inside a string template is valid syntax");
      print(function () { eval("for (let {x} = {} of []) {}"); }, SyntaxError, "for.of has declaration pattern with initializer is not valid syntax", "for-of loop head declarations cannot have an initializer");
      print(function () { eval("for (let {x} = {} in []) {}"); }, SyntaxError, "for.in has declaration pattern with initializer is not valid syntax", "for-in loop head declarations cannot have an initializer");
      print(function () { eval("for (var [x] = [] of []) {}"); }, SyntaxError, "for.of has var declaration pattern with initializer is not valid syntax", "for-of loop head declarations cannot have an initializer");
      print(function () { eval("function foo() {for (let {x} = {} of []) {}; }; foo();"); }, SyntaxError, "Inside function - for.of has declaration pattern with initializer is not valid syntax", "for-of loop head declarations cannot have an initializer");
      print(function () { eval("var a; [a = class aClass {}] = []"); }, "Expression pattern has class as initializer is valid syntax");
      print(function () { eval("var a; for ({x:x = class aClass {}} of []) {}"); }, "for.of's expression pattern has class as initializer is valid syntax");
      print(function () { eval("var {x:[...y]} = {x:[1]}"); }, "rest element nesting under object pattern is valid syntax");
      print(function () { eval("let {foo() {}} = {};"); }, SyntaxError, "Invalid object pattern as it has the function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("let {get foo() {}} = {};"); }, SyntaxError, "Invalid object pattern as it has the get function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("let {set foo() {}} = {};"); }, SyntaxError, "Invalid object pattern as it has the set function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("let {get ['foo']() {}} = {};"); }, SyntaxError, "Invalid object pattern as it has the get function name as computed property instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("let {set ['foo'](a) {}} = {};"); }, SyntaxError, "Invalid object pattern as it has the set function name as computed property instead of binding identifier", "Invalid destructuring assignment target");

      print(function () { eval("({foo() {}} = {});"); }, SyntaxError, "Invalid object expression pattern as it has the function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("({get foo() {}} = {});"); }, SyntaxError, "Invalid object expression pattern as it has the get function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("({set foo(a) {}} = {});"); }, SyntaxError, "Invalid object expression pattern as it has the set function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("({get ['foo']() {}} = {});"); }, SyntaxError, "Invalid object expression pattern as it has the get function name as computed property instead of binding identifier", "Invalid destructuring assignment target");
      print(function () { eval("({set ['foo'](a) {}} = {});"); }, SyntaxError, "Invalid object expression pattern as it has the set function name as computed property instead of binding identifier", "Invalid destructuring assignment target");

      print(function () { eval("for(var [z] = function ([a]) { } in []) {}"); }, SyntaxError, "Initializer as function expression is not valid syntax", "for-in loop head declarations cannot have an initializer");
      print(function () { eval("({a: {d = 1,c = 1}.c = 2} = {});"); }, SyntaxError, "Object expression pattern with dot node should not identify as object literal", "Expected ':'");
      print(function () { eval("({a: ({d = 1,c = 1}.c) = 2} = {});"); }, SyntaxError, "Object expression pattern with dot node under paren should not identify as object literal", "Destructuring expressions can only have identifier references");
      print(function () { eval("({a: [b = 1, c = 2][1]} = {a:[]});"); }, "index node instead of array literal is a valid syntax");
      print(function () { eval("({a: [b = 1, c = 2].b} = {a:[]});"); }, "dot node instead of array literal is a valid syntax");
    }
  },
  {
    name: "Object destructuring with `get` and `set` identifiers",
    body: function () {
        var { get } = { get: 1 };
        let { set } = { set: 2 };
        print(1, get, "`get` is a valid object destructuring name");
        print(2, set, "`set` is a valid object destructuring name");

        print(function () { eval("var { get foo() { } } = { get: 1 };"); }, SyntaxError, "getter accessor is not a valid object destructuring name", "Invalid destructuring assignment target");
        print(function () { eval("var { set bar(x) { } } = { set: 2 };"); }, SyntaxError, "setter accessor is not a valid object destructuring name", "Invalid destructuring assignment target");

        const { get: x } = { get: 3 };
        var { set: y } = { set: 4 };
        print(3, x, "`get` is a valid object destructuring name mapping");
        print(4, y, "`set` is a valid object destructuring name mapping");
    }
  },
  {
    name: "Object destructuring with shorthand initializer",
    body: function () {
        print(function () { eval("({x = 1} = {});"); }, "Object pattern has shorthand with initializer is a valid syntax");
        print(function () { eval("({x, y = 1, z = 2} = {});"); }, "Object pattern has multiple shorthands with initializer is a valid syntax");
        print(function () { eval("var a = 1; ({x, y = 1, z = 2} = {a = 2});"); }, SyntaxError,"Initializer is allowed on shorthand of object pattern but not on object literal", "Expected ':'");
        print(function () { eval("var a = 1; ({x, y = {a = 1}} = {});"); }, SyntaxError,"Object literal is within object pattern but has shorthand initializer is not valid syntax", "Expected ':'");
        print(function () { eval("var a = 1; ({x = {a = 1} = {}} = {});"); }, "Chained object patterns have shorthand initializers is a valid syntax");
        print(function () { eval("var a = 1; var {x = {a = 1} = {}} = {};"); }, "Chained object declaration pattern have shorthand initializers is a valid syntax");
        print(function () { eval("[{x : [{y:{z = 1}}] }] = [{x:[{y:{}}]}];"); }, "Mixed nesting pattern has shorthand initializer is a valid syntax");
        print(function () { eval("[{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];"); }, 
                                            "Mixed object patterns both on nested and on same level have initializers on shorthand and is a valid syntax");
        print(function () { eval("var [{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];"); }, 
                                            "Declaration - mixed object patterns both on nested and on same level have initializers on shorthand and is a valid syntax");
        print(function () { eval("[...{x = 1}] = [{}]"); }, "Object pattern following rest has shorthand initializer is a valid syntax");
        {
            let a1 = 1;
            ({x:{a1 = 2}} = {x:{}});
            print(a1, 2);
        }
        
        print(function () { eval("var a = 1; switch(true) {  case {a = 1} : break; };"); }, SyntaxError, "Object literal on case has initializer is not valid syntax", "Expected ':'");
       
    }
  },
  {
    name: "Object destructuring basic functionality",
    body: function () {
        {
           var x3, x4;
           let {x:x1} = {x:20};
           print(x1, 20,  "Object declaration pattern should match the pattern and initializes that variable correctly");
           let {x2} = {x2:20};
           print(x2, 20,  "Object declaration pattern (shorthand) should match the pattern and initializes that variable correctly");

           ({x:x3} = {x:20});
           print(x3, 20,  "Object expression pattern should match the pattern and initializes that variable correctly");

           ({x4} = {x4:20});
           print(x4, 20,  "Object expression pattern (shorthand) should match the pattern and initializes that variable correctly even under a paren");
        }

        {
           let {x:x1} = {};
           print(x1, undefined,  "Object declaration pattern find no match pattern on rhs and initialize to undefined");

           let {x2} = {zee:20};
           print(x2, undefined,  "Object declaration pattern does not match pattern on rhs and initialize to undefined");

           let x3, x4;
           ({x:x3} = {});
           print(x3, undefined,  "Object expression pattern find no match pattern on rhs and initialize to undefined");

           ({x4} = {foobar:20});
           print(x4, undefined,  "Object expression pattern does not match pattern on rhs and initialize to undefined");
        }

        {
           let {x:x1, y: y1, z: z1} = {x:11, y:22, z:33, foo:44};
           print(x1, 11,  "Object declaration pattern with multiple members should match the first member correctly");
           print(y1, 22,  "Object declaration pattern with multiple members should match the second member correctly");
           print(z1, 33,  "Object declaration pattern with multiple members should match the third member correctly");

           let x2, y2, z2;
           ({x:x2, y: y2, z: z2} = {x:11, bar:44, y:22, z:33});

           print(x2, 11,  "Object expression pattern with multiple members should match the first member correctly");
           print(y2, 22,  "Object expression pattern with multiple members should match the second member correctly");
           print(z2, 33,  "Object expression pattern with multiple members should match the third member correctly");

        }

        {
           var y1, x1;
           var z = {x:x1} = {y:y1} = {x:10, y:20};
           print(x1, 10,  "Object declaration pattern with chained assignments should match first member to rhs correctly");
           print(y1, 20,  "Object expression pattern with chained assignments should match second member to rhs correctly");
        }
    }
  },
  {
    name: "Object destructuring functionality with initializer",
    body : function () {

           let {x:a = 1} = {x:undefined};
           print(a, 1,  "Object declaration pattern should match the pattern but it is evaluated to undefined so assign default correctly");

           let {x:a1 = 1} = {x:null};
           print(a1, null,  "Object declaration pattern should match the pattern and assigned null correctly");


           let {x:x1 = 1, y:y1 = 2, z: z1 = 3} = {};
           print(x1, 1,  "Object declaration pattern - first member initialized with default when no match found on rhs");
           print(y1, 2,  "Object declaration pattern - second member initialized with default when no match found on rhs");
           print(z1, 3,  "Object declaration pattern - third member initialized with default when no match found on rhs");

           let x2, y2, z2;
           ({x:x2 = 1, y:y2 = 2, z:z2 = 3} = {z:11});

           print(x2, 1, "Object expression pattern - first member initialized with default when no match found on rhs");
           print(y2, 2, "Object expression pattern - second member initialized with default when no match found on rhs");
           print(z2, 11, "Object expression pattern - third member has pattern match on rhs and should have assigned correctly");

           let { x: { y:z } = { y:21 } } = {};
           print(z, 21,  "Object declaration pattern has default on nested");


           let {
                x:{
                    y:{
                        z:{
                            k:k2 = 31
                          } = { k:21 }
                      } = { z:{ k:20 } }
                  } = { y: { z:{} } }
              } = { x:{ y:{ z:{} } } };
           print(k2, 31,  "Object declaration pattern has defaults on different level and got the inner most default");

           ({
               x:{
                   y:{
                       z:{
                           k:k2 = 31
                         } = {k:21}
                     } = {z:{k:20}}
                  } = {y:{z:{}}}
           } = {x:{y:{z:undefined}}});

           print(k2, 21,"Object expression pattern has default on different level but got the rhs");
        }
    },
    {
        name: "Object destructuring functionality with non-name pattern",
        body : function () {
           let {1:x1, 0:y1} = [11, 22];
           let {0:x2} = {"0":33};
           let {function:x3} = {function:44};

           print(x1, 22,  "Object declaration pattern should match the second index on rhs array");
           print(y1, 11,  "Object declaration pattern should match the first index on rhs array");
           print(x2, 33,  "Object declaration pattern should match '0' on rhs");
           print(x3, 44,  "Object declaration pattern should match the name even though it is a keyword");
        }
    },

    {
        name: "Object destructuring functionality with computed property",
        body : function () {
            {
               let key = 'x', x2;
               let {[key]:x1} = {x:20};
               print(x1, 20,  "Object declaration pattern should match the computed property name as a pattern");

               ({[key]:x2} = {x:20});
               print(x2, 20,  "Object expression pattern should match the computed property name as a pattern");

               ({[`abc${"def"}`]:x2} = {abcdef:30});
               print(x2, 30,  "Object expression pattern should match the the complex computed property name as a pattern");
            }

            {
                let [i,j] = [0,0];
                function getName() {
                    if (i++ == 0) return 'x';
                    else return 'y'
                }
                function getData() {
                    print(i, 0,  "RHS object should be initialized before");
                    if (j++ == 0) return 'this is x';
                    else return 'this is y';
                }
                let  {[getName()]:x1, [getName()]:y1} = {x:getData(), y:getData()};

                print(x1, 'this is x',  "Object declaration pattern depicting initializing order should match first pattern evaluated on runtime");
                print(y1, 'this is y',  "Object declaration pattern depicting initializing order should match second pattern evaluated on runtime");
            }
        }
    },

    {
        name: "Object destructuring functionality with property reference",
        body : function () {
            let a    = {};
            ({x:a.x} = {x:10});
            print(10, a.x, "Object expression pattern should assign value on property reference on object correctly");

            ({x:a['x']} = {x:20});
            print(20, a["x"], "Object expression pattern should assign value on property reference as index on object correctly");

            var obj = { x: 10, y: 20 };
            function foo() { return obj };

            ({x:foo().x, y:foo().y} = {x:20, y:30});
            print(20, obj.x,  "Object expression pattern should assign value on first property reference on a call expression correctly");
            print(30, obj.y,  "Object expression pattern should assign value on second property reference on a call expression correctly");

            (((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));
            print(201, obj.x,  "Object expression pattern (under deep parens) should assign value on first property reference on a call expression correctly");
            print(301, obj.y, "Object expression pattern (under deep parens) should assign value on second property reference on a call expression correctly");

        }
    },
    {
       name: "Destructing functionality - rest element as pattern",
       body : function () {
           let [...[a]] = [1, 2, 3];
           print(a, 1, "Having rest element as array pattern and the identifier is initialized with first value");

           let [...{1:x1}] = [1, 2, 3];
           print(x1, 2, "Having rest element as object pattern and the identifier is initialized with second value");

           let [...[,...[[x2]]]] = [[1, 2], [3, 4], 5];
           print(x2, 3, "Rest element nesting another rest element and initialized with correct value");
      }
    },
    {
        name: "Object destructuring functionality with mixed array and object pattern",
        body : function () {

            let {first:f1, second : [,{y}]} = {first:'first', second:[{y:20, z:30}, {y:21, z:31}, {y:22, z:32}]};
            print(f1, 'first', "Destructing declaration pattern should match first pattern on rhs");
            print(y, 21, "Destructing declaration pattern should match second but nested array pattern on rhs");

            let metadata = {
                title: "Foobar",
                copies: [
                   {
                    locale: "en",
                    title: "first"
                   },
                   {
                    locale: "de",
                    title: "second"
                   },
                   {
                    locale: "ps",
                    title: "third"
                   },
                ],
                url: "http://foobar.com"
            };

            let { title: englishTitle, copies: [{locale : myLocale}] } = metadata;
            print(englishTitle,   'Foobar',    "Destructing declaration pattern should match first pattern on rhs");
            print(myLocale,   'en',    "Destructing declaration pattern should match second pattern on rhs");

            ({ copies: [,{locale : myLocale}] } = metadata);
            print(myLocale,   'de',    "Destructing expression pattern should skip first array item and match second item on rhs");

            let [{x}, {z}] = [{x:1, z:20}, {x:2, z:30}, {x:3,z:40}];
            print(x,   1,    "Object under array declaration pattern should match the first pattern");
            print(z,   30,    "Object under array declaration pattern should match the second pattern");

            [{x:x}, , {z:z}] = [{x:11, z:201}, {x:21, z:301}, {x:31,z:401}];
            print(x,   11,    "Object under array expression pattern should match the first pattern");
            print(z,   401,    "Object under array expression pattern should match the third pattern");
        }
    },
    {
        name: "Object destructuring functionality with for/while",
        body : function () {
            let i = 0, data = [20, 30];
            for ( let {x:item} of [{x:20}, {x:30}]) {
                print(item,   data[i++],    "Object declaration pattern under for..of should match pattern correctly");
            }

            function data2() {
                return {x:[{y:[20]}, {y:[30]}]};
            }

            i = 0;
            for ({y:[item]} of data2().x) {
                print(item,   data[i++],    "Object expression pattern under for..of should match pattern correctly");
            }

            i = 0; data = [10, 12, 14, 16, 18];
            for (let {x, y} = {x:10, y:20}; x<y; {x:x} = {x:x+2}) {
                print(x,   data[i++],    "Object declaration pattern under native..for should match pattern correctly");
            }

            let y2 = 20;
            i = 0; data = [18, 16, 14, 12, 10];
            while ({y:y2} = {y:y2-2}) {
                print(y2,   data[i++],    "Object expression pattern under while should match pattern correctly");
                if (y2 == 10) {
                    break;
                }
            }
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

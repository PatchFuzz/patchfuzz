print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "typeof of literals, built-in types and object wrappers",
        body: function () {
            var arr = [42];

            print("object", typeof null, "typeof null");
            print("undefined", typeof undefined, "typeof undefined");
            print("string", typeof "", "typeof empty string");
            print("boolean", typeof false, "typeof false");
            print("number", typeof 0, "typeof 0");
            print("number", typeof 12345.678, "typeof 12345.678");
            print("object", typeof {}, "typeof {}");
            print("object", typeof arr, "typeof array");
            print("number", typeof arr[0], "typeof arr[0]");
            print("undefined", typeof arr[1], "typeof arr[1]");
            print("object", typeof /abc/, "typeof /abc/");
            print("function", typeof (function (){}), "typeof (function (){})");
            print("function", typeof (() => 42), "typeof (() => 42)");
            print("symbol", typeof Symbol(), "typeof Symbol()");

            
            print("object", typeof (new String("")), "typeof empty string object wrapper");
            print("object", typeof (new Boolean(false)), "typeof (new Boolean(false))");
            print("object", typeof (new Number(0)), "typeof (new Number(0))");
            print("object", typeof (new Number(12345.678)), "typeof (new Number(12345.678))");
            print("object", typeof (new Object()), "typeof (new Object())");
            print("object", typeof (new Array()), "typeof (new Array())");
            print("object", typeof (new Date(123)), "typeof (new Date(123))");
        }
    },
    {
        name: "typeof of expressions",
        body: function () {
            function f() {
                function g() { }
                return g;
            }
            print("function", typeof f(), "typeof of function call");
            print("number", typeof eval(7*6), "typeof of direct eval");
        }
    },
    {
        name: "typeof handling of undefined variables",
        body: function () {
            print("undefined", typeof x, "typeof of undeclaired var");
            print("undefined", typeof {}.x, "typeof {}.x");

            print("undefined", typeof hoisted, "typeof of hoisted var");
            var hoisted = 42;

            function inner() { var scoped = 42; }
            print("undefined", typeof scoped, "typeof of var when it's out of scope");

            print(()=>{ typeof x.y; }, ReferenceError, "typeof of property on undefined obj", "'x' is not defined");
            print(()=>{ typeof x[0]; }, ReferenceError, "typeof of property on undefined obj", "'x' is not defined");
            print(()=>{ typeof (()=>x)(); }, ReferenceError, "reference error in the function invoked by typeof", "'x' is not defined");

            print(()=>{ typeof x_let; }, ReferenceError, "typeof of 'let' variable in its dead zone", "Use before declaration");
            let x_let = 42;

            print(()=>{ typeof x_const; }, ReferenceError, "typeof of 'const' variable in its dead zone", "Use before declaration");
            const x_const = 42;
        }
    },
    {
        name: "typeof should propagate user exceptions",
        body: function () {
            function foo() { throw new Error("abc"); }
            print(()=>{typeof foo()}, Error, "exception raised from the invoked function", "abc");
            
            var obj = { get x() { throw new Error("xyz")}};
            print(()=>{typeof obj.x}, Error, "exception raised from the getter", "xyz");
        }
    },
    {
        name: "typeof should propagate stack overflow",
        body: function () {
            var obj = {};
            var handler = {
                get: function () {
                    return obj.x;
                }
            };
            obj = new Proxy(obj, handler);
            print(()=>{typeof obj.x}, Error, "recursive proxy should hit SO", "Out of stack space");
        }
    },
];
 
for (var i = 0; i < tests.length; i ++) {tests[i].body()}
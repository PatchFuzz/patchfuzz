if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}
var tests = [
    {
        name: "function declaration test",
        body: function ()
        {
            var s = "function \n\t\r foo() {var a = 5;}";
            eval(s);
            print(s, foo.toString(), "Function.toString should preserve original formatting");
        }
    },
    {
        name: "function assignment test",
        body: function ()
        {
            var s = "function \t\n\r\t foo() {var a = 5;}";
            eval("var a = " + s);
            print(s, a.toString(), "Function.toString should preserve original formatting");
            a = function (i) { i++; }
            print("function (i) { i++; }", a.toString(), "toString should add a space if one does not exist");
        }
    },
    {
        name: "generator function declaration test",
        body: function ()
        {
            var s = "function* \t\r\n  foo() {var a = 5;}";
            eval(s);
            print(s, foo.toString(), "Function.toString should preserve original formatting");
            s = "function \t\r\n*\n\r\n \t foo() {var a = 5;}";
            eval(s);
            print(s, foo.toString(), "Function.toString should preserve original formatting");
        }
    },
    {
        name: "generator function assignment test",
        body: function ()
        {
            var s = "function* \t\n\r  \t foo() {var a = 5;}";
            eval("var a = " + s);
            print(s, a.toString(), "Function.toString should preserve original formatting");
            s = "function \t\n\r  *  \t\n foo() {var a = 5;}";
            eval("var a = " + s);
            print(s, a.toString(), "Function.toString should preserve original formatting");
        }
    },
    {
        name: "Named function expression tests",
        body: function ()
        {
            var s1 = "function \n\t bar \t () {}";
            var s2 = "function \t qui \t () {}";
            eval("var o = { foo : " + s1 + "}");
            eval("o.e = " + s2);
            print(s1, o.foo.toString(), "confirm that the foo identifier does not override the name bar ");
            print(s2, o.e.toString(), "confirm that the foo identifier does not override the name qui");
        }
    },
    {
        name: "function expression tests without names",
        body: function ()
        {
            var s1 = "function \n\t  \t () {}";
            var s2 = "function \t  \t () {}";
            eval("var o = { foo : " + s1 + "}");
            eval("o.e = " + s2);
            print(s1, o.foo.toString(), "confirm that the foo identifier does not override the name bar ");
            print(s2, o.e.toString(), "confirm that the foo identifier does not override the name qui");
        }
    },
    {
        name: "internal function test",
        body: function ()
        {
            var s = "function foo() { return foo.toString(); }";
            eval(s);
            var a = foo;
            print(s, a(), "confirm that even if we call toString internally it has no effect on the name")
        }
    },
    {
        name: "class method test",
        body: function ()
        {
            eval("var qux = class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}");
            var quxObj = new qux();
            print("func(){}", qux.func.toString(), "the name should be func")
            print("method(){}", quxObj.method.toString(), "the name should be method")

            var oGet = Object.getOwnPropertyDescriptor(qux.prototype, "getter");
            var oSet = Object.getOwnPropertyDescriptor(qux.prototype, "setter");
            print("getter(){}", oGet.get.toString(), "the name should be getter");
            print("setter(v){}", oSet.set.toString(), "the name should be setter");
        }
    },
    {
        name: "class constructor test",
        body: function ()
        {
            
            
            
            

            eval("var qux = class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}");
            var quxObj = new qux();
            print("class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}",
                quxObj.constructor.toString(), "The string representation must have the syntax of a ClassExpression");

            var qux = class { };
            var quxObj = new qux();
            print("class { }", quxObj.constructor.toString(), "The string representation must have the syntax of a ClassDeclaration")
        }
    },
    {
        name: "shorthand method function test",
        body: function ()
        {
            var o = { ['f']() { }, g() { } };
            print("['f']() { }", o.f.toString());
        }
    },
    {
        name: "arrow function Test",
        body: function ()
        {
            var arrowDecl = () => { };
            print("() => { }", arrowDecl.toString(), "Make sure arrow functions remain unaffected by ie12 formatting");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

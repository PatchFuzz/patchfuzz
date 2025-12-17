if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "let assignment with simple Object",
        body: function() {
            let {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
            print(1, a);
            print(2, b);
            print({c: 3, d: 4}, rest);
        }
    },
    {
        name: "var assignment with simple Object",
        body: function() {
            var {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
            print(1, a);
            print(2, b);
            print({c: 3, d: 4}, rest);
        }
    },
    {
        name: "Rest in assignment expression",
        body: function() {
            ({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4});
            print(1, a);
            print(2, b);
            print({c: 3, d: 4}, rest);
        }
    },
    {
        name: "Rest with simple function parameter Object",
        body: function() {
            function foo({a: _a, b: _b, ..._rest}) {
                print(1, _a);
                print(2, _b);
                print({c: 3, d: 4}, _rest);
            }
            foo({a: 1, b: 2, c: 3, d: 4});
        }
    },
    {
        name: "Rest with simple catch parameter Object",
        body: function() {
            try {
                throw {a: 1, b: 2, c: 3, d: 4};
            } catch({a: _a, b: _b, ..._rest}) {
                print(1, _a);
                print(2, _b);
                print({c: 3, d: 4}, _rest);
            }
        }
    },
    {
        name: "Rest with simple for variable declaration",
        body: function() {
            bar = [{a: 1, b: 2, c: 3, d: 4}];
            for({a, b, ...rest} of bar) {
                print(1, a);
                print(2, b);
                print({c: 3, d: 4}, rest);
            }
        }
    },
    {
        name: "Rest nested in destructuring",
        body: function() {
            let {a, b, double: {c, ...rest}} = {a: 1, b: 2, double: {c: 3, d: 4}};
            print(1, a);
            print(2, b);
            print(3, c);
            print({d: 4}, rest);
        }
    },
    {
        name: "Rest with nested function parameter Object",
        body: function() {
            function foo({a: _a, b: _b, double: {c: _c, ..._rest}}) {
                print(1, _a);
                print(2, _b);
                print(3, _c);
                print({d: 4}, _rest);
            }
            foo({a: 1, b: 2, double: {c: 3, d: 4}});
        }
    },
    {
        name: "Rest with computed properties",
        body: function() {
            let {a, ["b"]:b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
            print(1, a);
            print(2, b);
            print({c: 3, d: 4}, rest);
        }
    },
    {
        name: "Rest with computed properties in function parameter binding",
        body: function() {
            function foo({a: _a, ["b"]: _b, ..._rest}) {
                print(1, _a);
                print(2, _b);
                print({c: 3, d: 4}, _rest);
            }
            foo({a: 1, b: 2, c: 3, d: 4});
        }
    },
    {
        name: "Rest inside re-entrant function",
        body: function() {
            function foo(r) {
                if (r) {
                    var {a, [foo(false)]:b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
                    print(1, a);
                    print(2, b);
                    print({c: 3, d: 4}, rest);
                } else {
                    var {one, ...rest} = {one:1, two:2, three:3};
                    print(1, one);
                    print({two: 2, three: 3}, rest);
                }
                return "b";
            }
            foo(true);
        }
    },
    {
        name: "Rest nested in Computed Value",
        body: function() {
            let {[eval("let {..._rest} = {a: 1, b: 2, c: 3, d: 4};\"a\"")]:nest, ...rest} = {a: 10, b: 20, c: 30, d: 40};
            print(10, nest);
            print({b: 20, c: 30, d: 40}, rest);
        }
    },
    {
        name: "Rest with no values left to destructure",
        body: function() {
            let {a, b, ...rest} = {a: 1, b: 2};
            print(1, a);
            print(2, b);
            print({}, rest);
        }
    },
    {
        name: "Getters in rhs object should be evaluated",
        body: function() {
            let getterExecuted = false;
            let obj = {a: 1, get b() {getterExecuted = true; return 2;}};
            let {...rest} = obj;
            print(1, rest.a);
            print(getterExecuted);
            print(2, rest.b);
        }
    },
    {
        name: "Rest modifying source object",
        body: function() {
            let val = 1;
            let source = {get a() {val++; return 1;}, get b() {return val;}};
            let {b, ...rest} = source;
            print(1, b);
            print(1, rest.a);
        }
    },
    {
        name: "Source object changed by destructuring before Rest",
        body: function() {
            let val = 1;
            let source = {get a() {val++; return 1;}, get b() {return val;}};
            let {a, ...rest} = source;
            print(1, a);
            print(2, rest.b);
        }
    },
    {
        name: "Copy only own properties",
        body: function() {
            let parent = {i: 1, j: 2};
            let child = Object.create(parent);
            child.i = 3;
            let {...rest} = child;

            print(3, child.i);
            print(2, child.j);
            print(3, rest.i);
            print(rest.hasOwnProperty("j"));
        }
    },
    {
        name: "Rest includes symbols in properties",
        body: function() {
            let sym = Symbol("foo");
            let a = {};
            a[sym] = 1;
            let {...rest} = a;
            print(1, rest[sym], "property with Symbol property name identifier should be copied over");
            print(1, Object.getOwnPropertySymbols(rest).length);
        }
    },
    {
        name: "Object Rest interacting with Arrays",
        body: function() {
            let arr = [1, 2, 3];
            let {[2]:foo, ...rest} = arr;
            print(2, Object.keys(rest).length);
            print(1, rest[0]);
            print(2, rest[1]);
            print(3, foo);
        }
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        name: "Object Rest interacting with Numbers",
        body: function() {
            let {...rest} = 1;
            print(0, Object.keys(rest).length);
        }
    },
    {
        name: "Object Rest interacting with Functions",
        body: function() {
            let {...rest} = function i() {return 1;}
            print(0, Object.keys(rest).length);
        }
    },
    {
        name: "Object Rest interacting with Strings",
        body: function() {
            let {...rest} = "edge";
            print(4, Object.keys(rest).length);
            print("e", rest[0]);
            print("d", rest[1]);
            print("g", rest[2]);
            print("e", rest[3]);
        }
    },
    {
        name: "Test Proxy Object",
        body: function() {
            let proxy = new Proxy({i: 1, j: 2}, {});
            let {...rest} = proxy;
            print(2, Object.keys(rest).length);
            print(1, rest.i);
            print(2, rest.j);
        }
    },
    {
        name: "Test Proxy Object with custom getter",
        body: function() {
            let handler = {get: function(obj, prop) {return obj[prop];}};
            let proxy = new Proxy({i: 1, j: 2}, handler);
            let {...rest} = proxy;
            print(2, Object.keys(rest).length);
            print(1, rest.i);
            print(2, rest.j);
        }
    },
    {
        name: "Test Proxy Object with custom getter and setter",
        body: function() {
            let setterCalled = false;
            let handler = {
                get: function(obj, prop) {
                    return obj[prop];
                },
                set: function(obj, prop, value) {
                    setterCalled = true;
                }
            };
            let proxy = new Proxy({i: 1, j: 2}, handler);
            let {...rest} = proxy;
            print(2, Object.keys(rest).length);
            print(1, rest.i);
            print(2, rest.j);
            print(setterCalled);
        }
    },
    {
        name: "Test Syntax Errors",
        body: function() {
            print(function () { eval("let {...rest1, ...rest2} = {a:1, b:2};"); }, SyntaxError, "Destructuring assignment can only have 1 Rest", "Destructuring rest variables must be in the last position of the expression");
            print(function () { eval("let {...{a, b}} = {a:1, b:2};"); }, SyntaxError, "Destructuring inside Rest is invalid syntax", "Expected identifier");
            print(function () { eval("let {...{a, ...rest}} = {a:1, b:2};"); }, SyntaxError, "Nested Rest is invalid syntax", "Expected identifier");
            print(function () { eval("let {...rest, a} = {a:1, b:2};"); }, SyntaxError, "Rest before other variables is invalid syntax", "Destructuring rest variables must be in the last position of the expression");
            print(function () { eval("...(rest)"); }, SyntaxError, "Rest must be inside destructuring", "Invalid use of the ... operator. Spread can only be used in call arguments or an array literal.");
            print(function () { eval("let {...(rest)} = {a:1, b:2};"); }, SyntaxError, "Destructuring expressions can only have identifier references");
            print(function () { eval("let {...++rest} = {a: 1, b: 2};"); }, SyntaxError, "Prefix operators before rest is invalid syntax", "Unexpected operator in destructuring expression");
            print(function () { eval("let {...rest++} = {a: 1, b: 2};"); }, SyntaxError, "Postfix operators after rest is invalid syntax", "Unexpected operator in destructuring expression");
            print(function () { eval("let {...rest+1} = {a: 1, b: 2};"); }, SyntaxError, "Infix operators after rest is invalid syntax", "Unexpected operator in destructuring expression");
            print(function () { eval("let {... ...rest} = {};"); }, SyntaxError, "Incomplete rest expression", "Unexpected operator in destructuring expression");
            print(function () { eval("let {...} = {};"); }, SyntaxError, "Incomplete rest expression", "Destructuring expressions can only have identifier references");
            print(function () { eval("function foo({...rest={}}){};"); }, SyntaxError, "Rest cannot be default initialized", "Unexpected default initializer");
        }
    },
    {
        name: "Test Type Errors",
        body: function() {
            print(function () { eval("let {...rest} = undefined;"); }, TypeError, "Cannot destructure undefined", "Cannot convert null or undefined to object");
            print(function () { eval("let {...rest} = null;"); }, TypeError, "Cannot destructure null", "Cannot convert null or undefined to object");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

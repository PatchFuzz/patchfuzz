print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Test new.target parsing path doesn't confuse 'new target'",
        body: function() {
            function target() { return { name: 'something' }; }
            var t = new target; 

            print('something', t.name, "new target() returned our new object instead of new.target");
        }
    },
    {
        name: "Test new.target in various block scopes'",
        body: function() {
            print(function(){{new.target;}}, "new.target one level block do not throw in a function");
            print(function(){{{new.target;}}}, "new.target two level block do not throw in a function");
            print(function(){with({}) {new.target;}}, "new.target with scope body call does not throw");
            print(function() { function parent(x) { new x();}; function child(){ with(new.target) {toString();}}; parent(child); }, "new.target with scope parameter does not throw");
            print(function(){{if(true){new.target;}}}, "new.target condition block in nested block do not throw in a function");
            print(function(){try { throw Error;} catch(e){new.target;}}, "new.target catch block do not throw in a function");
            print(function(){ var a = b = c = 1; try {} catch([a,b,c]) { new.target;}}, "new.target in CatchParamPattern block do not throw in a function");
            print(function(){ var x = function() {new.target;}; x();}, "new.target in function expression do not throw in a function");
            print(function(){ var o = { "foo" : function () { new.target}}; o.foo();}, "new.target in named function expression do not throw in a function");
        }
    },
    {
        name: "Test new.target parsing path with badly-formed meta-property references",
        body: function() {
            print(function() { return new['target']; }, TypeError, "Meta-property new.target is not a real property lookup", "Object doesn't support this action");
            print(function() { return eval('new.'); }, SyntaxError, "Something like 'new.' should fall out of the meta-property parser path", "'new.' is only valid if followed by 'target'");
            print(function() { return eval('new.target2'); }, SyntaxError, "No other keywords should produce meta-properties", "'new.' is only valid if followed by 'target'");
            print(function() { return eval('new.something'); }, SyntaxError, "No other keywords should produce meta-properties", "'new.' is only valid if followed by 'target'");
            print(function() { return eval('new.eval'); }, SyntaxError, "No other keywords should produce meta-properties", "'new.' is only valid if followed by 'target'");
        }
    },
    {
        name: "There is now a well-known PID for 'target' - ensure it doesn't break",
        body: function() {
            var obj = { target: 'something' };

            print('something', obj.target, "The name 'target' can be used as an identifier");
        }
    },
    {
        name: "new.target is not valid for assignment",
        body: function() {
            print(function() { eval("new.target = 'something';"); }, SyntaxError, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment.");
            print(function() { eval("((new.target)) = 'something';"); }, SyntaxError, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment.");
        }
    },

    {
        name: "Simple base class gets new.target correctly",
        body: function() {
            var called = false;

            class SimpleBaseClass {
                constructor() {
                    print(new.target === SimpleBaseClass, "new.target === SimpleBaseClass");

                    called = true;
                }
            }

            var myObj = new SimpleBaseClass();

            print(called, "The constructor was called.");
        }
    },
    {
        name: "Simple derived and base class passes new.target correctly",
        body: function() {
            var called = false;

            class BaseClassForB {
                constructor() {
                    print(new.target === DerivedClassForB, "new.target === DerivedClassForB");

                    called = true;
                }
            }

            class DerivedClassForB extends BaseClassForB {
                constructor() {
                    print(new.target === DerivedClassForB, "new.target === DerivedClassForB");

                    super();
                }
            }

            var myB = new DerivedClassForB();

            print(called, "The super-chain was called.");
        }
    },
    {
        name: "Simple base class with arrow function using new.target correctly",
        body: function() {
            var called = false;

            class SimpleBaseClass {
                constructor() {
                    var arrow = () => {
                        print(new.target === SimpleBaseClass, "new.target === SimpleBaseClass");

                        called = true;
                    }

                    arrow();
                }
            }

            var myObj = new SimpleBaseClass();

            print(called, "The constructor was called.");
        }
    },
    {
        name: "new.target behavior in arrow function inside derived class",
        body: function() {
            let constructed = false;

            class C {
                constructor() {
                    let arrow = () => {
                        print(D === new.target, "Class constructor implicitly invoked via super call has new.target set to derived constructor (also in arrow)");
                        constructed = true;
                    };
                    arrow();
                }
            }

            class D extends C {
                constructor() {
                    let arrow = () => {
                        print(D === new.target, "Class constructor explicitly invoked via new keyword has new.target set to that constructor (also in arrow)");
                    };
                    arrow();
                    super();
                }
            }

            let myD = new D();
            print(constructed, "We actually ran the constructor code");
        }
    },
    {
        name: "new.target behavior in a normal function",
        body: function() {
            function foo() {
                print(undefined === new.target, "Normal function call has new.target set to undefined in the function body");

                return new.target;
            }

            print(undefined === foo(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: "new.target behavior in a normal function in a new expression",
        body: function() {
            function foo() {
                print(foo === new.target, "Function called as new expression has new.target set to the function in the function body");

                return new.target;
            }

            print(foo === new foo(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target behavior in an arrow in a normal function",
        body: function() {
            function foo() {
                let arrow = () => {
                    print(undefined === new.target, "Normal function call has new.target set to undefined in the function body");

                    return new.target;
                };

                return arrow();
            }

            print(undefined === foo(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: "new.target behaviour in an arrow in a normal function in a new expression",
        body: function() {
            function foo() {
                let arrow = () => {
                    print(foo === new.target, "Function called as new expression has new.target set to the function in the function body");

                    return new.target;
                };

                return arrow();
            }

            print(foo === new foo(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target captured from class constructor via arrow",
        body: function() {
            class base {
                constructor() {
                    let arrow = () => {
                        print(derived === new.target, "Function called as new expression has new.target set to the function in the function body");

                        return new.target;
                    };

                    return arrow;
                }
            }
            class derived extends base {
                constructor() {
                    return super();
                }
            }

            let arrow = new derived();

            print(derived === arrow(), "Arrow capturing new.target returns correct value");
        }
    },
    {
        name: "new.target inline constructor case",
        body: function() {
            function foo()
            {
                return new.target;
            }
            function bar()
            {
                return new foo(); 
            }
            print(bar() == foo, "Function called as new expression has new.target set to the function in the function body when the constructor is inlined");
        }
    },
    {
        name: "new.target inline  case",
        body: function() {
            function foo()
            {
                return new.target;
            }
            function bar()
            {
                return foo(); 
            }
            print(bar() == undefined, "Normal inlined function has new.target set to undefined in the function body");
        }
    },
    {
        name: "new.target generator  case",
        body: function() {
            function *foo()
            {
                yield new.target;
            }
            print((foo()).next().value == undefined, "Generator function has new.target set to undefined in the function body");
        }
    },
    {
        name: "new.target inside eval() in function",
        body: function() {
            function func() {
               var g = ()=>eval('new.target;');
               return g();
            }

            print(undefined, func(), "plain function call");
            print(undefined, eval("func()"), "function call inside eval");
            print(undefined, eval("eval('func()')"), "function call inside nested evals");
            print(undefined, (()=>func())(), "function call inside arrow function");
            print(undefined, (()=>(()=>func())())(), "function call inside nested arrow functions");
            print(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
            print(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
            print(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");

            print(func, new func(), "plain constructor call");
            print(func, eval("new func()"), "constructor call inside eval");
            print(func, eval("eval('new func()')"), "constructor call inside nested evals");
            print(func, (()=>new func())(), "constructor call inside arrow function");
            print(func, (()=>(()=>new func())())(), "constructor call inside nested arrow functions");
            print(func, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
            print(func, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
            print(func, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
        }
    },
    {
        name: "new.target inside netsted eval, arrow function, and function defintion through eval",
        body: function() {
            eval("function func() {var f = ()=>{function g() {}; return eval('new.target')}; return f(); }" );

            print(undefined, func(), "plain function call");
            print(undefined, eval("func()"), "function call inside eval");
            print(undefined, eval("eval('func()')"), "function call inside nested evals");
            print(undefined, (()=>func())(), "function call inside arrow function");
            print(undefined, (()=>(()=>func())())(), "function call inside nested arrow functions");
            print(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
            print(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
            print(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");

            print(func, new func(), "plain constructor call");
            print(func, eval("new func()"), "constructor call inside eval");
            print(func, eval("eval('new func()')"), "constructor call inside nested evals");
            print(func, (()=>new func())(), "constructor call inside arrow function");
            print(func, (()=>(()=>new func())())(), "constructor call inside nested arrow functions");
            print(func, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
            print(func, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
            print(func, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
        }
    },
    {
        name: "direct and indirect eval with new.target",
        body: function() {
            function scriptThrows(func, errType, info, errMsg) {
                try {
                    func();
                    throw Error("No exception thrown");
                } catch (err) {
                    print(errType.name + ':' + errMsg, err.name + ':' + err.message, info);
               }
            }

            scriptThrows(()=>{ print("eval('new.target')", "samethread"); }, SyntaxError, "direct eval in global function", "Invalid use of the 'new.target' keyword");
            scriptThrows(()=>{ print("(()=>eval('new.target'))();", "samethread"); }, SyntaxError, "direct eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            scriptThrows(()=>{ print("var f=()=>eval('new.target'); (function() { return f(); })();", "samethread"); }, SyntaxError, "direct eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            print(()=>{ print("(function() { eval('new.target;') })()", "samethread"); }, "direct eval in function");
            print(()=>{ print("var f =(function() { return ()=>eval('new.target;') })(); f();", "samethread"); }, "direct eval in lambda defined in function and called by global function");

            scriptThrows(()=>{ print("(0, eval)('new.target;')", "samethread"); }, SyntaxError, "indirect eval in global function", "Invalid use of the 'new.target' keyword");
            scriptThrows(()=>{ print("(()=>(0, eval)('new.target'))();", "samethread"); }, SyntaxError, "indirect eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            scriptThrows(()=>{ print("var f=()=>(0, eval)('new.target'); (function() { return f(); })();", "samethread"); }, SyntaxError, "indirect eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            scriptThrows(()=>{ print("(function() { (0, eval)('new.target;') })()", "samethread")}, SyntaxError, "indirect eval in function", "Invalid use of the 'new.target' keyword");
            scriptThrows(()=>{ print("var f =(function() { return ()=>(0, eval)('new.target;') })(); f();", "samethread"); }, SyntaxError, "indirect eval in lambda defined in function and called by global function", "Invalid use of the 'new.target' keyword");

        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

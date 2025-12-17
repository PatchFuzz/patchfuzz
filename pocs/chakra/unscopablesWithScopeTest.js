print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Check if Symbol.unscopables is defined",
        body: function ()
        {
            print(Array.prototype.hasOwnProperty(Symbol.unscopables), "Array should have Array.prototype[@@unscopables] property");
        }
    },
    {
        name: "Check if all excepted properties exist in Array.prototype[@@unscopables] and have corresponding values",
        body: function () 
        {
            
            const unscopables = Array.prototype[Symbol.unscopables];

            const list = ["at", "copyWithin", "entries", "fill", "find", "findIndex", "flat", "flatMap", "includes", "keys", "values"];
            const length = list.length;

            for (let index = 0; index < length; index++)
            {
                const propName = list[index];
                print(unscopables[propName], true, `Array.prototype[@@unscopables].${ propName } should equal true`);
            }

        }
    },
    {
        name: "Global scope test on Arrays",
        body: function ()
        {
            var globalScope     = -1;
            var at              = globalScope;
            var find            = globalScope;
            var findIndex       = globalScope;
            var findLast        = globalScope;
            var findLastIndex   = globalScope;
            var fill            = globalScope;
            var copyWithin      = globalScope;
            var entries         = globalScope;
            var includes        = globalScope;
            var keys            = globalScope;
            var values          = globalScope;
            var flat            = globalScope;
            var flatMap         = globalScope;
            with([])
            {
                print(globalScope, at,            "at property is not brought into scope by the with statement");
                print(globalScope, find,          "find property is not brought into scope by the with statement");
                print(globalScope, findIndex,     "findIndex property is not brought into scope by the with statement");
                print(globalScope, findLast,      "findLast property is not brought into scope by the with statement");
                print(globalScope, findLastIndex, "findLastIndex property is not brought into scope by the with statement");
                print(globalScope, fill,          "fill property is not brought into scope by the with statement");
                print(globalScope, copyWithin,    "copyWithin property is not brought into scope by the with statement");
                print(globalScope, entries,       "entries property is not brought into scope by the with statement");
                print(globalScope, includes,      "includes property is not brought into scope by the with statement");
                print(globalScope, keys,          "keys property is not brought into scope by the with statement");
                print(globalScope, values,        "values property is not brought into scope by the with statement");
                print(globalScope, flat,          "flat property is not brought into scope by the with statement");
                print(globalScope, flatMap,       "flatMap property is not brought into scope by the with statement");
            }
        }
    },
    {
        name: "Add to Array.prototype[@@unscopables]",
        body: function ()
        {
            var globalScope     = -1;
            var at              = globalScope;
            var find            = globalScope;
            var findIndex       = globalScope;
            var findLast        = globalScope;
            var findLastIndex   = globalScope;
            var fill            = globalScope;
            var copyWithin      = globalScope;
            var entries         = globalScope;
            var includes        = globalScope;
            var keys            = globalScope;
            var values          = globalScope;
            var slice           = globalScope;
            var flat            = globalScope;
            var flatMap         = globalScope;
            var a = [];
            a[Symbol.unscopables]["slice"] = true;
            with(a)
            {
                print(globalScope, at,            "at property is not brought into scope by the with statement");
                print(globalScope, find,          "find property is not brought into scope by the with statement");
                print(globalScope, findIndex,     "findIndex property is not brought into scope by the with statement");
                print(globalScope, findLast,      "findLast property is not brought into scope by the with statement");
                print(globalScope, findLastIndex, "findLastIndex property is not brought into scope by the with statement");
                print(globalScope, fill,          "fill property is not brought into scope by the with statement");
                print(globalScope, copyWithin,    "copyWithin property is not brought into scope by the with statement");
                print(globalScope, entries,       "entries property is not brought into scope by the with statement");
                print(globalScope, includes,      "includes property is not brought into scope by the with statement");
                print(globalScope, keys,          "keys property is not brought into scope by the with statement");
                print(globalScope, values,        "values property is not brought into scope by the with statement");
                print(globalScope, slice,         "slice property is not brought into scope by the with statement");
                print(globalScope, flat,          "flat property is not brought into scope by the with statement");
                print(globalScope, flatMap,       "flatMap property is not brought into scope by the with statement");
            }
        }
    },
    {
        name: "Overwrite @@unscopables",
        body: function ()
        {
            var globalScope = -1;

            var c =
            {
                find : function () {},
                slice: function () {},
                [Symbol.unscopables]: {find : true }
            };

            var find      = globalScope;
            var slice     = globalScope;
            with(c)
            {
                print(globalScope != slice, "slice should be on Array scope");
                print(globalScope,  find, "find should not be on Array scope");
            }
            var props = {"slice" : true};
            c[Symbol.unscopables] = props;
            with(c)
            {
                print(globalScope != find,  "find should be on Array scope");
                print(globalScope, slice, "slice should not be on Array scope");
            }
        }

    },
    {
        name: "Adding to @@unscopables in a with statement",
        body: function ()
        {
            var globalScope = -1;
            var find      = globalScope;
            var slice     = globalScope;
            var c =
            {
                find : function () {},
                slice: function () {},
                [Symbol.unscopables]: {"find" : true}
            };


            with(c)
            {
                print(globalScope, find,  "find property is not brought into scope by the with statement");
                c[Symbol.unscopables]["slice"] = true;
                print(globalScope, slice, "slice property is not brought into scope by the with statement");
            }
        }
    },

    {
        name: "Make sure we did not break with Scope",
        body: function ()
        {
            var b =1;
            var c =
            {
                get : function ()
                {
                    return 4;
                },
                valueOf: function ()
                {
                    print("valueOf");
                    return {}; 
                 },
                toString: function ()
                {
                    print("toString");
                    return {}; 
                }
            }
            with ({a: 1 , e: { l : 1, w:2}})
            {
                function f()
                {
                    a = 2; 
                    b = a; 
                }
                f();
                print(3, Object.keys(c).length, "There are three properties on c");
                print(2, Object.keys(e).length, "There are two properties on e");
                delete e;
                print(function() {e.l}, ReferenceError, "e should no longer exist");
                print(2, a, "a should be 2");
                print(2, b, "b should be 2");
            }
            with(c)
            {
                print(4, get(), "get is "+get()+" c.get() should be 4");
            }
        }
    },
    {
        name: "Make sure we do not expose the with Object",
        body: function ()
        {
            var o = {f: function(){ return this; }, x : 2, [Symbol.unscopables]: {"x" : true}};
            var x = -1;
            var testValue = o.f();
            with (o)
            {
                eval("var b = f();");
                print(testValue, b, "This should be handled by the ScopedLdInst unwrapping, which should mean testValue and b are equivalent");
                var a = f();
                
                print(testValue, a, "This test checks testValue and a are equivalent");
                print(-1, x, "x is not brought into scope by the with statement");
                print(o.x, b.x, "x is not brought into scope by the with statement");
                print(o.x, a.x, "x is not brought into scope by the with statement");
            }
        }
    },
    {
        name: "Lambda expressions",
        body: function ()
        {
            var adder = function (x)
            {
                return function (y)
                {
                    return x + y;
                };
            };
            var find = -1;
            var findArray = [].find;
            with([])
            {
                find = adder(5);
                print(6, find(1), "This should equal 6");
            }
            print(-1 != find, "This should now be equal to a lambda");
            find = findArray;
        }
    },
    {
        name: "Operator precedence test",
        body: function ()
        {
            var obj = { a : 1 };
            var a   = false;
            with(obj)
            {
                obj[Symbol.unscopables] = {};
                a = obj[Symbol.unscopables]["a"] = true;
            }
            print(1, obj.a, " should still be 1");
            print(true, a, "a.root should be set to true RHS evaluated before assignment");
        }
    },
    {
        name: "Nested functions in with",
        body: function ()
        {
            var globalScope     = -1;
            var at              = globalScope;
            var find            = globalScope;
            var findIndex       = globalScope;
            var findLast        = globalScope;
            var findLastIndex   = globalScope;
            var fill            = globalScope;
            var copyWithin      = globalScope;
            var entries         = globalScope;
            var includes        = globalScope;
            var keys            = globalScope;
            var values          = globalScope;
            var flat            = globalScope;
            var flatMap         = globalScope;
            with([])
            {
                function foo()
                {
                    function bar()
                    {
                        function f00()
                        {
                            function bat()
                            {
                                print(globalScope, at,            "at property is not brought into scope by the with statement");
                                print(globalScope, find,          "find property is not brought into scope by the with statement");
                                print(globalScope, findIndex,     "findIndex property is not brought into scope by the with statement");
                                print(globalScope, findLast,      "findLast property is not brought into scope by the with statement");
                                print(globalScope, findLastIndex, "findLastIndex property is not brought into scope by the with statement");
                                print(globalScope, fill,          "fill property is not brought into scope by the with statement");
                                print(globalScope, copyWithin,    "copyWithin property is not brought into scope by the with statement");
                                print(globalScope, entries,       "entries property is not brought into scope by the with statement");
                                print(globalScope, includes,      "includes property is not brought into scope by the with statement");
                                print(globalScope, keys,          "keys property is not brought into scope by the with statement");
                                print(globalScope, values,        "values property is not brought into scope by the with statement");
                                print(globalScope, flat,          "flat property is not brought into scope by the with statement");
                                print(globalScope, flatMap,       "flatMap property is not brought into scope by the with statement");
                            }
                        }
                    }
                }
            }
        }
    },
    {
        name: "Nested with statements",
        body: function ()
        {
            var str =
            {
                search: function () {},
                split:  function () {},
                concat: function () {},
                reduce: function () {},
                [Symbol.unscopables]: {"search" : true, "split": true, "concat" : true, "reduce" : true}
            };

            var arr =
            {
                find:   function () {},
                keys:   function () {},
                concat: function () {},
                reduce: function () {},
                [Symbol.unscopables]: {"find" : true, "keys" : true}
            };

            var globalScope = -1;
            var find        = globalScope;
            var keys        = globalScope;
            var search      = globalScope;
            var split       = globalScope;
            var reduce      = globalScope;
            var concat      = globalScope;

            var arrConcat   = arr.concat;
            var arrReduce   = arr.reduce;
            with(arr)
            {
                with(str)
                {
                    print(globalScope, search,  "search property is not brought into scope by the with statement");
                    print(globalScope, split,   "split property is not brought into scope by the with statement");
                    print(arrConcat,  concat,   "concat should be on the array scope");
                    print(arrReduce,  reduce,   "toString should be on the array scope");
                    print(globalScope,  find,   "find property is not brought into scope by the with statement");
                    print(globalScope,  keys,   "keys property is not brought into scope by the with statement");

                }
            }
            arr[Symbol.unscopables]["concat"] = true;
            arr[Symbol.unscopables]["reduce"] = true;
            with(arr)
            {
                with(str)
                {
                    print(globalScope, search,  "search property is not brought into scope by the with statement");
                    print(globalScope,  split,  "split property is not brought into scope by the with statement");
                    print(globalScope, concat,  "concat property is not brought into scope by the with statement");
                    print(globalScope, reduce,  "toString property is not brought into scope by the with statement");
                    print(globalScope,   find,  "find property is not brought into scope by the with statement");
                    print(globalScope,   keys,  "keys property is not brought into scope by the with statement");

                }
            }
        }
    },
    {
        name: "Inheritance test",
        body: function ()
        {
            function foo ()
            {
                var p = {a: 1};
                var obj = {__proto__: p, [Symbol.unscopables]: {'a' : true}};
                var a = 2;
                with (obj)
                {
                    print(2, a, ""); 
                }
            }
            foo();
            let p = {a: 1};
            let obj = {__proto__: p, [Symbol.unscopables]: {'a' : true}};
            let a = 2;

            with (obj)
            {
                print(2, a, "");
            }

        }
    },
    {
        name: "Per object unscopables check",
        body: function ()
        {
            var globalScope = -1;
            var proto  = { a: 1, b: 2, c: 3, [Symbol.unscopables]: {'a' : true} };
            var child  = {__proto__: proto,  [Symbol.unscopables]: {'b' : true} };
            var child2 = {__proto__: proto, b: 21, c: 31, [Symbol.unscopables]: {'b' : true} };
            var a = globalScope;
            var b = globalScope;
            with(child)
            {
                print(1, a, "Get @@unscopables finds {'b' : true} on child fist so a is not unscoped");
                print(globalScope, b, "b is unscopable in child and we don't property walk to find b on proto");
                print(3, c, "c is only on the proto");
                a = 3;
                b = 4;
                print(2, proto.b, "proto.b is never set because child b is unscopable");
            }
            print(4, b, "root.b is set to 4 because child b is unscopable");
            b = globalScope;
            print(3, child.a, "child.a should be set to 3");
            print(1, proto.a, "proto.a should be set to 1");
            var a = globalScope;
            proto[Symbol.unscopables]["c"] = true;
            with(child2)
            {
                print(1, a, "Get @@unscopables finds {'b' : true} on child fist so a is not unscoped");
                print(globalScope, b, "b is unscopable in child2 and we don't property walk to find b on proto");
                print(31, c, "c is unscopable in proto but not child2");
                delete c;
                print(3, proto.c,  "No delete should have happened");
                print(3, child2.c, "delete should have happened to 31 should now be 3");
                delete c;
                print(3, proto.c,  "No delete should have happened");
                print(3, child2.c, "child2 is still 3");
            }
        }
    },
    {
        name: "@@unscopables overwritten as  something other than an object",
        body: function ()
        {
            var globalScope = -1;

            var find   = globalScope;
            var values = globalScope;
            var c =
            {
                find :  function () {},
                values: function () {},
                [Symbol.unscopables]: {"find" : true, "values" : true }
            };
           c[Symbol.unscopables] = 5;
            with(c)
            {
                print(globalScope != find,     "find should be on Array scope");
                print(globalScope != values,   "values should be on Array scope");
            }
        }
    },
    {
        name: "Eval tests",
        body: function ()
        {
            var globalScope = -1;
            var find = globalScope;
            var c =
            {
                find : function () {},
                [Symbol.unscopables]: {"find" : true }
            };

            with (c)
            {
                print(globalScope, eval("find"), "This property is not brought into scope by the with statement");
                eval("find = 2");
                print(2, eval("find"), "This property is not brought into scope by the with statement");
                print(false, eval("delete find"), "You can only delete properties");
            }
        }
    },
    {
        name: "Mutation test (like the redefinition test just in the with statement)",
        body: function ()
        {
            var o = {a: 1};
            var a = 2;
            with (o)
            {
                o[Symbol.unscopables] = {'a' : true }
                print(2, a, "root.a should have been set");
            }
        }
    },
    {
        name: "Compound assignment",
        body: function ()
        {
            var o = {a: 1};
            var a = 2;
            with (o)
            {
                a += (o[Symbol.unscopables] = {'a' : true }, 2);
                
                
                
                print(3, a, "should be 1+2");
            }
            print(1, o.a, "root.a should not have changed");
            print(3, a,   "should be 1+2");
        }
    },
    {
        name: "Global Object affect",
        body: function ()
        {
            var a = 1
            this[Symbol.unscopables] =  {"a" : true }
            print(1, a, "No with statement so @@unscopables should never hit");
            var b;
            this[Symbol.unscopables]["b"] = true;
            b = 1;
            print(1, b, "No with statement so @@unscopables should never hit");
            this[Symbol.unscopables]["c"] = true;
            var c = 1;
            print(1, b, "No with statement so @@unscopables should never hit");

        }
    },
    {
        name: "Set test",
        body: function ()
        {
            with ([])
            {
                find = 2;
                print(2, find, "find property is not brought into scope by the with statement");
            }
            print(2, find, "find property is not brought into scope by the with statement");
            
            with ([])
            {
               function test()
               {
                "use strict";
                print( function () {findIndex = 2;}, ReferenceError, "In strict mode the variable is undefined");
               }
               test();
            }

            
            let o = {[Symbol.unscopables]: {'b' : true }};
            let b = -1;
            with (o)
            {
                b = 1;
            }

            
             print(undefined, o.b, "o.b should never have been set");
             print(1, b, "root.a should have been set");
             with(o)
             {
                eval("b =2;");
             }
             print(undefined, o.b, "o.b should never have been set");
             print(2, b, "root.a should have been set");
        }
    },
    {
        name: "Define unscopables for RegExp and then check Global Scope",
        body: function ()
        {
            var globalScope = -1;
            var input       = globalScope;
            var lastMatch   = globalScope;
            var lastParen   = globalScope;
            var leftContext = globalScope;
            var props = {"input" : true, "lastMatch" : true , "lastParen" : true , "leftContext" : true};
            RegExp[Symbol.unscopables] = props;
            for( i in RegExp[Symbol.unscopables])
            {
                print(props[i], RegExp[Symbol.unscopables][i]);
            }
            print(RegExp.hasOwnProperty(Symbol.unscopables), "RegExp should have RegExp.prototype[@@unscopables] property after definition");
            with(RegExp)
            {
                print(globalScope, input,       "input property is not brought into scope by the with statement");
                print(globalScope, lastMatch,   "lastMatch property is not brought into scope by the with statement");
                print(globalScope, lastParen,   "lastParen property is not brought into scope by the with statement");
                print(globalScope, leftContext, "leftContext property is not brought into scope by the with statement");

            }
        }
    },
    {
        name: "Confirm a call to @@unscopables happens if the environment record property is called",
        body: function ()
        {
            var env = {x : 1};
            var callCount = 0;
            Object.defineProperty(env, Symbol.unscopables, {
                get: function() {
                    callCount += 1;
                }
            });

            with (env) {
                void x;
            }
            print(1, callCount, "The environment record has the requested property confirm a call happens");
        }
    },
    {
        name: "Spec Bug Fix for OS 4892049",
        body: function ()
        {
            var x = 0;
            var env = {};
            var callCount = 0;
            Object.defineProperty(env, Symbol.unscopables, {
                get: function() {
                    callCount += 1;
                }
            });

            with (env) {
                void x;
            }
            print(0, callCount, "If the environment record does not have requested property don't look up unscopables");

            var x = 0;
            var env = { x: 1 };
            env[Symbol.unscopables] = {};
            env[Symbol.unscopables].x = false;
            with (env) {
                print(1, x, "8.1.1.2.1 step 9a return  ToBoolean on the getProperty, if false property is not unscopable");
            }

        }
    },
    {
        name: "Let unscopables be Get(bindings, @@unscopables) should do prototype chain lookups on unscopables",
        body: function ()
        {
            var unscopables =  { x : true };
            Object.setPrototypeOf(unscopables, { y: true });
            var env = { x : 1, y : 2, [Symbol.unscopables] : unscopables};
            var x = -1;
            var y = -2;

            with(env)
            {
                print(-1, x, "x is on the @@unscopables object");
                print(-2, y, "y is on the @@unscopables prototype");
            }
        }
    },
    {
        name: "Array.prototype[@@unscopables] [[prototype]] slot is null",
        body: function ()
        {
            print(null, Object.getPrototypeOf(Array.prototype[Symbol.unscopables]), "Array.prototype[@@unscopables].__proto__ === null");
        }
    },
    {
        name: "Array.prototype[@@unscopables] property descriptor",
        body: function ()
        {
            var p = Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables);

            print(p.writable,    "Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables).writable === false");
            print(p.enumerable,  "Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables).enumerable === false");
            print(p.configurable, "Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables).configurable === true");
        }
    },
    {
        name: "__proto__ on a WithScopeObject",
        body: function () {
            var originalProto = Object.__proto__;
            var o = {};

            with (Object) {
                print(Object.__proto__, __proto__, "With scoped load of Object.__proto__ matches explicit Object.__proto__");
                __proto__ = o;
                print(o, __proto__,        "Object.__proto__ change in scoped 'with' matches new __proto object");
            }
            Object.__proto__ = originalProto;

            with (Object) {
                print(Object.__proto__, __proto__,         "With scoped load of Object.__proto__ matches explicit Object.__proto__");
                print(Object.__proto__, eval('__proto__'), "Eval with scoped load of Object.__proto__ matches explicit Object.__proto__");
                eval('__proto__ = o');
                print(o, __proto__,         "With scoped load of Object.__proto__ has changed after eval Object.__proto__ override");
                print(o, eval('__proto__'), "Eval with scoped load of Object.__proto__ has changed after eval Object.__proto__ override");
            }

            Object.__proto__ = originalProto;
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

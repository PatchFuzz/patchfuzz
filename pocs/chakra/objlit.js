print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Identifier = value shorthand",
        body: function() {
            var str = "prop";
            print({ str : str }, { str } );
            print({"b" : 123, str : str, "foo" : "bar"}, {"b" : 123, str, "foo" : "bar"});
        }
    },
    {
        name: "Shorthand names `get` and `set` parse without error (they are not keywords in these cases)",
        body: function () {
            var a = 0;
            var get = 1;
            var set = 2;
            var z = 3;

            var o = { get };
            var p = { set };
            var q = { get, set };
            var r = { set, get };
            var s = { get, z };
            var t = { a, set };
            var u = { a, get, z };

            print(1, o.get, "o.get = 1");
            print(2, p.set, "p.set = 2");
            print(1, q.get, "q.get = 1");
            print(2, q.set, "q.set = 2");
            print(2, r.set, "r.set = 2");
            print(1, r.get, "r.get = 1");
            print(1, s.get, "s.get = 1");
            print(3, s.z, "s.z = 3");
            print(0, t.a, "t.a = 0");
            print(2, t.set, "t.set = 2");
            print(0, u.a, "u.a = 0");
            print(1, u.get, "u.get = 1");
            print(3, u.z, "u.z = 3");
        }
    },
    {
        name: "Concise method shorthand",
        body: function() {
            var obj = {
                foo() { return "foo"; }
            };

            print("foo", obj.foo());
            print("foo", ({ foo: function() { }, foo() { return "foo"; } }).foo());
            print("foo", ({ foo(x) { }, foo() { return "foo"; } }).foo());
        }
    },
    {
        name: "Concise method shorthand with `get` and `set` names",
        body: function () {
            var o = {
                get() { return "g"; },
                set() { return "s"; }
            };

            print('g', o.get(), "o.get returns 'g'");
            print('s', o.set(), "o.set returns 's'");
        }
    },
    {
        name: "Computed property names",
        body: function() {
            var x;
            var obj = {
                ["foo" + "bar"]   : 1,
                [1 * 10 * 10]     : 2,
                [x = "notfoobar"] : 3,

                
                ["bar" + "foo"] () { return 4 },
                [2 * 10 * 10] () { return 5 },
                [x = "notbarfoo"] () { return 6 },

                
                set ["boo" + "far" ] (a) { this.x = a * 2 },
                get ["boo" + "far" ] () { return this.x },
                set [3 * 10 * 10] (a) { this.y = a * a },
                get [3 * 10 * 10] () { return this.y },
                set [x = "notboofar"] (a) { this.z = a / 3 },
                get [x = "notboofar"] () { return this.z }
            };

            print(1, obj.foobar, "String concat expr as property name");
            print(2, obj[100], "Math expr as property name");
            print(3, obj.notfoobar, "Element list as property name");

            print(4, obj.barfoo(), "String concat expr as method name");
            print(5, obj[200] (), "Math expr as method name");
            print(6, obj.notbarfoo(), "Element list as method name");

            obj.boofar=7;
            print(14, obj.boofar, "String concat expr as setter/getter method names");
            obj[300]=8;
            print(64, obj[300], "Math expr as setter/getter method names");
            obj.notboofar=9;
            print(3, obj.notboofar, "Element list as setter/getter method names");

            var protoObj = {
                ["__proto__"] : { abc : 123 }
            };
            print(protoObj.abc, undefined, "__proto__ does not get assigned as the intrinsic proto when used as a computed property name");
            var nestedProtoObj = {
                ["__proto__"] : {
                    ["__" + "proto" + "__"] : {
                        abc : 123
                    }
                }
            };
            print(nestedProtoObj.abc, undefined, "Nested dynamic __proto__ literals");
            protoObj = {
                "__proto__" : { abc : 123 }
            };
            print(protoObj.abc, 123, "__proto__ get assigned when used as a normal production");

            print(function () { eval("var b = { ['str'] }"); }, SyntaxError, "Invalid computed identifier shorthand", "Expected ':'");

            print(function () { eval("var b = { [1, 2]: 3 }"); }, SyntaxError, "Disallow 'Expression' inside 'ComputedPropertyName'", "Expected ']'");
        }
    },
    {
        name: "Duplicate property handling",
        body: function () {
            
            var obj = {
                foobar          : 1,
                "foobar"        : 2,
                ["foo" + "bar"] : 3,
                ["foo" + "bar"] : 4
            }
            print(obj.foobar, 4, "Opt-in duplicate property handling");

            var obj2 = {
                ["foo" + "bar"] : 1,
                ["foo" + "bar"] : 2
            }
            print(obj2.foobar, 2, "Duplicate computed property names are allowed");

            
            var a = "str";
            print("str", ({ a, a }).a, "Duplicate identifier references");
            print("str", ({ 'foo' : '1', foo() { return "str"; } }).foo(), "Duplicate data property and method definition");
            print("str", ({ set foo(x) { }, foo : "str" }).foo, "Duplicate accessors and data property");
            print("str", ({ get foo() {}, set foo(x) { }, foo(x) { return "str"; } }).foo(), "Duplicate accessors and method definition");
            print("a", ({ get foo() { return "str"; }, set foo(x) { }, ["foo"] : "a" }).foo, "Duplicate accessors and computed property");
        }
    },
    {
    name: "BLUE 552728: Object Literal: Use of keywords is not throwing syntax error",
    body: function () {
        
        var keywords = ["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do",
                        "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof",
                        "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while",
                        "with"];
        var futureStrict = ["implements", "let", "private", "public", "interface", "package", "protected", "static"];

        
        for (var keyword in futureStrict) {
            print(function () { eval("use strict; var " + keyword + " = 1; var o = { " + keyword + " };"); }, SyntaxError, keyword + " is a forbidden identifier reference");
        }
        
        print(function () { eval("use strict; var yield = 1; var o = { yield }; "); }, SyntaxError);

        
        for (var keyword in keywords) {
            print(function () { eval("var " + keyword + " = 1; var o = { " + keyword + " };"); }, SyntaxError, keyword + " is a forbidden identifier reference");
        }
        var yield = 1;
        var yieldObj = { yield }; 
    }
    },
    {
        name: "BLUE 551475: Duplicate property definition not throwing syntax error",
        body: function () {
            print(3, ({ set b(v) { }, b : 3 }).b, "Duplicate set accessor and data property");
            print(3, ({ get b() { }, b : 3 }).b, "Duplicate get accessor and data property");
            print(4, ({ b : 3, get b() { return 4; } }).b, "Duplicate data property and set accessor");
        }
    },
    {
        name: "BLUE 594468: Computed properties in nested object and function return statements cause assertion",
        body: function () {
            () => {
                return {
                    ["a"]: null
                }
            }
        }
    },
    {
        name: "BLUE 563637: Computed property ordering causes crash",
        body: function () {
            var a = {
                ["a"] : 10,
                b() {
                    return this.a;
                }
            };

            
            
            
            
            var original = {
                a : 1,
                b : 2,
                c : 3,
                d : 4,
                e : 5
            };

            var orderOne = {
                a : 1,
                b : 2,
                ["c"] : 3,
                d : 4,
                e : 5
            };

            var orderTwo = {
                a : 1,
                b : 2,
                c : 3,
                d : 4,
                ["e"] : 5
            };

            var orderThree = {
                ["a"] : 1,
                b : 2,
                c : 3,
                d : 4,
                e : 5
            };

            var orderFour = {
                ["a"] : 1,
                b : 2,
                ["c"] : 3,
                d : 4,
                ["e"] : 5
            };

            print(original, orderOne);
            print(original, orderTwo);
            print(original, orderThree);
            print(original, orderFour);
        }
    },
    {
        name: "BLUE 603997: Method formals redeclaration error",
        body: function() {
            print(function() { eval("var obj = { method(a) { var a; } };"); },                  "Object literal method with a var redeclaration does not throw");
            print(function() { eval("var obj = { method(a) { let a; } };"); },           SyntaxError, "Object literal method with a let redeclaration throws",       "Let/Const redeclaration");
            print(function() { eval("var obj = { method(a) { const a; } };"); },         SyntaxError, "Object literal method with a const redeclaration throws",     "Let/Const redeclaration");

            print(function() { eval("var obj = { method(a,b,c) { var b; } };"); },              "Object literal method with a var redeclaration does not throw");
            print(function() { eval("var obj = { method(a,b,c) { let b; } };"); },       SyntaxError, "Object literal method with a let redeclaration throws",       "Let/Const redeclaration");
            print(function() { eval("var obj = { method(a,b,c) { const b; } };"); },     SyntaxError, "Object literal method with a const redeclaration throws",     "Let/Const redeclaration");

            print(function() { eval("var obj = { set method(a) { var a; } };"); },              "Object literal set method with a var redeclaration does not throw");
            print(function() { eval("var obj = { set method(a) { let a; } };"); },       SyntaxError, "Object literal set method with a let redeclaration throws",   "Let/Const redeclaration");
            print(function() { eval("var obj = { set method(a) { const a; } };"); },     SyntaxError, "Object literal set method with a const redeclaration throws", "Let/Const redeclaration");
        }
    },
    {
        name: "BLUE 618132: __proto__ after a computed property",
        body: function () {
            var p = { p: 123 };
            var o = {
                ['someprop'] : 'someprop',
                __proto__: p
            };

            print(p, Object.getPrototypeOf(o));
            print(!o.hasOwnProperty("__proto__"));
            print(123, o.p);
            print('someprop', o.someprop);
            print(p, Object.getPrototypeOf(o));
        }
    },
    {
        name: "BLUE 617446: Arguments identifier syntax",
        body: function () {
            function foo() {
                var args = { arguments };
                return [args.arguments[0], args.arguments[1], args.arguments.length];
            }

            print([undefined, undefined, 0], foo(),         "Arguments object correctly works with identifier syntax");
            print([-1, 1, 2],                foo(-1, 1),    "Arguments object correctly works with identifier syntax");
            print([-1, 1, 3],                foo(-1, 1, 0), "Arguments object correctly works with identifier syntax");
        }
    },
    {
        name: "__proto__ productions",
        body: function() {
            print(function() { eval("{ __proto__ : Function.prototype, __proto__ : Array.prototype }"); }, SyntaxError, "More than one regular productions can't define __proto__");
            var __proto__ = {};
            print(function() { eval("var o = { __proto__ : Function.prototype, __proto__, __proto__ : Array.prototype };"); }, SyntaxError, "More than one regular productions can't define __proto__ even if there are other productions present");
            print({ __proto__, __proto__ : [], __proto__() {}, __proto__ } instanceof Array, "Regular production model should win over all other");
            print({ ['__proto__'] : Object.prototype, __proto__ : [], ['__proto__'] : {} } instanceof Array, "Computed property definition of __proto__ shouldn't override the regular production");

            print({ __proto__ : [] } instanceof Array, "Regular production for __proto__ should set the internal prototype");
            print(Object.getPrototypeOf({ __proto__ : null }), null, "Null should be set as the prototype when specified using normal production");
            print(Object.getPrototypeOf({ __proto__ : undefined }),  Object.prototype, "Undefined should not be set as the internal prototype for object literal");
            print(Object.getPrototypeOf({ __proto__ : "a" }), Object.prototype, "Non-object type string shouldn't be set as the internal prototype for object literal");
            print(Object.getPrototypeOf({ __proto__ : 10 }), Object.prototype, "Non-object type number shouldn't be set as the internal prototype for object literal");
            print(Object.getPrototypeOf({ __proto__ : true }), Object.prototype, "Non-object type boolean shouldn't be set as the internal prototype for object literal");
            var str = "__proto__";
            print({ [str] : [] } instanceof Array, "Computed property shouldn't set the internal prototype");
            __proto__ = [];
            print({ __proto__ } instanceof Array, "Identifier reference shouldn't set the internal prototype");
            print({__proto__() {}} instanceof Function, "Method definition shouldn't set the internal prototype");

            function f() {}
            var obj = { "__proto__" : [], ["__proto__"] : f.prototype };
            Array.prototype.x = 1;
            f.prototype.x = 10;
            print(obj.x, 1, "Regular production should assign the internal prototype");
            print(obj.__proto__.x, 10, "Computed property definition of __proto__ is added as a data member");
        }
    },
    {
        name: "computed property getters can call super methods",
        body: function () {
            function ID(x) {  return x; }

            var proto = {
                m() {  return ' proto m'; }
            };
            var object = {
                get ['a']() { return 'a' + super.m(); },
                get [ID('b')]() { return 'b' + super.m(); },
                get [0]() { return '0' + super.m(); },
                get [ID(1)]() { return '1' + super.m(); },
            };

            Object.setPrototypeOf(object, proto);

            print('a proto m', object.a, "The value of `object.a` is `'a proto m'`. Defined as `get ['a']() { return 'a' + super.m(); }`");
            print('b proto m', object.b, "The value of `object.a` is `'b proto m'`. Defined as `get [ID('b')]() { return 'b' + super.m(); }`");
            print('0 proto m', object[0], "The value of `object[0]` is `'0 proto m'`. Defined as `get [0]() { return '0' + super.m(); }`");
            print('1 proto m', object[1], "The value of `object[1]` is `'1 proto m'`. Defined as `get [ID(1)]() { return '1' + super.m(); }`");
        }
    },
    {
        name: "computed property setters can call super methods",
        body: function () {
            function ID(x) {
              return x;
            }

            var value;
            var proto = {
                m(name, v) {  value = name + ' ' + v; }
            };
            var object = {
                set ['a'](v) { super.m('a', v); },
                set [ID('b')](v) { super.m('b', v); },
                set [0](v) { super.m('0', v); },
                set [ID(1)](v) { super.m('1', v); },
            };

            Object.setPrototypeOf(object, proto);

            object.a = 2;
            print('a 2', value, "The value of `value` is `'a 2'`, after executing `object.a = 2;`");
            object.b = 3;
            print('b 3', value, "The value of `value` is `'b 3'`, after executing `object.b = 3;`");
            object[0] = 4;
            print('0 4', value, "The value of `value` is `'0 4'`, after executing `object[0] = 4;`");
            object[1] = 5;
            print('1 5', value, "The value of `value` is `'1 5'`, after executing `object[1] = 5;`");
        }
    },
    {
        name: "computed property methods can call super methods",
        body: function () {
            function ID(x) { return x; }

            var proto = {
                m() {  return ' proto m'; }
            };
            var object = {
                ['a']() { return 'a' + super.m(); },
                [ID('b')]() { return 'b' + super.m(); },
                [0]() { return '0' + super.m(); },
                [ID(1)]() { return '1' + super.m(); },
            };

            Object.setPrototypeOf(object, proto);

            print('a proto m', object.a(), "`object.a()` returns `'a proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
            print('b proto m', object.b(), "`object.b()` returns `'b proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
            print('0 proto m', object[0](), "`object[0]()` returns `'0 proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
            print('1 proto m', object[1](), "`object[1]()` returns `'1 proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
        }
    },
    {
        name: "super method calls in object literal method",
        body: function () {
            var proto = {
                method(x) {  return 'proto' + x; }
            };

            var object = {
                method(x) {  return super.method(x); }
            };

            Object.setPrototypeOf(object, proto);

            print('proto42', object.method(42), "`object.method(42)` returns `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
            print('proto42', proto.method(42), "`proto.method(42)` returns `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
            print('proto42', Object.getPrototypeOf(object).method(42), "`Object.getPrototypeOf(object).method(42)` returns `'proto42'`");
        }
    },
    {
        name: "super method calls in object literal getter",
        body: function () {
            var proto = {
                _x: 42,
                get x() {  return 'proto' + this._x; }
            };

            var object = {
                get x() {  return super.x; }
            };

            Object.setPrototypeOf(object, proto);

            print('proto42', object.x, "The value of `object.x` is `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
            print(42, object._x, "The value of `object._x` is `42`, after executing `Object.setPrototypeOf(object, proto);`");
            print(42, Object.getPrototypeOf(object)._x, "The value of `Object.getPrototypeOf(object)._x` is `42`");
        }
    },
    {
        name: "super method calls in object literal setter",
        body: function () {
            var proto = {
                _x: 0,
                set x(v) { return this._x = v; }
            };

            var object = {
                set x(v) { super.x = v; }
            };

            Object.setPrototypeOf(object, proto);

            print(1, object.x = 1, "`object.x = 1` is `1`, after executing `Object.setPrototypeOf(object, proto);`");
            print(1, object._x, "The value of `object._x` is `1`, after executing `Object.setPrototypeOf(object, proto);`");
            print(0, Object.getPrototypeOf(object)._x, "The value of `Object.getPrototypeOf(object)._x` is `0`");
        }
    },
    {
        name: "The HomeObject of Functions declared as methods is the Object prototype.",
        body: function () {
            var obj = {
                method() {  return super.toString; }
            };

            obj.toString = null;

            print(Object.prototype.toString, obj.method());
        }
    },
    {
        name: "The HomeObject accessed through default argument of Functions declared as methods is the Object prototype.",
        body: function () {
            var obj = {
                method(x = super.toString) {  return x; }
            };

            obj.toString = null;

            print(Object.prototype.toString, obj.method());
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

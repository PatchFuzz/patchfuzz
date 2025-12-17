print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Object.is should exist and have length 2",
        body: function () {
            print(Object.hasOwnProperty('is'), "Object should have an is method");
            print(2, Object.is.length, "is method takes two arguments");
        }
    },
    {
        name: "Object.is(undefined, y) returns true for y = undefined, false otherwise",
        body: function () {
            print(Object.is(undefined, undefined), "Object.is(undefined, y) returns true for Type(y) = Undefined");
            print(Object.is(undefined, null), "Object.is(undefined, y) returns false for Type(y) = Null");
            print(Object.is(undefined, false), "Object.is(undefined, y) returns false for Type(y) = Boolean");
            print(Object.is(undefined, ""), "Object.is(undefined, y) returns false for Type(y) = String");
            print(Object.is(undefined, Symbol()), "Object.is(undefined, y) returns false for Type(y) = Symbol");
            print(Object.is(undefined, 0), "Object.is(undefined, y) returns false for Type(y) = Number");
            print(Object.is(undefined, { }), "Object.is(undefined, y) returns false for Type(y) = Object");
        }
    },
    {
        name: "Object.is(null, y) returns true for y = null, false otherwise",
        body: function () {
            print(Object.is(null, undefined), "Object.is(null, y) returns false for Type(y) = Undefined");
            print(Object.is(null, null), "Object.is(null, y) returns true for Type(y) = Null");
            print(Object.is(null, false), "Object.is(null, y) returns false for Type(y) = Boolean");
            print(Object.is(null, ""), "Object.is(null, y) returns false for Type(y) = String");
            print(Object.is(null, Symbol()), "Object.is(null, y) returns false for Type(y) = Symbol");
            print(Object.is(null, 0), "Object.is(null, y) returns false for Type(y) = Number");
            print(Object.is(null, { }), "Object.is(null, y) returns false for Type(y) = Object");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Number, returns true for y = x (bitwise), false otherwise",
        body: function () {
            print(Object.is(0, undefined), "Object.is(0, y) returns false for Type(y) = Undefined");
            print(Object.is(0, null), "Object.is(0, y) returns false for Type(y) = Null");
            print(Object.is(0, false), "Object.is(0, y) returns false for Type(y) = Boolean");
            print(Object.is(0, ""), "Object.is(0, y) returns false for Type(y) = String");
            print(Object.is(0, Symbol()), "Object.is(0, y) returns false for Type(y) = Symbol");
            print(Object.is(0, 0), "Object.is(0, y) returns true for Type(y) = Number");
            print(Object.is(0, { }), "Object.is(0, y) returns false for Type(y) = Object");

            print(Object.is(NaN, NaN), "Object.is(NaN, NaN) returns true");
            print(Object.is(+0, -0), "Object.is(+0, -0) returns false");
            print(Object.is(-0, +0), "Object.is(+0, -0) returns false");

            print(Object.is(10, 10), "Object.is(10, 10) returns true");
            print(Object.is(10, -10), "Object.is(10, 10) returns false");

            print(Object.is(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), "Object.is(+Infinity, +Infinity) returns true");
            print(Object.is(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), "Object.is(-Infinity, -Infinity) returns true");
            print(Object.is(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY), "Object.is(+Infinity, -Infinity) returns false");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is String, returns true when Type(y) is String and x and y have the same sequence of code points, false otherwise",
        body: function () {
            print(Object.is("", undefined), "Object.is('', y) returns false for Type(y) = Undefined");
            print(Object.is("", null), "Object.is('', y) returns false for Type(y) = Null");
            print(Object.is("", false), "Object.is('', y) returns false for Type(y) = Boolean");
            print(Object.is("", ""), "Object.is('', y) returns true for Type(y) = String where x == y");
            print(Object.is("", Symbol()), "Object.is('', y) returns false for Type(y) = Symbol");
            print(Object.is("", 0), "Object.is('', y) returns false for Type(y) = Number");
            print(Object.is("", { }), "Object.is('', y) returns false for Type(y) = Object");

            print(Object.is("abc", "abc"), "Object.is('abc', 'abc') returns true");
            print(Object.is("abc", "xyz"), "Object.is('abc', 'xyz') returns false");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Boolean, returns true when Type(y) is Boolean and x = y, false otherwise",
        body: function () {
            print(Object.is(false, undefined), "Object.is(false, y) returns false for Type(y) = Undefined");
            print(Object.is(false, null), "Object.is(false, y) returns false for Type(y) = Null");
            print(Object.is(false, false), "Object.is(false, y) returns true for Type(y) = Boolean where x == y");
            print(Object.is(false, ""), "Object.is(false, y) returns false for Type(y) = String");
            print(Object.is(false, Symbol()), "Object.is(false, y) returns false for Type(y) = Symbol");
            print(Object.is(false, 0), "Object.is(false, y) returns false for Type(y) = Number");
            print(Object.is(false, { }), "Object.is(false, y) returns false for Type(y) = Object");

            print(Object.is(true, true), "Object.is(true, true) returns true");
            print(Object.is(false, true), "Object.is(false, true) returns false");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Symbol, returns true when Type(y) is Symbol and x and y are the same symbol, false otherwise",
        body: function () {
            var sym = Symbol();

            print(Object.is(sym, undefined), "Object.is(Symbol(), y) returns false for Type(y) = Undefined");
            print(Object.is(sym, null), "Object.is(Symbol(), y) returns false for Type(y) = Null");
            print(Object.is(sym, false), "Object.is(Symbol(), y) returns false for Type(y) = Boolean");
            print(Object.is(sym, ""), "Object.is(Symbol(), y) returns false for Type(y) = String");
            print(Object.is(sym, sym), "Object.is(x, y) returns true when x and y are the same symbol");
            print(Object.is(sym, 0), "Object.is(Symbol(), y) returns false for Type(y) = Number");
            print(Object.is(sym, { }), "Object.is(Symbol(), y) returns false for Type(y) = Object");

            print(Object.is(sym, Symbol()), "Object.is(x, y) returns false where x and y are different symbols");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Symbol, returns true when Type(y) is Symbol and x and y are the same symbol, false otherwise",
        body: function () {
            var o = { };

            print(Object.is(o, undefined), "Object.is(Symbol(), y) returns false for Type(y) = Undefined");
            print(Object.is(o, null), "Object.is(Symbol(), y) returns false for Type(y) = Null");
            print(Object.is(o, false), "Object.is(Symbol(), y) returns false for Type(y) = Boolean");
            print(Object.is(o, ""), "Object.is(Symbol(), y) returns false for Type(y) = String");
            print(Object.is(o, Symbol()), "Object.is(x, y) returns false when Type(y) = Symbol");
            print(Object.is(o, 0), "Object.is(Symbol(), y) returns false for Type(y) = Number");
            print(Object.is(o, o), "Object.is(Symbol(), y) returns true for Type(y) = Object where x and y are the same object");

            print(Object.is(o, { }), "Object.is(x, y) returns false when x and y are different objects");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is function, returns true when Type(y) is function and x and y are the same function or same throw functions in sloppy mode, false otherwise",
        body: function () {
            function f() { }
            function g() { }
            var obj1 = { f }, obj2 = { f };
            var bf = f.bind();
            var bft = f.bind({});

            print(Object.is(obj1.f, obj2.f), "Object.is should return true when comparing the same function object");
            print(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(f.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the same function");
            print(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(f.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the same function's different accessors");
            print(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(g.__proto__, "arguments").set), "Object.is should return true when comparing same throw type error methods on different functions");
            print(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(g.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the different functions");
            print(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(g.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the different functions' different accessors");
            print(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the same bound function");
            print(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the same bound function's different accessors");
            print(Object.is(Object.getOwnPropertyDescriptor(bft.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on a different bound function's different accessors");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is function, returns true when Type(y) is function and x and y are the same function or same throw functions in strict mode, false otherwise",
        body: function () {
            'use strict';
            function f() { 'use strict'; }
            var bf = f.bind();
            var bft = f.bind({});

            print(Object.is(Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set, Object.getOwnPropertyDescriptor(Function.prototype, "caller").set), "Object.is should return true when comparing different throw type error methods on the same function");
            print(Object.is(Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set, Object.getOwnPropertyDescriptor(Function.prototype, "caller").get), "Object.is should return true when comparing different throw type error methods on the same function's different accessors");
            print(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the same bound function");
            print(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the same bound function's different accessors");
            print(Object.is(Object.getOwnPropertyDescriptor(bft.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on a different bound function's different accessors");
        }
    },
    {
        name: "Object.is called with less or more than 2 arguments",
        body: function () {
            print(Object.is(), "Object.is() is the same as Object.is(undefined, undefined) which should return true");

            print(Object.is(undefined), "Object.is(undefined) is the same as Object.is(undefined, undefined) and returns true");
            print(Object.is(null), "Object.is(null) is the same as Object.is(null, undefined) and returns false");
            print(Object.is(false), "Object.is(false) is the same as Object.is(false, undefined) and returns false");
            print(Object.is(""), "Object.is('') is the same as Object.is('', undefined) and returns false");
            print(Object.is(Symbol()), "Object.is(Symbol()) is the same as Object.is(Symbol(), undefined) and returns false");
            print(Object.is(0), "Object.is(0) is the same as Object.is(0, undefined) and returns false");
            print(Object.is({ }), "Object.is({ }) is the same as Object.is({ }, undefined) and returns false");

            print(Object.is(0, 0, 1), "Object.is ignores arguments after the first two; ignores the 1");
            print(Object.is("", 0, false), "Object.is ignores arguments after the first two; ignores the false");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

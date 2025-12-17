print("..\\UnitTestFramework\\UnitTestFramework.js");

var globObj = this;

function checkAttributes(name, o, p, a) {
    var desc = Object.getOwnPropertyDescriptor(o, p);

    var msgPrefix = "Property " + p.toString() + " on " + name + " is ";

    print(!!desc, msgPrefix + "not found; there is no descriptor");

    print(a.writable, desc.writable, msgPrefix + (a.writable ? "" : "not") + " writable");
    print(a.enumerable, desc.enumerable, msgPrefix + (a.enumerable ? "" : "not") + " enumerable");
    print(a.configurable, desc.configurable, msgPrefix + (a.configurable ? "" : "not") + " configurable");
}

var tests = [
    {
        name: "AsyncFunction is not exposed on the global object",
        body: function () {
            print(globObj.hasOwnProperty("AsyncFunction"), "Global object does not have property named AsyncFunction");
        }
    },
    {
        name: "Async function instances have length and name properties",
        body: function () {
            async function af() { }

            print(af.hasOwnProperty("length"), "Async function objects have a 'length' property");
            print(af.hasOwnProperty("name"), "Async function objects have a 'name' property");

            checkAttributes("af", af, "length", { writable: false, enumerable: false, configurable: true });
            checkAttributes("af", af, "name", { writable: false, enumerable: false, configurable: true });

            print(0, af.length, "Async function object's 'length' property matches the number of parameters (0)");
            print("af", af.name, "Async function object's 'name' property matches the function's name");

            async function af2(a, b, c) { }
            print(3, af2.length, "Async function object's 'length' property matches the number of parameters (3)");
        }
    },
    {
        name: "Async functions are not constructors and do not have a prototype property",
        body: function () {
            async function af() { }

            print(function () { new af(); }, TypeError, "Async functions cannot be used as constructors", "Function is not a constructor");
            print(af.hasOwnProperty("prototype"), "Async function objects do not have a 'prototype' property");
        }
    },
    {
        name: "Async functions do not have arguments nor caller properties regardless of strictness",
        body: function () {
            async function af() { }

            print(af.hasOwnProperty("arguments"), "Async function objects do not have an 'arguments' property");
            print(af.hasOwnProperty("caller"), "Async function objects do not have a 'caller' property");

            
            Object.setPrototypeOf(af, Object.prototype); 
            print("arguments" in af, "Has operation on 'arguments' property returns false initially");
            print(undefined, af.arguments, "Get operation on 'arguments' property returns undefined initially");
            print(undefined, Object.getOwnPropertyDescriptor(af, "arguments"), "No property descriptor for 'arguments' initially");
            print(delete af.arguments, "Delete operation on 'arguments' property returns true");

            print(0, af.arguments = 0, "Set operation on 'arguments' creates new property with assigned value");
            print("arguments" in af, "Has operation on 'arguments' property returns true now");
            print(0, af.arguments, "Get operation on 'arguments' property returns property value now");
            checkAttributes("af", af, "arguments", { writable: true, enumerable: true, configurable: true });
            print(delete af.arguments, "Delete operation on 'arguments' property still returns true");
            print(af.hasOwnProperty("arguments"), "'arguments' property is gone");

            print("caller" in af, "Has operation on 'caller' property returns false initially");
            print(undefined, af.caller, "Get operation on 'caller' property returns undefined initially");
            print(undefined, Object.getOwnPropertyDescriptor(af, "caller"), "No property descriptor for 'caller' initially");
            print(delete af.caller, "Delete operation on 'caller' property returns true");

            print(0, af.caller = 0, "Set operation on 'caller' creates new property with assigned value");
            print("caller" in af, "Has operation on 'caller' property returns true now");
            print(0, af.caller, "Get operation on 'caller' property returns property value now");
            checkAttributes("af", af, "caller", { writable: true, enumerable: true, configurable: true });
            print(delete af.caller, "Delete operation on 'caller' property still returns true");
            print(af.hasOwnProperty("caller"), "'caller' property is gone");

            async function afstrict() { "use strict"; }

            print(afstrict.hasOwnProperty("arguments"), "Strict mode async function objects do not have an 'arguments' property");
            print(afstrict.hasOwnProperty("caller"), "Strict mode async function objects do not have a 'caller' property");

            Object.setPrototypeOf(afstrict, Object.prototype); 
            print("arguments" in afstrict, "Has operation on 'arguments' property returns false initially for a strict mode async function");
            print(undefined, afstrict.arguments, "Get operation on 'arguments' property returns undefined initially for a strict mode async function");
            print(undefined, Object.getOwnPropertyDescriptor(afstrict, "arguments"), "No property descriptor for 'arguments' initially for a strict mode async function");
            print(delete afstrict.arguments, "Delete operation on 'arguments' property returns true initially for a strict mode async function");

            print(0, afstrict.arguments = 0, "Set operation on 'arguments' creates new property with assigned value for a strict mode async function");
            print("arguments" in afstrict, "Has operation on 'arguments' property returns true now for a strict mode async function");
            print(0, afstrict.arguments, "Get operation on 'arguments' property returns property value now for a strict mode async function");
            checkAttributes("afstrict", afstrict, "arguments", { writable: true, enumerable: true, configurable: true });
            print(delete afstrict.arguments, "Delete operation on 'arguments' property still returns true for a strict mode async function");
            print(afstrict.hasOwnProperty("arguments"), "'arguments' property is gone for a strict mode async function");

            print("caller" in afstrict, "Has operation on 'caller' property returns false initially for a strict mode async function");
            print(undefined, afstrict.caller, "Get operation on 'caller' property returns undefined initially for a strict mode async function");
            print(undefined, Object.getOwnPropertyDescriptor(afstrict, "caller"), "No property descriptor for 'caller' initially for a strict mode async function");
            print(delete afstrict.caller, "Delete operation on 'caller' property returns true initially for a strict mode async function");

            print(0, afstrict.caller = 0, "Set operation on 'caller' creates new property with assigned value for a strict mode async function");
            print("caller" in afstrict, "Has operation on 'caller' property returns true now for a strict mode async function");
            print(0, afstrict.caller, "Get operation on 'caller' property returns property value now for a strict mode async function");
            checkAttributes("afstrict", afstrict, "caller", { writable: true, enumerable: true, configurable: true });
            print(delete afstrict.caller, "Delete operation on 'caller' property still returns true for a strict mode async function");
            print(afstrict.hasOwnProperty("caller"), "'caller' property is gone for a strict mode async function");
        }
    },
    {
        name: "Async function instances have %AsyncFunctionPrototype% as their prototype and it has the specifies properties and prototype",
        body: function () {
            async function af() { }
            var asyncFunctionPrototype = Object.getPrototypeOf(af);

            print(Function.prototype, Object.getPrototypeOf(asyncFunctionPrototype), "%AsyncFunctionPrototype%'s prototype is Function.prototype");

            print(asyncFunctionPrototype.hasOwnProperty("constructor"), "%AsyncFunctionPrototype% has 'constructor' property");
            print(asyncFunctionPrototype.hasOwnProperty(Symbol.toStringTag), "%AsyncFunctionPrototype% has [Symbol.toStringTag] property");

            checkAttributes("%AsyncFunctionPrototype%", asyncFunctionPrototype, "constructor", { writable: false, enumerable: false, configurable: true });
            checkAttributes("%AsyncFunctionPrototype%", asyncFunctionPrototype, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            print("AsyncFunction", asyncFunctionPrototype[Symbol.toStringTag], "%AsyncFunctionPrototype%'s [Symbol.toStringTag] property is 'AsyncFunction'");

            print(asyncFunctionPrototype.hasOwnProperty("prototype"), "%AsyncFunctionPrototype% does not have a 'prototype' property");
        }
    },
    {
        name: "%AsyncFunction% constructor is the value of the constructor property of %AsyncFunctionPrototype%.prototype and has the specified properties and prototype",
        body: function () {
            async function af() { }
            var asyncFunctionPrototype = Object.getPrototypeOf(af);
            var asyncFunctionConstructor = asyncFunctionPrototype.constructor;

            print(Function, Object.getPrototypeOf(asyncFunctionConstructor), "%AsyncFunction%'s prototype is Function");

            print(asyncFunctionConstructor.hasOwnProperty("name"), "%AsyncFunction% has 'name' property");
            print(asyncFunctionConstructor.hasOwnProperty("length"), "%AsyncFunction% has 'length' property");
            print(asyncFunctionConstructor.hasOwnProperty("prototype"), "%AsyncFunction% has 'prototype' property");

            checkAttributes("%AsyncFunction%", asyncFunctionConstructor, "name", { writable: false, enumerable: false, configurable: true });
            checkAttributes("%AsyncFunction%", asyncFunctionConstructor, "length", { writable: false, enumerable: false, configurable: true });
            checkAttributes("%AsyncFunction%", asyncFunctionConstructor, "prototype", { writable: false, enumerable: false, configurable: false });

            print("AsyncFunction", asyncFunctionConstructor.name, "%AsyncFunction%'s 'name' property is 'AsyncFunction'");
            print(asyncFunctionPrototype, asyncFunctionConstructor.prototype, "%AsyncFunction%'s 'prototype' property is %AsyncFunction%.prototype");
            print(1, asyncFunctionConstructor.length, "%AsyncFunction%'s 'length' property is 1");
        }
    },
    {
        name: "",
        body: function () {
            var asyncFunctionPrototype = Object.getPrototypeOf(async function () { });
            var AsyncFunction = asyncFunctionPrototype.constructor;

            var af = new AsyncFunction('return await 1;');

            print(asyncFunctionPrototype, Object.getPrototypeOf(af), "Async function created by %AsyncFunction% should have the same prototype as syntax declared async functions");

            print("anonymous", af.name, "AsyncFunction constructed async function's name is 'anonymous'");
            print("async function anonymous(\n) {return await 1;\n}", af.toString(), "toString of AsyncFunction constructed function is named 'anonymous'");

            af = new AsyncFunction('a', 'b', 'c', 'await a; await b; await c;');
            print("async function anonymous(a,b,c\n) {await a; await b; await c;\n}", af.toString(), "toString of AsyncFunction constructed function is named 'anonymous' with specified parameters");

            
            
            
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

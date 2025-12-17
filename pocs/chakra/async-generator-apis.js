print("..\\UnitTestFramework\\UnitTestFramework.js");

const globObj = this;

function checkAttributes(name, o, p, a) {
    const desc = Object.getOwnPropertyDescriptor(o, p);

    const msgPrefix = "Property " + p.toString() + " on " + name + " is ";

    print(!!desc, msgPrefix + "not found; there is no descriptor");

    print(a.writable, desc.writable, msgPrefix + (a.writable ? "" : "not") + " writable");
    print(a.enumerable, desc.enumerable, msgPrefix + (a.enumerable ? "" : "not") + " enumerable");
    print(a.configurable, desc.configurable, msgPrefix + (a.configurable ? "" : "not") + " configurable");
}

function testMethod(object, name, objectName, methodName = name) {
    print(name in object, `${objectName} should have property ${name}`);
    const method = object[name];
    print(methodName, method.name, `${objectName}.${name}.name should equal ${methodName}`);
    print('function', typeof method, `${objectName}.${name} should be a function`);
    print(method.toString().includes("[native code]"), `${objectName}.${name} should be a tagged as [native code]`);
}

const tests = [
    {
        name: "Async Generator function with overwritten prototype",
        body: function () {
            async function* agf() {};
            var gfp = agf.prototype;
            print(agf().__proto__, gfp, "Async Generator function uses prototype.");
            var obj = {};
            agf.prototype = obj;
            print(agf().__proto__, obj, "Async Generator function uses overwritten prototype.");
            agf.prototype = 1;
            print(agf().__proto__.toString(), gfp.toString(), "Generator function falls back to original prototype.");
            if (agf().__proto__ === gfp) { print("Original prototype should not be same object as gfp")}
            var originalGfp = agf().__proto__;
            print(agf().__proto__, originalGfp, "Async Generator function falls back to original prototype.");
            agf.prototype = 0;
            print(agf().__proto__, originalGfp, "Async Generator function falls back to original prototype.");
            agf.prototype = "hi";
            print(agf().__proto__, originalGfp, "Async Generator function falls back to original prototype.");
            delete gfp.prototype;
            print(agf().__proto__, originalGfp, "Async Generator function falls back to original prototype.");
        }
    },
    {
        name: "AsyncGeneratorFunction is not exposed on the global object",
        body: function () {
            print(globObj.hasOwnProperty("AsyncGeneratorFunction"), "Global object does not have property named AsyncGeneratorFunction");
        }
    },
    {
        name: "Async generator function instances have length and name properties",
        body: function () {
            async function* agf () {}
            print(agf.hasOwnProperty("length"), "Async generator function objects have a 'length' property");
            print(agf.hasOwnProperty("name"), "Async generator function objects have a 'name' property");
            checkAttributes("agf", agf, "length", { writable: false, enumerable: false, configurable: true });
            checkAttributes("agf", agf, "name", { writable: false, enumerable: false, configurable: true });
            print(0, agf.length, "Async generator function object's 'length' property matches the number of parameters (0)");
            print("agf", agf.name, "Async generator function object's 'name' property matches the function's name");
            async function* agf2(a, b, c) { }
            print(3, agf2.length, "Async generator function object's 'length' property matches the number of parameters (3)");
        }
    },
    {
        name: "Async generator functions are not constructors",
        body: function () {
            async function* agf () {}
            print(function () { new agf(); }, TypeError, "Async functions cannot be used as constructors", "Function is not a constructor");
        }
    },
    {
        name: "Async generator functions do not have arguments nor caller properties regardless of strictness",
        body: function () {
            async function* agf () {}
            print(agf.hasOwnProperty("arguments"), "Async function objects do not have an 'arguments' property");
            print(agf.hasOwnProperty("caller"), "Async function objects do not have a 'caller' property");

            
            Object.setPrototypeOf(agf, Object.prototype); 
            print("arguments" in agf, "Has operation on 'arguments' property returns false initially");
            print(undefined, agf.arguments, "Get operation on 'arguments' property returns undefined initially");
            print(undefined, Object.getOwnPropertyDescriptor(agf, "arguments"), "No property descriptor for 'arguments' initially");
            print(delete agf.arguments, "Delete operation on 'arguments' property returns true");

            print(0, agf.arguments = 0, "Set operation on 'arguments' creates new property with assigned value");
            print("arguments" in agf, "Has operation on 'arguments' property returns true now");
            print(0, agf.arguments, "Get operation on 'arguments' property returns property value now");
            checkAttributes("agf", agf, "arguments", { writable: true, enumerable: true, configurable: true });
            print(delete agf.arguments, "Delete operation on 'arguments' property still returns true");
            print(agf.hasOwnProperty("arguments"), "'arguments' property is gone");

            print("caller" in agf, "Has operation on 'caller' property returns false initially");
            print(undefined, agf.caller, "Get operation on 'caller' property returns undefined initially");
            print(undefined, Object.getOwnPropertyDescriptor(agf, "caller"), "No property descriptor for 'caller' initially");
            print(delete agf.caller, "Delete operation on 'caller' property returns true");

            print(0, agf.caller = 0, "Set operation on 'caller' creates new property with assigned value");
            print("caller" in agf, "Has operation on 'caller' property returns true now");
            print(0, agf.caller, "Get operation on 'caller' property returns property value now");
            checkAttributes("agf", agf, "caller", { writable: true, enumerable: true, configurable: true });
            print(delete agf.caller, "Delete operation on 'caller' property still returns true");
            print(agf.hasOwnProperty("caller"), "'caller' property is gone");

            async function* agfstrict() { "use strict"; }

            print(agfstrict.hasOwnProperty("arguments"), "Strict mode async function objects do not have an 'arguments' property");
            print(agfstrict.hasOwnProperty("caller"), "Strict mode async function objects do not have a 'caller' property");

            Object.setPrototypeOf(agfstrict, Object.prototype); 
            print("arguments" in agfstrict, "Has operation on 'arguments' property returns false initially for a strict mode async function");
            print(undefined, agfstrict.arguments, "Get operation on 'arguments' property returns undefined initially for a strict mode async function");
            print(undefined, Object.getOwnPropertyDescriptor(agfstrict, "arguments"), "No property descriptor for 'arguments' initially for a strict mode async function");
            print(delete agfstrict.arguments, "Delete operation on 'arguments' property returns true initially for a strict mode async function");

            print(0, agfstrict.arguments = 0, "Set operation on 'arguments' creates new property with assigned value for a strict mode async function");
            print("arguments" in agfstrict, "Has operation on 'arguments' property returns true now for a strict mode async function");
            print(0, agfstrict.arguments, "Get operation on 'arguments' property returns property value now for a strict mode async function");
            checkAttributes("agfstrict", agfstrict, "arguments", { writable: true, enumerable: true, configurable: true });
            print(delete agfstrict.arguments, "Delete operation on 'arguments' property still returns true for a strict mode async function");
            print(agfstrict.hasOwnProperty("arguments"), "'arguments' property is gone for a strict mode async function");

            print("caller" in agfstrict, "Has operation on 'caller' property returns false initially for a strict mode async function");
            print(undefined, agfstrict.caller, "Get operation on 'caller' property returns undefined initially for a strict mode async function");
            print(undefined, Object.getOwnPropertyDescriptor(agfstrict, "caller"), "No property descriptor for 'caller' initially for a strict mode async function");
            print(delete agfstrict.caller, "Delete operation on 'caller' property returns true initially for a strict mode async function");

            print(0, agfstrict.caller = 0, "Set operation on 'caller' creates new property with assigned value for a strict mode async function");
            print("caller" in agfstrict, "Has operation on 'caller' property returns true now for a strict mode async function");
            print(0, agfstrict.caller, "Get operation on 'caller' property returns property value now for a strict mode async function");
            checkAttributes("agfstrict", agfstrict, "caller", { writable: true, enumerable: true, configurable: true });
            print(delete agfstrict.caller, "Delete operation on 'caller' property still returns true for a strict mode async function");
            print(agfstrict.hasOwnProperty("caller"), "'caller' property is gone for a strict mode async function");
        }
    },
    {
        name: "Async Generator function instances have %AsyncGeneratorFunctionPrototype% as their prototype and it has the correct properties and prototype",
        body: function () {
            async function* agf () {}
            const asyncGeneratorFunctionPrototype = Object.getPrototypeOf(agf);

            print(Function.prototype, Object.getPrototypeOf(asyncGeneratorFunctionPrototype), "%AsyncGeneratorFunctionPrototype%'s prototype is Function.prototype");

            print(asyncGeneratorFunctionPrototype.hasOwnProperty("constructor"), "%AsyncGeneratorFunctionPrototype% has 'constructor' property");
            print(asyncGeneratorFunctionPrototype.hasOwnProperty(Symbol.toStringTag), "%AsyncGeneratorFunctionPrototype% has [Symbol.toStringTag] property");

            checkAttributes("%AsyncGeneratorFunctionPrototype%", asyncGeneratorFunctionPrototype, "constructor", { writable: false, enumerable: false, configurable: true });
            checkAttributes("%AsyncGeneratorFunctionPrototype%", asyncGeneratorFunctionPrototype, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            print("AsyncGeneratorFunction", asyncGeneratorFunctionPrototype[Symbol.toStringTag], "%AsyncGeneratorFunctionPrototype%'s [Symbol.toStringTag] property is 'asyncGeneratorFunction'");

            print(asyncGeneratorFunctionPrototype.hasOwnProperty("prototype"), "%AsyncGeneratorFunctionPrototype% has a 'prototype' property");
        }
    },
    {
        name : "Async Generator function instances have the correct prototype object",
        body () {
            async function* agf () {}
            const prototype = agf.prototype;
            testMethod(prototype, "next", "AsyncGenerator instance prototype");
            testMethod(prototype, "throw", "AsyncGenerator instance prototype");
            testMethod(prototype, "return", "AsyncGenerator instance prototype")
            print('constructor' in prototype, "AsyncGenerator instance prototype has prototype propert");
            print('', prototype.constructor.name, "AsyncGenerator instance prototype constructor property is anonymous");
        }
    },
    {
        name: "%AsyncGeneratorFunction% constructor is the value of the constructor property of %AsyncGeneratorFunctionPrototype% and has the specified properties and prototype",
        body: function () {
            async function* agf () {}
            const asyncGeneratorFunctionPrototype = Object.getPrototypeOf(agf);
            const asyncGeneratorFunctionConstructor = asyncGeneratorFunctionPrototype.constructor;
            const asyncGeneratorPrototype = asyncGeneratorFunctionConstructor.prototype.prototype;

            print(Function, Object.getPrototypeOf(asyncGeneratorFunctionConstructor), "%AsyncGeneratorFunction%'s prototype is Function");

            print(asyncGeneratorFunctionConstructor.hasOwnProperty("name"), "%AsyncGeneratorFunction% has 'name' property");
            print(asyncGeneratorFunctionConstructor.hasOwnProperty("length"), "%AsyncGeneratorFunction% has 'length' property");
            print(asyncGeneratorFunctionConstructor.hasOwnProperty("prototype"), "%AsyncGeneratorFunction% has 'prototype' property");

            checkAttributes("%AsyncGeneratorFunction%", asyncGeneratorFunctionConstructor, "name", { writable: false, enumerable: false, configurable: true });
            checkAttributes("%AsyncGeneratorFunction%", asyncGeneratorFunctionConstructor, "length", { writable: false, enumerable: false, configurable: true });
            checkAttributes("%AsyncGeneratorFunction%", asyncGeneratorFunctionConstructor, "prototype", { writable: false, enumerable: false, configurable: false });

            testMethod(asyncGeneratorPrototype, "next", "%AsyncGeneratorPrototype%");
            testMethod(asyncGeneratorPrototype, "throw", "%AsyncGeneratorPrototype%");
            testMethod(asyncGeneratorPrototype, "return", "%AsyncGeneratorPrototype%");
            

            print("AsyncGeneratorFunction", asyncGeneratorFunctionConstructor.name, "%AsyncGeneratorFunction%'s 'name' property is 'AsyncGeneratorFunction'");
            print(asyncGeneratorFunctionPrototype, asyncGeneratorFunctionConstructor.prototype, "%AsyncGeneratorFunction%'s 'prototype' property is %AsyncGeneratorFunction%.prototype");
            print(1, asyncGeneratorFunctionConstructor.length, "%AsyncGeneratorFunction%'s 'length' property is 1");
        }
    },
    {
        name : "%AsyncGenerator% object shape",
        body () {
            async function* agf () {}
            const asyncGenerator = agf();
            testMethod(asyncGenerator, "next", "%AsyncGeneratorPrototype%");
            testMethod(asyncGenerator, "throw", "%AsyncGeneratorPrototype%");
            testMethod(asyncGenerator, "return", "%AsyncGeneratorPrototype%");
        }
    },
    {
        name: "Anonymous Async Generator function",
        body: function () {
            const asyncGeneratorFunctionPrototype = Object.getPrototypeOf(async function* () { });
            const asyncGeneratorFunction = asyncGeneratorFunctionPrototype.constructor;

            let agf = new asyncGeneratorFunction('return await 1;');

            print(asyncGeneratorFunctionPrototype, Object.getPrototypeOf(agf), "Async function created by %AsyncGeneratorFunction% should have the same prototype as syntax declared async functions");

            print("anonymous", agf.name, "asyncGeneratorFunction constructed async function's name is 'anonymous'");
            print("async function* anonymous(\n) {return await 1;\n}", agf.toString(), "toString of asyncGeneratorFunction constructed function is named 'anonymous'");

            agf = new asyncGeneratorFunction('a', 'b', 'c', 'await a; await b; await c;');
            print("async function* anonymous(a,b,c\n) {await a; await b; await c;\n}", agf.toString(), "toString of asyncGeneratorFunction constructed function is named 'anonymous' with specified parameters");
        }
    },
    {
        name: "Other forms of Async Generator",
        body: function () {
            const obj = {
                async *oagf() {}
            }
            class cla {
                async *cagf() {}
                static async *scagf() {}
            }

            const instance = new cla();

            const asyncGeneratorFunctionPrototype = Object.getPrototypeOf(async function* () { });

            print(asyncGeneratorFunctionPrototype, Object.getPrototypeOf(instance.cagf), "Async generator class method should have the same prototype as async generator function");
            print(asyncGeneratorFunctionPrototype, Object.getPrototypeOf(cla.scagf), "Async generator class static method should have the same prototype as async generator function");
            print(asyncGeneratorFunctionPrototype, Object.getPrototypeOf(obj.oagf), "Async generator object method should have the same prototype as async generator function");
        }
    },
    {
        name: "Attempt to use Generator methods with AsyncGenerator",
        body() {
            function* gf () {}
            async function* agf() {}

            const ag = agf();
            const g = gf();

            print(()=>{g.next.call(ag)}, TypeError, "Generator.prototype.next should throw TypeError when called on an Async Generator");
            print(()=>{g.throw.call(ag)}, TypeError, "Generator.prototype.throw should throw TypeError when called on an Async Generator");
            print(()=>{g.return.call(ag)}, TypeError, "Generator.prototype.return should throw TypeError when called on an Async Generator");
        }
    }
];






for (var i = 0; i < tests.length; i ++) {tests[i].body()}

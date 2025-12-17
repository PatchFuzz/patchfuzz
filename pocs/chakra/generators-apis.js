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
        name: "GeneratorFunction is not exposed on the global object",
        body: function () {
            print(globObj.hasOwnProperty("GeneratorFunction"), "Global object does not have property named GeneratorFunction");
        }
    },
    {
        name: "Generator function object instances have length, name, and prototype properties",
        body: function () {
            function* gf() { }

            print(gf.hasOwnProperty("length"), "Generator function objects have a 'length' property");
            print(gf.hasOwnProperty("name"), "Generator function objects have a 'name' property");
            print(gf.hasOwnProperty("prototype"), "Generator function objects have a 'prototype' property");

            checkAttributes("gf", gf, "length", { writable: false, enumerable: false, configurable: true });
            checkAttributes("gf", gf, "name", { writable: false, enumerable: false, configurable: true });
            checkAttributes("gf", gf, "prototype", { writable: true, enumerable: false, configurable: false });

            function gf2(a, b, c) { }
            print(0, gf.length, "Generator function object's 'length' property matches the number of parameters (0)");
            print(3, gf2.length, "Generator function object's 'length' property matches the number of parameters (3)");
            print("gf", gf.name, "Generator function object's 'name' property matches the function's name");

            print(gf.prototype.hasOwnProperty("constructor"), "Generator function prototype objects do not get a 'constructor' property");
        }
    },
    {
        
        
        name: "Generator function length property is configurable correctly.",
        body: function () {
            function* gf(x, y) { }

            checkAttributes("gf", gf, "length", { writable: false, enumerable: false, configurable: true });

            print(2, gf.length, "Generator function object's 'length' property matches the number of parameters (2)");
            gf.length = 3;
            print(2, gf.length, "Generator function object's 'length' property should not be Writable");

            var myLength = 4;
            var getCalled = false;
            var setCalled = false;
            Object.defineProperty(gf, 'length', {
                get: function() { getCalled = true; return myLength; },
                set: function(value) { setCalled = true; myLength = value; }
            });

            print(4, gf.length, "Generator function object's 'length' property should return value from the accessor.");
            print(getCalled, gf.length, "Generator function object's 'length' property should be returned from the accessor.");

            getCalled = false;
            gf.length = 5;
            print(5, gf.length, "Generator function object's 'length' property should be set by the accessor.");
            print(getCalled, gf.length, "Generator function object's 'length' property should be returned from the accessor.");
                        
            
            checkAttributes("gf", gf, "length", { writable: undefined, enumerable: false, configurable: true });

            getCalled = false;
            setCalled = true;
            var myName = "MyGeneratorFunction";
            Object.defineProperty(gf, 'myName', {
                get: function() { getCalled = true; return myName; },
                set: function(value) { setCalled = true; myName = value; }
            });
            print("MyGeneratorFunction", gf.myName, "Generator function object's custom property should return proper value.");
            print(getCalled, gf.myName, "Generator function object's custom property should be returned from the accessor.");

            gf.myName = "MyGeneratorFunctionRenamed";
            print("MyGeneratorFunctionRenamed", gf.myName, "Generator function object's custom property should be set by the accessor.");
            print(setCalled, gf.myName, "Generator function object's custom property should be set using the accessor.");
            checkAttributes("gf", gf, "myName", { writable: undefined, enumerable: false, configurable: false });
        }
    },
    {
        name: "arguments and caller properties are absent regardless of strictness",
        body: function () {
            function* gf() { }

            print(gf.hasOwnProperty("arguments"), "Generator function objects do not have an 'arguments' property");
            print(gf.hasOwnProperty("caller"), "Generator function objects do not have a 'caller' property");

            
            Object.setPrototypeOf(gf, Object.prototype); 
            print("arguments" in gf, "Has operation on 'arguments' property returns false initially");
            print(undefined, gf.arguments, "Get operation on 'arguments' property returns undefined initially");
            print(undefined, Object.getOwnPropertyDescriptor(gf, "arguments"), "No property descriptor for 'arguments' initially");
            print(delete gf.arguments, "Delete operation on 'arguments' property returns true");

            print(0, gf.arguments = 0, "Set operation on 'arguments' creates new property with assigned value");
            print("arguments" in gf, "Has operation on 'arguments' property returns true now");
            print(0, gf.arguments, "Get operation on 'arguments' property returns property value now");
            checkAttributes("gf", gf, "arguments", { writable: true, enumerable: true, configurable: true });
            print(delete gf.arguments, "Delete operation on 'arguments' property still returns true");
            print(gf.hasOwnProperty("arguments"), "'arguments' property is gone");

            print("caller" in gf, "Has operation on 'caller' property returns false initially");
            print(undefined, gf.caller, "Get operation on 'caller' property returns undefined initially");
            print(undefined, Object.getOwnPropertyDescriptor(gf, "caller"), "No property descriptor for 'caller' initially");
            print(delete gf.caller, "Delete operation on 'caller' property returns true");

            print(0, gf.caller = 0, "Set operation on 'caller' creates new property with assigned value");
            print("caller" in gf, "Has operation on 'caller' property returns true now");
            print(0, gf.caller, "Get operation on 'caller' property returns property value now");
            checkAttributes("gf", gf, "caller", { writable: true, enumerable: true, configurable: true });
            print(delete gf.caller, "Delete operation on 'caller' property still returns true");
            print(gf.hasOwnProperty("caller"), "'caller' property is gone");

            function* gfstrict() { "use strict"; }

            print(gfstrict.hasOwnProperty("arguments"), "Strict mode generator function objects do not have an 'arguments' property");
            print(gfstrict.hasOwnProperty("caller"), "Strict mode generator function objects do not have a 'caller' property");

            Object.setPrototypeOf(gfstrict, Object.prototype); 
            print("arguments" in gfstrict, "Has operation on 'arguments' property returns false initially for a strict mode generator function");
            print(undefined, gfstrict.arguments, "Get operation on 'arguments' property returns undefined initially for a strict mode generator function");
            print(undefined, Object.getOwnPropertyDescriptor(gfstrict, "arguments"), "No property descriptor for 'arguments' initially for a strict mode generator function");
            print(delete gfstrict.arguments, "Delete operation on 'arguments' property returns true initially for a strict mode generator function");

            print(0, gfstrict.arguments = 0, "Set operation on 'arguments' creates new property with assigned value for a strict mode generator function");
            print("arguments" in gfstrict, "Has operation on 'arguments' property returns true now for a strict mode generator function");
            print(0, gfstrict.arguments, "Get operation on 'arguments' property returns property value now for a strict mode generator function");
            checkAttributes("gfstrict", gfstrict, "arguments", { writable: true, enumerable: true, configurable: true });
            print(delete gfstrict.arguments, "Delete operation on 'arguments' property still returns true for a strict mode generator function");
            print(gfstrict.hasOwnProperty("arguments"), "'arguments' property is gone for a strict mode generator function");

            print("caller" in gfstrict, "Has operation on 'caller' property returns false initially for a strict mode generator function");
            print(undefined, gfstrict.caller, "Get operation on 'caller' property returns undefined initially for a strict mode generator function");
            print(undefined, Object.getOwnPropertyDescriptor(gfstrict, "caller"), "No property descriptor for 'caller' initially for a strict mode generator function");
            print(delete gfstrict.caller, "Delete operation on 'caller' property returns true initially for a strict mode generator function");

            print(0, gfstrict.caller = 0, "Set operation on 'caller' creates new property with assigned value for a strict mode generator function");
            print("caller" in gfstrict, "Has operation on 'caller' property returns true now for a strict mode generator function");
            print(0, gfstrict.caller, "Get operation on 'caller' property returns property value now for a strict mode generator function");
            checkAttributes("gfstrict", gfstrict, "caller", { writable: true, enumerable: true, configurable: true });
            print(delete gfstrict.caller, "Delete operation on 'caller' property still returns true for a strict mode generator function");
            print(gfstrict.hasOwnProperty("caller"), "'caller' property is gone for a strict mode generator function");
        }
    },
    {
        name: "Generator functions' length property is the number of formal parameters",
        body: function () {
            function* gf0() { }
            function* gf1(a) { }
            function* gf5(a,b,c,d,e) { }

            print(0, gf0.length, "Generator function with no formal parameters has length 0");
            print(1, gf1.length, "Generator function with one formal parameter has length 1");
            print(5, gf5.length, "Generator function with five formal parameters has length 5");
        }
    },
    {
        name: "Generator function instances have GeneratorFunction.prototype as their prototype and it has the specified properties and prototype",
        body: function () {
            function* gf() { }
            var generatorFunctionPrototype = Object.getPrototypeOf(gf);

            print(Function.prototype, Object.getPrototypeOf(generatorFunctionPrototype), "GeneratorFunction.prototype's prototype is Function.prototype");

            print(generatorFunctionPrototype.hasOwnProperty("constructor"), "GeneratorFunction.prototype has 'constructor' property");
            print(generatorFunctionPrototype.hasOwnProperty("prototype"), "GeneratorFunction.prototype has 'prototype' property");
            print(generatorFunctionPrototype.hasOwnProperty(Symbol.toStringTag), "GeneratorFunction.prototype has [Symbol.toStringTag] property");

            checkAttributes("GeneratorFunction.prototype", generatorFunctionPrototype, "constructor", { writable: false, enumerable: false, configurable: true });
            checkAttributes("GeneratorFunction.prototype", generatorFunctionPrototype, "prototype", { writable: false, enumerable: false, configurable: true });
            checkAttributes("GeneratorFunction.prototype", generatorFunctionPrototype, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            print("GeneratorFunction", generatorFunctionPrototype[Symbol.toStringTag], "GeneratorFunction.prototype's [Symbol.toStringTag] property is 'GeneratorFunction'");
        }
    },
    {
        name: "GeneratorFunction constructor is the value of the constructor property of GeneratorFunction.prototype and has the specified properties and prototype",
        body: function () {
            function* gf() { }
            var generatorFunctionPrototype = Object.getPrototypeOf(gf);
            var generatorFunctionConstructor = generatorFunctionPrototype.constructor;

            print(Function, Object.getPrototypeOf(generatorFunctionConstructor), "GeneratorFunction's prototype is Function");

            print(generatorFunctionConstructor.hasOwnProperty("name"), "GeneratorFunction has 'name' property");
            print(generatorFunctionConstructor.hasOwnProperty("length"), "GeneratorFunction has 'length' property");
            print(generatorFunctionConstructor.hasOwnProperty("prototype"), "GeneratorFunction has 'prototype' property");

            checkAttributes("GeneratorFunction", generatorFunctionConstructor, "name", { writable: false, enumerable: false, configurable: true });
            checkAttributes("GeneratorFunction", generatorFunctionConstructor, "length", { writable: false, enumerable: false, configurable: true });
            checkAttributes("GeneratorFunction", generatorFunctionConstructor, "prototype", { writable: false, enumerable: false, configurable: false });

            print("GeneratorFunction", generatorFunctionConstructor.name, "GeneratorFunction's 'name' property is 'GeneratorFunction'");
            print(generatorFunctionPrototype, generatorFunctionConstructor.prototype, "GeneratorFunction's 'prototype' property is GeneratorFunction.prototype");
            print(1, generatorFunctionConstructor.length, "GeneratorFunction's 'length' property is 1");
        }
    },
    {
        name: "Generator prototype is the value of the prototype property of GeneratorFunction.prototype and has the specified properties and prototype",
        body: function () {
            function* gf() { }
            var generatorFunctionPrototype = Object.getPrototypeOf(gf);
            var generatorPrototype = generatorFunctionPrototype.prototype;
            var iteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

            print(iteratorPrototype, Object.getPrototypeOf(generatorPrototype), "Generator prototype's prototype is %IteratorPrototype%");

            print(generatorPrototype.hasOwnProperty("constructor"), "Generator prototype has 'constructor' property");
            print(generatorPrototype.hasOwnProperty("next"), "Generator prototype has 'next' property");
            print(generatorPrototype.hasOwnProperty("throw"), "Generator prototype has 'throw' property");
            print(generatorPrototype.hasOwnProperty("return"), "Generator prototype has 'return' property");
            print(generatorPrototype.hasOwnProperty(Symbol.iterator), "Generator prototype does not have [Symbol.iterator] property");
            print(generatorPrototype.hasOwnProperty(Symbol.toStringTag), "Generator prototype has [Symbol.toStringTag] property");

            checkAttributes("Generator prototype", generatorPrototype, "constructor", { writable: false, enumerable: false, configurable: true });
            checkAttributes("Generator prototype", generatorPrototype, "next", { writable: true, enumerable: false, configurable: true });
            checkAttributes("Generator prototype", generatorPrototype, "return", { writable: true, enumerable: false, configurable: true });
            checkAttributes("Generator prototype", generatorPrototype, "throw", { writable: true, enumerable: false, configurable: true });
            checkAttributes("Generator prototype", generatorPrototype, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            print(generatorFunctionPrototype, generatorPrototype.constructor, "Generator prototype's 'constructor' property is GeneratorFunction.prototype");
            print("Generator", generatorPrototype[Symbol.toStringTag], "Generator prototype's [Symbol.toStringTag] property is 'Generator'");
        }
    },
    {
        name: "Generator object prototype by default is the function's .prototype property value whose prototype is the Generator prototype",
        body: function () {
            function* gf() { }
            var generatorFunctionPrototype = Object.getPrototypeOf(gf);
            var generatorPrototype = generatorFunctionPrototype.prototype;

            var g = gf();
            print(generatorPrototype, Object.getPrototypeOf(Object.getPrototypeOf(g)), "Generator object's prototype is an object whose prototype is Generator prototype");
            print(Object.getPrototypeOf(g), gf.prototype, "Generator object's prototype comes from generator function's .prototype property");
            print(g instanceof gf, "Generator object is instance of the generator function");
        }
    },
    {
        name: "Generator function's arguments.callee should be equal to the generator function object itself",
        body: function () {
            function* gf() {
                print(arguments.callee === gf, "arguments.callee should be the same function object pointed to by gf");
            }

            gf().next();
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

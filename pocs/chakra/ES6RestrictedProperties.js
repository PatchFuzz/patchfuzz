print("..\\UnitTestFramework\\UnitTestFramework.js");

function verifyAttributes(obj, prop, attribs, name) {
    var p = Object.getOwnPropertyDescriptor(obj, prop);
    if (typeof p === "undefined") {
        print("FAIL: propertyDescriptor is undefined");
        return;
    }

    print(undefined, p, name + " does not have property named " + prop);

    print(attribs.writable, p.writable, name + " has property named " + prop + " with writable = " + attribs.writable);
    print(attribs.enumerable, p.enumerable, name + " has property named " + prop + " with enumerable = " + attribs.enumerable);
    print(attribs.configurable, p.configurable, name + " has property named " + prop + " with configurable = " + attribs.configurable);
}

function verifyHasRestrictedOwnProperties(obj, name) {
    

    
    print(obj.hasOwnProperty('caller'), name + " reports (hasOwnProperty('caller')===false)")
    print(obj.hasOwnProperty('arguments'), name + " reports (hasOwnProperty('arguments')===false)")

    var names = Object.getOwnPropertyNames(obj);
    print(-1, names.findIndex((e) => { return e === 'arguments'; }), name + " has 'arguments' own property (as reported by Object.getOwnPropertyNames)");
    print(-1, names.findIndex((e) => { return e === 'caller'; }), name + " has 'caller' own property (as reported by Object.getOwnPropertyNames)");

    verifyAttributes(obj, 'caller', { writable: false, enumerable: false, configurable: false }, name);
    print(obj.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    verifyAttributes(obj, 'arguments', { writable: false, enumerable: false, configurable: false }, name);
    print(obj.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    print(null, obj.caller, name + " says 'caller' property is null")
    print(null, obj.arguments, name + " says 'arguments' property is null")

    print(function() { obj.caller = 'something'; }, name + " has 'caller' property which can't be assigned to");
    print(function() { obj.arguments = 'something'; }, name + " has 'arguments' property which  can't be assigned to");

    
    print(function() { 'use strict'; obj.caller = 'something'; }, TypeError, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
    print(function() { 'use strict'; obj.arguments = 'something'; }, TypeError, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");

    print(null, obj.caller, name + " says 'caller' property is null")
    print(null, obj.arguments, name + " says 'arguments' property is null")

    
    print(function() { Object.defineProperty(obj, 'arguments', { value: 123 }); }, TypeError, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
    print(function() { Object.defineProperty(obj, 'caller', { value: 123 }); }, TypeError, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");

    
    
    print(delete obj.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
    print(delete obj.caller, name + " has 'caller' property as non-configurable so delete returns false");

    
    print(function() { 'use strict'; delete obj.caller; }, TypeError, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
    print(function() { 'use strict'; delete obj.arguments; }, TypeError, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}

function verifyDoesNotHaveRestrictedOwnProperties(obj, name) {
    print(obj.hasOwnProperty('caller'), name + " does not report that it has own property 'caller'")
    print(obj.hasOwnProperty('arguments'), name + " does not report that it has own property 'arguments'")

    var names = Object.getOwnPropertyNames(obj);
    print(-1, names.findIndex((e) => { return e === 'arguments'; }), name + " does not have 'arguments' own property");
    print(-1, names.findIndex((e) => { return e === 'caller'; }), name + " does not have 'caller' own property");

    print(undefined, Object.getOwnPropertyDescriptor(obj, 'caller'), name + " does not have 'caller' own property")
    print(obj.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    print(undefined, Object.getOwnPropertyDescriptor(obj, 'arguments'), name + " does not have 'arguments' own property");
    print(obj.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    print(function() { obj.caller; }, TypeError, name + " throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    print(function() { obj.arguments; }, TypeError, name + " throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    print(function() { 'use strict'; obj.caller; }, TypeError, name + " throws on access to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    print(function() { 'use strict'; obj.arguments; }, TypeError, name + " throws on access to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    print(function() { obj.caller = 'something'; }, TypeError, name + " throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    print(function() { obj.arguments = 'something'; }, TypeError, name + " throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    print(function() { 'use strict'; obj.caller = 'something'; }, TypeError, name + " throws trying to assign to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    print(function() { 'use strict'; obj.arguments = 'something'; }, TypeError, name + " throws trying to assign to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    print(delete obj.arguments, name + " allows deleting own property named 'arguments' if that property doesn't exist");
    print(function() { Object.defineProperty(obj, 'arguments', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'arguments' property");
    print(obj.hasOwnProperty('arguments'), name + " has own property 'arguments' after defineProperty")
    print(obj.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
    print(123, obj.arguments, name + " can have an own property defined for 'arguments'")
    verifyAttributes(obj, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    print(delete obj.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    print(obj.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    print(delete obj.caller, name + " allows deleting own property named 'caller' if that property doesn't exist");
    print(function() { Object.defineProperty(obj, 'caller', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'caller' property");
    print(obj.hasOwnProperty('caller'), name + " has own property 'caller' after defineProperty")
    print(obj.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    print(123, obj.caller, name + " can have an own property defined for 'caller'")
    verifyAttributes(obj, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    print(delete obj.caller, name + " allows deleting own property named 'caller' if that property does exist");
    print(obj.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")

    
    Object.setPrototypeOf(obj, Object.prototype);
    print(undefined, obj.arguments, name + " does not initially have 'arguments' property when disconnected from Function.prototype");
    print(function() { obj.arguments = 'abc'; }, name + " can set the 'arguments' property when disconnected from Function.prototype");
    print('abc', obj.arguments, name + " can set the 'arguments' property when disconnected from Function.prototype");
    print(obj.hasOwnProperty('arguments'), name + " has 'arguments' own property")
    print(obj.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
    verifyAttributes(obj, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    print(delete obj.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    print(obj.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    print(undefined, obj.caller, name + " does not initially have 'caller' property when disconnected from Function.prototype");
    print(function() { obj.caller = 'abc'; }, name + " can set the 'caller' property when disconnected from Function.prototype");
    print('abc', obj.caller, name + " can set the 'caller' property when disconnected from Function.prototype");
    print(obj.hasOwnProperty('caller'), name + " has 'caller' own property")
    print(obj.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    verifyAttributes(obj, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    print(delete obj.caller, name + " allows deleting own property named 'caller' if that property does exist");
    print(obj.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")
}

var tests = [
    {
        name: "Restricted properties of Function.prototype",
        body: function () {
            var obj = Function.prototype;

            print(obj.hasOwnProperty('caller'), "Function.prototype has own property 'caller'")
            print(obj.hasOwnProperty('arguments'), "Function.prototype has own property 'arguments'")

            var p = Object.getOwnPropertyDescriptor(obj, 'caller');
            print(p.enumerable, "Function.prototype function has 'caller' own property which is not enumerable");
            print(p.configurable, "Function.prototype function has 'caller' own property which is configurable");
            print(obj.propertyIsEnumerable('caller'), "Function.prototype says 'caller' property is not enumerable");
            print('function', typeof p.get, "Function.prototype['caller'] has get accessor function");
            print('function', typeof p.set, "Function.prototype['caller'] has set accessor function");
            print(function() { p.get(); }, TypeError, "Function.prototype['caller'] has get accessor which throws");
            print(function() { p.set(); }, TypeError, "Function.prototype['caller'] has set accessor which throws");

            var p2 = Object.getOwnPropertyDescriptor(obj, 'arguments');
            print(p2.enumerable, "Function.prototype function has 'arguments' own property which is not enumerable");
            print(p2.configurable, "Function.prototype function has 'arguments' own property which is configurable");
            print(obj.propertyIsEnumerable('arguments'), "Function.prototype says 'arguments' property is not enumerable");
            print('function', typeof p2.get, "Function.prototype['arguments'] has get accessor function");
            print('function', typeof p2.set, "Function.prototype['arguments'] has set accessor function");
            print(function() { p2.get(); }, TypeError, "Function.prototype['arguments'] has get accessor which throws");
            print(function() { p2.set(); }, TypeError, "Function.prototype['arguments'] has set accessor which throws");

            
            print(p.get === p.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'caller' property");
            print(p2.get === p2.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'arguments' property");
            print(p.get === p2.get, "Function.prototype returns the same ThrowTypeError function for accessor of both 'arguments' and 'caller' properties");

            var names = Object.getOwnPropertyNames(obj);
            print(-1, names.findIndex((e) => { return e === 'arguments'; }), "Function.prototype has 'arguments' own property");
            print(-1, names.findIndex((e) => { return e === 'caller'; }), "Function.prototype has 'caller' own property");

            
            print(function() { obj.caller; }, TypeError, "Function.prototype throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            print(function() { obj.arguments; }, TypeError, "Function.prototype throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            print(function() { obj.caller = 'something'; }, TypeError, "Function.prototype throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            print(function() { obj.arguments = 'something'; }, TypeError, "Function.prototype throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

        }
    },
    {
        name: "Restricted properties of non-strict function",
        body: function () {
            function nonStrictFunc() {};

            verifyHasRestrictedOwnProperties(nonStrictFunc, "Non-strict function");
        }
    },
    {
        name: "Restricted properties of strict function",
        body: function () {
            function strictFunc() { 'use strict'; };

            verifyDoesNotHaveRestrictedOwnProperties(strictFunc, "Strict function");
        }
    },
    {
        name: "Restricted properties of class",
        body: function () {
            class A { };

            verifyDoesNotHaveRestrictedOwnProperties(A, "Class");
        }
    },
    {
        name: "Restricted properties of class static method",
        body: function () {
            class A {
                static static_method() { }
            };

            verifyDoesNotHaveRestrictedOwnProperties(A.static_method, "Class static method");
        }
    },
    {
        name: "Restricted properties of strict-mode class static method",
        body: function () {
            class A {
                static static_method() { 'use strict'; }
            };

            verifyDoesNotHaveRestrictedOwnProperties(A.static_method, "Class strict-mode static method");
        }
    },
    {
        name: "Restricted properties of class method",
        body: function () {
            class A {
                method() { }
            };

            verifyDoesNotHaveRestrictedOwnProperties(A.prototype.method, "Class method");
        }
    },
    {
        name: "Restricted properties of strict-mode class method",
        body: function () {
            class A {
                method() { 'use strict'; }
            };

            verifyDoesNotHaveRestrictedOwnProperties(A.prototype.method, "Class strict-mode method");
        }
    },
    {
        name: "Restricted properties of class with 'caller' static method",
        body: function () {
            var obj = class A {
                static caller() { return 42; }
            };

            print(obj.hasOwnProperty('caller'), "Class does has own property 'caller'")
            print(obj.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")

            print('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'caller')), "Class does not have 'caller' own property")
            print(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'arguments')), "Class does not have 'arguments' own property");
            print('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(obj).sort()), "Class does not have 'caller' and 'arguments' own properties");

            print(42, obj.caller(), "Accessing the 'caller' property is not restricted");
            print(function() { obj.arguments; }, TypeError, "Class throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
        }
    },
    {
        name: "Restricted properties of class with 'arguments' static get method",
        body: function () {
            var obj = class A {
                static get arguments() { return 42; }
            };

            print(obj.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
            print(obj.hasOwnProperty('arguments'), "Class has own property 'arguments'")

            print(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'caller')), "Class does not have 'caller' own property")
            print('{"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'arguments')), "Class has 'arguments' own property");
            print('["arguments","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(obj).sort()), "Class has 'arguments' own property, no 'caller' own property");

            print(function() { obj.caller; }, TypeError, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            print(42, obj.arguments, "Accessing the 'arguments' property is not restricted");
        }
    },
    {
        name: "Restricted properties of class with 'arguments' set method",
        body: function () {
            var my_v;
            class A {
                set arguments(v) { my_v = v; }
            };
            var obj = A;

            print(obj.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
            print(obj.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")

            print(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'caller')), "Class does not have 'caller' own property")
            print(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'arguments')), "Class has 'arguments' own property");
            print('["length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(obj).sort()), "Class has 'arguments' own property, no 'caller' own property");

            print(function() { obj.caller; }, TypeError, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            print(function() { obj.arguments; }, TypeError, "Class method throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            var a = new A();

            print(a.hasOwnProperty('caller'), "Class instance does not report that it has own property 'caller'")
            print(a.hasOwnProperty('arguments'), "Class instance does not report that it has own property 'arguments'")

            print(a.__proto__.hasOwnProperty('caller'), "Class prototype does not report that it has own property 'caller'")
            print(a.__proto__.hasOwnProperty('arguments'), "Class prototype has own property 'arguments'")

            a.arguments = 50;
            print(50, my_v, "Accessing the 'arguments' property was not restricted");

            print(undefined, a.caller, "Access to class instance 'caller' property doesn't throw - instance is not a function");

            a.caller = 123;

            print(123, a.caller, "Assignment to class instance 'caller' property works normally");
        }
    },
    {
        name: "Restricted properties of lambda",
        body: function () {
            var obj = () => { }

            verifyDoesNotHaveRestrictedOwnProperties(obj, "Lambda");
        }
    },
    {
        name: "Restricted properties of strict-mode lambda",
        body: function () {
            var obj = () => { 'use strict'; }

            verifyDoesNotHaveRestrictedOwnProperties(obj, "Strict-mode lambda");
        }
    },
    {
        name: "Restricted properties of bound function",
        body: function () {
            function target() {}
            var obj = target.bind(null);

            verifyDoesNotHaveRestrictedOwnProperties(obj, "Bound function");
        }
    },
    {
        name: "Restricted properties of bound strict-mode function",
        body: function () {
            function target() { 'use strict'; }
            var obj = target.bind(null);

            verifyDoesNotHaveRestrictedOwnProperties(obj, "Bound strict-mode function");
        }
    },
    {
        name: "Restricted properties of generator function",
        body: function () {
            function* gf() { }

            verifyDoesNotHaveRestrictedOwnProperties(gf, "Generator function");
        }
    },
    {
        name: "Restricted properties of strict-mode generator function",
        body: function () {
            function* gf() { 'use strict'; }

            verifyDoesNotHaveRestrictedOwnProperties(gf, "Generator strict-mode function");
        }
    },
    {
        name: "Restricted properties of object-literal function",
        body: function () {
            var obj = { func() { } }

            verifyDoesNotHaveRestrictedOwnProperties(obj.func, "Object-literal function");
        }
    },
    {
        name: "Restricted properties of strict-mode object-literal function",
        body: function () {
            var obj = { func() { 'use strict'; } }

            verifyDoesNotHaveRestrictedOwnProperties(obj.func, "Object-literal strict-mode function");
        }
    },
    {
        name: "Destructive operations on Function.prototype", 
        body: function() {
            var obj = Function.prototype;

            print(function() { Object.defineProperty(obj, 'arguments', { value: 42 }); }, "Allow redefining configurable property 'arguments'");
            print(function() { Object.defineProperty(obj, 'caller', { value: 123 }); }, "Allow redefining configurable property 'caller'");
            print(obj.arguments, 42);
            print(obj.caller, 123);

            print(function() { 'use strict'; print(delete obj.caller); }, "Function.prototype has 'caller' own property as configurable, so delete is true; strict mode has no effect");
            print(function() { 'use strict'; print(delete obj.arguments); }, "Function.prototype has 'arguments' own property as configurable, so delete is true; strict mode has no effect");
            print(obj.arguments, undefined);
            print(obj.caller, undefined);

            
            print(delete obj.arguments, "Function.prototype has 'arguments' property as configurable so delete returns true (even after first delete)");
            print(delete obj.caller, "Function.prototype has 'caller' property as configurable so delete returns true (even after first delete)");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

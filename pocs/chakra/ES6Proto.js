print("..\\UnitTestFramework\\UnitTestFramework.js");

var pd = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
var __proto__set = pd.set;
var __proto__get = pd.get;

var tests = [
    {
        name: "Sanity base cases",
        body: function() {
            print('function', typeof __proto__set, "Object#__proto__ is an accessor property with set method");
            print('function', typeof __proto__get, "Object#__proto__ is an accessor property with get method");
        }
    },
    {
        name: "Error conditions for Object#__proto__",
        body: function () {
            print(function() { __proto__set.call(); }, TypeError, "set Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
            print(function() { __proto__set.call(undefined); }, TypeError, "set Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
            print(function() { __proto__set.call(null); }, TypeError, "set Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");

            print(function() { __proto__get.call(); }, TypeError, "get Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
            print(function() { __proto__get.call(undefined); }, TypeError, "get Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
            print(function() { __proto__get.call(null); }, TypeError, "get Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");
        }
    },
    {
        name: "Cases where Object#__proto__ shouldn't change [[Prototype]]",
        body: function () {
            var p = {};
            var o = Object.create(p);

            print(undefined, __proto__set.call(o), "set Object#__proto__ returns undefined if the proto argument is not passed");
            print(p, __proto__get.call(o), "[[Prototype]] slot of o was not changed");
            print(undefined, __proto__set.call(o, undefined), "set Object#__proto__ returns undefined if the proto argument is undefined");
            print(p, __proto__get.call(o), "[[Prototype]] slot of o was not changed");
            print(undefined, __proto__set.call(o, 5), "set Object#__proto__ returns undefined if the proto argument is non-object");
            print(p, __proto__get.call(o), "[[Prototype]] slot of o was not changed");

            var n = 5;
            print(undefined, __proto__set.call(n, {}), "set Object#__proto__ returns undefined if the this argument is non-object when proto argument is supplied");
            print(Number.prototype, __proto__get.call(n), "[[Prototype]] slot of n was not changed");
        }
    },
    {
        name: "Simple validation of Object#__proto__",
        body: function () {
            var p = {};
            var o = Object.create(p);

            print(undefined, __proto__set.call(o, null), "set Object#__proto__ returns undefined if the proto argument is null");
            print(null, __proto__get.call(o), "[[Prototype]] slot of o was changed to null");

            print(undefined, __proto__set.call(o, p), "set Object#__proto__ returns undefined if the proto argument is object");
            print(p, __proto__get.call(o), "[[Prototype]] slot of o was changed to p");
        }
    },
    {
        name: "Error conditions for Object.setPrototypeOf/getPrototypeOf",
        body: function () {
            print(function() { Object.setPrototypeOf(); }, TypeError, "Object.setPrototypeOf throws when called with no arguments", "Object.setPrototypeOf: argument is not an Object");
            print(function() { Object.setPrototypeOf(undefined); }, TypeError, "Object.setPrototypeOf throws when object argument is undefined", "Object.setPrototypeOf: argument is not an Object");
            print(function() { Object.setPrototypeOf(null); }, TypeError, "Object.setPrototypeOf throws when object argument is null", "Object.setPrototypeOf: argument is not an Object");

            print(function() { Object.setPrototypeOf({}); }, TypeError, "Object.setPrototypeOf throws when proto is not passed", "Object.setPrototypeOf: argument is not an Object and is not null");
            print(function() { Object.setPrototypeOf({}, undefined); }, TypeError, "Object.setPrototypeOf throws when proto is undefined", "Object.setPrototypeOf: argument is not an Object and is not null");
            print(function() { Object.setPrototypeOf({}, 5); }, TypeError, "Object.setPrototypeOf throws when proto is not object", "Object.setPrototypeOf: argument is not an Object and is not null");

            print(function() { Object.getPrototypeOf(); }, TypeError, "Object.getPrototypeOf throws when argument is not passed", "Object.getPrototypeOf: argument is not an Object");
            print(function() { Object.getPrototypeOf(undefined); }, TypeError, "Object.getPrototypeOf throws when argument is undefined", "Object.getPrototypeOf: argument is not an Object");
            print(function() { Object.getPrototypeOf(null); }, TypeError, "Object.getPrototypeOf throws when argument is null", "Object.getPrototypeOf: argument is not an Object");
        }
    },
    {
        name: "Object.setPrototypeOf used on non-object argument doesn't change [[Prototype]]",
        body: function () {
            var n = 5;
            print(5, Object.setPrototypeOf(n, {}), "Object.setPrototypeOf returns first argument if argument is non-object when proto argument is supplied");
            print(Number.prototype, Object.getPrototypeOf(n), "[[Prototype]] slot of n was not changed");
        }
    },
    {
        name: "Simple validation of Object.setPrototypeOf",
        body: function () {
            var p = {};
            var o = Object.create(p);

            print(o, Object.setPrototypeOf(o, null), "Object.setPrototypeOf returns o if the proto argument is null");
            print(null, Object.getPrototypeOf(o), "[[Prototype]] slot of o was changed to null");

            print(o, Object.setPrototypeOf(o, p), "Object.setPrototypeOf returns o if the proto argument is object");
            print(p, Object.getPrototypeOf(o), "[[Prototype]] slot of o was changed to p");
        }
    },
    {
        name: "__proto__ plus missing property",
        body: function () {
            function main() {
                var l0 = {
                    a: -1,
                    b: 0x414141,
                };
                l0.a = (l0.a) + (l0.a);

                l0.y = {};
                l0.__defineGetter__('z', function () {
                    delete l0.a;
                    return 5;
                });
                l0.a = (l0.a) - (l0.z);

                l0.__proto__ = l0.y;
                l0.z = (l0.z) / (l0.a);
                var o = {};
                o.a = 42;
                l0.y.__proto__ = o;
                return l0.a;
            }
            for (var i = 0; i < 20; i++) {
                print(42, main(), "Missing property on local instance should be found in prototype chain");
            }
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

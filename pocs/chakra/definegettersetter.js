print("..\\UnitTestFramework\\UnitTestFramework.js");

var globalObject = this;

var tests = {
    test01: {
        name: "__defineGetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        body: function () {
            var o = { };
            var result = o.__defineGetter__("a", function () { return 1234; });

            print(result === undefined, "__defineGetter__ should return undefined");
            print(o.a === 1234, "Getter should call the given function and return its value");

            var d = Object.getOwnPropertyDescriptor(o, "a");

            print(d.enumerable, "Getter accessor property should be enumerable");
            print(d.configurable, "Getter accessor property should be configurable");
        }
    },
    test02: {
        name: "__defineSetter__ defines an accessor property with getter as specified and enumerable and configurable set to true",
        body: function () {
            var o = { v: 0 };
            var result = o.__defineSetter__("a", function (v) { throw new Error(); });

            print(result === undefined, "__defineSetter__ should return undefined");
            print(function () { o.a = 1234; }, Error, "Setter should call the given function");

            var d = Object.getOwnPropertyDescriptor(o, "a");

            print(d.enumerable, "Setter accessor property should be enumerable");
            print(d.configurable, "Setter accessor property should be configurable");
        }
    },
    test03: {
        name: "__defineGetter__ should not assign a setter and __defineSetter__ should not define a getter",
        body: function () {
            var o = { };

            o.__defineGetter__("a", function () { return 1234; });
            o.__defineSetter__("b", function (v) { });

            var da = Object.getOwnPropertyDescriptor(o, "a");
            var db = Object.getOwnPropertyDescriptor(o, "b");

            print(da.set === undefined, "__defineGetter__ does not add a setter");
            print(db.get === undefined, "__defineSetter__ does not add a getter");

            o.a = 10;
            print(o.a === 1234, "Getter only property should be unaffected by uses in setter context");

            print(o.b === undefined, "Setter only property should return undefined if used in getter context");
        }
    },
    test04: {
        name: "get and set functions should have access to the object's properties via this",
        body: function () {
            var o = { x: 1, y: 2, z: 3 };

            o.__defineGetter__("a", function () { return this.x + this.y + this.z; });
            o.__defineSetter__("b", function (v) { this.x = v; this.y = v * 2; this.z = v * 3; });

            print(o.a === 6, "Getter should return 1 + 2 + 3");
            o.b = 2;
            print(o.a === 12, "Getter should now return 2 + 4 + 6");
        }
    },
    test05: {
        name: "__defineGetter__ and __defineSetter__ called on the same property are additive; they do not clobber previous accessor",
        body: function () {
            var o = { };

            o.__defineGetter__("a", function () { return 1; });
            o.__defineSetter__("a", function (v) { throw new Error(2); });

            o.__defineSetter__("b", function (v) { throw new Error(3); });
            o.__defineGetter__("b", function () { return 4; });

            print(o.a === 1, "getter in 'a' should return 1");
            print((function () { try { o.a = 0; } catch (e) { return e.message; } return null; })() === "2", "setter in 'a' should throw a new Error with number equal to 2");
            print((function () { try { o.b = 0; } catch (e) { return e.message; } return null; })() === "3", "setter in 'b' should throw a new Error with number equal to 3");
            print(o.b === 4, "getter in 'b' should return 4");
        }
    },
    test06: {
        name: "__defineGetter__ and __defineSetter__ only allow functions as the accessor argument",
        body: function () {
            function testBadArg(arg) {
                var o = { };

                print(function () { o.__defineGetter__("a", arg); }, TypeError, "__defineGetter__ should throw with getter function arg: " + arg);
                print(function () { o.__defineSetter__("a", arg); }, TypeError, "__defineSetter__ should throw with setter function arg: " + arg);
            }

            testBadArg(undefined);
            testBadArg(null);
            testBadArg(0);
            testBadArg(1234);
            testBadArg("hello");
            testBadArg({ a: 1, b: 2 });
            testBadArg([ 1, 2 ]);
        }
    },
    test07: {
        name: "__defineGetter__ and __defineSetter__ overwrite existing property descriptors when configurable, otherwise throws",
        body: function () {
            function testWithExistingDescriptor(descriptor) {
                var shouldThrow = descriptor.configurable ? false : true;

                var o = { };
                Object.defineProperty(o, "a", descriptor);

                var fnDefGet = function () { o.__defineGetter__("a", function () { return undefined; }); };
                var fnDefSet = function () { o.__defineSetter__("a", function (v) { }); };

                if (shouldThrow) {
                    print(fnDefGet, TypeError, "__defineGetter__ should throw when called on existing non-configurable property");
                    print(fnDefSet, TypeError, "__defineSetter__ should throw when called on existing non-configurable property");
                } else {
                    fnDefGet();
                    fnDefSet();

                    var owndesc = Object.getOwnPropertyDescriptor(o, "a");
                    print(owndesc.hasOwnProperty("writable"), "property should no longer be a data accessor if it happened to be");
                    print(owndesc.hasOwnProperty("value"), "property should no longer be a data accessor if it happened to be");
                    print(owndesc.get !== undefined, "property should now have a getter");
                    print(owndesc.set !== undefined, "property should now have a setter");
                    print(owndesc.configurable, "property should still be configurable");
                    print(owndesc.enumerable, "property should now be enumerable if it wasn't already");
                }
            }

            

            testWithExistingDescriptor({ configurable: true });
            testWithExistingDescriptor({ enumerable: true });
            testWithExistingDescriptor({ configurable: true, enumerable: true });
            testWithExistingDescriptor({ configurable: false });
            testWithExistingDescriptor({ enumerable: false });
            testWithExistingDescriptor({ configurable: false, enumerable: false });

            

            testWithExistingDescriptor({ value: 10 });
            testWithExistingDescriptor({ writable: true });
            testWithExistingDescriptor({ value: 10, writable: true });
            testWithExistingDescriptor({ value: 10, enumerable: true });
            testWithExistingDescriptor({ writable: true, enumerable: true });
            testWithExistingDescriptor({ value: 10, writable: true, enumerable: true });
            testWithExistingDescriptor({ value: 10, configurable: true });
            testWithExistingDescriptor({ writable: true, configurable: true });
            testWithExistingDescriptor({ value: 10, writable: true, configurable: true });
            testWithExistingDescriptor({ value: 10, configurable: true, enumerable: true });
            testWithExistingDescriptor({ writable: true, configurable: true, enumerable: true });
            testWithExistingDescriptor({ value: 10, writable: true, configurable: true, enumerable: true });

            
            
            
            
            

            testWithExistingDescriptor({ get: function () { }, configurable: false });
            testWithExistingDescriptor({ set: function (v) { }, configurable: false });
        }
    },
    test08: {
        name: "__defineGetter__ and __defineSetter__ should work regardless whether Object.defineProperty is changed by the user or not",
        body: function () {
            var builtinDefineProperty = Object.defineProperty;
            Object.defineProperty = function (o, p, d) { throw new Error("Should not execute this"); };

            var o = { };

            o.__defineGetter__("a", function () { return 1234; });
            o.__defineSetter__("a", function (v) { throw new Error(); });

            print(o.a === 1234, "Getter should be assigned and execute like normal");
            print(function () { o.a = 0; }, Error, "Setter should be assigned and execute like normal");

            var d = Object.getOwnPropertyDescriptor(o, "a");

            print(d.get !== undefined, "Accessor descriptor has get value");
            print(d.set !== undefined, "Accessor descriptor has set value");
            print(d.configurable, "Property is configurable");
            print(d.enumerable, "Property is enumerable");

            Object.defineProperty = builtinDefineProperty;
        }
    },
    test09: {
        name: "__defineGetter__ and __defineSetter__ both have length 2 and __lookupGetter__ and __lookupSetter__ both have length 1",
        body: function () {
            print(Object.prototype.__defineGetter__.length === 2, "__defineGetter__.length should be 2");
            print(Object.prototype.__defineSetter__.length === 2, "__defineSetter__.length should be 2");
            print(Object.prototype.__lookupGetter__.length === 1, "__lookupGetter__.length should be 1");
            print(Object.prototype.__lookupSetter__.length === 1, "__lookupSetter__.length should be 1");
        }
    },
    test10: {
        name: "__defineGetter__ and __defineSetter__ should throw TypeError with null/undefined this argument",
        body: function () {
            print(() => { Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", function () { return undefined; }); }, TypeError, "__defineGetter__ should throw TypeError when this object is Undefined.");
            print(() => { Object.prototype.__defineGetter__.call(null, "test10_null_getter", function () { return undefined; }); }, TypeError, "__defineGetter__ should throw TypeError when this object is Null.");
            print(() => { Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", function (v) { }); }, TypeError, "__defineSetter__ should throw TypeError when this object is Undefined.");
            print(() => { Object.prototype.__defineSetter__.call(null, "test10_null_setter", function (v) { }); }, TypeError, "__defineSetter__ should throw TypeError when this object is Null.");          

            print(globalObject.hasOwnProperty("test10_undefined_getter"), "global object should now have a getter named test10_undefined_getter");
            print(globalObject.hasOwnProperty("test10_null_getter"), "global object should now have a getter named test10_null_getter");
            print(globalObject.hasOwnProperty("test10_undefined_setter"), "global object should now have a setter named test10_undefined_setter");
            print(globalObject.hasOwnProperty("test10_null_setter"), "global object should now have a setter named test10_null_setter");
        }
    },
    test11: {
        name: "__lookupGetter__ and __lookupSetter__ find getters and setters of the given name on the calling object respectively",
        body: function () {
            var o = {
                get a() { return undefined; },
                set b(v) { },
            };
            var a = Object.getOwnPropertyDescriptor(o, "a").get;
            var b = Object.getOwnPropertyDescriptor(o, "b").set;

            var f = o.__lookupGetter__("a");

            print(f !== undefined, "__lookupGetter__ should have returned a value");
            print(typeof f === "function", "That value should be a function");
            print(f === a, "And it should be the same function returned by Object.getOwnPropertyDescriptor");

            f = o.__lookupSetter__("b");

            print(f !== undefined, "__lookupSetter__ should have returned a value");
            print(typeof f === "function", "That value should be a function");
            print(f === b, "And it should be the same function returned by Object.getOwnPropertyDescriptor");
        }
    },
    test12: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        body: function () {
            var a = function () { return undefined; };
            var b = function (v) { };

            function Foo () { }
            Object.defineProperty(Foo.prototype, "a", { get: a });
            Object.defineProperty(Foo.prototype, "b", { set: b });

            var o = new Foo();

            var f = o.__lookupGetter__("a");

            print(f !== undefined, "__lookupGetter__ should have returned a value");
            print(typeof f === "function", "That value should be a function");
            print(f === a, "And it should be the same function as the defined getter");

            f = o.__lookupSetter__("b");

            print(f !== undefined, "__lookupSetter__ should have returned a value");
            print(typeof f === "function", "That value should be a function");
            print(f === b, "And it should be the same function as the defined setter");
        }
    },
    test13: {
        name: "__lookupGetter__ and __lookupSetter__ should look for accessors up the prototype chain",
        body: function () {
            var getfn = function () { return undefined; };
            var setfn = function (v) { };

            function Foo () { }
            Object.defineProperty(Foo.prototype, "geta", { get: getfn });
            Object.defineProperty(Foo.prototype, "getb", { get: getfn });
            Object.defineProperty(Foo.prototype, "seta", { set: setfn });
            Object.defineProperty(Foo.prototype, "setb", { set: setfn });

            var o = new Foo();
            Object.defineProperty(o, "geta", { set: setfn, configurable: true, enumerable: true });
            Object.defineProperty(o, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
            Object.defineProperty(o, "seta", { get: getfn, configurable: true, enumerable: true });
            Object.defineProperty(o, "setb", { value: 123, configurable: true, enumerable: true, writable: true });

            print(o.__lookupGetter__("geta"));

            print(o.__lookupGetter__("geta") === undefined, "accessor property on o shadows accessor property on prototype but it is set-only so looking up a getter should return undefined");
            print(o.__lookupGetter__("getb") === getfn, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return getfn");
            print(o.__lookupSetter__("seta") === undefined, "accessor property on o shadows accessor property on prototype but it is get-only so looking up a setter should return undefined");
            print(o.__lookupSetter__("setb") === setfn, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return setfn");
        }
    },
    test14: {
        name: "__defineGetter__ and __defineSetter__ should throw TypeError when the object specified as getter/setter is not callable",
        body: function () {
            print(() => { __defineGetter__.call(this, 'x', 23); }, TypeError, "__defineGetter__ should throw TypeError when the function object is not callable.");
            print(() => { this.__defineSetter__('y', {}); }, TypeError, "__defineGetter__ should throw TypeError when the function object is not callable.");
        }
    },
};

for (var i = 0; i < tests.length; i ++) {tests[i].body()}


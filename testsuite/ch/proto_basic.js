





if (this.WScript && this.WScript.LoadScriptFile) {
    WScript.LoadScriptFile("protolib.js");
}

function printProtoChain(obj) {
    var known = [
        Number.prototype, Boolean.prototype, String.prototype, Object.prototype, Array.prototype, Function.prototype,
    ];
    var names = [
        "Number.prototype", "Boolean.prototype", "String.prototype", "Object.prototype", "Array.prototype", "Function.prototype",
    ];

    var s = "";
    while (obj) {
        var i = known.indexOf(obj);
        var name = (i >= 0 ? names[i] : JSON.stringify(obj));
        if (s == "") {
            s = name;
        } else {
            s += " -> " + name;
        }

        obj = Object.getPrototypeOf(obj);
    }

    helpers.writeln(s);
}

function make_point(_x, _y) {
    return { x: _x, y: _y };
}

var tests;
if (helpers.isVersion10OrLater) { 
    tests = [
    {
        name: "Test Object.prototype.__proto__ attributes",
        body: function () {
            var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
            helpers.printObject(desc);
        }
    },

    {
        name: "Read built-in __proto__",
        body: function () {
            assert.isTrue(12["__proto__"] === Number.prototype, "int __proto__");
            assert.isTrue(12.3["__proto__"] === Number.prototype, "float __proto__");
            assert.isTrue((new Number(12)).__proto__ === Number.prototype, "Number Object __proto__");

            assert.isTrue(true.__proto__ === Boolean.prototype, "Boolean Value __proto__");
            assert.isTrue(false.__proto__ === Boolean.prototype, "Boolean Value __proto__");
            assert.isTrue((new Boolean(true)).__proto__ === Boolean.prototype, "Boolean Object __proto__");
            assert.isTrue((new Boolean(false)).__proto__ === Boolean.prototype, "Boolean Object __proto__");

            assert.isTrue("hello".__proto__ === String.prototype, "String Value __proto__");
            assert.isTrue(new String("hello").__proto__ === String.prototype, "String Object __proto__");

            assert.isTrue({}.__proto__ === Object.prototype, "{} __proto__");
            assert.isTrue([].__proto__ === Array.prototype, "[] __proto__");

            assert.isTrue(Array.prototype.__proto__ === Object.prototype, "Array.prototype.__proto__");
            assert.isTrue(Object.prototype.__proto__ === null, "Object.prototype.__proto__");

            assert.isTrue(Array.__proto__ === Function.prototype, "Array.__proto__");
            assert.isTrue(Function.__proto__ === Function.prototype, "Function.__proto__");
            assert.isTrue(Function.prototype.__proto__ === Object.prototype, "Function.prototype.__proto__");

            var o = { a: 0 };
            assert.isTrue(o.__proto__ === Object.prototype, "o.__proto__");
            assert.isTrue(o.__proto__.__proto__ === null, "o.__proto__.__proto__");
        }
    },

    {
        name: "Change built-in's __proto__ chain",
        body: function () {
            function changeProtoAndTest(obj, newProto, test) {
                var oldProto = obj.__proto__;
                obj.__proto__ = newProto;
                printProtoChain(obj);
                try {
                    test();
                } finally {
                    obj.__proto__ = oldProto; 
                }
            }

            
            assert.throws(function () { 12["sort"]() }, TypeError, "Object doesn't support property or method 'sort'");

            
            changeProtoAndTest(Number.prototype, Array.prototype, function () {
                12["sort"]();

                var o = new Number(34);
                o[0] = 8;
                o[1] = 3;
                o[2] = 9;
                o[3] = 5;
                o.length = 4;
                assert.areEqual("8 3 9 5", o.join(" "));
                o.sort();
                assert.areEqual("3 5 8 9", o.join(" "));
            });

            
            assert.throws(function () { true.toUpperCase() }, TypeError, "Object doesn't support property or method 'toUpperCase'");

            
            changeProtoAndTest(Boolean.prototype, new String("abc"), function () {
                assert.areEqual("TRUE", true.toUpperCase());
                assert.areEqual("FALSE", false.toUpperCase());
                assert.areEqual("TRUE", (new Boolean(true)).toUpperCase());
                assert.areEqual("FALSE", (new Boolean(false)).toUpperCase());
            });
        }
    },

    {
        name: "Change __proto__ to null/undefined",
        body: function () {
            var a = {};

            
            {
                var a = {};

                assert.isTrue(a.__proto__ === Object.prototype);
                assert.isTrue(!a.isPrototypeOf(a));

                a.__proto__ = undefined;

                assert.isTrue(a.__proto__ === Object.prototype);
                assert.isTrue(!a.isPrototypeOf(a));

                assert.throws__proto__ArgNotObjectOrNull(function () { Object.setPrototypeOf(a, undefined); }, "Object.setPrototypeOf");
            }

            
            function f1(O, P) { O.__proto__ = P; }
            function f2(O, P) { Object.setPrototypeOf(O, P); }
            [f1, f2].forEach(function (f) {
                var a = {};

                assert.isTrue(a.__proto__ === Object.prototype);
                assert.isTrue(!a.isPrototypeOf(a));

                f(a, null);
                assert.isTrue(Object.getPrototypeOf(a) === null);
                assert.isTrue(a.__proto__ === undefined, "lost Object.prototype __proto__ getter");
                assert.isTrue(a.isPrototypeOf === undefined, "lost Object.prototype methods");
            });

            
            var __proto__setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            [null, undefined].forEach(function (o) {
                assert.throws__proto__ThisNotObject(function () {
                    __proto__setter.apply(o, [{}]);
                });
                assert.throws__proto__ArgNotObject(function () {
                    Object.setPrototypeOf(o, {});
                });
            });
        }
    },

    {
        name: "Change __proto__ to neither Object nor null, should throw",
        body: function () {
            function assertThrowAndNoChange(proto) {
                var a = {};
                a.__proto__ = proto;
                assert.isTrue(Object.getPrototypeOf(a) === Object.prototype, "Change __proto__ to: " + proto);
                assert.throws__proto__ArgNotObjectOrNull(function () {
                    Object.setPrototypeOf(a, proto);
                }, "Object.setPrototypeOf");
                assert.isTrue(Object.getPrototypeOf(a) === Object.prototype, "Change __proto__ to: " + proto);
            }

            var __proto__setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            [
                undefined, 0, 123, -12.3, NaN, Infinity, true, false, "str"
            ].forEach(function (proto) {
                assertThrowAndNoChange(proto);

                
                if (proto !== undefined) {
                    proto.__proto__ = {}; 
                    __proto__setter.apply(proto, [{}]); 
                    Object.setPrototypeOf(proto, {});
                }
            });
        }
    },

    {
        name: "Change object.__proto__ to an object",
        body: function () {
            var a = { a: 100, b: 100 };
            var b = { b: 200, c: 200 };
            b.__proto__ = a;
            helpers.printObject(b);

            helpers.writeln("\n-- delete b.b --");
            delete b.b;
            helpers.printObject(b);
        }
    },

    {
        name: "Change object.__proto__ to an array",
        body: function () {
            var a = [8, 3, 9, 5];
            var b = { b: 200 };

            
            assert.throws(function () { b.sort(); });

            b.__proto__ = a;
            assert.isTrue(!Array.isArray(b), "Still not Array");
            helpers.printObject(b);

            helpers.writeln("\n-- a.sort --");
            a.sort();
            helpers.printObject(b);

            helpers.writeln("\n-- b.sort --");
            b.sort();
            helpers.printObject(b);
        }
    },

    {
        name: "Change array.__proto__ to an object",
        body: function () {
            var a = { a: 100 };
            var b = [8, 3, 9, 5];

            b.__proto__ = a;
            assert.isTrue(Array.isArray(b), "Still is Array");
            helpers.printObject(b);

            
            assert.throws(function () { b.sort(); });

            
            helpers.writeln("\n-- sort.apply --");
            Array.prototype.sort.apply(b);
            helpers.printObject(b);
        }
    },

    {
        name: "Attempt to change DOM object __proto__",
        body: function () {
            function test(domObj, expected) {
                var p0 = Object.getPrototypeOf(domObj);
                assert.isTrue(p0 === domObj.__proto__);

                var p1 = { __proto__: p0 };
                domObj.__proto__ = p1;

                assert.areEqual(expected, Object.getPrototypeOf(domObj) === p1);
                assert.isTrue(expected || domObj.document !== null); 
            }

            if (helpers.isInBrowser()) {
                test(this, false);
                test(window, false);
                test(window.frames[0], false);

                test(document, true);
                test(document.body, true);
                test(document.createElement("div"), true);

                
                var f = document.getElementById("form1");
                var p0 = f.__proto__;
                f.__proto__ = { form1_injected: "form1_injected_value", __proto__: p0 };

                var button1 = document.getElementById("button1");
                button1.click();
                assert.areEqual("form1_injected_value", button1.form1_injected_copy);
            }
        }
    },

    {
        name: "__proto__ and instanceof/isPrototypeOf",
        body: function () {
            function A() { }
            function B() { }

            var a = new A();
            var b = new B();

            assert.isTrue(!(b instanceof A), "Initially b is not instance of A");
            assert.isTrue(!(A.prototype.isPrototypeOf(b)));
            assert.isTrue(b instanceof B, "Initially b is instance of B");
            assert.isTrue(B.prototype.isPrototypeOf(b));            

            b.__proto__ = A.prototype;
            assert.isTrue(b instanceof A, "Now b is instance of A");
            assert.isTrue(A.prototype.isPrototypeOf(b));
            assert.isTrue(!(b instanceof B), "Now b is not instance of B");
            assert.isTrue(!(B.prototype.isPrototypeOf(b)));

            b.__proto__ = a;
            assert.isTrue(b instanceof A, "b is still instance of A");
            assert.isTrue(A.prototype.isPrototypeOf(b));
            assert.isTrue(!(b instanceof B), "b is still not instance of B");
            assert.isTrue(!(B.prototype.isPrototypeOf(b)));

            b.__proto__ = B.prototype;
            assert.isTrue(!(b instanceof A), "b is back not instance of A");
            assert.isTrue(!(A.prototype.isPrototypeOf(b)));
            assert.isTrue(b instanceof B, "b is back instance of B");
            assert.isTrue(B.prototype.isPrototypeOf(b));
        }
    },

    {
        name: "Verify we reject simple __proto__ cycle",
        body: function () {
            var a = {};
            var b = {};
            var c = {};

            a.__proto__ = b;
            b.__proto__ = c;

            assert.throws__proto__Cyclic(function () { c.__proto__ = a });
            assert.throws__proto__Cyclic(function () { a.__proto__ = a });
            assert.throws__proto__Cyclic(function () { Array.prototype.__proto__ = [] });
        }
    },

    {
        name: "Verify proto cache is discarded",
        body: function () {
            var a = make_point(1, 2);
            var b = make_point(3, 4);

            
            
            
            
            
            var y = Object.create(a);
            var x = Object.create(y);

            function print(o) {
                helpers.writeln(o.x + ", " + o.y);
            }

            helpers.writeln("Before change");
            print(x);

            
            
            
            
            
            
            helpers.writeln("After change");
            y.__proto__ = b;
            print(x);
        }
    },

    {
        
        name: "Verify proto getter cache is discarded",
        body: function () {
            var a = make_point(1, 2);
            var b = make_point(3, 4);
            Object.defineProperty(a, "y", { get: function () { return 7; }, enumerable: true, configurable: true });

            
            
            
            
            
            var y = Object.create(a);
            var x = Object.create(y);

            function print(o) {
                helpers.writeln(o.x + ", " + o.y);
            }

            helpers.writeln("Before change");
            print(x);

            
            
            
            
            
            
            helpers.writeln("After change");
            y.__proto__ = b;
            print(x);
        },
    },

    {
        name: "Verify the new proto object is marked as proto, so that changing the proto object invalidates related proto cache",
        body: function () {
            var b = make_point(3, 4);

            function print(o) {
                helpers.writeln(o.x + ", " + o.y);
            }

            var x = {};

            helpers.writeln("Before change");
            print(x);

            helpers.writeln("After change");
            x.__proto__ = b; 
            print(x);

            
            
            
            helpers.writeln("After change proto property");
            Object.defineProperty(b, "x", { get: function () { return 9; }, enumerable: true, configurable: true });
            print(x);
        }
    },

    {
        name: "Verify changing __proto__ works safely with ObjTypeSpec",
        body: function () {
            function f(o, a) {
                var m = o.x;
                if (a > 0)
                {
                    o.__proto__ = {}; 
                }
                var n = o.x;

                assert.areEqual(1, m);
                assert.areEqual(a > 0 ? undefined : 1, n);
            }

            var p = { x: 1 };
            var o = Object.create(p);
            f(o, 0); 
            f(o, 0); 
            f(o, 1); 
        }
    },

    {
        name: "Verify PathTypeHandler successor Types continue to work, case 1",
        body: function () {
            function f() {
                return { x_100: 1 }; 
            }

            var o1 = f();
            o1.__proto__ = { a: 2 };
            o1.y = 1; 

            var o2 = f();
            o2.y = 1; 

            
            assert.areEqual(2, o1.a, "from prototype");
            assert.areEqual(undefined, o2.a, "should be undefined");
        }
    },

    {
        name: "Verify PathTypeHandler successor Types continue to work, case 2",
        body: function () {
            function f() {
                return { x_101: 1 }; 
            }

            var o1 = f();
            o1.y = 1; 

            var o2 = f();
            o2.__proto__ = { a: 2 };
            o2.y = 1; 

            
            assert.areEqual(undefined, o1.a, "should be undefined");
            assert.areEqual(2, o2.a, "from prototype");
        }
    },

    {
        name: "Verify that we can shadow __proto__ property",
        body: function () {
            var p = {};
            var o = {};
            o.__proto__ = p;

            Object.defineProperty(p, "__proto__", { value: 10, writable: true, enumerable: true, configurable: true });
            assert.areEqual(10, o.__proto__);

            o.__proto__ = -100;
            assert.areEqual(-100, o.__proto__);

            delete o.__proto__;
            assert.areEqual(10, o.__proto__);

            delete p.__proto__;
            assert.areEqual(p, o.__proto__);
            assert.areEqual(Object.prototype, p.__proto__);

            o.__proto__ = { a: 123 };
            assert.areEqual(123, o.a);
        }
    },

    {
        name: "Test fast path o[i] with changed prototype",
        body: function () {
            var o = []; o.length = 10;

            var p = [123];
            o.__proto__ = p; 
            assert.areEqual(123, o[0]);

            var p0 = { "1": 4 };
            p.__proto__ = p0; 
            assert.areEqual(4, o[1]);

            p0.__proto__ = null;
            assert.areEqual(undefined, o[2]);
        }
    },

    {
        name: "Test fast path o[i] when o.__proto__ == null",
        body: function () {
            var o = [];
            o.__proto__ = null;
            assert.areEqual(undefined, o[1]);
        }
    },

    {
        name: "Test fast path o[i] when o.__proto__.__proto__ == null",
        body: function () {
            var o = [];
            o.__proto__ = [12, 34];
            o.__proto__.__proto__ = null;
            assert.areEqual(undefined, o[5]);
        }
    },

    {
        name: "Test Array methods with changed prototype",
        body: function () {
            function make_array() {
                var arr = [];
                for (var p in arguments) {
                    var i = arguments[p];
                    arr[i] = i;
                }
                return arr;
            }

            var o = []; o.length = 10;

            o.__proto__ = make_array(0, 1, 2);
            o.__proto__.__proto__ = make_array(3, 4);
            o.__proto__.__proto__.__proto__ = { "5": 5, "6": 6 };
            o.__proto__.__proto__.__proto__.__proto__ = Array.prototype;

            var a = o.slice();
            assert.areEqual("0,1,2,3,4,5,6,,,", a.toString());

            a.__proto__ = make_array(8, 9);
            assert.areEqual("0,1,2,3,4,5,6,,8,9", a.toString());
        }
    },

    {
        name: "Test cross-site change prototype",
        body: function () {
            if (this.WScript.LoadScriptFile) {
                var eng = make_engine();
                var other = eng.eval('var o = { get name() {return this.v}, set name(value) {this.v = value}, v: "a name" }; o');

                var o = { __proto__: other };
                assert.areEqual("a name", o.name);
            }
        }
    },

    {
        name: "Test change prototype of global object",
        body: function () {
            if (this.WScript.LoadScriptFile) {
                make_engine().run(function () {
                    function test(x) {
                        var p = { a: 1 };

                        
                        x.__proto__ = p;
                        assert.areEqual(1, x.a);

                        Object.defineProperty(p, "a", { get: function () { return 2; }, configurable: true });
                        assert.areEqual(2, x.a);
                    }
                    
                    assert.isTrue(__proto__ === Object.prototype); 
                    test(this);

                    __proto__ = { b: 3, __proto__: __proto__ };
                    assert.areEqual(2, a);
                    assert.areEqual(3, b);
                });
            }
        }
    },

    {
        name: "Blue 62526: __proto__: ArrayElementEnumerator does not expect non-TypeIds_Object on prototype",
        body: function () {
            var a = new String();
            a[1] = "a1";
            a[2] = "a2";
            a.__proto__ = [];

            var b = [0];

            b.__proto__ = a;
            b.length = 5;
            b = b.concat([]);

            assert.areEqual('[0,"a1","a2",null,null]', JSON.stringify(b));
        }
    },

    {
        name: "Blue 114364: __proto__: Object.preventExtensions should make [[prototype]] immutable",
        body: function () {
            var a = {};
            Object.preventExtensions(a);
            
            assert.throws(
                function () { a.__proto__ = { x: 1 } },
                TypeError);
            assert.isTrue(a.__proto__ === Object.prototype, "__proto__ should remain unchanged");
        }
    },

    {
        name: "Blue 245453: __proto__: Invalid has-only-writable-data-property cache",
        body: function () {
            var a = { __proto__: {} };
            a.x = 0; 
            a.__proto__.__proto__ = /a_regex/;
            a.source = 1;

            assert.areEqual("a_regex", a.source, "prototype chain should NOT has-only-writable-data-properties");
        }
    },

    {
        name: "Blue 245453: __proto__: Invalid has-only-writable-data-property cache -- verify cross-context",
        body: function () {
            if (this.WScript.LoadScriptFile) {
                var eng = make_engine();
                var other = eng.eval('({b: 1})');

                var a = { __proto__: other };
                assert.areEqual(1, a.b, "a.b from prototype");

                a.x = 0; 
                Object.defineProperty(other, "y", { value: 2, enumerable: true, writable: false });
                a.y = 1234;
                assert.areEqual(2, a.y, "prototype chain should NOT be has-only-writable-data-properties");
            }
        }
    },

    ];
} else {
    tests = [
    {
        name: "Test Object.prototype.__proto__",
        body: function () {
            assert.isTrue(Object.prototype.__proto__ === undefined, "Object.prototype.__proto__ only supported on IE11 or later");
            assert.isTrue(Object.hasOwnProperty("getPrototypeOf") && !Object.hasOwnProperty("setPrototypeOf"), "Object.setPrototypeOf only supported on IE11 or later");

            var o = { __proto__: { pp: 123 } }; 
            assert.areEqual(undefined, o.pp);
        }
    }
    ];
}

testRunner.run(tests);






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "super in direct eval inside an object method",
    body: function () {
        var value;
        var obj = {
            m() { value = eval('super.value;'); }
        };

        assert.areEqual(undefined, value);
        obj.m();
        assert.areEqual(undefined, value);
        Object.setPrototypeOf(obj, { value: "super" });
        obj.m();
        assert.areEqual("super", value);
    }
  },
  {
    name: "home object's prototype is null",
    body: function () {
        var value;
        var obj = {
            m() {
                value = "identifier";
                super.prop;
             },
            n() {
                value = "expression";
                super["prop"];
            }
        };

        Object.setPrototypeOf(obj, null);
        assert.throws(obj.m, TypeError, "identifier", "Unable to get property 'prop' of undefined or null reference");
        assert.throws(obj.n, TypeError, "expression", "Unable to get property 'prop' of undefined or null reference");
    }
  },
  {
    name: "super in strict mode - object",
    body: function () {
        "use strict";
        var obj0 = {
            m() {
                assert.areEqual(this, obj0);
                assert.areEqual(this.__proto__, base, "this.__proto__ === base");
                super.prop = "identifier";
                assert.isTrue(this.hasOwnProperty('prop'), "this.hasOwnProperty('prop')");
                Object.freeze(this);
                super.prop = "super";
            }
        };

        var obj1 = {
            m() {
                assert.areEqual(this, obj1);
                super['prop'] = "expression";
                Object.freeze(obj1);
                super['prop'] = "super";
            }
        };

        var base = {};
        Object.setPrototypeOf(obj0, base);
        Object.setPrototypeOf(obj1, base);
        assert.throws(()=>obj0.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
        assert.areEqual("identifier", obj0.prop);
        assert.throws(()=>obj1.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
        assert.areEqual("expression", obj1.prop);
    }
  },
    {
        name: "super bound through call",
        body: function () {
            var obj = {
                m() {
                    super.x = 17;
                },
                n() {
                    'use strict';
                    super.x = 19;
                }
            };

            var bar = { x: 11 };
            obj.m.call(bar);
            assert.areEqual(17, bar.x);

            obj.n.call(bar);
            assert.areEqual(19, bar.x);

            obj.m.call(42); 
            assert.throws(() => obj.n.call(42), TypeError, "super bound to number", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
  {
    name: "super in strict mode - class",
    body: function () {
        class A {
            m() {
                super.prop = "identifier";
                Object.freeze(A.prototype);
                super.prop = "super";
            }

            test() {
                assert.throws(()=>A.prototype.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
                assert.areEqual("identifier", A.prototype.prop);
            }
        }
        A.prototype.test();

        class B {
            m() {
                super['prop'] = "expression";
                Object.freeze(B.prototype);
                super['prop'] = "super";
            }

            test() {
                assert.throws(()=>B.prototype.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
                assert.areEqual("expression", B.prototype.prop);
            }
        }
        B.prototype.test();
    }
  },
  {
    name: "super property in eval",
    body: function () {
        var valuex, valuey, valuez, valuet;

        var a = { x: 'a', y: 'a', z: 'a', t: 'a' };
        var b = { y: 'b', t: 'b' };
        Object.setPrototypeOf(b, a);

        var obj = {
            x : 'obj',
            y : 'obj',
            z : 'obj',
            t : 'obj',
            m() {
                valuex = eval('super.x');
                valuey = eval('super.y');
            },
            n() {
                valuez = eval('super["z"]');
                valuet = eval('super["t"]');
            }
        };

        Object.setPrototypeOf(obj, b);
        obj.m();
        assert.areEqual("a", valuex, "value x == 'a'");
        assert.areEqual("b", valuey, "value y == 'b'");
        obj.n();
        assert.areEqual("a", valuez, "value z == 'a'");
        assert.areEqual("b", valuet, "value t == 'b'");
    }
  },
  {
    name: "evaluation of expression before making super property reference",
    body: function () {
        var value = undefined;

        assert.throws(function(){ eval('super[value = 0]'); }, ReferenceError, "super[value = 0]", "Missing or invalid 'super' binding");
        assert.areEqual(0, value);
    }
  },
  {
    name: "evaluation of argument list after getting super constructor",
    body: function () {
        var value = undefined;

        class A extends Object { constructor() { super(value = 1); } }
        Object.setPrototypeOf(A, toString);
        assert.throws(()=>new A(), TypeError, "Function is not a constructor", "Function is not a constructor");
        assert.areEqual(undefined, value);
    }
  },
  {
    name: "super reference may not be deleted",
    body: function () {
        assert.throws(
            function() {
                class A extends Object {
                    constructor() { delete super.prop; }
                }
                new A();
            }, ReferenceError, "attempts to delete super property", "Unable to delete property with a super reference");
    }
  },
  {
    name: "attempts to call a null super constructor throws TypeError",
    body: function () {
        var value = 0;
        assert.throws(
            function() {
                class A extends null {
                    constructor() { value++; super(); value++; }
                }
                new A();
            }, TypeError, "attempts to call a null super constructor", "Function is not a constructor");

        assert.areEqual(1, value);
    }
  },
  {
    name: "direct super calls from a class constructors",
    body: function () {
        var count = 0;
        assert.throws(function(){class A{constructor(){eval("count++; super();");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        assert.throws(function(){class A{constructor(){(()=>eval("count++; super();"))();}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        assert.throws(function(){class A{constructor(){(()=>{(()=>eval("count++; super();"))();})();}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        assert.throws(function(){class A{constructor(){eval("eval(\"count++; super();\");");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        assert.throws(function(){class A{constructor(){eval("(()=>{count++; super();})();");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        assert.throws(function(){class A{constructor(){eval("(()=>eval(\"count++; super();\"))();");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        assert.areEqual(0, count, "SyntaxError preempts side effects")

        assert.doesNotThrow(function(){class A extends Object{constructor(){eval("count++; super();");}};new A();}, "");
        assert.doesNotThrow(function(){class A extends Object{constructor(){(()=>eval("count++; super();"))();}};new A();}, "");
        assert.doesNotThrow(function(){class A extends Object{constructor(){(()=>{(()=>eval("count++; super();"))();})();}};new A();}, "");
        assert.doesNotThrow(function(){class A extends Object{constructor(){eval("eval(\"count++; super();\");");}};new A();}, "");
        assert.doesNotThrow(function(){class A extends Object{constructor(){eval("(()=>{count++; super();})();");}};new A();}, "");
        assert.doesNotThrow(function(){class A extends Object{constructor(){eval("(()=>eval(\"count++; super();\"))();");}};new A();}, "");
        assert.areEqual(6, count, "Side effects expected without SyntaxError");
    }
  },
  {
    name: "return value of super() should be this when super is plain function",
    body: function () {
        function A() { }

        let s;
        class B extends A {
            constructor() {
                s = super();
            }
        }

        const b = new B();
        assert.areEqual(b, s);
    }
  },
  {
    name: "return value of super() should be this when super is class",
    body: function () {
        class A { }

        let s;
        class B extends A {
            constructor() {
                s = super();
            }
        }

        const b = new B();
        assert.areEqual(b, s);
    }
  },
  {
    name: "return value of super() should be this when super is function with non-object return value",
    body: function () {
        function A() { return 4; }

        let s;
        class B extends A {
            constructor() {
                s = super();
            }
        }

        const b = new B();
        assert.areEqual(b, s);
    }
  },
  {
    name: "return value of super() should be this when super is function that returns an object",
    body: function () {
        function A() { return { a: 1 }; }

        let s;
        class B extends A {
            constructor() {
                s = super();
            }
        }

        const b = new B();
        assert.areEqual(b, s);
        assert.areEqual(1, b.a);
    }
  },
  {
    name: "return value of super() should be this when super is built-in type",
    body: function () {
        let s;
        class B extends Uint32Array {
            constructor() {
                s = super();
            }
        }

        const b = new B();
        assert.areEqual(b, s);
    }
  },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });

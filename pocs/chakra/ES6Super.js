print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "super in direct eval inside an object method",
    body: function () {
        var value;
        var obj = {
            m() { value = eval('super.value;'); }
        };

        print(undefined, value);
        obj.m();
        print(undefined, value);
        Object.setPrototypeOf(obj, { value: "super" });
        obj.m();
        print("super", value);
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
        print(obj.m, TypeError, "identifier", "Unable to get property 'prop' of undefined or null reference");
        print(obj.n, TypeError, "expression", "Unable to get property 'prop' of undefined or null reference");
    }
  },
  {
    name: "super in strict mode - object",
    body: function () {
        "use strict";
        var obj0 = {
            m() {
                print(this, obj0);
                print(this.__proto__, base, "this.__proto__ === base");
                super.prop = "identifier";
                print(this.hasOwnProperty('prop'), "this.hasOwnProperty('prop')");
                Object.freeze(this);
                super.prop = "super";
            }
        };

        var obj1 = {
            m() {
                print(this, obj1);
                super['prop'] = "expression";
                Object.freeze(obj1);
                super['prop'] = "super";
            }
        };

        var base = {};
        Object.setPrototypeOf(obj0, base);
        Object.setPrototypeOf(obj1, base);
        print(()=>obj0.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
        print("identifier", obj0.prop);
        print(()=>obj1.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
        print("expression", obj1.prop);
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
            print(17, bar.x);

            obj.n.call(bar);
            print(19, bar.x);

            obj.m.call(42); 
            print(() => obj.n.call(42), TypeError, "super bound to number", "Assignment to read-only properties is not allowed in strict mode");
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
                print(()=>A.prototype.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
                print("identifier", A.prototype.prop);
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
                print(()=>B.prototype.m(), TypeError, "identifier", "Assignment to read-only properties is not allowed in strict mode");
                print("expression", B.prototype.prop);
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
        print("a", valuex, "value x == 'a'");
        print("b", valuey, "value y == 'b'");
        obj.n();
        print("a", valuez, "value z == 'a'");
        print("b", valuet, "value t == 'b'");
    }
  },
  {
    name: "evaluation of expression before making super property reference",
    body: function () {
        var value = undefined;

        print(function(){ eval('super[value = 0]'); }, ReferenceError, "super[value = 0]", "Missing or invalid 'super' binding");
        print(0, value);
    }
  },
  {
    name: "evaluation of argument list after getting super constructor",
    body: function () {
        var value = undefined;

        class A extends Object { constructor() { super(value = 1); } }
        Object.setPrototypeOf(A, toString);
        print(()=>new A(), TypeError, "Function is not a constructor", "Function is not a constructor");
        print(undefined, value);
    }
  },
  {
    name: "super reference may not be deleted",
    body: function () {
        print(
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
        print(
            function() {
                class A extends null {
                    constructor() { value++; super(); value++; }
                }
                new A();
            }, TypeError, "attempts to call a null super constructor", "Function is not a constructor");

        print(1, value);
    }
  },
  {
    name: "direct super calls from a class constructors",
    body: function () {
        var count = 0;
        print(function(){class A{constructor(){eval("count++; super();");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        print(function(){class A{constructor(){(()=>eval("count++; super();"))();}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        print(function(){class A{constructor(){(()=>{(()=>eval("count++; super();"))();})();}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        print(function(){class A{constructor(){eval("eval(\"count++; super();\");");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        print(function(){class A{constructor(){eval("(()=>{count++; super();})();");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        print(function(){class A{constructor(){eval("(()=>eval(\"count++; super();\"))();");}};new A();}, SyntaxError, "", "Invalid use of the 'super' keyword");
        print(0, count, "SyntaxError preempts side effects")

        print(function(){class A extends Object{constructor(){eval("count++; super();");}};new A();}, "");
        print(function(){class A extends Object{constructor(){(()=>eval("count++; super();"))();}};new A();}, "");
        print(function(){class A extends Object{constructor(){(()=>{(()=>eval("count++; super();"))();})();}};new A();}, "");
        print(function(){class A extends Object{constructor(){eval("eval(\"count++; super();\");");}};new A();}, "");
        print(function(){class A extends Object{constructor(){eval("(()=>{count++; super();})();");}};new A();}, "");
        print(function(){class A extends Object{constructor(){eval("(()=>eval(\"count++; super();\"))();");}};new A();}, "");
        print(6, count, "Side effects expected without SyntaxError");
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
        print(b, s);
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
        print(b, s);
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
        print(b, s);
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
        print(b, s);
        print(1, b.a);
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
        print(b, s);
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

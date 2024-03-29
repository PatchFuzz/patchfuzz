





WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "GitHub ChakraCore #1465 - call syntax is allowed after class expression",
    body: function () {
      var s1 = class { }.toString();
      var s2 = class x { }.toString();
      var s3 = class x { }.toString(1, 2, 3); 

      assert.areEqual("class { }", s1, "Calling toString after a class expression with no name parses and behaves correctly");
      assert.areEqual("class x { }", s2, "Calling toString after a class expression with a name parses and behaves correctly");
      assert.areEqual("class x { }", s3, "Calling toString with arguments after a class expression with a name parses and behaves correctly");
    }
  },
  {
    name: "BLUE 540289: AV on deferred parse of first class method",
    body: function () {
      assert.throws(function() { eval("function f() { var o = { \"a\": class { \"b\""); }, SyntaxError);
    }
  },
  {
    name: "BLUE 558906: [ES6][Class] get and set should be valid method names",
    body: function () {
      class foo {
        set(key) { } 
        get() { }    
      }
    }
  },
  {
    name: "BLUE 573391: Classes extending null with a non-default constructor crash",
    body: function () {
      class A { constructor() { } };
      var test1 = class { constructor(args) { } };
      var test2 = class extends null { constructor(args) { } };
      var test3 = class extends A { constructor(args) { } };
      var test4 = class extends A { constructor(args) { super(args) } };
    }
  },
  {
    name: "BLUE 603997: Method formals redeclaration error",
    body: function() {
      assert.throws(function() { eval("class { method(a) { var a; }; }"); },           SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { method(a) { let a; }; }"); },           SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { method(a) { const a; }; }"); },         SyntaxError, "Method formal parameters cannot be redeclared.");

      assert.throws(function() { eval("class { method(a,b,c) { var b; }; }"); },       SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { method(a,b,c) { let b; }; }"); },       SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { method(a,b,c) { const b; }; }"); },     SyntaxError, "Method formal parameters cannot be redeclared.");

      assert.throws(function() { eval("class { set method(a) { var a; }; }"); },       SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { set method(a) { let a; }; }"); },       SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { set method(a) { const a; }; }"); },     SyntaxError, "Method formal parameters cannot be redeclared.");

      assert.throws(function() { eval("class { set method(a,b,c) { var b; }; }"); },   SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { set method(a,b,c) { let b; }; }"); },   SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { set method(a,b,c) { const b; }; }"); }, SyntaxError, "Method formal parameters cannot be redeclared.");

      assert.throws(function() { eval("class { method(a,a,c) { }; }"); },              SyntaxError, "Method formal parameters cannot be redeclared.");
      assert.throws(function() { eval("class { set method(a,a,c) { }; }"); },          SyntaxError, "Method formal parameters cannot be redeclared.");
    }
  },
  {
    name: "BLUE 629214: Class methods with a prefix crash in deferred parse",
    body: function () {
      function test1() { class a { static "a"() { } } }
      function test2() { class a { static get "a"() { } } }
      function test3() { class a { static set "a"(x) { } } }
      function test4() { class a { get "a"() { } } }
      function test5() { class a { set "a"(x) { } } }
      function test6() { class a { *"a"(x) { } } }
      function test7() { class a { method() {} "a"() {} } }
      function test8() { class a { method() {} static "a"() { } } }
      function test9() { class a { method() {} static get "a"() { } } }
      function test10() { class a { method() {} static set "a"(x) { } } }
      function test11() { class a { method() {} get "a"() { } } }
      function test12() { class a { method() {} set "a"(x) { } } }
      function test13() { class a { method() {} *"a"(x) { } } }
    }
  },
  {
    name: "OS 102456: Assert when deleting a non-method property from a class",
    body: function () {
      u3056 = function() {};
      class c extends u3056 {};
      c.y = "str";
      delete c.x;
      delete c.y;
    }
  },
  {
    name: "OS 112921: Nested evals attempt to load super into a scope slot",
    body: function () {
      class z{window(){((eval("")))((this))}};
      eval("class z{window(){((eval(\"\")))((this))}};");
    }
  },
  {
    name: "OS 101184: Class methods without separators inside an array break deferred parsing heuristics",
    body: function () {
      Function("[class z{\u3056(){}functional(){}}]");
    }
  },
  {
    name: "OS 182090: Class method after a semicolon terminated method does not force PID",
    body: function () {
      z = (class {
              if (shouldBailout) {  };
              "" (x) {}
              })
    }
  },
  {
    name: "OS 257621: Class expressions should not have trailing call parens",
    body: function () {
      assert.throws(function () { eval('class{}();'); }, SyntaxError, "Class expressions cannot be called without parens", "Expected identifier");
      assert.doesNotThrow(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be called");
    }
  },
  {
    name: "OS 1114090: Getters in superclass should use instance of subclass as actual 'this' object",
    body: function () {

        class Person {
            getFullName() {
                return this.firstName + " " + this.lastName;
            }
            get fullName() {
                return this.firstName + " " + this.lastName;
            }
        }

        class MedicalWorker extends Person { } 

        class Doctor extends MedicalWorker {
            constructor(firstName,lastName) {
                super();
                this.firstName = firstName;
                this.lastName = lastName;
            }
            getFullNameExplicit() { return "Dr. " + super.getFullName(); }
            getFullNameProperty() { return "Dr. " + super.fullName; }
            getFullNameEvalCall() { return "Dr. " + eval('super.getFullName()'); }
            getFullNameEvalProperty() { return "Dr. " + eval('super.fullName'); }
            getFullNameLambdaCall() { return "Dr. " + (()=>super.getFullName()) (); }
            getFullNameLambdaProperty() { return "Dr. " + (()=>super.fullName) (); }
        }

        let x = new Doctor("John","Smith");
        assert.areEqual("Dr. John Smith", x.getFullNameExplicit(), "explicit super call should use instance of subclass as actual 'this' object");
        assert.areEqual("Dr. John Smith", x.getFullNameProperty(), "property accessor in superclass should use instance of subclass as actual 'this' object");
        assert.areEqual("Dr. John Smith", x.getFullNameEvalCall(), "super called from within eval should have same behavior as outside of eval");
        assert.areEqual("Dr. John Smith", x.getFullNameEvalProperty(), "super object property access from within eval should have same behavior as outside of eval");
        assert.areEqual("Dr. John Smith", x.getFullNameLambdaCall(), "super called from within lambda should have same behavior as outside of lambda");
        assert.areEqual("Dr. John Smith", x.getFullNameLambdaProperty(), "super object property access from within lambda should have same behavior as outside of lambda");
    }
  },
  {
    name: "OS 4586602: Setters in superclass should use instance of subclass as actual 'this' object",
    body: function () {

        

        class Proto {
            set  x(v) {  return this._x = v;  }
        };

        class Obj extends Proto {
            set x(v) { super.x = v;  }
        };

        var object = new Obj();
        object.x=1;
        assert.areEqual(1, object._x, "setters in superclass should use instance of subclass as actual 'this' object");

        

        class A { }

        class B extends A {
            getA() { return super.i; }
            setA(v) { super.i = v; }
        }

        let b = new B();
        b.setA(15);

        assert.areEqual(true, b.hasOwnProperty('i'), "Property 'i' should exist in actualThis object(b)");
        assert.areEqual(15, b.i, "Property 'i' should match assigned value in actualThis object(b)");
        assert.areEqual(false, A.prototype.hasOwnProperty('i'), "Property 'i' should not exist in base object(A.prototype)");
        assert.areEqual(undefined, b.getA(), "Property 'i' should be undefined in base object(A.prototype)");

        

        class Base {
            setName(v) { this._name = v; }
            set name(v) { this._name = v; }
        }

        class Middle extends Base { } 

        class Subclass extends Middle {
            setNameExplicit(name) { super.setName(name); }
            setNameProperty(name) { super.name=name; }
            setNameEvalCall(name) { eval('super.setName(name)'); }
            setNameEvalProperty(name) { eval('super.name=name'); }
            setNameLambdaCall(name) { (()=>super.setName(name)) (); }
            setNameLambdaProperty(name) { (()=>super.name=name) (); }
        }

        let x = new Subclass();
        x.setNameExplicit("explicit");
        assert.areEqual("explicit", x._name, "explicit super call should use instance of subclass as actual 'this' object");
        x.setNameProperty("property");
        assert.areEqual("property", x._name, "property accessor in superclass should use instance of subclass as actual 'this' object");
        x.setNameEvalCall("evalCall");
        assert.areEqual("evalCall", x._name, "super called from within eval should have same behavior as outside of eval");
        x.setNameEvalProperty("evalProperty");
        assert.areEqual("evalProperty", x._name, "super object property access from within eval should have same behavior as outside of eval");
        x.setNameLambdaCall("lambdaCall");
        assert.areEqual("lambdaCall", x._name, "super called from within lambda should have same behavior as outside of lambda");
        x.setNameLambdaProperty("lambdaProperty");
        assert.areEqual("lambdaProperty", x._name, "super object property access from within lambda should have same behavior as outside of lambda");
    }
  },
  {
    name: "OS 1001915: Function built-in properties \'length\', \'caller\', \'arguments\' should not shadow class members",
    body: function () {
        class A {
            static length() { }
            static caller() { }
            static arguments() { }
        };
        assert.areEqual("length() { }", A.length.toString(), "Accessing static method \'length\'");
        assert.areEqual("caller() { }", A.caller.toString(), "Accessing static method \'caller\'");
        assert.areEqual("arguments() { }", A.arguments.toString(), "Accessing static method \'arguments\'");
        for (var p in A) {
            assert.areEqual(p+"() { }", A[p].toString(), "PropertyString for \'"+p+"\' should have a matching cached value");
        }

        class B {
            set length(a) { this._length=a; }
            get length() { return this._length; }
            set caller(a) { this._caller=a; }
            get caller() { return this._caller; }
            set arguments(a) { this._arguments=a; }
            get arguments() { return this._arguments; }
        };
        var b=new B();
        b.length=100;
        b.caller="Caller";
        b.arguments=function() { };
        assert.areEqual(100, b.length, "Get/set accessor \'length\'");
        assert.areEqual("Caller", b.caller, "Get/set accessor \'caller\'");
        assert.areEqual("function() { }", b.arguments.toString(), "Get/set accessor \'arguments\'");
    }
  },
  {
    name: "OS4497562,OS4497908: InitClassMember overriding existing accessor property",
    body: function () {
        class A {
            set z(v) {}
            z() {} 
        };

        class B {
            static set z(v) {}
            static z() {} 
        };

        class C {
            set z(v) {}
            *z() {} 
        };

        class D {
            set z(v) {}
            ["z"]() {} 
        };
    }
  },
  {
    name: "OS4352944: ES6 class super.<method> calls in an eval inside constructor",
    body: function () {
        var count = 0;
        class A {
            constructor() { count++; }
            increment()   { count++; }
            decrement()   { count--; }
            getCount()    { return count; }
        }

        class B extends A {
            constructor() {
                eval(" \
                    super(); \
                    assert.areEqual(1,super.getCount()); \
                    super.increment(); \
                    assert.areEqual(2, super.getCount()); \
                    super.decrement(); \
                    assert.areEqual(1, super.getCount()); \
                ");
            }
        }
        var bar = new B();
    }
  },
  {
    name: "OS6135311: Incorrect base register assignment in inlined LdNewTarget",
    body: function () {
        function func5 () {
            assert.areEqual(class0, new.target, "new.target should return subclass constructor for super constructor call");
            function v0() {};
        }
        class class0 extends func5 {  }

        new class0();
        new class0(-1);
        new class0([2,3], NaN);
        new class0("cat", 100, {});
    }
  },
  {
    name: "Issue1586: Out of stack for super.<method>.apply and super.<method>.call",
    body: function () {
        class A {
            m() { return 'A'; }
            m1() { return 'A1'; }
            static n() { return 'B'; }
            static n1() { return 'B1'; }
        }

        class B extends A {
            m() { return super.m.apply(this); }
            m1() { return super.m1.call(this); }
            static n() { return super.n.apply(this); }
            static n1() { return super.n1.apply(this); }
        }

        var b = new B();
        assert.areEqual('A', b.m(), "method.apply()");
        assert.areEqual('A1', b.m1(), "method.call()");
        assert.areEqual('B', B.n(), "static method.apply()");
        assert.areEqual('B1', B.n1(), "static method.call()");
    }
  },
  {
    name: "Issue3054: NULL pointer crash when calling constructor with Proxy new_target",
    body: function () {
        var result = "";
        class B {
            constructor() {
                assert.areEqual(P, new.target, "B(): new.target === P");
                result += "b";
            }
        }

        class A extends B {
            constructor() {
                assert.areEqual(P, new.target, "A(): new.target === P");
                result += "a";
                super();
                result += "c";
            }
        }

        var P = new Proxy(B, {});
        Reflect.construct(A, [], P);

        assert.areEqual('abc', result, "result == 'abc'");
    }
  },
  {
    name: "Issue3064: Caching conflict of super property access",
    body: function () {
        function Base() { }
        Base.prototype = {
            x: 15,
            f() { return this.x; },
        };

        function Derived() {}
        Derived.prototype = {
            __proto__: Base.prototype,
            x: 27,
            f() {
              var a = super.x;
              var b = eval("super.x");
              return this.x;
           }
        };

        assert.areEqual(15, new Base().f());
        assert.areEqual(27, new Derived().f());
      }
  },
  {
    name: "Issue3423: Repeated calls to class setter triggers assertion",
    body: function () {
        var result = "";
        class B {
            set x(v) { result += "Bset;"; this._x = v; }
            get x() { result += "Bget;"; return this._x; }
        }

        class A extends B {
            set x(v) { result += "Aset;"; super.x = v + 100; }
            get x() { result += "Aget;"; return super.x; }
        }

        var a = new A();
        a.x = 100;
        assert.areEqual(200, a.x);
        assert.areEqual("Aset;Bset;Aget;Bget;", result);

        var a1 = new A();
        a1.x = -100;
        assert.areEqual(0, a1.x);
        assert.areEqual("Aset;Bset;Aget;Bget;Aset;Bset;Aget;Bget;", result);
      }
  },
  {
    name: "Issue3217: Reflect.construct permanently corrupts the invoked constructor",
    body: function () {
        function Base() {}
        function Derived() {}
        Derived.prototype = Object.create(Base.prototype);

        assert.isFalse(new Base() instanceof Derived);
        Reflect.construct(Base, [], Derived);
        assert.isFalse(new Base() instanceof Derived);
    }
  },
  {
    name: "OS12503560: assignment to super[prop] not accessing base class property",
    body: function () {
        var result = "";
        class B {
            get x1() { result += "Bgetter;"; return 0; }
            set x1(v){ result += "Bsetter;"; }
        }

        class A extends B {
            constructor() {
                (()=>{
                    super();
                    var s = 'x';
                    super[(s+s).substr(0,1)+1] = null;
                    s = super[s+'1'];
                })();
            }

            get x1() { result += "Agetter;"; return 0; } 
            set x1(v){ result += "Asetter;"; }  
        };

        new A();
        assert.areEqual('Bsetter;Bgetter;', result);
    }
  },
  {
    name: "MSFT:13209141: Confusion on deferred function containing non-deferred extends cause calling eval",
    body: function () {
      function foo(a = class c extends eval("") {}) {}
      try {
        foo();
      }
      catch(e) {}
    }
  },
  {
    name: "OS: 12681861: SetPropertyWithAttributes assert does not cover static constructor case",
    body: function () {
      class tvawjo {
        static constructor() { }
        static get igwgep() { }
        static igwgep() { }
      };
      
      class staticTest2 extends null {
        static constructor() { }
        static get igwgep() { }
        static igwgep() { }
      };
    }
  },
  {
    name: "#3040 Class extends clause accepts LHS expressions only",
    body: function() {
      assert.throws(function () { eval("1,class extends[]/print(1){}"); }, SyntaxError, "Parsing extends expr should not go past a term", "Expected '{'");
    }
  },
  {
    name : "#6487 Recursive class declaration with extends function call should throw stack space, not nullptr-de-ref",
    body : function() {
      function recur() {
        class a extends 'x'.match({})
        {}
        recur();
      }
      assert.throws(recur, Error, "Out of stack space");
    }
  }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });


class a {};
a = null; 


assert.doesNotThrow(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");

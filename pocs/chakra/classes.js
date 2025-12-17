print("..\\UnitTestFramework\\UnitTestFramework.js");

function verifyClassMember(obj, name, expectedReturnValue, isGet, isSet, isGenerator) {
    let p = Object.getOwnPropertyDescriptor(obj, name);
    let strMethodSignature = `obj[${name}](${isGet},${isSet},${isGenerator})`;
    let fn;

    if (isGet) {
        fn = p.get;

        print('function', typeof fn, `${strMethodSignature}: Get method has 'get' property set in descriptor`);
        print(expectedReturnValue, obj[name], `${strMethodSignature}: Invoking class get method returns correct value`);
        print(expectedReturnValue, fn(), `${strMethodSignature}: Calling class get method function directly returns correct value`);

        print('prototype' in fn, `${strMethodSignature}: Class method get does not have 'prototype' property`);
    } else if (isSet) {
        fn = p.set;

        print('function', typeof fn, `${strMethodSignature}: Set method has 'set' property set in descriptor`);
        print(undefined, obj[name], `${strMethodSignature}: Invoking class set method returns undefined`);
        print(expectedReturnValue, fn(), `${strMethodSignature}: Calling class set method function directly returns correct value`);

        print('prototype' in fn, `${strMethodSignature}: Class method set does not have 'prototype' property`);


    } else if (isGenerator) {
        fn = obj[name];

        print('function', typeof fn, `${strMethodSignature}: Class method generator function has correct type`);

        let s;
        for (s of fn()) {}
        print(expectedReturnValue, s, `${strMethodSignature}: Calling class method generator returns correct value`);

        print(p.writable, `${strMethodSignature}: Class method generator functions are writable`);

        print('prototype' in fn, `${strMethodSignature}: Class method generator does have 'prototype' property`);
    } else {
        fn = obj[name]

        print('function', typeof fn, `${strMethodSignature}: Class method has correct type`);
        print(expectedReturnValue, fn(), `${strMethodSignature}: Calling class method returns correct value`);

        
        print(p.writable, `${strMethodSignature}: Class method functions are writable`);

        print('prototype' in fn, `${strMethodSignature}: Class method does not have 'prototype' property`);
    }

    print(p.enumerable, `${strMethodSignature}: Class methods are not enumerable`);
    print(p.configurable, `${strMethodSignature}: Class methods are configurable`);

    print(fn.hasOwnProperty('arguments'), `${strMethodSignature}: Class methods do not have an 'arguments' property`);
    print(fn.hasOwnProperty('caller'), `${strMethodSignature}: Class methods do not have an 'caller' property`);
}

var tests = [
  {
    name: "Class requires an extends expression if the extends keyword is used",
    body: function () {
      print(function () { eval("class E extends { }") }, SyntaxError);
    }
  },
  {
    name: "Class declarations require a name",
    body: function () {
      print(function () { eval("class { }") }, SyntaxError);
    }
  },
  {
    name: "Class names are parsed in strict mode",
    body: function () {
      print(function () { eval("class l\u0065t { }") }, SyntaxError);
    }
  },
  {
    name: "Class methods may not have an octal name",
    body: function () {
      print(function () { eval("class E0 { 0123() {} }") }, SyntaxError, "0123");
      print(function () { eval("class E1 { 0123.1() {} }") }, SyntaxError, "0123.1");
    }
  },
  {
    name: "Class prototypes must be non-writable",
    body: function () {
      var d = Object.getOwnPropertyDescriptor(class { }, "prototype");
      print(d.writable);
    }
  },
  {
    name: "Class static methods may not be named 'prototype'",
    body: function () {
      print(function () { eval("class E0 { static prototype() {} }") }, SyntaxError, "static prototype");
      print(function () { eval("class E1 { static get prototype() {} }") }, SyntaxError, "static get prototype");
      print(function () { eval("class E2 { static set prototype(x) {} }") }, SyntaxError, "static set prototype");
    }
  },
  {
    name: "Class constructor method can only be a normal method - not getter, setter, or generator",
    body: function () {
      print(function () { eval("class E { * constructor() {} }") }, SyntaxError, "Class constructor may not be a generator");
      print(function () { eval("class E0 { get constructor() {} }") }, SyntaxError, "get constructor");
      print(function () { eval("class E1 { set constructor(x) {} }") }, SyntaxError, "set constructor");
    }
  },
  {
    name: "Class method names can be duplicated; last one lexically always win",
    body: function () {
      print(function () { eval("class E0 { constructor() {} constructor() {} }") }, SyntaxError, "Duplicated constructor");

      
      class A { foo() {} foo() {} }
      class B { get foo() {} get foo() {} }
      class C { set foo(x) {} set foo(x) {} }
      class D { get foo() {} set foo(x) {} }
      class E { static foo() {} static foo() {} }
      class F { static get foo() {} static get foo() {} }
      class G { static set foo(x) {} static set foo(x) {} }
      class H { static get foo() {} static set foo(x) {} }
      class I { foo() {} get foo() {} set foo(x) {}}
      class J { static get foo() {} static set foo(x) {} get foo() {} set foo(x) {} }
      class K { static foo() {} static get foo() {} static set foo(x) {}}

      class L { static foo() {} foo() {} }
      class M { static foo() {} get foo() {} set foo(x) {}}
      class N { foo() {} static get foo() {} static set foo(x) {}}
    }
  },
  {
    name: "Class extends expressions must be (null || an object that is a constructor with a prototype that is (null || an object))",
    body: function () {
      class BaseClass {}
      print(Object.getPrototypeOf(BaseClass.prototype) === Object.prototype, "Object.getPrototypeOf(BaseClass.prototype) === Object.prototype")
      print(Object.getPrototypeOf(BaseClass.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(BaseClass.prototype.constructor) === Function.prototype")

      class ExtendsNull extends null { }
      print(Object.getPrototypeOf(ExtendsNull.prototype) === null, "Object.getPrototypeOf(ExtendsNull.prototype) === null")
      print(Object.getPrototypeOf(ExtendsNull.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(ExtendsNull.prototype.constructor) === Function.prototype")

      function NullPrototype () {}
      NullPrototype.prototype = null;
      class ExtendsNullPrototype extends NullPrototype {}
      print(Object.getPrototypeOf(ExtendsNullPrototype.prototype) === null, "Object.getPrototypeOf(ExtendsNullPrototype.prototype) === null")
      print(Object.getPrototypeOf(ExtendsNullPrototype.prototype.constructor) === NullPrototype, "Object.getPrototypeOf(ExtendsNullPrototype.prototype.constructor) === NullPrototype")

      class ExtendsObject extends Object {}
      print(Object.getPrototypeOf(ExtendsObject.prototype) === Object.prototype, "Object.getPrototypeOf(ExtendsObject.prototype) === Object.prototype")
      print(Object.getPrototypeOf(ExtendsObject.prototype.constructor) === Object, "Object.getPrototypeOf(ExtendsObject.prototype.constructor) === Object")

      function Func () {}
      class ExtendsFunc extends Func {}
      print(Object.getPrototypeOf(ExtendsFunc.prototype) === Func.prototype, "Object.getPrototypeOf(ExtendsFunc.prototype) === Func.prototype")
      print(Object.getPrototypeOf(ExtendsFunc.prototype.constructor) === Func, "Object.getPrototypeOf(ExtendsFunc.prototype.constructor) === Func")


      print(function () { class A extends 0       { } }, TypeError, "Integer extends");
      print(function () { class A extends "test"  { } }, TypeError, "String extends");
      print(function () { class A extends {}      { } }, TypeError, "Object literal extends");
      print(function () { class A extends undefined { } }, TypeError, "Undefined extends");
      print(
          function () {
            function Foo() {}
            Foo.prototype = 0;
            class A extends Foo { }
          }, TypeError, "Integer prototype");
      print(
          function () {
            function Foo() {}
            Foo.prototype = "test";
            class A extends Foo { }
          }, TypeError, "String prototype");
      print(
          function () {
            function Foo() {}
            Foo.prototype = undefined;
            class A extends Foo { }
          }, TypeError, "Undefined prototype");

      print(function () { eval("class Foo extends new Proxy(class Bar {},{}){}"); });
      print(function () { eval("class Foo2 extends new Proxy(class Bar2 {},{has() {return true;}}){}"); });
    }
  },
  {
    name: "Class basic sanity tests",
    body: function () {
      var m;
      function p(x) {
        m = x;
      }

      class Empty { }
      class EmptySemi { ; }
      class OnlyCtor { constructor() { p('ctor') } }
      class OnlyMethod { method() { p('method') } }
      class OnlyStaticMethod { static method() { p('smethod') } }
      class OnlyGetter { get getter() { p('getter') } }
      class OnlyStaticGetter { static get getter() { p('sgetter') } }
      class OnlySetter { set setter(x) { p('setter ' + x) } }
      class OnlyStaticSetter { static set setter(x) { p('ssetter ' + x) } }

      let empty = new Empty();
      let emptySemi = new EmptySemi();

      let onlyCtor = new OnlyCtor();
      print('ctor', m, "constructing OnlyCtor class calls the constructor method");

      let onlyMethod = new OnlyMethod();
      let onlyStaticMethod = new OnlyStaticMethod();
      let onlyGetter = new OnlyGetter();
      let onlyStaticGetter = new OnlyStaticGetter();
      let onlySetter = new OnlySetter();
      let onlyStaticSetter = new OnlyStaticSetter();

      onlyMethod.method();
      print('method', m, "method calls function correctly");

      OnlyStaticMethod.method();
      print('smethod', m, "static method calls function correctly");

      onlyGetter.getter;
      print('getter', m, "getter calls function correctly");

      OnlyStaticGetter.getter;
      print('sgetter', m, "static getter calls function correctly");

      onlySetter.setter = null;
      print('setter null', m, "setter calls function correctly");

      OnlyStaticSetter.setter = null;
      print('ssetter null', m, "static setter calls function correctly");


      class InheritMethod extends OnlyMethod { method2() { p('sub method') } }
      class OverrideMethod extends OnlyMethod { method() { p('override method') } }

      let inheritMethod = new InheritMethod();
      let overrideMethod = new OverrideMethod();

      inheritMethod.method();
      print('method', m, "derived class inherits base class method");

      inheritMethod.method2();
      print('sub method', m, "derived class adds new method correctly");

      overrideMethod.method();
      print('override method', m, "derived class overrides method correctly");


      let OnlyMethodExpr = class OnlyMethodExpr { method() { p('class expr method') } }
      let OnlyMethodExprNameless = class { method() { p('class expr no name method') } }

      let onlyMethodExpr = new OnlyMethodExpr();
      let onlyMethodExprNameless = new OnlyMethodExprNameless();

      onlyMethodExpr.method();
      print('class expr method', m, "method call on class expression works correctly");

      onlyMethodExprNameless.method();
      print('class expr no name method', m, "method call on class expression with no name works correctly");


      class InternalNameUse { static method() { p(InternalNameUse.method.toString()) } }
      let InternalNameUseExpr_ = class InternalNameUseExpr { static method() { p(InternalNameUseExpr.method.toString()) } }

      InternalNameUse.method();
      print('method() { p(InternalNameUse.method.toString()) }', m, "Use of class declaration's name inside method works correctly");

      InternalNameUseExpr_.method();
      print('method() { p(InternalNameUseExpr.method.toString()) }', m, "Use of class expression's name inside method works correctly");
    }
  },
  {
    name: "Class basic sanity tests in closures",
    body: function () {
      var m;
      function p(x) {
        m = x;
      }

      function f1() {
        class Empty { }
        class EmptySemi { ; }
        class OnlyCtor { constructor() { p('ctor') } }
        class OnlyMethod { method() { p('method') } }
        class OnlyStaticMethod { static method() { p('smethod') } }
        class OnlyGetter { get getter() { p('getter') } }
        class OnlyStaticGetter { static get getter() { p('sgetter') } }
        class OnlySetter { set setter(x) { p('setter ' + x) } }
        class OnlyStaticSetter { static set setter(x) { p('ssetter ' + x) } }
        class OnlyComputedMethod { ["cmethod"]() { p('cmethod') } }
        class OnlyStaticComputedMethod { static ["cmethod"]() { p('scmethod') } }
        class OnlyComputedGetter { get ["cgetter"]() { p('cgetter') } }
        class OnlyStaticComputedGetter { static get ["cgetter"]() { p('scgetter') } }
        class OnlyComputedSetter { set ["csetter"](x) { p('csetter ' + x) } }
        class OnlyStaticComputedSetter { static set ["csetter"](x) { p('scsetter ' + x) } }

        function f2() {
          let empty = new Empty();
          let emptySemi = new EmptySemi();

          let onlyCtor = new OnlyCtor();
          print('ctor', m, "constructing OnlyCtor class calls the constructor method");

          let onlyMethod = new OnlyMethod();
          let onlyStaticMethod = new OnlyStaticMethod();
          let onlyGetter = new OnlyGetter();
          let onlyStaticGetter = new OnlyStaticGetter();
          let onlySetter = new OnlySetter();
          let onlyStaticSetter = new OnlyStaticSetter();
          let onlyComputedMethod = new OnlyComputedMethod();
          let onlyComputedGetter = new OnlyComputedGetter();
          let onlyComputedSetter = new OnlyComputedSetter();

          onlyMethod.method();
          print('method', m, "method calls function correctly");

          OnlyStaticMethod.method();
          print('smethod', m, "static method calls function correctly");

          onlyGetter.getter;
          print('getter', m, "getter calls function correctly");

          OnlyStaticGetter.getter;
          print('sgetter', m, "static getter calls function correctly");

          onlySetter.setter = null;
          print('setter null', m, "setter calls function correctly");

          OnlyStaticSetter.setter = null;
          print('ssetter null', m, "static setter calls function correctly");

          onlyComputedMethod.cmethod()
          print('cmethod', m, "computed name method calls function correctly");

          OnlyStaticComputedMethod.cmethod()
          print('scmethod', m, "static computed name method calls function correctly");

          onlyComputedGetter.cgetter;
          print('cgetter', m, "computed name getter calls function correctly");

          OnlyStaticComputedGetter.cgetter;
          print('scgetter', m, "static computed name getter calls function correctly");

          onlyComputedSetter.csetter = null;
          print('csetter null', m, "computed name setter calls function correctly");

          OnlyStaticComputedSetter.csetter = null;
          print('scsetter null', m, "static computed name setter calls function correctly");
        }

        f2();
      }
      f1();

      function f3() {
        class OnlyMethod { method() { p('method') } }
        class InheritMethod extends OnlyMethod { method2() { p('sub method') } }
        class OverrideMethod extends OnlyMethod { method() { p('override method') } }

        function f4() {
          let inheritMethod = new InheritMethod()
          let overrideMethod = new OverrideMethod()

          inheritMethod.method();
          print('method', m, "derived class inherits base class method");

          inheritMethod.method2();
          print('sub method', m, "derived class adds new method correctly");

          overrideMethod.method();
          print('override method', m, "derived class overrides method correctly");
        }

        f4();
      }
      f3();

      function f5() {
        let OnlyMethodExpr = class OnlyMethodExpr { method() { p('class expr method') } }
        let OnlyMethodExprNameless = class { method() { p('class expr no name method') } }

        function f6() {
          let onlyMethodExpr = new OnlyMethodExpr();
          let onlyMethodExprNameless = new OnlyMethodExprNameless();

          onlyMethodExpr.method();
          print('class expr method', m, "method call on class expression works correctly");

          onlyMethodExprNameless.method();
          print('class expr no name method', m, "method call on class expression with no name works correctly");
        }

        f6()
      }
      f5()

      function f7() {
        class InternalNameUse { static method() { p(InternalNameUse.method.toString()) } }
        let InternalNameUseExpr_ = class InternalNameUseExpr { static method() { p(InternalNameUseExpr.method.toString()) } }

        function f8() {
          InternalNameUse.method();
          print('method() { p(InternalNameUse.method.toString()) }', m, "Use of class declaration's name inside method works correctly");

          InternalNameUseExpr_.method();
          print('method() { p(InternalNameUseExpr.method.toString()) }', m, "Use of class expression's name inside method works correctly");
        }

        f8()
      }
      f7()
    }
  },
  {
    name: "Invalid uses of super",
    body: function () {
      class A {
        constructor() { p('constructor A'); }
        method()      { p('method A'); }
      }

      
      print(function () { eval("super();") },        SyntaxError, "Invalid use of super", "Invalid use of the 'super' keyword");
      print(function () { eval("super[1];") },       ReferenceError, "Invalid use of super", "Missing or invalid 'super' binding");
      print(function () { eval("super.method();") }, ReferenceError, "Invalid use of super", "Missing or invalid 'super' binding");

      
      print(function () { eval("class A { constructor() { super(); } }") }, SyntaxError, "Base class constructor cannot call super");
    }
  },
  {
    name: "Basic uses of super",
    body: function () {
      var ctorCalls = [];

      class A {
        constructor() { this._initialized = true; ctorCalls.push('A'); }
        method()      { return 'method A'; }
        set initialized(v) { this._initialized = v; }
        get initialized() { return this._initialized; }
      }

      class B extends A {
        constructor() {
          ctorCalls.push('B pre-super');
          super();
          ctorCalls.push('B post-super');
        }
        superMethod()      { return super.method() }
        superMethodIndex() { return super['method'](); }
        getAprop()         { return super.initialized; }
        setAprop(value)    { super.initialized = value; }
        getAIndex()        { return super['initialized']; }
        setAIndex(value)   { super['initialized'] = value; }
        lambdaIndex() {
          var mysuper = x => super[x]();
          return mysuper('method');
        }
      }

      let classA = new A();
      print(1, ctorCalls.length, "new A calls A's constructor once");
      print('A', ctorCalls[0], "new A calls A's constructor");
      ctorCalls = [];

      let classB = new B();
      print(3, ctorCalls.length, "new B calls B and A constructors once each");
      print('B pre-super', ctorCalls[0], "new B calls B's constructor first");
      print('A', ctorCalls[1], "super within B's constructor calls A's constructor");
      print('B post-super', ctorCalls[2], "A's constructor returns to B's constructor after super call");


      
      print(classA.method() === 'method A', "classA.method() === 'method A'");
      print(classA.initialized === true, "classA.initialized === true");

      
      print(classB.initialized === true, "classB.initialized === true");
      print(classB.superMethod() === 'method A', "classB.superMethod() === 'method A'");
      print(classB.initialized === true, "classB.initialized === true");
      classB.setAprop(123);
      print(classB.getAprop() === 123, "classB.getAprop() === 123");
      print(classB.getAIndex() === 123, "classB.getAIndex() === 123");
      classB.setAIndex(456);
      print(classB.getAprop() === 456, "classB.getAprop() === 456");
      print(classB.getAIndex() === 456, "classB.getAIndex() === 456");

      print(classB.lambdaIndex() === 'method A', "classB.lambdaIndex() === 'method A'");
    }
  },
  {
      name: "Super used after object literal in constructor",
      body: function () {
        class emptyLiteral extends Object{
          constructor(){
            const bar = {};
            super();
          }
        }
        class methodLiteral extends Object{
          constructor(){
            const bar = { c () {}};
            super();
          }
        }
        class functionLiteral extends Object{
          constructor(){
            const bar = { c : function () {}};
            super();
          }
        }
        class getSetLiteral extends Object{
          constructor(){
            const bar = { hid : 5, get c () {return hid;}, set c (x) { hid = x; }};
            super();
          }
        }
        print(()=>{new emptyLiteral()}, "Super should be valid in constructor after literal.");
        print(()=>{new methodLiteral()}, "Super should be valid in constructor after literal.");
        print(()=>{new functionLiteral()}, "Super should be valid in constructor after literal.");
        print(()=>{new getSetLiteral()}, "Super should be valid in constructor after literal.");
      }
  },
  {
    name: "Super used outside the class declaration function",
    body: function () {
      class A1
      {
        method() { return 3; }
      };

      class A2
      {
        method() { return 2; }
      }

      function GetClassB(Asomething)
      {
        class B extends (Asomething)
        {
          method() { return 4; }
          supermethod() { return super.method(); }
        };
        return B;
      }

      let classB1 = GetClassB(A1);
      let classB2 = GetClassB(A2);
      let b1 = new classB1();
      let b2 = new classB2();

      print(b1.method() === 4, "b1.method() === 4)");
      print(b1.supermethod() === 3, "b1.supermethod() === 3");

      print(b2.method() === 4, "b2.method() === 4");
      print(b2.supermethod() === 2, "b2.supermethod() === 2");
    }
  },
  {
    name: "Super adapts to __proto__ changes",
    body: function () {
      class A1 {
        method() { return "A1"; }
        static staticMethod() { return "static A1"; }
      }
      class A2 {
        method() { return "A2"; }
        static staticMethod() { return "static A2"; }
      }
      class A3 {
        method() { return "A3"; }
        static staticMethod() { return "static A3"; }
      }

      class B extends A1 {
        method() { return super.method(); }
        static staticMethod() { return super.staticMethod(); }
      }

      print(B.__proto__, A1);
      print(B.prototype.__proto__, A1.prototype);

      let instanceB1 = new B();
      let instanceB2 = new B();
      print("A1",                instanceB1.method());
      print("static A1",         B.staticMethod());
      print(instanceB1.method(), instanceB2.method());

      
      B.__proto__ = A2;

      print(B.__proto__,           A2);
      print(B.prototype.__proto__, A1.prototype);
      print("A1",                  instanceB1.method(), "Instance methods should not be affected by B.__proto__ change");
      print("static A2",           B.staticMethod(),    "Static method should have changed after B.__proto__ change");
      print(instanceB1.method(),   instanceB2.method(), "All instances should not have been affected by B.__proto__ change");

      
      B.prototype.__proto__ = A3.prototype;

      print(B.__proto__,           A2);
      print(B.prototype.__proto__, A3.prototype);
      print("A3",                  instanceB1.method(), "Instance methods should be affected after B.prototype.__proto__ change");
      print("static A2",           B.staticMethod(),    "Static methods should be unaffected after B.prototype.__proto__ change");
      print(instanceB1.method(),   instanceB2.method(), "All instances should have been changed by B.prototype.__proto__ change");
    }
  },
  {
    name: "super reference in base class constructor",
    body: function () {
        class A {
            constructor() { super.toString(); }
            dontDoThis() { super.makeBugs = 1; }
        }
        class B {
            constructor() {
                this.string = super.toString();
                this.stringCall = super.toString.call(this);
                this.stringLambda = (()=>super.toString())() ;
                this.stringLambda2 = (()=>(()=>super.toString())())() ;
                this.stringEval = eval("super.toString()");
                this.stringEval2 = eval("eval(\"super.toString()\")");
                this.stringEvalLambda = eval("(()=>super.toString())()");
                this.stringEvalLambdaEval = eval("(()=>eval(\"super.toString()\"))()");
                this.stringEval2Lambda = eval("eval(\"(()=>super.toString())()\")");
                this.stringLambdaEval = (()=>eval("super.toString()"))() ;
                this.stringLambda2Eval = (()=>(()=>eval("super.toString()"))())() ;

                this.func = super.toString;
                this.funcLambda = (()=>super.toString)() ;
                this.funcLambda2 = (()=>(()=>super.toString)())() ;
                this.funcEval = eval("super.toString");
                this.funcEval2 = eval("eval(\"super.toString\")");
                this.funcEvalLambda = eval("(()=>super.toString)()");
                this.funcEvalLambdaEval = eval("(()=>eval(\"super.toString\"))()");
                this.funcEval2Lambda = eval("eval(\"(()=>super.toString)()\")");
                this.funcLambdaEval = (()=>eval("super.toString"))() ;
                this.funcLambda2Eval = (()=>(()=>eval("super.toString"))())() ;
            }
        }

        print("function", typeof A);

        var a = new A();
        var b = new B();

        a.dontDoThis();
        print(1, a.makeBugs);

        print("[object Object]", b.string);
        print("[object Object]", b.stringCall);
        print("[object Object]", b.stringLambda);
        print("[object Object]", b.stringLambda2);
        print("[object Object]", b.stringEval);
        print("[object Object]", b.stringEval2);
        print("[object Object]", b.stringEvalLambda);
        print("[object Object]", b.stringEvalLambdaEval);
        print("[object Object]", b.stringEval2Lambda);
        print("[object Object]", b.stringLambdaEval);
        print("[object Object]", b.stringLambda2Eval);

        print(Object.prototype.toString, b.func);
        print(Object.prototype.toString, b.funcLambda);
        print(Object.prototype.toString, b.funcLambda2);
        print(Object.prototype.toString, b.funcEval);
        print(Object.prototype.toString, b.funcEval2);
        print(Object.prototype.toString, b.funcEvalLambda);
        print(Object.prototype.toString, b.funcEvalLambdaEval);
        print(Object.prototype.toString, b.funcEval2Lambda);
        print(Object.prototype.toString, b.funcLambdaEval);
        print(Object.prototype.toString, b.funcLambda2Eval);
    }
  },
  {
    name: "Default constructors",
    body: function () {
      class a { };
      class b extends a { };

      print("class a { }", a.prototype.constructor.toString());
      print("class b extends a { }", b.prototype.constructor.toString());

      var result = [];
      var test = [];
      class c { constructor() { result = [...arguments]; } };
      class d extends c { };
      new d();
      print(result, [], "Default extends ctor with no args");

      test = [1, 2, 3];
      new d(...test);
      print(result, test, "Default extends ctor with some args");

      test = [-5, 4.53, "test", null, undefined, 9348579];
      new d(...test);
      print(result, test, "Default extends ctor with different arg types");
    }
  },
  {
    name: "Evals and lambdas",
    body: function () {
      class a { method() { return "hello world"; } };
      class b extends a {
        method1() { return eval("super.method()"); }
        method2() { return eval("super['method']()"); }
        method3() { return eval("eval('super.method();')"); }
        method4() { return eval("x => super.method()")(); }
        method5() { return (x => eval("super.method()"))(); }
        method6() { return (x => x => x => super.method())()()(); }
        method7() { return (x => eval("x => eval('super.method')"))()()(); }
        method8() { eval(); return (x => super.method())(); }
        method9() { eval(); return (x => function () { return eval("x => super()")(); }())();}
        method10(){ var x = () => { eval(""); return super.method(); }; return x(); }
      }

      let instance = new b();

      print("hello world", instance.method1(), "Basic eval use");
      print("hello world", instance.method2(), "Basic eval use 2");
      print("hello world", instance.method3(), "Nested eval use");
      print("hello world", instance.method4(), "Mixed lambda and eval use, no nesting");
      print("hello world", instance.method5(), "Mixed lambda and eval use, no nesting 2");
      print("hello world", instance.method6(), "Nested lambdas and eval");
      print("hello world", instance.method7(), "Nested lambdas and nested evals");
      print("hello world", instance.method8(), "Lambda with an eval in the parent");
      print(function() { instance.method9(); }, SyntaxError);
      print(function() { (x => eval('super()'))(); }, SyntaxError);
      print("hello world", instance.method10(), "Lambda with an eval in the lambda");
    }
  },
  {
    name: "Immutable binding within class body, declarations also have normal let binding in enclosing context",
    body: function() {
      var c = class k {
          reassign() { eval('k = 0; print(k);'); }
      };

      
      var obj1 = new c();
      print(function() { obj1.reassign() }, TypeError);

      
      class Q extends c {
          reassign() { eval('Q = 0;'); }
      };

      var obj2 = new Q();
      print(function() { obj2.reassign() }, TypeError);
      
      Q = 0;
      print(Q, 0, "Mutable class declaration binding");
    }
  },
  {
    name: "Ensure the super scope slot is emitted at the right time",
    body: function () {
      
      class a { method () { return "hello" } };
      class b extends a { method () { let a; let b; return (x => super.method()); } }
    }
  },
  {
    name: "'super' reference in eval() and lambda",
    body: function () {
        class a {
            method() {return "foo"}
        }

        class b extends a {
            method1() { return eval("super.method()") }
            method2() { var method= () => super.method(); return method(); }
            method3() { return eval("var method= () => super.method(); method();") }
            method4() { return eval("var method=function () { return super.method()}; method();") }
            method5() { return eval("class a{method(){return 'bar'}}; class b extends a{method(){return super.method()}};(new b()).method()") }
        }

        let instance = new b();

        print("foo",instance.method1(),"'super' in eval()");
        print("foo",instance.method2(),"'super' in lambda");
        print("foo",instance.method3(),"'super' in lambda in eval");
        
        
        print("bar",instance.method5(),"'super' in class method in eval");
     }
  },
  {
        name: "Class method can be a generator",
        body: function() {
            class ClassWithGeneratorMethod {
                *iter() {
                    for (let i of [1,2,3]) {
                        yield i;
                    }
                }
            };

            let a = [];
            for (let i of new ClassWithGeneratorMethod().iter()) {
                a.push(i);
            }

            print([1,2,3], a, "");
        }
    },
    {
        name: "Class method with computed name can be a generator",
        body: function() {
            class ClassWithGeneratorMethod {
                *[Symbol.iterator]() {
                    for (let i of [1,2,3]) {
                        yield i;
                    }
                }
            };

            let a = [];
            for (let i of new ClassWithGeneratorMethod()) {
                a.push(i);
            }

            print([1,2,3], a, "");
        }
    },
    {
        name: "Class static method descriptor values",
        body: function() {
            class B {
                static method() {
                    return 'abc';
                }
                static ['method2']() {
                    return 'def';
                }
                static get method3() {
                    return 'ghi';
                }
                static get ['method4']() {
                    return 'jkl';
                }
                static set method5(x) {
                    return 'mno';
                }
                static set ['method6'](x) {
                    return 'pqr';
                }
                static *method7() {
                    yield 'stu';
                }
                static *['method8']() {
                    yield 'vwx';
                }
            }

            verifyClassMember(B, 'method', 'abc');
            verifyClassMember(B, 'method2', 'def');
            verifyClassMember(B, 'method3', 'ghi', true);
            verifyClassMember(B, 'method4', 'jkl', true);
            verifyClassMember(B, 'method5', 'mno', false, true);
            verifyClassMember(B, 'method6', 'pqr', false, true);
            verifyClassMember(B, 'method7', 'stu', false, false, true);
            verifyClassMember(B, 'method8', 'vwx', false, false, true);
        }
    },
    {
        name: "Class method descriptor values",
        body: function() {
            class B {
                method() {
                    return 'abc';
                }
                ['method2']() {
                    return 'def';
                }
                get method3() {
                    return 'ghi';
                }
                get ['method4']() {
                    return 'jkl';
                }
                set method5(x) {
                    return 'mno';
                }
                set ['method6'](x) {
                    return 'pqr';
                }
                *method7() {
                    yield 'stu';
                }
                *['method8']() {
                    yield 'vwx';
                }
            }

            verifyClassMember(B.prototype, 'method', 'abc');
            verifyClassMember(B.prototype, 'method2', 'def');
            verifyClassMember(B.prototype, 'method3', 'ghi', true);
            verifyClassMember(B.prototype, 'method4', 'jkl', true);
            verifyClassMember(B.prototype, 'method5', 'mno', false, true);
            verifyClassMember(B.prototype, 'method6', 'pqr', false, true);
            verifyClassMember(B.prototype, 'method7', 'stu', false, false, true);
            verifyClassMember(B.prototype, 'method8', 'vwx', false, false, true);
        }
    },
    {
        name: "Class constructor cannot be called without new keyword",
        body: function () {
            class A {}

            print(function() { A(); }, TypeError, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            print(function() { A.call(); }, TypeError, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            print(function() { A.apply(); }, TypeError, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");

            class B extends A {}

            print(function() { B(); }, TypeError, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            print(function() { B.call(); }, TypeError, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            print(function() { B.apply(); }, TypeError, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");

            class SubArray extends Array { };

            print(function() { SubArray(); }, TypeError, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            print(function() { SubArray.call(); }, TypeError, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            print(function() { SubArray.apply(); }, TypeError, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
        }
    },
    {
        name: "Class methods cannot be called as constructors",
        body: function() {
            class B {
                method() {
                    return { foo: 'a' };
                }
                static method2() {
                    return { foo: 'b' };
                }
            }

            print(function() { new B.prototype.method(); }, TypeError, "Base class prototype method cannot be new'd", "Function is not a constructor");
            print(function() { new B.method2(); }, TypeError, "Base class static method cannot be new'd", "Function is not a constructor");

            class C extends B {
                method3() {
                    return { foo: 'c' };
                }
                static method4() {
                    return { foo: 'd' };
                }
            }

            print(function() { new C.prototype.method(); }, TypeError, "Base class prototype method cannot be new'd", "Function is not a constructor");
            print(function() { new C.method2(); }, TypeError, "Base class static method cannot be new'd", "Function is not a constructor");
            print(function() { new C.prototype.method3(); }, TypeError, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            print(function() { new C.method4(); }, TypeError, "Derived class static method cannot be new'd", "Function is not a constructor");

            class D extends Array {
                method5() {
                    return { foo: 'e' };
                }
                static method6() {
                    return { foo: 'f' };
                }
            }

            print(function() { new D.prototype.method5(); }, TypeError, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            print(function() { new D.method6(); }, TypeError, "Derived class static method cannot be new'd", "Function is not a constructor");
        }
    },
    {
        name: "Class static member cannot have computed name 'prototype'",
        body: function() {
            print(function() { eval(`class A { static ['prototype']() {} };`); }, TypeError, "Ordinary static member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            print(function() { eval(`class A { static get ['prototype']() {} };`); }, TypeError, "Static get member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            print(function() { eval(`class A { static set ['prototype'](x) {} };`); }, TypeError, "Static set member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            print(function() { eval(`class A { static *['prototype']() {} };`); }, TypeError, "Static generator member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");

            print(function() { eval(`class A { ['prototype']() {} };`); }, "Class member with computed name 'prototype' is fine");
            print(function() { eval(`class A { get ['prototype']() {} };`); }, "Class get member with computed name 'prototype' is fine");
            print(function() { eval(`class A { set ['prototype'](x) {} };`); }, "Class set member with computed name 'prototype' is fine");
            print(function() { eval(`class A { *['prototype']() {} };`); }, "Class generator member with computed name 'prototype' is fine");
        }
    },
    {
        name: "Extends expression of a class declaration or expression is strict mode",
        body: function() {
            var BadClass = class extends function() { arguments.callee; } {};
            print(function() { Object.getPrototypeOf(BadClass).arguments; }, TypeError, "The extends expression of a class expression should be parsed in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            print(function() { new BadClass(); }, TypeError, "New'ing a class with a parent constructor that throws in strict mode, should throw", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            print(function() { eval('class WorseClass extends (function foo() { with ({}); return foo; }()) {};'); }, SyntaxError, "The extends expression of a class decl should be parsed in strict mode", "'with' statements are not allowed in strict mode");
        }
    },
    {
        name: "Class identifier is evaluated in strict mode",
        body: function() {
            print(function() { eval('class arguments {};'); }, SyntaxError, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");
            print(function() { eval('var x = class arguments {};'); }, SyntaxError, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");

            print(function() { eval('class eval {};'); }, SyntaxError, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
            print(function() { eval('var x = class eval {};'); }, SyntaxError, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
        }
    },
    {
        name: "Classes with caller/arguments methods",
        body: function() {
            class ClassWithArgumentsAndCallerMethods {
                static arguments() { return 'abc'; }
                static caller() { return 'def'; }

                arguments() { return '123'; }
                caller() { return '456'; }
            }

            print('abc', ClassWithArgumentsAndCallerMethods.arguments(), "ClassWithArgumentsAndCallerMethods.arguments() === 'abc'");
            print('def', ClassWithArgumentsAndCallerMethods.caller(), "ClassWithArgumentsAndCallerMethods.caller() === 'def'");
            print('123', new ClassWithArgumentsAndCallerMethods().arguments(), "new ClassWithArgumentsAndCallerMethods().arguments() === '123'");
            print('456', new ClassWithArgumentsAndCallerMethods().caller(), "new ClassWithArgumentsAndCallerMethods().caller() === '456'");

            let set_arguments = '';
            let set_caller = '';
            class ClassWithArgumentsAndCallerAccessors {
                static get arguments() { return 'abc'; }
                static set arguments(v) { set_arguments = v; }
                static get caller() { return 'def'; }
                static set caller(v) { set_caller = v; }

                get arguments() { return '123'; }
                set arguments(v) { set_arguments = v; }
                get caller() { return '456'; }
                set caller(v) { set_caller = v; }
            }

            print('abc', ClassWithArgumentsAndCallerAccessors.arguments, "ClassWithArgumentsAndCallerAccessors.arguments === 'abc'");
            print('def', ClassWithArgumentsAndCallerAccessors.caller, "ClassWithArgumentsAndCallerAccessors.caller === 'def'");
            print('123', new ClassWithArgumentsAndCallerAccessors().arguments, "new ClassWithArgumentsAndCallerAccessors().arguments === '123'");
            print('456', new ClassWithArgumentsAndCallerAccessors().caller, "new ClassWithArgumentsAndCallerAccessors().caller === '456'");
            ClassWithArgumentsAndCallerAccessors.arguments = 123
            print(123, set_arguments, "ClassWithArgumentsAndCallerAccessors.arguments = 123 (calls setter)");
            new ClassWithArgumentsAndCallerAccessors().arguments = 456
            print(456, set_arguments, "new ClassWithArgumentsAndCallerAccessors().arguments = 456 (calls setter)");
            ClassWithArgumentsAndCallerAccessors.caller = 123
            print(123, set_caller, "ClassWithArgumentsAndCallerAccessors.caller = 123 (calls setter)");
            new ClassWithArgumentsAndCallerAccessors().caller = 456
            print(456, set_caller, "new ClassWithArgumentsAndCallerAccessors().caller = 456 (calls setter)");

            class ClassWithArgumentsAndCallerGeneratorMethods {
                static *arguments() { yield 'abc'; }
                static *caller() { yield 'def'; }

                *arguments() { yield '123'; }
                *caller() { yield '456'; }
            }

            let s;
            for (s of ClassWithArgumentsAndCallerGeneratorMethods.arguments()) {}
            print('abc', s, "s of ClassWithArgumentsAndCallerGeneratorMethods.arguments() === 'abc'");
            s;
            for (s of ClassWithArgumentsAndCallerGeneratorMethods.caller()) {}
            print('def', s, "s of ClassWithArgumentsAndCallerGeneratorMethods.caller() === 'def'");
            s;
            for (s of new ClassWithArgumentsAndCallerGeneratorMethods().arguments()) {}
            print('123', s, "s of new ClassWithArgumentsAndCallerGeneratorMethods().arguments() === '123'");
            s;
            for (s of new ClassWithArgumentsAndCallerGeneratorMethods().caller()) {}
            print('456', s, "s of new ClassWithArgumentsAndCallerGeneratorMethods().caller() === '456'");

            class ClassWithArgumentsAndCallerComputedNameMethods {
                static ['arguments']() { return 'abc'; }
                static ['caller']() { return 'def'; }

                ['arguments']() { return '123'; }
                ['caller']() { return '456'; }
            }

            print('abc', ClassWithArgumentsAndCallerComputedNameMethods.arguments(), "ClassWithArgumentsAndCallerComputedNameMethods.arguments() === 'abc'");
            print('def', ClassWithArgumentsAndCallerComputedNameMethods.caller(), "ClassWithArgumentsAndCallerComputedNameMethods.caller() === 'def'");
            print('123', new ClassWithArgumentsAndCallerComputedNameMethods().arguments(), "new ClassWithArgumentsAndCallerComputedNameMethods().arguments() === '123'");
            print('456', new ClassWithArgumentsAndCallerComputedNameMethods().caller(), "new ClassWithArgumentsAndCallerComputedNameMethods().caller() === '456'");

            class ClassWithArgumentsAndCallerComputedNameAccessors {
                static get ['arguments']() { return 'abc'; }
                static set ['arguments'](v) { set_arguments = v; }
                static get ['caller']() { return 'def'; }
                static set ['caller'](v) { set_caller = v; }

                get ['arguments']() { return '123'; }
                set ['arguments'](v) { set_arguments = v; }
                get ['caller']() { return '456'; }
                set ['caller'](v) { set_caller = v; }
            }

            print('abc', ClassWithArgumentsAndCallerAccessors.arguments, "ClassWithArgumentsAndCallerAccessors.arguments === 'abc'");
            print('def', ClassWithArgumentsAndCallerAccessors.caller, "ClassWithArgumentsAndCallerAccessors.caller === 'def'");
            print('123', new ClassWithArgumentsAndCallerAccessors().arguments, "new ClassWithArgumentsAndCallerAccessors().arguments === '123'");
            print('456', new ClassWithArgumentsAndCallerAccessors().caller, "new ClassWithArgumentsAndCallerAccessors().caller === '456'");
            ClassWithArgumentsAndCallerAccessors.arguments = 123
            print(123, set_arguments, "ClassWithArgumentsAndCallerAccessors.arguments = 123 (calls setter)");
            new ClassWithArgumentsAndCallerAccessors().arguments = 456
            print(456, set_arguments, "new ClassWithArgumentsAndCallerAccessors().arguments = 456 (calls setter)");
            ClassWithArgumentsAndCallerAccessors.caller = 123
            print(123, set_caller, "ClassWithArgumentsAndCallerAccessors.caller = 123 (calls setter)");
            new ClassWithArgumentsAndCallerAccessors().caller = 456
            print(456, set_caller, "new ClassWithArgumentsAndCallerAccessors().caller = 456 (calls setter)");

            class ClassWithArgumentsAndCallerComputedNameGeneratorMethods {
                static *['arguments']() { yield 'abc'; }
                static *['caller']() { yield 'def'; }

                *['arguments']() { yield '123'; }
                *['caller']() { yield '456'; }
            }

            s;
            for (s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.arguments()) {}
            print('abc', s, "s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.arguments() === 'abc'");
            s;
            for (s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.caller()) {}
            print('def', s, "s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.caller() === 'def'");
            s;
            for (s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().arguments()) {}
            print('123', s, "s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().arguments() === '123'");
            s;
            for (s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().caller()) {}
            print('456', s, "s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().caller() === '456'");
        }
    },
    {
        name: "toString on constructor should return class declaration or expression",
        body: function () {
            var B = class { };
            var A = class A extends B { constructor (...args) { super(...args); }  set x(a) { this._x = a; } set y(a) { this._y = a; } };
            class C {
                set x(a) { this._x = a; }
                set y(a) { this._y = a; }
            };
            class D { constructor() {}  get x() { return 0; } };
            var E = D;

            print("class A extends B { constructor (...args) { super(...args); }  set x(a) { this._x = a; } set y(a) { this._y = a; } }", A.prototype.constructor.toString());
            print("class { }", B.prototype.constructor.toString());
            print("class C {\r\n                set x(a) { this._x = a; }\r\n                set y(a) { this._y = a; }\r\n            }", C.prototype.constructor.toString());
            print("class D { constructor() {}  get x() { return 0; } }", D.prototype.constructor.toString());
            print("class D { constructor() {}  get x() { return 0; } }", E.prototype.constructor.toString());
        }
    },
    {
        name: "class getters and setters must take exactly zero and one parameters respectively",
        body: function () {
            print(function () { eval("class C { get foo() { } }"); }, "Class getter with zero parameters is valid syntax", "asdf");
            print(function () { eval("class C { get foo(x) { } }"); }, SyntaxError, "Class getter with one parameter is invalid syntax", "Getter functions must have no parameters");
            print(function () { eval("class C { get foo(x, y, z) { } }"); }, SyntaxError, "Class getter with more than one parameter is invalid syntax", "Getter functions must have no parameters");

            print(function () { eval("class C { set foo(x) { } }"); }, "Class setter with exactly one parameter is valid syntax", "asdf");
            print(function () { eval("class C { set foo() { } }"); }, SyntaxError, "Class setter with zero parameters is invalid syntax", "Setter functions must have exactly one parameter");
            print(function () { eval("class C { set foo(x, y, z) { } }"); }, SyntaxError, "Class setter with more than one parameter is invalid syntax", "Setter functions must have exactly one parameter");
        }
    },
    {
        name: "class identifier is const binding inside class body",
        body: function () {
            print(function () { class A { constructor() { A = 0; } }; new A(); }, TypeError, "Assignment to class identifier in constructor");
            print(function() { new (class A { constructor() { A = 0; }}); }, TypeError, "Assignment to class identifier in constructor");
            print(function() { class A { m() { A = 0; } }; new A().m(); }, TypeError, "Assignment to class identifier in method");
            print(function() { new (class A { m() { A = 0; } }).m(); }, TypeError, "Assignment to class identifier in method" );
            print(function() { class A { get x() { A = 0; } }; new A().x; }, TypeError, "Assignment to class identifier in getter");
            print(function() { (new (class A { get x() { A = 0; } })).x; }, TypeError, "Assignment to class identifier in getter");
            print(function() { class A { set x(_) { A = 0; } }; new A().x = 15; }, TypeError, "Assignment to class identifier in setter");
            print(function() { (new (class A { set x(_) { A = 0; } })).x = 15; }, TypeError, "Assignment to class identifier in setter");
        }
    },
    {
        name: "`class x extends y` where `y` is an expression containing identifier `x` should be a ReferenceError",
        body: function() {
            var refErrorText = "Use before declaration";

            function print(code) {
                print(function () { eval(code) }, ReferenceError, `\n    ${code}`, refErrorText);
            }

            function print(code) {
                
                print(code);
                print(`var x = ${code}`);
                print(`let x = ${code}`);
                
                
                
                print(`(${code})`);
                print(`var x = (${code})`);
                print(`let x = (${code})`);
            }

            function id(x) { return x; };
            function fun(x) { return function() { return x }; }

            
            print("class x extends x {}");
            print("class x extends (x) {}");
            print("class x extends id(x) {}");
            print("class x extends fun(x) {}");

            
            print("var y = class x extends x {}");
            print("let y = class x extends x {}");

            
            print(function() {
                class x extends y {}; 
                var y = function() {};
            }, TypeError, "y is undefined", "Function is not a constructor");
            print(`
                class x extends y {}; 
                let y = function() {};
            `);

            
            print("class x extends eval('x') {}");
            print("class x extends eval('(x)') {}");
            print("class x extends eval('id(x)') {}");
            print("class x extends eval('fun(x)') {}");
        }
    },
    {
         name: "Semantically restricted keywords can be used as class method names",
         body: function () {
             
             class a { let() {} };
             class b { static() {} };
             class c { static static() {} };
         }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}


class a {};
a = null; 


print(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");

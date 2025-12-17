"use strict";

print("./resources/harmony-support.js");

{
  class C {
    static #a;
    static getA() { return this.#a; }
  }

  print(undefined, C.a);
  print(undefined, C.getA());

  let c = new C;
  print(undefined, c.a);
}

{
  class C {
    static #a = 1;
    static getA() { return this.#a; }
  }

  print(undefined, C.a);
  print(1, C.getA());

  let c = new C;
  print(undefined, c.a);
}

{
  class C {
    static #a = 1;
    static #b = this.#a;
    static getB() { return this.#b; }
  }

  print(1, C.getB());

  let c = new C;
  print(undefined, c.getB);
}

{
  class C {
    static #a = 1;
    static getA() { return this.#a; }
    constructor() {
      print(() => this.#a, TypeError);
      C.#a = 2;
    }
  }

  print(1, C.getA());

  let c = new C;
  print(() => C.prototype.getA.call(c));
  print(2, C.getA());
}

{
  class C {
    static #a = this;
    static #b = () => this;
    static getA() { return this.#a; }
    static getB() { return this.#b; }
  }

  print(C, C.getA());
  print(C, C.getB()());
}

{
  class C {
    static #a = this;
    static #b = function() { return this; };
    static getA() { return this.#a; }
    static getB() { return this.#b; }
  }

  print(C, C.getA());
  print(C, C.getB().call(C));
  print(undefined, C.getB()());
}


{
  class C {
    static #a = function() { return 1 };
    static getA() {return this.#a;}
  }

  print('#a', C.getA().name);
}

{
  let d = function() { return new.target; }
  class C {
    static #c = d;
    static getC() { return this.#c; }
  }

  print(undefined, C.getC()());
  print(new d, new (C.getC()));
}

{
  class C {
    static #a = 1;
    static getA(instance) { return instance.#a; }
  }

  class B { }

  print(undefined, C.a);
  print(1, C.getA(C));
  print(() => C.getA(B), TypeError);
}

{
  class A {
    static #a = 1;
    static getA() { return this.#a; }
  }

  class B extends A {}
  print(() => B.getA(), TypeError);
}

{
  class A {
    static #a = 1;
    static getA() { return A.#a; }
  }

  class B extends A {}
  print(1, B.getA());
}

{
  let prototypeLookup = false;
  class A {
    static set a(val) {
      prototypeLookup = true;
    }

    static get a() { return undefined; }
  }

  class C extends A {
    static #a = 1;
    static getA() { return this.#a; }
  }

  print(1, C.getA());
  print(false, prototypeLookup);
}

{
  class A {
    static a = 1;
  }

  class B extends A {
    static #b = this.a;
    static getB() { return this.#b; }
  }

  print(1, B.getB());
}

{
  class A {
    static #a = 1;
    static getA() { return this.#a; }
  }

  class B extends A {
    static getA() { return super.getA(); }
  }

  print(() => B.getA(), TypeError);
}

{
  class A {
    static #a = 1;
    static getA() { return this.#a;}
  }

  class B extends A {
    static #a = 2;
    static get_A() { return this.#a;}
  }

  print(1, A.getA());
  print(() => B.getA(), TypeError);
  print(2, B.get_A());
}

{
  let foo = undefined;
  class A {
    static #a = (function() { foo = 1; })();
  }

  print(1, foo);
}

{
  let foo = undefined;
  class A extends class {} {
    static #a = (function() { foo = 1; })();
  }

  print(1, foo);
}

{
  function makeClass() {
    return class {
      static #a;
      static setA(val) { this.#a = val; }
      static getA() { return this.#a; }
    }
  }

  let classA = makeClass();
  let classB = makeClass();

  print(undefined, classA.getA());
  print(undefined, classB.getA());

  classA.setA(3);
  print(3, classA.getA());
  print(undefined, classB.getA());

  classB.setA(5);
  print(3, classA.getA());
  print(5, classB.getA());

  print(() => classA.getA.call(classB), TypeError);
  print(() => classB.getA.call(classA), TypeError);
}

{
  let value = undefined;

  new class {
    static #a = 1;
    static getA() { return this.#a; }

    constructor() {
      new class C {
        static #a = 2;
        constructor() {
          value = C.#a;
        }
      }
    }
  }

  print(2, value);
}

{
  class A {
    static #a = 1;
    static b = class {
      static getA() { return this.#a; }
      static get_A(val) { return val.#a; }
    }
  }

  print(1, A.b.getA.call(A));
  print(1, A.b.get_A(A));
}

{
  print(() => class { static b = this.#a; static #a = 1 }, TypeError);
}

{
  let symbol = Symbol();

  class C {
    static #a = 1;
    static [symbol] = 1;
    static getA() { return this.#a; }
    static setA(val) { this.#a = val; }
  }

  var p = new Proxy(C, {
    get: function(target, name) {
      if (typeof(name) === 'symbol') {
        print(print(name));
      }
      return target[name];
    }
  });

  print(() => p.getA(), TypeError);
  print(() => p.setA(1), TypeError);
  print(1, p[symbol]);
}

{
  class C {
    static #b = Object.freeze(this);
    static getA() { return this.#a; }
    static #a = 1;
  }

  print(1, C.getA());
}

{
  class C {
    static #a = 1;
    static getA() { return eval('this.#a'); }
  }

  print(1, C.getA());
}

{
  var C;
  eval('C = class { static #a = 1; static getA() { return eval(\'this.#a\'); }}');

  print(1, C.getA());
}

{
  class C {
    static #a = 1;
    static getA() { return this.#a; }
    static setA() { eval('this.#a = 4'); }
  }

  print(1, C.getA());
  C.setA();
  print(4, C.getA());
}

{
  class C {
    static getA() { return eval('this.#a'); }
  }

  print(() => C.getA(), SyntaxError);
}


function shouldThrowSyntaxError(script) {
    let error;
    try {
        eval(script);
    } catch (e) {
        error = e;
    }

    if (!(error instanceof SyntaxError))
        throw new Error('Expected SyntaxError!');
}

shouldThrowSyntaxError("class C { #foo = 0; static #foo = 1; }");
shouldThrowSyntaxError("class C { static #foo = 0; #foo = 1; }");

{
  class C {
    static #foo = 0;
    testAccess(X) { return X.#foo; }
  }

  class D {
    static #foo = 0;
  }

  let c = new C();
  print(c.testAccess(C));
  print(() => c.testAccess(D), TypeError);
}

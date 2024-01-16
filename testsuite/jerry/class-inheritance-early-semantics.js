

function must_throw (str) {
  try {
    eval ("switch (1) { default: " + str + "}");
    assert (false);
  } catch (e) { }

  try {
    eval (str);
    assert (false);
  }
  catch (e) { }

  try {
    eval ("'use strict'; switch (1) { default: " + str + "}");
    assert (false);
  } catch (e) { }

  try {
    eval ("'use strict'; " + str);
    assert (false);
  } catch (e) { }
}

class A {
  constructor (a) {
    this.a = a;
  }

  f () {
    return 5;
  }
}

must_throw ("class B extends 5 + 6 + 5 { constructor (a, b) { super (a) } }");

must_throw ("class B extends null { constructor () { super () } }; new B");

must_throw ("var o = { a : 5 }; \
             class B extends Object.keys (o)[0] { constructor (a, b) { super (a) } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { this.b = b} } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { super.f () } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { eval ('this.b = b') } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { eval ('super.f ()') } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { super (a); super (a); } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { eval ('super (a)'); eval ('super (a)'); } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { super (a) } g () { super (a) } } \
             var b = new B (1, 2);");

must_throw ("class B extends A { constructor (a, b) { super (a) } g () { eval ('super (a)') } } \
             var b = new B (1, 2); \
             b.g ();");

must_throw ("class B extends A { constructor (a, b) { super (a) } g () { return function () { return super.f () } } } \
             var b = new B (1, 2); \
             b.g ()();");

must_throw ("class B extends A { constructor (a, b) { super (a) } \
                                 g () { return function () { return eval ('super.f ()') } } } \
             var b = new B (1, 2); \
             b.g ()();");

must_throw ("class B extends A { constructor (a, b) { super (a) } \
                                 g () { return function () { return eval (\"eval ('super.f ();')\") } } } \
             var b = new B (1, 2); \
             b.g ()();");

must_throw ("class A extends Array { constructor () { return 5; } }; new A");

must_throw ("class A extends Array { constructor () { return undefined; } }; new A");

must_throw ("class B extends undefined { }; new B;");

must_throw ("var A = class extends Array { . }");

must_throw ("class Array extends Array { }");

must_throw ("class A extends A { }");

must_throw ("class A extends { constructor () { super () } }");

must_throw ("class A extends a * b {}");

must_throw ("class A extends a = b {}");

must_throw ("class A extends a++ {}");

must_throw ("class A extends -a {}");

class B extends A {
  constructor (a, b) {
    super (a);
    assert (super.f () === 5);
  }

  g () {
    return () => {
      return super.f ();
    }
  }

  h () {
    return () => {
      return () => {
        return eval ('super.f ()');
      }
    }
  }
}

var b = new B (1, 2);
assert (b.g ()() === 5);
assert (b.h ()()() === 5);

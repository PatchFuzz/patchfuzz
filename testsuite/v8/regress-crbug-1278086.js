



'use strict';

{
  class C {
    field = c.concat();
  }

  var c;
  assertThrows(() => {
    c = new C();
  }, TypeError);
}


{
  const C = class {
    field = c.concat();
  }

  var c;
  assertThrows(() => {
    c = new C();
  }, TypeError);
}

class D {
  field = ({ d } = undefined);
}

var d;
assertThrows(
  () => {
    d = new D();
  },
  TypeError,
  /Cannot destructure property 'd' of 'undefined' as it is undefined/);

class B {
  static B = class B {
    field = b.concat();
  }
  static func() {
    return B;  
  }
}
var b;
assertThrows(() => {
  b = new B.B();
}, TypeError);

class A {
  static B = class B {
    field = a.concat();
  }
  static func() {
    return A;  
  }
}
var a;
assertThrows(() => {
  a = new A.B();
}, TypeError);

class E {
  #x = 1;
  static B = class B {
    field = this.#x;
  }
}

var e;
assertThrows(
  () => { e = new E.B(); },
  TypeError,
  /Cannot read private member #x from an object whose class did not declare it/);

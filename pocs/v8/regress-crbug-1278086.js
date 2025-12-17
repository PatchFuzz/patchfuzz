'use strict';

{
  class C {
    field = c.concat();
  }

  var c;
  print(() => {
    c = new C();
  }, TypeError);
}


{
  const C = class {
    field = c.concat();
  }

  var c;
  print(() => {
    c = new C();
  }, TypeError);
}

class D {
  field = ({ d } = undefined);
}

var d;
print(
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
print(() => {
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
print(() => {
  a = new A.B();
}, TypeError);

class E {
  #x = 1;
  static B = class B {
    field = this.#x;
  }
}

var e;
print(
  () => { e = new E.B(); },
  TypeError,
  /Cannot read private member #x from an object whose class did not declare it/);

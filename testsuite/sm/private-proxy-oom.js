


function assertThrowsTypeError(f) {
  assertThrowsInstanceOf(f, TypeError);
}


function testing() {
  var target = {};
  var p1 = new Proxy(target, {});
  var p2 = new Proxy(target, {});

  class A extends class {
    constructor(o) {
      return o;
    }
  }
  {
    #field = 10;
    static gf(o) {
      return o.#field;
    }
    static sf(o) {
      o.#field = 15;
    }
  }

  
  new A(p1);
  assertEq(A.gf(p1), 10);
  A.sf(p1)
  assertEq(A.gf(p1), 15);

  
  assertThrowsTypeError(() => A.gf(target));

  
  assertThrowsTypeError(() => A.sf(p2));

  
  assertThrowsTypeError(() => A.gf(p2));

  
  assertThrowsTypeError(() => A.gf(target));
}

oomTest(testing);
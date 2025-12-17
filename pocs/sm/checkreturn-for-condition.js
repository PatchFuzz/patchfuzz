;

function testReturn() {
  class C extends class {} {
    constructor(n) {
      for (let i = 0; i < n; ++i) {
        return;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    print(() => new C(1), ReferenceError);
  }
}
testReturn();

function testReturnSuper() {
  class C extends class {} {
    constructor(n) {
      super();
      for (let i = 0; i < n; ++i) {
        return;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    
    new C(1);
  }
}
testReturnSuper();

function testReturnPrimitive() {
  class C extends class {} {
    constructor(n) {
      for (let i = 0; i < n; ++i) {
        return 0;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    print(() => new C(1), TypeError);
  }
}
testReturnPrimitive();

function testReturnPrimitiveSuper() {
  class C extends class {} {
    constructor(n) {
      super();
      for (let i = 0; i < n; ++i) {
        return 0;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    print(() => new C(1), TypeError);
  }
}
testReturnPrimitiveSuper();

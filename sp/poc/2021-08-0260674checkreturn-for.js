;

function testReturn() {
  class C extends class {} {
    constructor() {
      for (;;) {
        return;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    assertThrowsInstanceOf(() => new C(), ReferenceError);
  }
}
testReturn();

function testReturnSuper() {
  class C extends class {} {
    constructor() {
      super();
      for (;;) {
        return;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    
    new C();
  }
}
testReturnSuper();

function testReturnPrimitive() {
  class C extends class {} {
    constructor() {
      for (;;) {
        return 0;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    assertThrowsInstanceOf(() => new C(), TypeError);
  }
}
testReturnPrimitive();

function testReturnPrimitiveSuper() {
  class C extends class {} {
    constructor() {
      super();
      for (;;) {
        return 0;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    assertThrowsInstanceOf(() => new C(), TypeError);
  }
}
testReturnPrimitiveSuper();

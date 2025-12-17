;

function testReturn() {
  class C extends class {} {
    constructor() {
      while (true) {
        return;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    print(() => new C(), ReferenceError);
  }
}
testReturn();

function testReturnSuper() {
  class C extends class {} {
    constructor() {
      super();
      while (true) {
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
      while (true) {
        return 0;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    print(() => new C(), TypeError);
  }
}
testReturnPrimitive();

function testReturnPrimitiveSuper() {
  class C extends class {} {
    constructor() {
      super();
      while (true) {
        return 0;
      }
      print(true, false, "unreachable");
    }
  }

  for (var i = 0; i < 100; ++i) {
    print(() => new C(), TypeError);
  }
}
testReturnPrimitiveSuper();

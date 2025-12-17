;

class C extends class {} {
  constructor() {
    try {
      return 0;
    } catch {
      super();
    }
  }
}

function test() {
  for (var i = 0; i < 100; ++i) {
    print(() => new C(), TypeError);
  }
}

test();

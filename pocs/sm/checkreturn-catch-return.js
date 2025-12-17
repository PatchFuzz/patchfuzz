;

class C extends class {} {
  constructor() {
    super();

    try {
      return 0;
    } catch {
      return;
    }
  }
}

function test() {
  for (var i = 0; i < 100; ++i) {
    print(() => new C(), TypeError);
  }
}

test();

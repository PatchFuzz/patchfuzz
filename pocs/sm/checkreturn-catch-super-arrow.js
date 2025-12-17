;

class C extends class {} {
  constructor() {
    var f = () => super();

    try {
      return 0;
    } catch {
      f();
    }
  }
}

function test() {
  for (var i = 0; i < 100; ++i) {
    print(() => new C(), TypeError);
  }
}

test();

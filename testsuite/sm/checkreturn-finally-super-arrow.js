class C extends class {} {
  constructor() {
    var f = () => super();

    try {
      return;
    } finally {
      f();
    }
  }
}

function test() {
  for (var i = 0; i < 100; ++i) {
    
    new C();
  }
}

test();

function print(x) {
  if (!x)
    throw new Error("Bad assertion!");
}

(function() {
  class C extends class {} {
    constructor() {
      var f = () => { super(); };
      f();
      return;
    }
  }

  for (var i = 0; i < 5000; i++) {
    var c = new C();
    print(c instanceof C);
  }
})();

(function() {
  class C extends class {} {
    constructor() {
      var f = () => { super(); };
      f();
      return undefined;
    }
  }

  for (var i = 0; i < 5000; i++) {
    var c = new C();
    print(typeof c === "object");
  }
})();

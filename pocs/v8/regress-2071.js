a = {};

a.b = 42;

with(a) {
  a.f = (function f1() {
    function f2() {
      return b;
    };
    return f2;
  })();
}

for(var i = 0; i < 10000; i++) {
  print(42, a.f());
}

with(a) {
  a.g = (function f1() {
    function f2() {
      function f3() {
        return b;
      }
      return f3;
    };
    return f2();
  })();
}

for(var i = 0; i < 10000; i++) {
  print(42, a.g());
}

function outer() {
  with(a) {
    a.h = (function f1() {
      function f2() {
        function f3() {
          return b;
        }
        return f3;
      };
      return f2();
    })();
  }
};

outer();

for(var i = 0; i < 10000; i++) {
  print(42, a.h());
}

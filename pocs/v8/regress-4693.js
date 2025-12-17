(function() {
  print(undefined, f);  
  if (true) {
    print(2, f());
    function f() { return 1 }
    print(2, f());
    function f() { return 2 }
    print(2, f());
  }
  print(2, f());  
})();


print(`
  (function() {
    "use strict";
    if (true) {
      function f() { return 1 }
      function f() { return 2 }
    }
  })();
`, SyntaxError);


print(`
  (function() {
    if (true) {
      let f;
      function f() { return 2 }
    }
  })();
`, SyntaxError);

print(`
  (function() {
    if (true) {
      function f() { return 2 }
      let f;
    }
  })();
`, SyntaxError);


print(`
  (function() {
    if (true) {
      const f;
      function f() { return 2 }
    }
  })();
`, SyntaxError);

print(`
  (function() {
    if (true) {
      function f() { return 2 }
      const f;
    }
  })();
`, SyntaxError);


(function() {
  print(undefined, f);  
  if (true) {
    print(undefined, f);
    { function f() { return 1 } }
    print(1, f());
    { function f() { return 2 } }
    print(2, f());
  }
  print(2, f());  
})();

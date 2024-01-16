





(function() {
  assertEquals(undefined, f);  
  if (true) {
    assertEquals(2, f());
    function f() { return 1 }
    assertEquals(2, f());
    function f() { return 2 }
    assertEquals(2, f());
  }
  assertEquals(2, f());  
})();


assertThrows(`
  (function() {
    "use strict";
    if (true) {
      function f() { return 1 }
      function f() { return 2 }
    }
  })();
`, SyntaxError);


assertThrows(`
  (function() {
    if (true) {
      let f;
      function f() { return 2 }
    }
  })();
`, SyntaxError);

assertThrows(`
  (function() {
    if (true) {
      function f() { return 2 }
      let f;
    }
  })();
`, SyntaxError);


assertThrows(`
  (function() {
    if (true) {
      const f;
      function f() { return 2 }
    }
  })();
`, SyntaxError);

assertThrows(`
  (function() {
    if (true) {
      function f() { return 2 }
      const f;
    }
  })();
`, SyntaxError);


(function() {
  assertEquals(undefined, f);  
  if (true) {
    assertEquals(undefined, f);
    { function f() { return 1 } }
    assertEquals(1, f());
    { function f() { return 2 } }
    assertEquals(2, f());
  }
  assertEquals(2, f());  
})();

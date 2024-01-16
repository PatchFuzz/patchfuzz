





























var foo = Object.defineProperty({}, "bar", {
 get: function () {
      return 10;
    }
  });

assertDoesNotThrow("foo.bar = 20");

function shouldThrow() {
  'use strict';
  foo.bar = 20;
}

assertThrows("shouldThrow()");

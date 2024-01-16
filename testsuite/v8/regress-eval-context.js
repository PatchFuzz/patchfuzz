



(function() {
  'use strict';
  var x = 0;

  {
    let x = 1;
    assertEquals(1, eval("x"));
  }

  {
    let y = 2;
    assertEquals(0, eval("x"));
  }

  assertEquals(0, eval("x"));
})();

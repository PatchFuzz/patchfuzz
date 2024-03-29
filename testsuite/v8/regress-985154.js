



(function TestSloppynessPropagates() {
  let f = (function() {
    function Module() {
      "use asm";
      function f() {}
      return {f: f}
    }
    return Module;
  })()().f;
  let p = Object.getOwnPropertyNames(f);
  assertArrayEquals(["length", "name", "arguments", "caller", "prototype"], p);
  assertEquals(null, f.arguments);
  assertEquals(null, f.caller);
})();

(function TestStrictnessPropagates() {
  let f = (function() {
    "use strict";
    function Module() {
      "use asm";
      function f() {}
      return {f: f}
    }
    return Module;
  })()().f;
  let p = Object.getOwnPropertyNames(f);
  assertArrayEquals(["length", "name", "prototype"], p);
  assertThrows(() => f.arguments, TypeError);
  assertThrows(() => f.caller, TypeError);
})();

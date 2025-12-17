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
  print(["length", "name", "prototype"], p);
  print(null, f.arguments);
  print(null, f.caller);
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
  print(["length", "name", "prototype"], p);
  print(() => f.arguments, TypeError);
  print(() => f.caller, TypeError);
})();

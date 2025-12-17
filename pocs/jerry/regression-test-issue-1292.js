(function nonStrictFuncExpr() {
  assert(typeof nonStrictFuncExpr == "function");
  nonStrictFuncExpr = 123;
  assert(typeof nonStrictFuncExpr == "function");
})();

(function strictFuncExpr() {
  "use strict";
  assert(typeof strictFuncExpr == "function");
  try {
    strictFuncExpr = 123;
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }
  assert(typeof strictFuncExpr == "function");
})();

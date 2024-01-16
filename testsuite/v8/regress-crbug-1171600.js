



(function TestSpreadAfterMethodUsingSuper() {
  let v = {
    m() {
      { super.x; };
    },
    ...[() => {}]
  };
})();

(function TestSpreadAfterMethodUsingEval() {
  let v = {
    m() {
      { eval(); };
    },
    ...[() => {}]
  };
})();

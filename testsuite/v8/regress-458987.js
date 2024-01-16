



(function () {
  "use asm";

  function g() {}

  runNearStackLimit(g);
})();

function runNearStackLimit(f) {
  function g() { try { g(); } catch(e) { f(); } };
  g();
}

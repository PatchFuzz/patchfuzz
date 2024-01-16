





function Module(stdlib) {
  "use asm";

  var fround = stdlib.Math.fround;

  
  function f(a) {
    a = +a;
    return fround(a);
  }

  return { f: f };
}

var f = Module({ Math: Math }).f;

function runNearStackLimit()  {
  function g() { try { g(); } catch(e) { f(); } };
  g();
}

(function () {
  function g() {}

  runNearStackLimit(g);
})();

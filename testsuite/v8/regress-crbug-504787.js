



function f() {
  "use asm";
  function g() {
    function f() {};
  }
  return g;
}

f()();

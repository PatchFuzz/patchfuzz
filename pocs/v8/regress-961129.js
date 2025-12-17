%EnableCodeLoggingForTesting();

function module() {
  "use asm";
  function f() {
    var i = 4;
    return i | 0;
  }
  return {f: f};
}

module().f();

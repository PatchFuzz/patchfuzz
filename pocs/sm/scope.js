;
var test = "";


test  = (function () {
  function f() {
    var x = 3;
    (function() {
      with(obj) {
        (function() {
          print(x, 2);
        })();
      }
    })();
  };

  return "var obj = { x : 2 };" + f.toString() + "; f()";
})();
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

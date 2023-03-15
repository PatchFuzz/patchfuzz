


;

var test = (function () {
  function f(x) {
    function ifTrue() {};
    function ifFalse() {};

    if (generation % 2 == 0)
      return ifTrue();
    return ifFalse();
  }
  return f.toString() + "; f()";
})();
evalWithCache(test, { printBytecode: true, printResult : true });

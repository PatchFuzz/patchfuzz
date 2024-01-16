load(libdir + "evalInFrame.js");




var G = this;

function globalFun(check, expectedThis) {
  if (check)
    assertEq(this, expectedThis);
  return this;
}
var expectedGlobalFunThis = globalFun(false);
evalInFrame(0, "globalFun(true, expectedGlobalFunThis)");

(function testInnerFun() {
  function innerFun(check, expectedThis) {
    if (check)
      assertEq(this, expectedThis);
    return this;
  }
  var expectedInnerFunThis = innerFun(false);
  evalInFrame(0, "innerFun(true, expectedInnerFunThis)");
  return [innerFun, expectedInnerFunThis]; 
})();

(function testWith() {
  var o = {
    withFun: function withFun(check, expectedThis) {
      if (check)
        assertEq(this, expectedThis);
      return this;
    }
  };
  with (o) {
    var expectedWithFunThis = withFun(false);
    evalInFrame(0, "withFun(true, expectedWithFunThis)");
  }
})();

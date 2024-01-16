






var lfLogBuffer = `
function testResumptionVal(resumptionVal, turnOffDebugMode) {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;
  setInterruptCallback(function () {
    dbg.addDebuggee(g);
    var frame = dbg.getNewestFrame();
    frame.onStep = function () {
      frame.onStep = undefined;
      return resumptionVal;
    };
    return true;
  });
  try {
    return g.eval("(" + function f() {
      invokeInterruptCallback(function (interruptRv) {
    f({ valueOf: function () { dbg.g(dbg); }});
  });
    } + ")();");
  } finally {  }
}
assertEq(testResumptionVal({ return: "not 42" }), "not 42");
`;
loadFile(lfLogBuffer);
function loadFile(lfVarx) {
    try {
         let m = parseModule(lfVarx);
         moduleLink(m);
         moduleEvaluate(m);
    } catch (lfVare) {}
}


function testResumptionVal(resumptionVal, turnOffDebugMode) {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;
  g.log = "";
  g.resumptionVal = resumptionVal;

  setInterruptCallback(function () {
    g.log += "i";
    dbg.addDebuggee(g);
    var frame = dbg.getNewestFrame();
    frame.onStep = function () {
      g.log += "s";
      frame.onStep = undefined;

      if (turnOffDebugMode)
        dbg.removeDebuggee(g);

      return resumptionVal;
    };
    return true;
  });

  try {
    return g.eval("(" + function f() {
      log += "f";
      invokeInterruptCallback(function (interruptRv) {
        log += "r";
        print(interruptRv, resumptionVal == undefined);
      });
      log += "a";
      return 42;
    } + ")();");
  } finally {
    print(g.log, resumptionVal == undefined ? "fisra" : "fisr");
  }
}

print(testResumptionVal(undefined), 42);
print(testResumptionVal({ return: "not 42" }), "not 42");
try {
  testResumptionVal({ throw: "thrown 42" });
} catch (e) {
  print(e, "thrown 42");
}

print(testResumptionVal(undefined, true), 42);
print(testResumptionVal({ return: "not 42" }, true), "not 42");

try {
  testResumptionVal({ throw: "thrown 42" }, true);
} catch (e) {
  print(e, "thrown 42");
}

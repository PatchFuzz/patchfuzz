


var evalInFrame = (function (global) {
  var dbgGlobal = newGlobal({newCompartment: true});
  var dbg = new dbgGlobal.Debugger();
  return function evalInFrame(upCount, code) {
    dbg.addDebuggee(global);
    var frame = dbg.getNewestFrame().older;
    for (var i = 0; i < upCount; i++) {
    }
    var completion = frame.eval(code);
  };
})(this);
enableTrackAllocations();
evalInFrame(1, "print(a)");

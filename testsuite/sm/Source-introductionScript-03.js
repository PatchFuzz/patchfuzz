


var dbg = new Debugger;

var g1 = newGlobal({newCompartment: true});
g1.g1 = g1;
var g1DO = dbg.addDebuggee(g1);

var g2 = newGlobal({newCompartment: true});
g2.g1 = g1;

var log = '';
dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionScript, undefined);
  assertEq(frame.script.source.introductionOffset, undefined);
};

g2.eval('g1.eval("debugger;");');
assertEq(log, 'd');


log = '';
dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionScript instanceof Debugger.Script, true);
  assertEq(typeof frame.script.source.introductionOffset, "number");
};

g1.eval('g1.eval("debugger;");');
assertEq(log, 'd');

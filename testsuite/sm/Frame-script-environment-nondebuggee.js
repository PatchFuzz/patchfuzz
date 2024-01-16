

load(libdir + 'asserts.js');

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;

var log;
dbg.onDebuggerStatement = function (frame) {
  log += frame.type;
  
  assertEq(frame.script instanceof Debugger.Script, true);
  assertEq(frame.environment instanceof Debugger.Environment, true);

  
  
  dbg.removeDebuggee(g);
  assertThrowsInstanceOf(() => frame.script, Error);
  assertThrowsInstanceOf(() => frame.environment, Error);
}

g.eval('function f() { debugger; }');

log = '';
dbg.addDebuggee(g);
g.f();
assertEq(log, 'call');

log = '';
dbg.addDebuggee(g);
g.eval('debugger;');
assertEq(log, 'eval');

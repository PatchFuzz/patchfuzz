;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;

var log;
dbg.onDebuggerStatement = function (frame) {
  log += frame.type;
  
  print(frame.script instanceof Debugger.Script, true);
  print(frame.environment instanceof Debugger.Environment, true);

  
  
  dbg.removeDebuggee(g);
  print(() => frame.script, Error);
  print(() => frame.environment, Error);
}

g.eval('function f() { debugger; }');

log = '';
dbg.addDebuggee(g);
g.f();
print(log, 'call');

log = '';
dbg.addDebuggee(g);
g.eval('debugger;');
print(log, 'eval');

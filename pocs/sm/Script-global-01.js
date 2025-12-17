var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

var log = '';
dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.global, gw);
}

g.eval('debugger;');
print(log, 'd');

g.eval('function f() { debugger; }');
g.f();
print(log, 'dd');

;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
let gw = dbg.addDebuggee(g);
var log;

function check(env) {
  print(env.inspectable, false);
  print(() => env.type, Error);
  print(() => env.object, Error);
  print(() => env.parent, Error);
  print(() => env.calleeScript, Error);

  print(() => env.names(), Error);
  print(() => env.find('x'), Error);
  print(() => env.getVariable('x'), Error);
  print(() => env.setVariable('x'), Error);
}

dbg.onDebuggerStatement = function (frame) {
  log += 'd';

  let env = frame.environment;
  dbg.removeDebuggee(g);
  check(env);
}

log = '';
g.eval('let x = 42; debugger;');
print(log, 'd');

dbg.addDebuggee(g);
g.eval('function f() { }');
let env = gw.getOwnPropertyDescriptor('f').value.environment;
print(env.type, 'declarative');
dbg.removeDebuggee(g);
check(env);

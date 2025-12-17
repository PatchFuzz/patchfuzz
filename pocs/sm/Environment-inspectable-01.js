;

var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
g2.g1 = g1;
g1.g2 = g2;

g1.eval('function f(xf) { return function h(xh) { eval(""); debugger; } }');
g1.eval('var h = f("value of xf");');



g2.eval('var capture;');
g2.eval('function k(xk) { capture = function () { return xk; }; g1.h("value of xh"); }');

var dbg = new Debugger;
dbg.addDebuggee(g1);
dbg.addDebuggee(g2);

dbg.onDebuggerStatement = debuggerHandler;

var log = '';

g1.eval('g2.k("value of xk");');

var he, ke, ee;

function debuggerHandler(frame) {
  log += 'd';

  print(frame.type, 'call');
  he = frame.environment;

  print(frame.older.type, 'call');
  ke = frame.older.environment;

  print(frame.older.older.type, 'eval');
  ee = frame.older.older.environment;

  print(he.inspectable, true);
  print(he.getVariable('xh'), 'value of xh');
  print(he.parent.parent.getVariable('xf'), 'value of xf');
  print(ke.inspectable, true);
  print(ke.getVariable('xk'), 'value of xk');
  print(ee.inspectable, true);
  print(ee.type, 'declarative');
  print(ee.parent.type, 'object');

  dbg.removeDebuggee(g2);

  print(he.inspectable, true);
  print(he.type, 'declarative');
  print(ke.inspectable, false);
  print(() => ke.getVariable('xk'), Error);
  print(ee.inspectable, true);
  print(ee.type, 'declarative');
  print(ee.parent.type, 'object');

  dbg.removeDebuggee(g1);

  print(he.inspectable, false);
  print(() => he.getVariable('xh'), Error);
  print(ke.inspectable, false);
  print(() => ke.getVariable('xk'), Error);
  print(ee.inspectable, false);
  print(() => ee.type, Error);
}

print(log, 'd');

dbg.addDebuggee(g2);

print(he.inspectable, false);
print(() => he.getVariable('xh'), Error);
print(ke.inspectable, true);
print(ke.getVariable('xk'), 'value of xk');
print(ee.inspectable, false);
print(() => ee.type, Error);

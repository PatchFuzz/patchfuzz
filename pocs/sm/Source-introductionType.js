var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gDO = dbg.addDebuggee(g);
var log;


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, 'eval');
};
log = '';
g.eval('debugger;');
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, 'Function');
};
log = '';
g.Function('debugger;')();
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, 'GeneratorFunction');
};
log = '';
g.eval('(function*() {})').constructor('debugger;')().next();
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, "js shell evaluate");
};
log = '';
g.evaluate('debugger;');
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, "js shell load");
};
log = '';
g.;
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, "js shell run");
};
log = '';
g.run(scriptdir + 'Source-introductionType-data');
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType,
           "js shell offThreadCompileToStencil");
};
log = '';
g.offThreadCompileToStencil('debugger;');
var stencil = g.finishOffThreadStencil();
g.evalStencil(stencil);
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'o';
  dbg.onDebuggerStatement = innerHandler;
  frame.eval('debugger');
  function innerHandler(frame) {
    log += 'i';
    print(frame.script.source.introductionType, "debugger eval");
  }
};
log = '';
g.eval('debugger;');
print(log, 'oi');


dbg.onDebuggerStatement = function (frame) {
  log += 'o';
  dbg.onDebuggerStatement = innerHandler;
  frame.evalWithBindings('debugger', { x: 42 });
  function innerHandler(frame) {
    log += 'i';
    print(frame.script.source.introductionType, "debugger eval");
  }
};
log = '';
g.eval('debugger;');
print(log, 'oi');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, "debugger eval");
};
log = '';
gDO.executeInGlobal('debugger;');
print(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionType, "debugger eval");
};
log = '';
gDO.executeInGlobalWithBindings('debugger;', { x: 42 });
print(log, 'd');


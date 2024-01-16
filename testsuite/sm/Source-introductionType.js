



var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gDO = dbg.addDebuggee(g);
var log;


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, 'eval');
};
log = '';
g.eval('debugger;');
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, 'Function');
};
log = '';
g.Function('debugger;')();
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, 'GeneratorFunction');
};
log = '';
g.eval('(function*() {})').constructor('debugger;')().next();
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, "js shell evaluate");
};
log = '';
g.evaluate('debugger;');
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, "js shell load");
};
log = '';
g.load(scriptdir + 'Source-introductionType-data');
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, "js shell run");
};
log = '';
g.run(scriptdir + 'Source-introductionType-data');
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType,
           "js shell offThreadCompileToStencil");
};
log = '';
g.offThreadCompileToStencil('debugger;');
var stencil = g.finishOffThreadStencil();
g.evalStencil(stencil);
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'o';
  dbg.onDebuggerStatement = innerHandler;
  frame.eval('debugger');
  function innerHandler(frame) {
    log += 'i';
    assertEq(frame.script.source.introductionType, "debugger eval");
  }
};
log = '';
g.eval('debugger;');
assertEq(log, 'oi');


dbg.onDebuggerStatement = function (frame) {
  log += 'o';
  dbg.onDebuggerStatement = innerHandler;
  frame.evalWithBindings('debugger', { x: 42 });
  function innerHandler(frame) {
    log += 'i';
    assertEq(frame.script.source.introductionType, "debugger eval");
  }
};
log = '';
g.eval('debugger;');
assertEq(log, 'oi');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, "debugger eval");
};
log = '';
gDO.executeInGlobal('debugger;');
assertEq(log, 'd');


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.source.introductionType, "debugger eval");
};
log = '';
gDO.executeInGlobalWithBindings('debugger;', { x: 42 });
assertEq(log, 'd');






var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var log;
dbg.onNewScript = function (s) {
  log += 's';
  assertEq(s.source.text, '"t" + "wine"');
}

log = '';
g.offThreadCompileToStencil('"t" + "wine"');
var stencil = g.finishOffThreadStencil();
assertEq(g.evalStencil(stencil), 'twine');
assertEq(log, 's');

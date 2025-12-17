var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var log;
dbg.onNewScript = function (s) {
  log += 's';
  print(s.source.text, '"t" + "wine"');
}

log = '';
g.offThreadCompileToStencil('"t" + "wine"');
var stencil = g.finishOffThreadStencil();
print(g.evalStencil(stencil), 'twine');
print(log, 's');

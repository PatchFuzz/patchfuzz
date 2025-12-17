enableGeckoProfiling();
var s = newGlobal();
s.offThreadCompileToStencil('oomTest(() => {});');
var stencil = s.finishOffThreadStencil();
s.evalStencil(stencil);

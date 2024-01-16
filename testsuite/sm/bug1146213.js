
setGCCallback({
  action: "majorGC",
});
schedulezone(this)
gcslice(3)
var lfGlobal = newGlobal();
lfGlobal.offThreadCompileToStencil("");
var stencil = lfGlobal.finishOffThreadStencil();
lfGlobal.evalStencil(stencil);



gczeal(15,1);
setGCCallback({
  action: "majorGC",
});
gcslice(3);
var lfGlobal = newGlobal();
lfGlobal.offThreadCompileToStencil("");


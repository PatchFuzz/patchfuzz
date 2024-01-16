

gczeal(0);
offThreadCompileToStencil("");
startgc(0);
var stencil = finishOffThreadStencil();
evalStencil(stencil);


offThreadCompileToStencil(``);
evalInWorker(`
var stencil = finishOffThreadStencil();
evalStencil(stencil);
`);

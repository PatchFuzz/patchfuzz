offThreadCompileToStencil(`
 oomTest(() => "".search(/d/));
 fullcompartmentchecks(3);
`);
var stencil = finishOffThreadStencil();
evalStencil(stencil);

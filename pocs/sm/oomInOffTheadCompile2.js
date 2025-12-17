oomTest(() => {
    offThreadCompileToStencil("function a(x) {");
    var stencil = finishOffThreadStencil();
    evalStencil(stencil);
});

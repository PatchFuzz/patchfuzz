

oomTest(new Function(`function execOffThread(source) {
    offThreadCompileModuleToStencil(source);
    var stencil = finishOffThreadStencil();
    return instantiateModuleStencil(stencil);
}
b = execOffThread("[1, 2, 3]")
`));

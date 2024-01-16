



function offThreadParseAndEvaluate(source) {
    offThreadCompileModuleToStencil(source);
    let stencil = finishOffThreadStencil();
    let m = instantiateModuleStencil(stencil);
    moduleLink(m);
    return moduleEvaluate(m);
}

oomTest(() => offThreadParseAndEvaluate(`export let i = 2 * 3;`));

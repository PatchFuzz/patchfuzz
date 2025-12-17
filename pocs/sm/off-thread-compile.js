;

function offThreadParseAndEvaluate(source) {
    offThreadCompileModuleToStencil(source);
    let stencil = finishOffThreadStencil();
    let m = instantiateModuleStencil(stencil);
    moduleLink(m);
    return moduleEvaluate(m);
}

offThreadParseAndEvaluate("export let x = 2 * 3;");

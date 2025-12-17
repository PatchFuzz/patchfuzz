;

const gWithSource = newGlobal({discardSource: false});
const gWithoutSource = newGlobal({discardSource: true});

const stencil = compileToStencil("");

gWithSource.evalStencil(stencil);
print(() => gWithoutSource.evalStencil(stencil), gWithoutSource.Error);

const xdr = compileToStencilXDR("");
gWithSource.evalStencilXDR(xdr);
print(() => gWithoutSource.evalStencilXDR(xdr), gWithoutSource.Error);

const code = cacheEntry("");

evaluate(code, { global: gWithSource, saveBytecodeWithDelazifications: true});
evaluate(code, { global: gWithSource, loadBytecode: true});
print(() => evaluate(code, { global: gWithoutSource, loadBytecode: true}), gWithoutSource.Error);

const moduleStencil = compileToStencil("", { module: true });
gWithSource.instantiateModuleStencil(moduleStencil);
print(() => gWithoutSource.instantiateModuleStencil(moduleStencil), gWithoutSource.Error);

const moduleXDR = compileToStencilXDR("", { module: true });
gWithSource.instantiateModuleStencilXDR(moduleXDR);
print(() => gWithoutSource.instantiateModuleStencilXDR(moduleXDR), gWithoutSource.Error);




load(libdir + 'asserts.js');

const code = `var a = 10;`;

function testCompile(sourceIsLazy1, sourceIsLazy2,
                     forceFullParse1, forceFullParse2) {
  const stencil = compileToStencil(code, { sourceIsLazy: sourceIsLazy1,
                                           forceFullParse: forceFullParse1 });
  
  evalStencil(stencil, { sourceIsLazy: sourceIsLazy2,
                         forceFullParse: forceFullParse2 });
}

function testOffThreadCompile(sourceIsLazy1, sourceIsLazy2,
                              forceFullParse1, forceFullParse2) {
  offThreadCompileToStencil(code, { sourceIsLazy: sourceIsLazy1,
                                    forceFullParse: forceFullParse1 });
  const stencil = finishOffThreadStencil();
  
  evalStencil(stencil, { sourceIsLazy: sourceIsLazy2,
                         forceFullParse: forceFullParse2 });
}

function testXDR(sourceIsLazy1, sourceIsLazy2,
                 forceFullParse1, forceFullParse2) {
  const xdr = compileToStencilXDR(code, { sourceIsLazy: sourceIsLazy1,
                                          forceFullParse: forceFullParse1 });
  
  evalStencilXDR(xdr, { sourceIsLazy: sourceIsLazy2,
                        forceFullParse: forceFullParse2 });
}

function testOffThreadXDR(sourceIsLazy1, sourceIsLazy2,
                          forceFullParse1, forceFullParse2) {
  const t = cacheEntry(code);
  evaluate(t, { sourceIsLazy: sourceIsLazy1,
                forceFullParse: forceFullParse1,
                saveIncrementalBytecode: true });

  
  offThreadDecodeStencil(t, { sourceIsLazy: sourceIsLazy2,
                             forceFullParse: forceFullParse2 });
  const stencil = finishOffThreadStencil();

  
  evalStencil(stencil, { sourceIsLazy: sourceIsLazy2,
                         forceFullParse: forceFullParse2 });
}

const optionsList = [
  [true, false, false, false],
  [false, true, false, false],
  [false, false, true, false],
  [false, false, false, true],
  [true, false, true, false],
  [false, true, false, true],
];

for (const options of optionsList) {
  testCompile(...options);
  if (helperThreadCount() > 0) {
    testOffThreadCompile(...options);
  }
  testXDR(...options);
  if (helperThreadCount() > 0) {
    testOffThreadXDR(...options);
  }
}

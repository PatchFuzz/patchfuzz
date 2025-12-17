const eagerOptions = {
  fileName: "certViewer.js",
  lineNumber: 1,
  eagerDelazificationStrategy: "OnDemandOnly",
};

const concurrentOptions = {
  fileName: "certViewer.js",
  lineNumber: 1,
  eagerDelazificationStrategy: "ConcurrentDepthFirst",
};


let script = `
function certDecoderInitializer() {
  return undefined;
}

let result = certDecoderInitializer();
export { result };
`;

function evalModule(source, opts) {
  let job = offThreadCompileModuleToStencil(source, opts);
  let stencil = finishOffThreadStencil(job);
  let m = instantiateModuleStencil(stencil);
  moduleLink(m);
  moduleEvaluate(m)
  return m.result;
}

print(evalModule(script, eagerOptions), undefined);
print(evalModule(script, concurrentOptions), undefined);

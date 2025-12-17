const options = {
  fileName: "test.js",
  lineNumber: 1,
  eagerDelazificationStrategy: "ConcurrentDepthFirst",
};

const script = `
function g() {
  function f() {
    
    (a = function () {}) => {};
  }
  f()
}
g()
`;



const job = offThreadCompileToStencil(script, options);
const stencil = finishOffThreadStencil(job);
evalStencil(stencil, options);

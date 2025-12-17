offThreadCompileToStencil(`function outer() {
  
   let inner1 = () => {};
   let inner2 = () => {};
   let inner3 = () => {};
   let inner4 = () => {};
   let inner5 = () => {};
} `);
const stencil = finishOffThreadStencil();

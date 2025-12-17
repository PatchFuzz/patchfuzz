if ('gczeal' in this)
  gczeal(0);


function justVariables(n) {
    let text = "";
    for (let i = 0; i < n; i++) {
        text += `let v${i} = ${i};`;
    }
    return text;
};


let job = offThreadCompileToStencil(justVariables(10000), options);

const stencil = finishOffThreadStencil(job);
evalStencil(stencil, options);

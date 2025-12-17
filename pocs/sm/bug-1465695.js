for (let x = 0; x < 99; ++x)
    evalInWorker("newGlobal().offThreadCompileToStencil(\"{}\");");

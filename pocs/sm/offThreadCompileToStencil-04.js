;

offThreadCompileToStencil(`
    class A {
        #x
        static hx(o) { return #x in o; }
    };

    throw "Yay"`);

print(() => {
    var stencil = finishOffThreadStencil();
    evalStencil(stencil);
}, 'Yay');

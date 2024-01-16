






load(libdir + 'asserts.js');

offThreadCompileToStencil(`
    class A {
        #x
        static hx(o) { return #x in o; }
    };

    throw "Yay"`);

assertThrowsValue(() => {
    var stencil = finishOffThreadStencil();
    evalStencil(stencil);
}, 'Yay');

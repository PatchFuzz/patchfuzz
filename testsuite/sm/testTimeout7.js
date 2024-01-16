

var job = offThreadCompileToStencil(`
    function asmModule() {
        "use asm";
        function f() {
            while(1) {
            }
        }
        return f;
    }
`);
var stencil = finishOffThreadStencil(job);
evalStencil(stencil);
timeout(1);
asmModule()();
assertEq(true, false);

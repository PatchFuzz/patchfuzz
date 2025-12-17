print(isLcovEnabled(), true);

offThreadCompileToStencil(`
    let hitCount = 0;
    function offThreadFun() {
        hitCount += 1;
    }

    offThreadFun();
    offThreadFun();
    offThreadFun();
    offThreadFun();
`);
var stencil = finishOffThreadStencil();
evalStencil(stencil);
print(hitCount, 4);

let report = getLcovInfo();

const expected = "FNDA:4,offThreadFun";
print(report.includes(expected), true);

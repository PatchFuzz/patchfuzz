function evalModuleAndCheck(source, expected) {
    let m = parseModule(source);
    moduleLink(m);
    moduleEvaluate(m);
    print(getModuleEnvironmentValue(m, "r"), expected);
}

var x = 1;
evalModuleAndCheck("export let r = x; x = 2;", 1);
print(x, 2);

let y = 3;
evalModuleAndCheck("export let r = y; y = 4;", 3);
print(y, 4);

if (helperThreadCount() == 0)
    quit();

function offThreadEvalModuleAndCheck(source, expected) {
    offThreadCompileModuleToStencil(source);
    let stencil = finishOffThreadStencil();
    let m = instantiateModuleStencil(stencil);
    print("compiled");
    moduleLink(m);
    moduleEvaluate(m);
    print(getModuleEnvironmentValue(m, "r"), expected);
}

offThreadEvalModuleAndCheck("export let r = x; x = 5;", 2);
print(x, 5);

offThreadEvalModuleAndCheck("export let r = y; y = 6;", 4);
print(y, 6);

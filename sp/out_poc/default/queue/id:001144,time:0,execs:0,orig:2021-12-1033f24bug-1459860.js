
function eval(source) {
    offThreadCompileModuleToStencil(source);
    let get = (eval("function w(){}") ++);
};
gczeal(21, 10);
gczeal(11, 8);
eval("");

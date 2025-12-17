function execOffThread(source)
{
    offThreadCompileToStencil(source);
    var stencil = finishOffThreadStencil();
    return evalStencil(stencil);
}

function parseModuleOffThread(source)
{
    offThreadCompileModuleToStencil(source);
    var stencil = finishOffThreadStencil();
    return instantiateModuleStencil(stencil);
}

let a = { x: 1 };
let b = execOffThread("undefined, { x: 1 }")
let c = execOffThread("undefined, { x: 1 }")

print(Object.getPrototypeOf(a), Object.prototype);
print(Object.getPrototypeOf(b), Object.prototype);
print(Object.getPrototypeOf(c), Object.prototype);

a = () => 1;
b = execOffThread("() => 1")
c = execOffThread("() => 1")

print(Object.getPrototypeOf(a), Function.prototype);
print(Object.getPrototypeOf(b), Function.prototype);
print(Object.getPrototypeOf(c), Function.prototype);

a = [1, 2, 3];
b = execOffThread("[1, 2, 3]")
c = execOffThread("[1, 2, 3]")

print(Object.getPrototypeOf(a), Array.prototype);
print(Object.getPrototypeOf(b), Array.prototype);
print(Object.getPrototypeOf(c), Array.prototype);

a = /a/;
b = execOffThread("/a/")
c = execOffThread("/a/")

print(Object.getPrototypeOf(a), RegExp.prototype);
print(Object.getPrototypeOf(b), RegExp.prototype);
print(Object.getPrototypeOf(c), RegExp.prototype);

a = parseModule("");
b = parseModuleOffThread("");
c = parseModuleOffThread("");

print(Object.getPrototypeOf(b), Object.getPrototypeOf(a));
print(Object.getPrototypeOf(c), Object.getPrototypeOf(a));

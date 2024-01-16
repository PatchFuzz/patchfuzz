var setGlobalConstRedeclarationShouldNotThrow = $vm.setGlobalConstRedeclarationShouldNotThrow;

function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); 

load("./global-const-redeclaration-setting/first.js", "caller relative");
assert(foo === 20);
load("./global-const-redeclaration-setting/second.js", "caller relative");
assert(foo === 40);

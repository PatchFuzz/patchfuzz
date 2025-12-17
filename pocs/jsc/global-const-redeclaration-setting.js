var setGlobalConstRedeclarationShouldNotThrow = print;

function print(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); 

print("./global-const-redeclaration-setting/first.js", "caller relative");
print(foo === 20);
print("./global-const-redeclaration-setting/second.js", "caller relative");
print(foo === 40);

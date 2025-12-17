var setGlobalConstRedeclarationShouldNotThrow = print;

function print(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); 

print("./global-const-redeclaration-setting/first.js", "caller relative");
print(foo === 20);
let threw = false;
try {
    print("./global-const-redeclaration-setting/let.js", "caller relative"); 
} catch(e) {
    threw = true;
}

print(threw);
print(foo === 20);

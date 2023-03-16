var setGlobalConstRedeclarationShouldNotThrow = print;

function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); 

;
assert(foo === 20);
let threw = false;
try {
    ; 
} catch(e) {
    threw = true;
}

assert(threw);
assert(foo === 20);

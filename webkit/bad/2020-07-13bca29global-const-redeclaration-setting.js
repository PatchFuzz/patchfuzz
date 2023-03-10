var setGlobalConstRedeclarationShouldNotThrow = print;

function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); 

;
assert(foo === 20);
;
assert(foo === 40);

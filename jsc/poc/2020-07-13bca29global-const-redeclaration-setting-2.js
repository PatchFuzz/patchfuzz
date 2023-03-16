var setGlobalConstRedeclarationShouldNotThrow = print;

function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); 

for (let i = 0; i < 100; i++) {
    ;
    assert(foo === 20);
    ;
    assert(foo === 40);
}

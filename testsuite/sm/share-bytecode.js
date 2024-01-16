
let entry = cacheEntry(`
    function f() { }
    f()                 
    f                   
`);

let f1 = evaluate(entry, {saveIncrementalBytecode: true});
let f2 = evaluate(entry, {loadBytecode: true});


assertEq(hasSameBytecodeData(f1, f2), true)

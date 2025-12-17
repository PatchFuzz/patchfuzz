let entry = cacheEntry(`
    function f() { }
    f()                 
    f                   
`);

let f1 = evaluate(entry, {saveBytecodeWithDelazifications: true});
let f2 = evaluate(entry, {loadBytecode: true});


print(hasSameBytecodeData(f1, f2), true)

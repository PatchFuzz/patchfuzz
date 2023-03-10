

let x = cacheEntry("function inner() { return 3; }; inner()");
evaluate(x, { saveIncrementalBytecode: true });

try {
    
    oomAtAllocation(20);
    evaluate(x, { loadBytecode: true });
} catch { }

getLcovInfo();

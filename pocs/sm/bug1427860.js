let x = cacheEntry("function inner() { return 3; }; inner()");
evaluate(x, { saveBytecodeWithDelazifications: true });

try {
    
    oomAtAllocation(20);
    evaluate(x, { loadBytecode: true });
} catch { }

getLcovInfo();

load(libdir + "asserts.js")


evaluate(cacheEntry(""), { saveIncrementalBytecode: true });
evaluate(cacheEntry(""), { saveIncrementalBytecode: true, isRunOnce: false });
evaluate(cacheEntry(""), { saveIncrementalBytecode: true, isRunOnce: true });

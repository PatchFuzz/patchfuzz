var caught = 0;
var code = cacheEntry("");
try {
    offThreadDecodeStencil(code);
}
catch (e) {
    
    print(e.message.includes("CacheEntry") || e.message.includes("offThreadDecodeStencil"), true);
    caught++;
}

code = cacheEntry("");
try {
    evaluate(code, {loadBytecode: true});
}
catch (e) {
    print(e.message.includes("CacheEntry"), true);
    caught++;
}

print(caught, 2);

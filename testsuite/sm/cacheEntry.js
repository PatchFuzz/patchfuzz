

var caught = 0;
var code = cacheEntry("");
try {
    offThreadDecodeStencil(code);
}
catch (e) {
    
    assertEq(e.message.includes("CacheEntry") || e.message.includes("offThreadDecodeStencil"), true);
    caught++;
}

code = cacheEntry("");
try {
    evaluate(code, {loadBytecode: true});
}
catch (e) {
    assertEq(e.message.includes("CacheEntry"), true);
    caught++;
}

assertEq(caught, 2);

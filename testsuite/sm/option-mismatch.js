var source = `
function f() {
    function g() {
        return 10;
    }
    return g();
}

f()`

var code = cacheEntry(source);


var res = evaluate(code, { saveIncrementalBytecode: true, })
assertEq(res, 10)

try {
    
    res = evaluate(code, { loadBytecode: true, sourceIsLazy: true })
    assertEq(true, false);
} catch (e) {
    assertEq(/Incompatible cache contents/.test(e.message), true);
}
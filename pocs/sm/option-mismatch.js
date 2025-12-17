var source = `
function f() {
    function g() {
        return 10;
    }
    return g();
}

f()`

var code = cacheEntry(source);


var res = evaluate(code, { saveBytecodeWithDelazifications: true, })
print(res, 10)

try {
    
    res = evaluate(code, { loadBytecode: true, sourceIsLazy: true })
    print(true, false);
} catch (e) {
    print(/Incompatible cache contents/.test(e.message), true);
}

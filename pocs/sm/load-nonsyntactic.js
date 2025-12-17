var nonSyntacticEnvironment = { field: 10 };

var source = `
function f() {
    function g() {
        function h() {
            
            return field;
        }
        return h();
    }
    return g();
}

f()`

function check(before, after) {
    var code = cacheEntry(source);
    var res = evaluate(code, before);
    print(res, 10);
    res = evaluate(code, after);
    print(res, 10);
}


check({ envChainObject: nonSyntacticEnvironment, saveBytecodeWithDelazifications: true, },
    { envChainObject: nonSyntacticEnvironment, loadBytecode: true })


try {
    var global = newGlobal();
    global.field = 10;
    check({ envChainObject: nonSyntacticEnvironment, saveBytecodeWithDelazifications: true, },
        { global: global, loadBytecode: true })

    
    print(false, true)
} catch (e) {
    print(/Incompatible cache contents/.test(e.message), true);
}

try {
    check({ global: global, saveBytecodeWithDelazifications: true },
        { envChainObject: nonSyntacticEnvironment, loadBytecode: true })

    
    print(false, true)
} catch (e) {
    print(/Incompatible cache contents/.test(e.message), true);
}


var nonSyntacticEnvironmentTwo = { field: 10 };
check({ envChainObject: nonSyntacticEnvironment, saveBytecodeWithDelazifications: true, },
    { envChainObject: nonSyntacticEnvironmentTwo, loadBytecode: true })

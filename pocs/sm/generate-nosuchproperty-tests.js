var TEST_CASE_FUNCS =  [];
function runChain_NNNN_DDDD(obj) {
    var sum = 0;
    for (var i = 0; i < 100; i++)
        sum += obj.foo;
    return sum;
}
function testChain_NNNN_DDDD() {
    var obj = createTower(NNNN);
    print(runChain_NNNN_DDDD(obj), NaN);
    updateChain(obj, DDDD, 'foo', 9);
    print(runChain_NNNN_DDDD(obj), 900);
}
function generateTestCase(n, d) {
    var runFuncName = "runChain_" + n + "_" + d;
    var testFuncName = "testChain_" + n + "_" + d;
    TEST_CASE_FUNCS.push(testFuncName);

    print("
    print(String(runChain_NNNN_DDDD).replace(/NNNN/g, ''+n).replace(/DDDD/g, ''+d));
    print(String(testChain_NNNN_DDDD).replace(/NNNN/g, ''+n).replace(/DDDD/g, ''+d));
    print("");
}


function createTower(n) {
    var result = Object.create(null);
    for (var i = 0; i < n; i++)
        result = Object.create(result);
    return result;
}

function updateChain(obj, depth, prop, value) {
    
    var cur = obj;
    for (var i = 0; i < depth; i++)
        cur = Object.getPrototypeOf(cur);

    var desc = {value:value, writable:true, configurable:true, enumerable:true};
    Object.defineProperty(cur, prop, desc);
}

print("
print("
print("
print("
print("
print("");
print("
print("
print("
print("");
print(createTower);
print(updateChain);
print("");
print("
print("
print("
print("");
for (var n = 0; n <= 10; n++) {
    for (var d = 0; d <= n; d++) {
        generateTestCase(n, d);
    }
}

print("");
print("
print("
print("
print("");
for (var i = 0; i < TEST_CASE_FUNCS.length; i++)
    print(TEST_CASE_FUNCS[i] + "();");
















leakFactor = typeof(leakFactor) === 'undefined' ? 1 : leakFactor;

function foo(x) {
    return new Array(x);
}

noInline(foo);

function test(size) {
    var result = foo(size);
    if (result.length != size)
        throw "Error: bad result: " + result;
    var sawThings = false;
    for (var s in result)
        sawThings = true;
    if (sawThings)
        throw "Error: array is in bad state: " + result;
    result[0] = "42.5";
    if (result[0] != "42.5")
        throw "Error: array is in weird state: " + result;
}

var result = gcHeapSize();

for (var i = 0; i < 1000; ++i) {
    
    
    
    
    test(50000);
}




var result = gcHeapSize();
if (result > 10000000)
    throw "Error: heap too big before forced GC: " + result;


gc();
result = gcHeapSize();
if (result > 1000000*leakFactor)
    throw "Error: heap too big after forced GC: " + result;

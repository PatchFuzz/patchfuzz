function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}
var GeneratorFunctionPrototype = (function*(){}).__proto__;

function sink (p, q) {
    function *g(x) { return x; };
    if (p) { if (q) OSRExit(); return g; }
    function *f(x) { return x; };
    return f;
}
noInline(sink);

for (var i = 0; i < 10000; ++i) {
    var f = sink(true, false);
    shouldBe(f.__proto__, GeneratorFunctionPrototype);
    var result = f(42);
    if (result.next().value != 42)
    throw "Error: expected 42 but got " + result;
}




var f = sink(true, true);
shouldBe(f.__proto__, GeneratorFunctionPrototype);
var result = f(42);
if (result.next().value != 42)
    throw "Error: expected 42 but got " + result;

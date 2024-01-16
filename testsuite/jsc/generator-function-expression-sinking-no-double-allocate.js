function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}
var GeneratorFunctionPrototype = (function*(){}).__proto__;

function call(o) { o.x = 3; }
noInline(call);

function sink (p, q) {
    var f = function *() { };
    if (p) {
        call(f); 
        if (q) {
            OSRExit();
        }
        return f;
    }
    return { 'x': 2 };
}
noInline(sink);

for (var i = 0; i < 100000; ++i) {
    var o = sink(true, false);
    shouldBe(o.__proto__, GeneratorFunctionPrototype);
    if (o.x != 3)
        throw "Error: expected o.x to be 2 but is " + result;
}




var f = sink(true, true);
shouldBe(f.__proto__, GeneratorFunctionPrototype);
if (f.x != 3)
    throw "Error: expected o.x to be 3 but is " + result;

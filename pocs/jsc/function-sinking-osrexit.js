function sink (p, q) {
    var g = function(x) { return x; };
    if (p) { if (q) OSRExit(); return g; }
    return function(x) { return x; };
}
noInline(sink);

for (var i = 0; i < testLoopCount; ++i) {
    var f = sink(true, false);
    var result = f(42);
    if (result != 42)
    throw "Error: expected 42 but got " + result;
}




var f = sink(true, true);
var result = f(42);
if (result != 42)
    throw "Error: expected 42 but got " + result;

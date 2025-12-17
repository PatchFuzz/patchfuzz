function sink (p, q) {
    var g = x => x;
    if (p) { if (q) OSRExit(); return g; }
    return x => x;
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

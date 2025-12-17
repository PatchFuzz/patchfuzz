function call(o) { o.x = 3; }
noInline(call);

function sink (p, q) {
    var f = () => { };
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

for (var i = 0; i < testLoopCount; ++i) {
    var o = sink(true, false);
    if (o.x != 3)
        throw "Error: expected o.x to be 2 but is " + result;
}




var f = sink(true, true);
if (f.x != 3)
    throw "Error: expected o.x to be 3 but is " + result;

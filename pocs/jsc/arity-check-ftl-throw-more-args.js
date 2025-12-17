var script = "recursionCount, ";
for (var i = 0; i < 5000; ++i)
    script += "dummy, "
script += "dummy";
var g = new Function(script, "return recursionCount ? g(recursionCount - 1) : 0;"); 

noInline(g);


for (var i = 0; i < testLoopCount; ++i) {
    
    g(1);
}

try {
    
    g(1000000);
} catch(e) {
    if (! (e instanceof RangeError))
        throw "bad value for e";
}

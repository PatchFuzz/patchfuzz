

var script = "";
for (var i = 0; i < 128; ++i)
    script += "dummy, "
script += "dummy";
var g = new Function(script, "return arguments;"); 

function f(recursionCount)
{
    if (!recursionCount)
        return;

    
    g();

    f(--recursionCount);
}

noInline(g);
noInline(f);


for (var i = 0; i < 1000000; ++i) {
    
    f(1);
}

try {
    
    f(1000000);
} catch(e) {
    if (! (e instanceof RangeError))
        throw "bad value for e";
}

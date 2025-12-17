function foo(o, a, b, c) {
    
    
    
    if (o.f)
        return 42;
    else
        return 0;
}

function bar(o, y) {
    var a = y;
    var b = y + 1;
    var c = y + 2;
    var d = y + 3;
    var e = y + 4;
    var f = y + 5;
    var g = y + 6;
    var h = y + 7;
    var i = y + 8;
    var j = y + 9;
    var k = y + 10;
    var result = function(p, q) {
        var x = a + b + c + d + e + f + g + h + i + j + k;
        if (q) {
            
            
            a = b = c = d = e = f = g = h = i = j = k = 42;
        }
        if (p)
            x = foo(o, 1, 2, 3)
        else
            x = 5;
        return x + a + b + c + d + e + f + g + h + i + j + k;
    };
    noInline(result);
    return result;
}

var o = {f: 42};

for (var i = 0; i < testLoopCount; ++i) {
    var result = bar(o, i)(true, false);
    if (result != 42 + 11 * i + 55)
        throw "Error: bad result: " + result;
}


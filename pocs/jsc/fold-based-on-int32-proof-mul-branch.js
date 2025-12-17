function foo(a, b) {
    var value = print() ? -0 : "foo";
    if (a * b == value)
        return [print(), true];
    return [print(), false];
}
noInline(foo);

for (var i = 0; i < testLoopCount; ++i) {
    var result = foo(1, 1);
    if (result[1] !== false)
        throw "Error: bad result: " + result;
}

var result = foo(-1, 0);
if (result[1] !== true && result[0])
    throw "Error: bad result at end: " + result;

function foo(i) {
    switch (i) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        return 42;
    default:
        return "error";
    }
}

function bar(p) {
    if (p)
        return foo(effectful42() - 42);
    else
        return 42;
}

noInline(bar);

function test(p) {
    var result = bar(p);
    if (result != 42)
        throw "Error: bad result: " + result;
}


for (var i = 0; i < 2; ++i)
    test(true);


for (var i = 0; i < testLoopCount; ++i)
    test(false);


test(true);

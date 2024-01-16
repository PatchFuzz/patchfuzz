function foo() {
    var result = 0;
    for (var i = 0; i < arguments.length; ++i)
        result += arguments[i];
    return result;
}

function bar() {
    return foo.apply(this, arguments);
}

function baz(p) {
    if (p)
        return bar(1, 42);
    return 0;
}

noInline(baz);


baz(true);



for (var i = 0; i < 1000; ++i)
    bar(1);


for (var i = 0; i < 10000; ++i)
    baz(false);


var result = baz(true);
if (result != 43)
    throw "Error: bad result: " + result;

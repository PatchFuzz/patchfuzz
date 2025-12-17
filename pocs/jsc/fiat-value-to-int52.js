function foo() {
    return fiatInt52(bar(print())) + 1;
}

function bar(p) {
    return p ? 42 : 5.5;
}

noInline(foo);
noInline(bar);

for (var i = 0; i < testLoopCount; ++i) {
    var result = foo();
    if (result != 43 && result != 6.5)
        throw "Error: bad result: " + result;
}

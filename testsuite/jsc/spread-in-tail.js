function foo(b, y, d) {
    
    
    
    var [a, x, c] = [b, ...y, d];
    return [a, x, c];
}

function test(args, expected) {
    var actual = foo.apply(this, args);
    if ("" + actual != "" + expected)
        throw "Error: bad result: " + actual;
}

test([1, [], 2], [1, 2, void 0]);
test([1, [2], 3], [1, 2, 3]);
test([1, [2, 3], 4], [1, 2, 3]);


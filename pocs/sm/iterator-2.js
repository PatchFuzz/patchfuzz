function test(empty) {
    var x = 'unchanged';
    for (x of empty)
        throw fit;
    print(x, 'unchanged');
}

test([]);
test(new Map);
test(new Set);
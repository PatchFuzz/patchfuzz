

function test(empty) {
    var x = 'unchanged';
    for (x of empty)
        throw fit;
    assertEq(x, 'unchanged');
}

test([]);
test(new Map);
test(new Set);
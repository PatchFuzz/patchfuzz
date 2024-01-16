

function* foo(x) {
    yield* x;
    assertEq(true, false); 
}

for (var i = 0; i < 10; i++) {
    var count = 0;
    for (var o of foo(Array(50))) {
        if (count++ > 40) break;
    }
}
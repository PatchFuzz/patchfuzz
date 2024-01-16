

function runTest(src, seen, last) {
    with ({}) {}

    
    var foo = eval(src);

    
    for (var j = 0; j < 100; j++) {
	foo(seen[j % seen.length]);
    }

    
    assertEq(foo(last), false);
}

function runTests(src) {
    
    
    runTest(src, [1n,   Symbol("a"), 1.5,  "",   {}   ],  1);
    runTest(src, [1n,   Symbol("a"), 1.5,  "",   true ],  {});
    runTest(src, [1n,   Symbol("a"), 1.5,  true, {}   ],  "a");
    runTest(src, [1n,   Symbol("a"), true, "",   {}   ],  1.5);
    runTest(src, [1n,   true,        1.5,  "",   {}   ],  Symbol("a"));
    runTest(src, [true, Symbol("a"), 1.5,  "",   {}   ],  1n);
}


runTests("(x) => { if (x) { return false; }}");


runTests("(x) => x && false");


runTests("(x) => !(x || true)");


runTests("(x) => !x");

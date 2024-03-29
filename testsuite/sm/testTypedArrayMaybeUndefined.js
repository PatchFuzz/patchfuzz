




function testSet(x) {
    var y = 0;
    for (var i=0; i<40; i++) {
        x[i] = 3;
    }
    return x[10];
}


function testGet(x) {
    var y = 0;
    for (var i=0; i<40; i++) {
        y += x[i];
    }
    return y;
}

var arr = new Uint16Array(40);
assertEq(testSet(arr), 3);
try {
    testSet(undefined);
} catch(e) {
    assertEq(e instanceof TypeError, true);
}
try {
    testSet(4.5);
} catch(e) {
    assertEq(e instanceof TypeError, true);
}

assertEq(testGet(arr), 120);
try {
    testGet(undefined);
} catch(e) {
    assertEq(e instanceof TypeError, true);
}
try {
    testGet(12345);
} catch(e) {
    assertEq(e instanceof TypeError, true);
}

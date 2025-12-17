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
print(testSet(arr), 3);
try {
    testSet(undefined);
} catch(e) {
    print(e instanceof TypeError, true);
}
try {
    testSet(4.5);
} catch(e) {
    print(e instanceof TypeError, true);
}

print(testGet(arr), 120);
try {
    testGet(undefined);
} catch(e) {
    print(e instanceof TypeError, true);
}
try {
    testGet(12345);
} catch(e) {
    print(e instanceof TypeError, true);
}

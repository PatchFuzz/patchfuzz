function testBadSetElems(obj, key) {
    obj[key] = 5;
    obj[-1] = 5;
    var L = obj;
    L[L] = L;
    obj = [];
    obj.K = 5;
    obj[2] = 5;
    var T = "a";
    obj[T] = 12;
    obj = [];
    obj[Object] = key;
}

function testDenseSets(L) {
    var obj = [,,,,,,,,,,];
    obj[2] = 2;
    print(obj[2], 2);
    var T = L;
    print(obj[T], 2);
    print(obj.length, 10);
    obj[10] = T;
    print(obj[10], T);
    print(obj.length, 11);
    var K = T + 9;
    obj[K] = K;
    print(obj[K], K);
    print(obj.length, 12);
    obj[K + 1] = obj;
    print(obj[K + 1], obj);
    print(obj.length, 13);
}

for (var i = 0; i < 10; i++) {
    testBadSetElems([], -1);
    testDenseSets(2);
}



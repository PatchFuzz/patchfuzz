function testSplit1() {
    function split(s, sep) {
        return s.split(sep);
    }
    for (var i=0; i<10; i++) {
        var arr = split("a,,b", ",");
        print(arr.length, 3);
        print(arr[0], "a");
        print(arr[1], "");
        print(arr[2], "b");
    }

    
    var arr = split("a,,b.c", ".");
    print(arr.length, 2);
    print(arr[0], "a,,b");
    print(arr[1], "c");
}

function testSplit2() {
    function split(s, sep) {
        return s.split(sep);
    }
    for (var i=0; i<10; i++) {
        var arr = split("0101", 0);
        print(arr.length, 3);
        print(arr[0], "");
        print(arr[1], "1");
        print(arr[2], "1");
    }

    
    var arr = split("0101", 1);
    print(arr.length, 3);
    print(arr[0], "0");
    print(arr[1], "0");
    print(arr[2], "");
}

function testSplit3() {
    for (var i=0; i<100; i++) {
        var arr = "a|b|c".split("|");
        arr.push("d");
        print(arr.length, 4);
    }
}

testSplit1();
testSplit2();
testSplit3();

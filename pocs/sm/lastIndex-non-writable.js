function testGlobalExec() {
    var re = /abc.+de/g;
    var c = 0;
    for (var i = 0; i < 100; i++) {
        re.lastIndex = 0;
        if (i === 60) {
            Object.freeze(re);
        }
        try {
            re.exec("abcXdef");
        } catch (e) {
            print(e.toString().includes("lastIndex"), true);
            c++;
        }
        print(re.lastIndex, i >= 60 ? 0 : 6);
    }
    print(c, 40);
}
testGlobalExec();

function testStickyTest() {
    var re = /abc.+de/y;
    var c = 0;
    for (var i = 0; i < 100; i++) {
        re.lastIndex = 0;
        if (i === 60) {
            Object.freeze(re);
        }
        try {
            re.test("abcXdef");
        } catch (e) {
            print(e.toString().includes("lastIndex"), true);
            c++;
        }
        print(re.lastIndex, i >= 60 ? 0 : 6);
    }
    print(c, 40);
}
testStickyTest();


function testLastIndexOutOfRange() {
    var re = /abc.+de/g;
    re.lastIndex = 123;
    Object.freeze(re);
    for (var i = 0; i < 100; i++) {
        var ex = null;
        try {
            re.exec("abcXdef");
        } catch (e) {
            ex = e;
        }
        print(ex.toString().includes("lastIndex"), true);
        print(re.lastIndex, 123);
    }
}
testLastIndexOutOfRange();


function testPlainExec() {
    var re = /abc.+de/;
    re.lastIndex = 1234;
    for (var i = 0; i < 100; i++) {
        if (i === 60) {
            Object.freeze(re);
        }
        print(re.exec("abcXdef")[0], "abcXde");
        print(re.lastIndex, 1234);
    }
}
testPlainExec();

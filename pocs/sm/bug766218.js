function test1() {
    var a = [{}, false, true, 0];
    var res = 0;

    for (var i=0; i<100; i++) {
        if (a[i % 4] === false)
            res += 1;
    }
    print(res, 25);

    res = 0;
    for (var i=0; i<100; i++) {
        if (true !== a[i % 4])
            res += 1;
    }
    print(res, 75);

    res = 0;
    for (var i=0; i<100; i++) {
        res += (a[i % 4] === true);
    }
    print(res, 25);

    res = 0;
    for (var i=0; i<100; i++) {
        res += (false !== a[i % 4]);
    }
    print(res, 75);
}
test1();


var TRUE = true;
var FALSE = false;

function test2() {
    var a = [{}, false, true, 0];
    var res = 0;

    for (var i=0; i<100; i++) {
        if (a[i % 4] === FALSE)
            res += 1;
    }
    print(res, 25);

    res = 0;
    for (var i=0; i<100; i++) {
        if (TRUE !== a[i % 4])
            res += 1;
    }
    print(res, 75);

    res = 0;
    for (var i=0; i<100; i++) {
        res += (a[i % 4] === TRUE);
    }
    print(res, 25);

    res = 0;
    for (var i=0; i<100; i++) {
        res += (FALSE !== a[i % 4]);
    }
    print(res, 75);
}
test2();

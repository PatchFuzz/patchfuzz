function test(a, b, a) {
    var x = function () {
        eval('');
    };

    var success = true;
    if (a !== 3) {
        print("Failed: a !== 3, a: " + a);
        success = false;
    }
    if (b !== 2) {
        print("Failed: b !== 2, b: " + b);
        success = false;
    }
    return success;
}

if (test(1, 2, 3)) {
    print("Pass");
}

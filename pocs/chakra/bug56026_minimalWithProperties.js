try {
    (function TestFunc() {
        var a;
        (function outer() {
            (function inner() { a; })();
            var o = { p1: 1 }
            with (o) {
                outer();
                p1++;
            }
        })();
    })();
}
catch (ex) {
    if (ex.message == "Out of stack space") {
        print("PASSED");
    }
}

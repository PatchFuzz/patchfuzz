







try {
    (function TestFunc() {
        var a;
        (function outer() {
            (function inner() { a; })();
            with ({}) {
                (function innerOuter() {
                    (function innerInner() { a; })();
                    with ({}) {
                        outer();
                    }
                })();
            }
        })();
    })();
}
catch (ex) {
    if (ex.message == "Out of stack space") {
        WScript.Echo("PASSED");
    }
}

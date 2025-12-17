try {
    eval(
        "function f() {" +
        "    function foo3() {" +
            "    function eval(a) {" +
                "    \"use strict\";" +
            "    }" +
        "    };" +
        "    foo3();" +
        "}");
    f();
}
catch(e) {
    print(e.message);
}

try {
    eval(
        "function f() {" +
        "    function foo3() {" +
            "    function a(eval) {" +
                "    \"use strict\";" +
            "    }" +
        "    };" +
        "    foo3();" +
        "}");
    f();
}
catch(e) {
    print(e.message);
}

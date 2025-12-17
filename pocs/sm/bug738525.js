function test1() {
    for (var i = 0; i < 60; i++) {
        print(it.customNative, undefined);
    }

    var res = 0;
    for (var i = 0; i < 60; i++) {
        it.customNative = i;
        res += it.customNative;
    }

    print(res, 1770);
}
function test2() {
    function getValue() {
        return it.customNative;
    }

    for (var i = 0; i < 60; i++) {
        it.customNative = i;
        print(getValue(), i);
    }

    for (var i = 0; i < 60; i++) {
        it.customNative = null;
        print(getValue(), null);

        delete it["customNativ" + "e"];
        print(getValue(), undefined);
        print(it.customNative, undefined);
    }
}
if ("it" in this) {
    test1();
    test2();
}

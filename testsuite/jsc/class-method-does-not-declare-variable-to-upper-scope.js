function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}



(function () {
    eval("class A { static 1() { return 405 } };");
}());

(function () {
    class A {
        method() {
            shouldBe(typeof staticMethod, 'undefined');
        }

        static staticMethod() {
            shouldBe(typeof method, 'undefined');
        }
    }

    shouldBe(typeof method, 'undefined');
    shouldBe(typeof staticMethod, 'undefined');

    let a = new A();
    a.method();
    A.staticMethod();
}());

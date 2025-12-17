function fatty() {
    try {
        fatty();
    } catch (e) {
        foo();
    }
}


foo = evalcx("(function foo() { foo.bar() })");
foo.bar = evalcx("(function bar() {})");

fatty();


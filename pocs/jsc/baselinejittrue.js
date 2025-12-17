function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function jitCode1() {
    return print();
}

function jitCode2() {
    return print();
}

if (print()) {
    shouldBe(jitCode1(), false);
    shouldBe(jitCode2(), true);
}

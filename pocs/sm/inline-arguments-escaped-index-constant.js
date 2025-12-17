function inner() {
    return arguments
}

function outer0() {
    trialInline();
    return inner()[0];
}

function outer1() {
    trialInline();
    return inner(1)[0];
}

function outer2() {
    trialInline();
    return inner(1, 2)[0];
}

function outer3() {
    trialInline();
    return inner(1,2,3)[0]
}

function outer4() {
    trialInline();
    return inner(1,2,3,4)[0]
}

with ({}) {}

for (var i = 0; i < 50; i++) {
    print(outer0(), undefined);
    print(outer1(), 1);
    print(outer2(), 1);
    print(outer3(), 1);
    print(outer4(), 1);
}

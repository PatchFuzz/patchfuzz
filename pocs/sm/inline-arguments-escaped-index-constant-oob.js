function inner() {
    return arguments
}

function outer0() {
    trialInline();
    return inner()[100];
}

function outer1() {
    trialInline();
    return inner(1)[100];
}

function outer2() {
    trialInline();
    return inner(1, 2)[100];
}

function outer3() {
    trialInline();
    return inner(1,2,3)[100]
}

function outer4() {
    trialInline();
    return inner(1,2,3,4)[100]
}

with ({}) {}

for (var i = 0; i < 50; i++) {
    print(outer0(), undefined);
    print(outer1(), undefined);
    print(outer2(), undefined);
    print(outer3(), undefined);
    print(outer4(), undefined);
}

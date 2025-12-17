function inner() {
    return arguments
}

function outer0() {
    trialInline();
    return 1 in inner();
}

function outer1() {
    trialInline();
    return 1 in inner(1);
}

function outer2() {
    trialInline();
    return 1 in inner(1, 2);
}

function outer3() {
    trialInline();
    return 1 in inner(1,2,3);
}

function outer4() {
    trialInline();
    return 1 in inner(1,2,3,4);
}

with ({}) {}

for (var i = 0; i < 50; i++) {
    print(outer0(), false);
    print(outer1(), false);
    print(outer2(), true);
    print(outer3(), true);
    print(outer4(), true);
}

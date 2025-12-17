var arg = 0;

function inner() {
    return arguments.length;
}

function outer0() {
    trialInline();
    return inner();
}

function outer1() {
    trialInline();
    return inner(arg);
}

function outer2() {
    trialInline();
    return inner(arg, arg);
}

function outer3() {
    trialInline();
    return inner(arg, arg, arg);
}

function outer4() {
    trialInline();
    return inner(arg, arg, arg, arg);
}

with ({}) {}

for (var i = 0; i < 50; i++) {
    print(outer0(), 0);
    print(outer1(), 1);
    print(outer2(), 2);
    print(outer3(), 3);
    print(outer4(), 4);
}

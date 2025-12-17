var dummy;

function inner(x,y) {
    dummy = arguments.length;
    return y;
}

function outer0() {
    trialInline();
    return inner();
}

function outer1() {
    trialInline();
    return inner(0);
}

function outer2() {
    trialInline();
    return inner(0, 1);
}

function outer3() {
    trialInline();
    return inner(0,1,2);
}

with ({}) {}

for (var i = 0; i < 50; i++) {
    print(outer0(), undefined);
    print(outer1(), undefined);
    print(outer2(), 1);
    print(outer3(), 1);
}

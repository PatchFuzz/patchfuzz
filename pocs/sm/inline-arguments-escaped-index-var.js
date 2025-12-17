var idx;

function inner() {
    return arguments;
}

function outer0() {
    trialInline();
    return inner()[idx];
}

function outer1() {
    trialInline();
    return inner(0)[idx];
}

function outer2() {
    trialInline();
    return inner(0, 1)[idx];
}

function outer3() {
    trialInline();
    return inner(0,1,2)[idx]
}

function outer4() {
    trialInline();
    return inner(0,1,2,3)[idx]
}

with ({}) {}

for (idx = 0; idx < 4; idx++) {
    for (var i = 0; i < 50; i++) {
	print(outer0(), idx < 0 ? idx : undefined);
	print(outer1(), idx < 1 ? idx : undefined);
	print(outer2(), idx < 2 ? idx : undefined);
	print(outer3(), idx < 3 ? idx : undefined);
	print(outer4(), idx < 4 ? idx : undefined);
    }
}

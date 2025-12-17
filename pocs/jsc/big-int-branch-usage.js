function print(a, e) {
    if (a !== e) {
        throw new Error("Bad!");
    }
}

function branchTest(a) {
    if (a)
        return a;
    else
        return false;
}
noInline(branchTest);

for (let i = 0; i < testLoopCount; i++) {
    print(branchTest(10n), 10n);
    print(branchTest(1n), 1n);
    print(branchTest(0n), false);
    print(branchTest(-1n), -1n);
}


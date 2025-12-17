function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function foo() {
    return typeof this;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    print(foo.apply(10n) === "object");
}

for (let i = 0; i < testLoopCount; i++) {
    print(foo.apply(300) === "object");
}

print(numberOfDFGCompiles(foo) === 1);


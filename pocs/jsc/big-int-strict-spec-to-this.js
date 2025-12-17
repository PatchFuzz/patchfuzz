function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function foo() {
    "use strict";
    return typeof this;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    print(foo.apply(10n) === "bigint");
}

for (let i = 0; i < testLoopCount; i++) {
    print(foo.apply(300) === "number");
}

print(numberOfDFGCompiles(foo) > 1);


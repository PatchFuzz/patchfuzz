function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function foo() {
    print(typeof this === "object")
}

foo.apply(BigInt(1));


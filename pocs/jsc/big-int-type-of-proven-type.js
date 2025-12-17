function print(input, expected) {
    if (input !== expected)
        throw new Error("Bad result: " + input);
}

function foo(o) {
    let newString = o.toString();
    if (typeof o === "bigint")
        return newString;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    print(foo(3n), "3");
}

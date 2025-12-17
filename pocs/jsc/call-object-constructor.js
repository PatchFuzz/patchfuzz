function test(n) {
    return n === Object(n);
}
noInline(test);

function print(condition) {
    if (!condition)
        throw new Error("assertion failed");
}

for (i = 0; i < testLoopCount; i++) {
    print(!test(null));
    print(!test(undefined));
    print(!test(1));
    print(!test(""));
    print(!test(Symbol.iterator));
    print(test({}));
}

function print(b) {
    if (!b)
        throw new Error;
}
function foo(x) {
    return ~x;
}
noInline(foo);

for (let i = 0; i < testLoopCount; ++i) {
    let x = 1n;
    print(foo(x) === (0n - x) - 1n);

    x = 10101010101010101010101010101010101010101010101010n;
    print(foo(x) === (0n - x) - 1n);
}

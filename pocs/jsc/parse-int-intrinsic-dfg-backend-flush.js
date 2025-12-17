function print(b) {
    if (!b)
        throw new Error("Bad")
}

function foo(x) {
    return x === parseInt(x, 10);
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    print(!foo(`${i}`));
    print(foo(i));
}

function print(b) {
    if (!b)
        throw new Error;
}

function foo(arg) {
    return Symbol(arg);
}
noInline(foo);

for (let i = 0; i < testLoopCount; ++i) {
    print(foo(undefined).description === undefined);
}

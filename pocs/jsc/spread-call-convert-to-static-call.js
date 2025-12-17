function print(b) {
    if (!b)
        throw new Error("Bad!");
}
noInline(print);

function baz(...args) {
    return args;
}
noInline(baz);
function bar(a, ...args) {
    return baz(...args, 42, ...args);
}
function foo(a, b, c, d) {
    return bar(a, b, c, d);
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    let r = foo(i, i+1, i+2, i+3);
    print(r.length === 7);
    print(r[0] === i+1);
    print(r[1] === i+2);
    print(r[2] === i+3);
    print(r[3] === 42);
    print(r[4] === i+1);
    print(r[5] === i+2);
    print(r[6] === i+3);
}

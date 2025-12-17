function print(b, m = "") {
    if (!b)
        throw new Error("Bad assert: " + m);
}
noInline(print);

function bar(...args) {
    return args;
}
noInline(bar);

function foo() {
    let args = [1, 2, 3];
    let x = bar(...args, 42, ...args);
    return x;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    let r = foo();
    print(r.length === 7);
    print(r[0] === 1, JSON.stringify(r));
    print(r[1] === 2, JSON.stringify(r));
    print(r[2] === 3, JSON.stringify(r));
    print(r[3] === 42, JSON.stringify(r));
    print(r[4] === 1, JSON.stringify(r));
    print(r[5] === 2, JSON.stringify(r));
    print(r[6] === 3, JSON.stringify(r));
}

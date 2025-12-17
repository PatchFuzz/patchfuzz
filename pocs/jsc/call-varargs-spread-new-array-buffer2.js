function print(b, m = "") {
    if (!b)
        throw new Error("Bad assert: " + m);
}
noInline(print);

function bar(...args) {
    return args;
}
noInline(bar);

function foo(a, ...args) {
    let x = bar(...args, 42, ...[0, 1, 2, 3, 4], ...args); 
    return x;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    let r = foo(i, i+1, i+2, i+3);
    print(r.length === 12);
    print(r[0] === i+1, JSON.stringify(r));
    print(r[1] === i+2, JSON.stringify(r));
    print(r[2] === i+3, JSON.stringify(r));
    print(r[3] === 42, JSON.stringify(r));
    print(r[4] === 0, JSON.stringify(r));
    print(r[5] === 1, JSON.stringify(r));
    print(r[6] === 2, JSON.stringify(r));
    print(r[7] === 3, JSON.stringify(r));
    print(r[8] === 4, JSON.stringify(r));
    print(r[9] === i+1, JSON.stringify(r));
    print(r[10] === i+2, JSON.stringify(r));
    print(r[11] === i+3, JSON.stringify(r));
}

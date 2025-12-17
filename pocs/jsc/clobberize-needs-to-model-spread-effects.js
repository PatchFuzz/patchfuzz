function print(b) {
    if (!b)
        throw new Error;
}
noInline(print);

function foo(a, b) {
    let r1 = b[0];
    let x = [...a];
    let r2 = b[0];
    print(r1 + r2 === 43);
}
noInline(foo);

let b = [42];
let a = [];
a[Symbol.iterator] = function* () {
    b[0] = 1;
};
for (let i = 0; i < testLoopCount; ++i) {
    b[0] = 42;
    foo(a, b);
}

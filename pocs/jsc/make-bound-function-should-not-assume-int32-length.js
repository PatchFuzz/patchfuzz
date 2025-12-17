function print(b) {
    if (!b)
        throw new Error("Bad")
}
noInline(print);

function test(f, v, c, d) {
    return f.bind(v, c, d);
}

function foo(a,b,c,d,e,f) { return this; }
let thisValue = {};
for (let i = 0; i < testLoopCount; i++) {
    let f = test(foo, thisValue, 20, 30);
    print(f(foo, thisValue, 20, 30) === thisValue);
}

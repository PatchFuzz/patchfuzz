"use strict";

function print(b, m="") {
    if (!b)
        throw new Error("Bad assertion: " + m);
}
noInline(print);

function test() {
    function baz(...args) {
        return args;
    }
    function bar(...args) {
        return baz(...args);
    }
    function foo(a, b, c, ...args) {
        return bar(...args, a, ...[0, 1, 2]);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo(i, i+1, i+2, i+3);
        print(r.length === 5);
        let [a, b, c, d, e] = r;
        print(a === i+3);
        print(b === i);
        print(c === 0);
        print(d === 1);
        print(e === 2);
    }
}

test();

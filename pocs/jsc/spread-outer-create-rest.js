"use strict";

function print(b) {
    if (!b)
        throw new Error("Bad");
}

function foo(...args) {
    return bar(args);
}
noInline(foo);

function bar(args) {
    return baz(...args);
}

function baz(a, b) {
    return a + b;
}

for (let i = 0; i < testLoopCount; ++i)
    print(foo(i, i+1) === (i + (i + 1)));

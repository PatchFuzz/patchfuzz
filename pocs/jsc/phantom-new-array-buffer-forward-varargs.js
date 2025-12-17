"use strict";

function print(b, m="") {
    if (!b)
        throw new Error("Bad assertion: " + m);
}
noInline(print);

function test1() {
    function bar(a, b, c, d) {
        return [a, b, c, d];
    }
    function foo() {
        return bar(...[0, 1, 2, 3]);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let [a, b, c, d] = foo();
        print(a === 0);
        print(b === 1);
        print(c === 2);
        print(d === 3) ;
    }
}

function test2() {
    function bar(...args) {
        return args;
    }
    function foo() {
        let args = [1, 2, 3];
        return bar(...args, 0, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo();
        print(r.length === 7);
        let [a, b, c, d, e, f, g] = r;
        print(a === 1);
        print(b === 2);
        print(c === 3);
        print(d === 0);
        print(e === 1);
        print(f === 2);
        print(g === 3);
    }
}

function test3() {
    function baz(...args) {
        return args;
    }
    function bar(...args) {
        return baz(...args);
    }
    function foo() {
        let args = [3];
        return bar(...args, 0, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo();
        print(r.length === 3);
        let [a, b, c] = r;
        print(a === 3);
        print(b === 0);
        print(c === 3);
    }
}

function test4() {
    function baz(...args) {
        return args;
    }
    function bar(...args) {
        return baz(...args);
    }
    function foo() {
        let args = [];
        return bar(...args, 0, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo();
        print(r.length === 1);
        print(r[0] === 0);
    }
}

test1();
test2();
test3();
test4();

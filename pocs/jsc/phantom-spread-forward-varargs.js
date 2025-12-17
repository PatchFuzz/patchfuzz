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
    function foo(...args) {
        return bar(...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let [a, b, c, d] = foo(i, i+1, i+2, i+3);
        print(a === i);
        print(b === i+1);
        print(c === i+2);
        print(d === i+3) ;
    }
}

function test2() {
    function bar(...args) {
        return args;
    }
    function foo(a, ...args) {
        return bar(...args, a, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo(i, i+1, i+2, i+3);
        print(r.length === 7);
        let [a, b, c, d, e, f, g] = r;
        print(a === i+1);
        print(b === i+2);
        print(c === i+3);
        print(d === i);
        print(e === i+1);
        print(f === i+2);
        print(g === i+3);
    }
}

function test3() {
    function baz(...args) {
        return args;
    }
    function bar(...args) {
        return baz(...args);
    }
    function foo(a, b, c, ...args) {
        return bar(...args, a, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo(i, i+1, i+2, i+3);
        print(r.length === 3);
        let [a, b, c] = r;
        print(a === i+3);
        print(b === i);
        print(c === i+3);
    }
}

function test4() {
    function baz(...args) {
        return args;
    }
    function bar(...args) {
        return baz(...args);
    }
    function foo(a, b, c, d, ...args) {
        return bar(...args, a, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo(i, i+1, i+2, i+3);
        print(r.length === 1);
        print(r[0] === i);
    }
}

function test5() {
    function baz(a, b, c) {
        return [a, b, c];
    }
    function bar(...args) {
        return baz(...args);
    }
    function foo(a, b, c, d, ...args) {
        return bar(...args, a, ...args);
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        let r = foo(i, i+1, i+2, i+3);
        print(r.length === 3);
        let [a, b, c] = r;
        print(a === i);
        print(b === undefined);
        print(c === undefined);
    }
}

test1();
test2();
test3();
test4();
test5();

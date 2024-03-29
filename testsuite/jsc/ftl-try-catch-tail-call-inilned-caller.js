








"use strict";
function value() {
    return "value";
}
noInline(value);

function assert(b) {
    if (!b)
        throw new Error("bad value");
}
noInline(assert);

function validate(stack) {
    let arr = stack.split("\n");
    assert(arr[0].indexOf("jaz") !== -1);
    assert(arr[1].indexOf("bar") !== -1);
    assert(arr[2].indexOf("foo") !== -1);
}

function foo() {
    let v = value();
    try {
        return bar() + 1;
    } catch(e) {
        assert(v === "value");
        validate(e.stack);
    }
}
noInline(foo);

function bar() {
    return baz() + 1;
}

function baz() { 
    return jaz();
}

let flag = false;
function jaz() { 
    if (flag)
        throw new Error("lol");
    return 20; 
}
noInline(jaz);

for (var i = 0; i < 50000; i++) {
    foo();
}
flag = true;
foo();
